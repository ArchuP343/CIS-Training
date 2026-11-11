#!/usr/bin/env python3
"""
Build lessons-data.js for the training page from Lessons/Lessons.docx.

    python3 build-lessons.py

How the Word doc is read
------------------------
Lessons
  - A bold line "Overview" or "Lesson N – Title" starts a lesson.
  - The paragraph(s) after "Lesson description:" become the summary on its card.
  - After "Lesson content:" come the steps.

Steps
  - Each NUMBERED line (1., 2. … or 4.1 sub-levels) starts a step. Typed numbers work too: "1. Holding boxes", "4.2 Slot sheet".
  - "Watch the video [file.mp4]" sets the lesson's video (looked for in the videos folder, or played from the link if the file name is hyperlinked).
  - "[Online connection type] Offload order" puts a step on a branch. Steps on different branches are
    alternative paths: the learner picks one, and a flowchart shows both.
  - BULLETED lines are a plain bullet list inside the step.

Inside a step
  [Tip] … / [Tip #2] …          tip box            [Important!] … / [Warning] …   warning box
  [Video – what it shows – 1.3.mp4]   a video clip; hyperlink the file name to where the video lives (e.g. the S: drive)
  [GIF – what it shows]         placeholder until the GIF exists; name a file to use it: [GIF – connect-folder.gif]
  [Image – what it shows]       same, for screenshots. A picture pasted into the doc is used directly.
  [Example – holes table]       an interactive example built into the page
  [Drop downs]                  the lines after it become expandable buttons, either
                                  "Title – text"   or   a short title line followed by its GIF and text.
                                A tip between two buttons goes inside the one above it; tips after the last button stay outside.
  **Bold title** – text         a run of these also becomes expandable buttons
  N (label) – text              after a note asking for the move-guidance replica: the numbered explanations
  [NOTE FOR CLAUDE …], [CLAUDE NOTES …], (note for claude …), [Insert …]    removed
"""
import json, re, sys
from pathlib import Path
import docx

HERE = Path(__file__).resolve().parent
DOC = HERE / "Lessons" / "Lessons.docx"
OUT = HERE / "lessons-data.js"
SHOTS = HERE / "screenshots"

W = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"
A = "{http://schemas.openxmlformats.org/drawingml/2006/main}"
R = "{http://schemas.openxmlformats.org/officeDocument/2006/relationships}"
SYMBOLS = {"F0E0": "→", "F0E8": "→", "F0DF": "←", "F0FC": "✓", "F0A7": "•"}
DASH = r"\s+[–—-]\s+"


def runs_to_md(p):
    """Paragraph text as light Markdown: **bold**, [links](url), Wingdings arrows."""
    out = []
    def emit(r, link=None, ins=False):
        rpr = r.find(W + "rPr")
        b = rpr.find(W + "b") if rpr is not None else None
        bold = b is not None and b.get(W + "val") not in ("0", "false")
        t = ""
        for el in r:
            if el.tag == W + "t": t += el.text or ""
            elif el.tag == W + "sym": t += SYMBOLS.get((el.get(W + "char") or "").upper(), "")
            elif el.tag == W + "tab": t += " "
            elif el.tag in (W + "br", W + "cr"): t += "\n"
        if t: out.append(["b" if bold else "", t, link, ins])
    def walk(parent, ins=False):
        for child in parent:
            if child.tag == W + "r": emit(child, None, ins)
            elif child.tag == W + "ins": walk(child, True)           # tracked insertion: a suggestion
            elif child.tag == W + "hyperlink":
                rid = child.get(R + "id")
                url = p.part.rels[rid].target_ref if rid and rid in p.part.rels else ""
                for r in child.iter(W + "r"): emit(r, url, ins or r.getparent().tag == W + "ins")
            # tracked deletions (w:del) are skipped
    walk(p._p)
    merged = []
    for b, t, link, ins in out:
        if merged and merged[-1][0] == b and merged[-1][2] == link and merged[-1][3] == ins: merged[-1][1] += t
        else: merged.append([b, t, link, ins])
    md = ""
    for b, t, link, ins in merged:
        lead, core, trail = re.match(r"^(\s*)(.*?)(\s*)$", t, re.S).groups()
        if not core: md += t; continue
        if b: core = f"**{core}**"
        if link: core = f"[{core}]({link})"
        if ins: core = "{{+" + core + "+}}"
        md += lead + core + trail
    md = re.sub(r"\s*\(note for claude[^)]*\)", "", md, flags=re.I)
    return re.sub(r"[ \t]+", " ", md).strip()


MARK = re.compile(r"\{\{\+(.*?)\+\}\}", re.S)


def is_suggested(p):
    """True when all of a paragraph's text is a tracked insertion."""
    texts = [t for t in p._p.iter(W + "t") if (t.text or "").strip()]
    if not texts: return False
    def inside_ins(el):
        while el is not None and el is not p._p:
            if el.tag == W + "ins": return True
            el = el.getparent()
        return False
    return all(inside_ins(t) for t in texts)


def list_info(p, fmts):
    """('decimal'|'bullet'|None, level) for a paragraph."""
    np_ = p._p.find(f".//{W}numPr")
    if np_ is None: return None, 0
    nid = np_.find(W + "numId"); il = np_.find(W + "ilvl")
    nid = nid.get(W + "val") if nid is not None else None
    lvl = int(il.get(W + "val")) if il is not None else 0
    if nid in (None, "0"): return None, 0
    return ("bullet" if fmts.get((nid, lvl)) == "bullet" else "decimal"), lvl


def numbering_formats(d):
    fmts = {}
    try: numbering = d.part.numbering_part.element
    except Exception: return fmts
    absfmt = {}
    for a in numbering.findall(W + "abstractNum"):
        for l in a.findall(W + "lvl"):
            f = l.find(W + "numFmt")
            absfmt[(a.get(W + "abstractNumId"), int(l.get(W + "ilvl")))] = f.get(W + "val") if f is not None else None
    for n in numbering.findall(W + "num"):
        aid = n.find(W + "abstractNumId").get(W + "val")
        for (a, lvl), f in absfmt.items():
            if a == aid: fmts[(n.get(W + "numId"), lvl)] = f
    return fmts


def images_in(p):
    return [b.get(R + "embed") for b in p._p.iter(A + "blip") if b.get(R + "embed")]


def slug(s):
    return re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")


def plain_of(md):
    return re.sub(r"\[([^\[\]]*)\]\([^)]*\)", r"\1", md).replace("**", "").strip()


MANUAL_HEADING = re.compile(r"^(\d+(?:\.\d+)*)\.?\s+((?:\[[^\]]+\]\s*)?[A-Z][^.!?–—]{0,70})$")
NOTE = re.compile(r"^\[(?:note for claude|claude notes?|insert|check)\b", re.I)
DROPDOWNS = re.compile(r"^\[(?:drop[\s-]?downs?|dropdowns?)\]$", re.I)
TIP = re.compile(r"^\[(tip|tip\s*#\s*\d+|important!?|warning|note)\]\s*(.*)$", re.I | re.S)
MEDIA = re.compile(r"^\[(gif|image|screenshot|picture|video)\s*[–—-]\s*(.+?)\]$", re.I)
EXAMPLE = re.compile(r"^\[example\s*[–—-]\s*(.+?)\]$", re.I)
GUIDE_ITEM = re.compile(r"^(\d+)\s*\(([^)]+)\)\s*[–—-]\s*(.*)$", re.S)
BOLD_OPTION = [re.compile(r"^\*\*(.+?)\*\*\s*[–—-]?\s*(?:\*\*)?\s*[–—-]\s*(.*)$"), re.compile(r"^\*\*(.+?)\s*[–—-]\s*\*\*\s*(.*)$")]
DASH_OPTION = re.compile(r"^([^.!?:]{2,60}?)" + DASH + r"(.+)$", re.S)


def is_title_line(plain):
    return 0 < len(plain.split()) <= 7 and not re.search(r"[.!?:,;]$", plain) and not plain.startswith("[")


def tip_block(kind, text):
    return {"type": "warn" if kind.lower().startswith(("important", "warning")) else "tip", "md": text.strip()}


def split_inline_tip(md):
    """'Some text. [Tip] More' → text + tip."""
    m = re.match(r"^(.*?)\s*\[(tip|important!?)\]\s*(.+)$", md, re.I | re.S)
    if m and m.group(1).strip(): return [{"type": "text", "md": m.group(1).strip()}, tip_block(m.group(2), m.group(3))]
    return None


def main():
    if not DOC.exists(): sys.exit(f"Can't find {DOC}")
    d = docx.Document(str(DOC))
    fmts = numbering_formats(d)
    SHOTS.mkdir(exist_ok=True)
    lessons, lesson, section, mode = [], None, None, None
    group = None            # the options group being filled
    dd_mode = False         # inside a [Drop downs] run
    guidance = None         # the move-guidance block being filled
    img_count = {}

    def new_section(title, branch=None, sugg=False):
        nonlocal section, group, dd_mode, guidance
        section = {"title": title, "blocks": []}
        if sugg: section["suggested"] = True
        if branch: section["branch"] = branch
        lesson["steps"].append(section)
        group, dd_mode, guidance = None, False, None

    def target():
        """Where a block goes: inside the open drop-down item, or the step."""
        if group is not None and group["items"]: return group["items"][-1]["blocks"]
        return section["blocks"]

    def add(block, into_item=False):
        nonlocal group
        if into_item and group is not None and group["items"]: target().append(block); return
        group = None
        section["blocks"].append(block)

    def start_option(title, text, sugg=False):
        nonlocal group
        if group is None or section["blocks"][-1:] != [group]:
            group = {"type": "options", "items": []}
            section["blocks"].append(group)
        item = {"title": title.strip(" –-"), "blocks": []}
        if sugg: item["suggested"] = True
        text = text.strip()
        if text[:1].islower(): text = text[0].upper() + text[1:]
        if text: item["blocks"].append({"type": "text", "md": "{{+" + text + "+}}" if sugg else text})
        group["items"].append(item)

    for p in d.paragraphs:
        raw = runs_to_md(p)
        sugg = is_suggested(p)                     # the whole paragraph is a suggested addition
        md = MARK.sub(r"\1", raw)
        S = (lambda x: "{{+" + x + "+}}" if x else x) if sugg else (lambda x: x)
        # "(see options in online mode section)" becomes a link to that part of the lesson
        md = re.sub(r"\(see (?:the )?options in (online|offline) mode section\)",
                    lambda m: f"([see the save options in {m.group(1).lower()} mode](goto:{m.group(1).lower()}#13))", md, flags=re.I)
        plain = plain_of(md)
        imgs = images_in(p)
        if not md and not imgs: continue
        kind, lvl = list_info(p, fmts)

        # --- lesson headings
        m = re.match(r"^(Overview|Lesson\s*(\d+)\s*[–—-]\s*(.+?))\s*$", plain, re.I)
        if m and "**" in md and kind is None:
            num = int(m.group(2)) if m.group(2) else None
            lesson = {"id": "overview" if num is None else f"lesson-{num}", "num": num,
                      "title": m.group(3).strip() if m.group(3) else "Overview",
                      "summary": "", "video": None, "steps": []}
            lessons.append(lesson); section = None; mode = None; group = None; dd_mode = False; guidance = None
            continue
        if lesson is None: continue
        if re.match(r"^lesson description:?$", plain, re.I): mode = "desc"; continue
        if re.match(r"^lesson content:?$", plain, re.I): mode = "content"; continue
        if mode == "desc": lesson["summary"] = (lesson["summary"] + " " + md).strip(); continue
        if mode != "content": continue

        # --- step headings: numbered list lines, or typed numbers like "4.1 Slot sheet"
        manual = MANUAL_HEADING.match(plain) if kind is None and not imgs else None
        if (kind == "decimal" and md and not imgs) or manual:
            title = manual.group(2).strip() if manual else plain
            v = re.match(r"^watch the video\s*\[([^\]]+)\]", title, re.I)
            if v:
                # a hyperlinked file name plays from the link (e.g. the S: drive); a bare one from the videos folder
                vl = re.search(r"\]\(([^)\s]+\.(?:mp4|webm|mov))\)", md, re.I)
                lesson["video"] = vl.group(1) if vl else "videos/" + re.sub(r"\]\([^)]*\)", "", v.group(1)).strip("[ ")
                section = None; continue
            b = re.match(r"^\[([^\]]+)\]\s*(.+)$", title)
            new_section(b.group(2).strip() if b else title, b.group(1).strip() if b else None, sugg)
            continue
        if section is None: new_section("Introduction")

        # --- notes to Claude
        if NOTE.match(plain):
            if re.search(r"active guidance", plain, re.I):
                guidance = {"type": "guidance", "items": []}
                add(guidance)
            if re.search(r"branch", plain, re.I): lesson["branched"] = True
            continue
        if DROPDOWNS.match(plain): dd_mode = True; group = None; continue

        # --- bullet lists
        if kind == "bullet":
            blocks = target() if dd_mode else section["blocks"]
            if blocks and blocks[-1]["type"] == "text" and blocks[-1].get("list"):
                blocks[-1]["md"] += "\n- " + S(md)
            else:
                add({"type": "text", "md": "- " + S(md), "list": True}, into_item=dd_mode)
            continue

        # --- pictures pasted into the doc
        for rid in imgs:
            part = p.part.related_parts[rid]
            n = img_count[lesson["id"]] = img_count.get(lesson["id"], 0) + 1
            name = f"{lesson['id']}-{slug(section['title'])}-{n}{Path(part.partname).suffix or '.png'}"
            (SHOTS / name).write_bytes(part.blob)
            if "goa" in section["title"].lower(): add({"type": "goa"})
            else: add({"type": "image", "src": f"screenshots/{name}", "caption": ""}, into_item=dd_mode or group is not None)
        if not md: continue

        # --- the numbered explanations for the move-guidance replica
        g = GUIDE_ITEM.match(md) if guidance is not None else None
        if g:
            item = {"n": int(g.group(1)), "label": g.group(2).strip(), "md": g.group(3).strip()}
            parts = split_inline_tip(item["md"])
            if parts: item["md"], item["tip"] = parts[0]["md"], parts[1]["md"]
            guidance["items"].append(item)
            continue

        t = TIP.match(md)
        if t: add(tip_block(t.group(1), S(t.group(2).strip())), into_item=group is not None); continue

        mm = MEDIA.match(plain)
        if mm:
            k = mm.group(1).lower(); desc = mm.group(2).strip()
            # a linked file name ("… – 1.3.mp4" with a hyperlink) plays from the link; a bare one from the screenshots folder
            link = re.search(r"\]\(([^)\s]+\.(?:gif|png|jpe?g|webp|mp4|webm|mov))\)", md, re.I)
            f = re.search(r"(?:^|[–—-]\s*)([\w\-. ]+\.(?:gif|png|jpe?g|webp|mp4|webm|mov))\s*$", desc, re.I)
            if f: desc = desc[:f.start()].rstrip(" –—-")
            src = link.group(1) if link else ("screenshots/" + f.group(1).strip()) if f else None
            is_video = k == "video" or bool(src and re.search(r"\.(mp4|webm|mov)$", src, re.I))
            add({"type": "media", "kind": "video" if is_video else ("gif" if k == "gif" else "image"),
                 "desc": desc, "src": src},
                into_item=dd_mode or group is not None)
            continue

        ex = EXAMPLE.match(plain)
        if ex: add({"type": "example", "name": ex.group(1).strip()}); continue

        # --- expandable buttons
        bo = next((r.match(md) for r in BOLD_OPTION if r.match(md)), None)
        if bo: start_option(bo.group(1), bo.group(2), sugg); continue
        if dd_mode:
            do = DASH_OPTION.match(md)
            if do and is_title_line(plain_of(do.group(1))): start_option(plain_of(do.group(1)), do.group(2), sugg); continue
            if is_title_line(plain): start_option(plain, "", sugg); continue

        # --- ordinary text (a partly suggested paragraph keeps its inline marks)
        text = S(md) if sugg else re.sub(r"\(see (?:the )?options in (online|offline) mode section\)",
            lambda m: f"([see the save options in {m.group(1).lower()} mode](goto:{m.group(1).lower()}#13))", raw, flags=re.I)
        parts = split_inline_tip(text) or [{"type": "text", "md": text}]
        for blk in parts: add(blk, into_item=dd_mode)

    # Tips that come after the LAST drop-down belong to the step, not inside the last button
    for l in lessons:
        for s in l["steps"]:
            out = []
            for b in s["blocks"]:
                out.append(b)
                if b["type"] == "options" and b["items"]:
                    last = b["items"][-1]["blocks"]; trail = []
                    while last and last[-1]["type"] in ("tip", "warn"): trail.insert(0, last.pop())
                    out.extend(trail)
            s["blocks"] = out
        branches = []
        for s in l["steps"]:
            if s.get("branch") and s["branch"] not in branches: branches.append(s["branch"])
        if branches: l["branches"] = branches

    OUT.write_text("// Built from Lessons/Lessons.docx by build-lessons.py — edit the Word doc, not this file.\n"
                   "window.LESSONS = " + json.dumps(lessons, indent=2, ensure_ascii=False) + ";\n", encoding="utf-8")
    for l in lessons:
        name = "Overview" if l["num"] is None else f"Lesson {l['num']}"
        extra = f", branches: {' / '.join(l['branches'])}" if l.get("branches") else ""
        print(f"{name}: {l['title']} — {len(l['steps'])} steps{', video ' + l['video'] if l['video'] else ''}{extra}")
    print(f"Wrote {OUT.name}")
    goa = HERE / "build-goa.py"                  # rebuild GOA too, so he knows the latest lessons' manual
    if goa.exists():
        import runpy; runpy.run_path(str(goa), run_name="__main__")


if __name__ == "__main__":
    main()
