#!/usr/bin/env python3
"""
Build lessons-data.js for the training page from Lessons/Lessons.docx.

    python3 build-lessons.py

How the Word doc is read:
  - A bold line "Overview" or "Lesson N – Title" starts a lesson.
  - The paragraph(s) after "Lesson description:" become the lesson summary on its card.
  - After "Lesson content:", each numbered / bulleted line starts a section.
    "Watch the video [file.mp4]" sets the lesson's video (looked for in the videos folder).
  - Inside a section:
      [Tip] ...                    tip box
      [Important!] ... / [Warning] warning box
      [GIF – what it shows]        placeholder until the GIF exists; [GIF – name.gif] uses screenshots/name.gif
      [Image – what it shows]      same, for screenshots
      a picture pasted in the doc  saved to screenshots/ and shown
      **Bold heading** – text      a run of these becomes expandable buttons; a [Tip] right after one goes inside it
      (note for claude ...)        removed
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


def runs_to_md(p):
    """Paragraph text as light Markdown: **bold**, [links](url), Wingdings arrows."""
    out = []
    def emit(r, link=None):
        rpr = r.find(W + "rPr")
        bold = rpr is not None and rpr.find(W + "b") is not None and rpr.find(W + "b").get(W + "val") not in ("0", "false")
        t = ""
        for el in r:
            if el.tag == W + "t": t += el.text or ""
            elif el.tag == W + "sym": t += SYMBOLS.get((el.get(W + "char") or "").upper(), "")
            elif el.tag == W + "tab": t += " "
            elif el.tag in (W + "br", W + "cr"): t += "\n"
        if not t: return
        out.append(["b" if bold else "", t, link])
    for child in p._p:
        if child.tag == W + "r": emit(child)
        elif child.tag == W + "hyperlink":
            rid = child.get(R + "id")
            url = p.part.rels[rid].target_ref if rid and rid in p.part.rels else ""
            for r in child.iter(W + "r"): emit(r, url)
    # merge neighbouring runs with the same formatting, then mark up
    merged = []
    for b, t, link in out:
        if merged and merged[-1][0] == b and merged[-1][2] == link: merged[-1][1] += t
        else: merged.append([b, t, link])
    md = ""
    for b, t, link in merged:
        lead, core, trail = re.match(r"^(\s*)(.*?)(\s*)$", t, re.S).groups()
        if not core: md += t; continue
        if b: core = f"**{core}**"
        if link: core = f"[{core}]({link})"
        md += lead + core + trail
    md = re.sub(r"\s*\(note for claude[^)]*\)", "", md, flags=re.I)
    return re.sub(r"[ \t]+", " ", md).strip()


def is_numbered(p):
    return p._p.find(f".//{W}numPr") is not None or p.style.name.lower().startswith("list")


def images_in(p):
    return [b.get(R + "embed") for b in p._p.iter(A + "blip") if b.get(R + "embed")]


def slug(s):
    return re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")


def main():
    if not DOC.exists(): sys.exit(f"Can't find {DOC}")
    d = docx.Document(str(DOC))
    SHOTS.mkdir(exist_ok=True)
    lessons, lesson, section, mode = [], None, None, None
    img_count = {}

    def new_section(title):
        nonlocal section
        section = {"title": title, "blocks": []}
        lesson["steps"].append(section)

    def add(block):
        blocks = section["blocks"]
        # A tip straight after an option goes inside that option
        if block["type"] in ("tip", "warn") and blocks and blocks[-1]["type"] == "options":
            blocks[-1]["items"][-1].setdefault("notes", []).append(block); return
        if block["type"] == "option":
            if blocks and blocks[-1]["type"] == "options": blocks[-1]["items"].append(block["item"])
            else: blocks.append({"type": "options", "items": [block["item"]]})
            return
        blocks.append(block)

    for p in d.paragraphs:
        md = runs_to_md(p)
        plain = re.sub(r"\[([^\]]*)\]\([^)]*\)", r"\1", md).replace("**", "").strip()
        imgs = images_in(p)
        if not md and not imgs: continue

        # Lesson headings
        m = re.match(r"^(?:\*\*)?\s*(Overview|Lesson\s*(\d+)\s*[–—-]\s*(.+?))\s*(?:\*\*)?$", plain, re.I)
        if m and "**" in md and not is_numbered(p):
            num = int(m.group(2)) if m.group(2) else None
            title = m.group(3).strip() if m.group(3) else "Overview"
            lesson = {"id": "overview" if num is None else f"lesson-{num}", "num": num, "title": title,
                      "summary": "", "video": None, "steps": [], "suggestions": []}
            lessons.append(lesson); section = None; mode = None; continue
        if lesson is None: continue
        if re.match(r"^lesson description:?$", plain, re.I): mode = "desc"; continue
        if re.match(r"^lesson content:?$", plain, re.I): mode = "content"; continue
        if mode == "desc":
            lesson["summary"] = (lesson["summary"] + " " + md).strip(); continue
        if mode != "content": continue

        # Section headings (numbered list lines)
        if is_numbered(p) and md and not imgs:
            v = re.match(r"^watch the video\s*\[([^\]]+)\]", plain, re.I)
            if v:
                lesson["video"] = "videos/" + v.group(1).strip(); section = None; continue
            new_section(plain); continue
        if section is None: new_section("Introduction")

        # Pictures pasted into the doc
        for rid in imgs:
            part = p.part.related_parts[rid]
            ext = Path(part.partname).suffix or ".png"
            n = img_count[lesson["id"]] = img_count.get(lesson["id"], 0) + 1
            name = f"{lesson['id']}-{slug(section['title'])}-{n}{ext}"
            (SHOTS / name).write_bytes(part.blob)
            if "goa" in section["title"].lower():
                add({"type": "goa"})            # use the full-resolution GOA artwork instead
            else:
                add({"type": "image", "src": f"screenshots/{name}", "caption": ""})
        if not md: continue

        t = re.match(r"^\[(tip|important!?|warning|note)\]\s*(.*)$", md, re.I | re.S)
        if t:
            add({"type": "tip" if t.group(1).lower() in ("tip", "note") else "warn", "md": t.group(2).strip()}); continue
        g = re.match(r"^\[(gif|image|screenshot|picture|video)\s*[–—-]\s*(.+?)\]$", plain, re.I)
        if g:
            kind = g.group(1).lower(); desc = g.group(2).strip()
            f = re.search(r"[\w\- ]+\.(gif|png|jpe?g|webp|mp4)\b", desc, re.I)
            add({"type": "media", "kind": "gif" if kind == "gif" else ("video" if kind == "video" else "image"),
                 "desc": desc, "src": ("screenshots/" + f.group(0).strip()) if f else None}); continue
        o = re.match(r"^\*\*(.+?)\*\*\s*[–—-]?\s*(?:\*\*)?\s*[–—-]\s*(.*)$", md) or re.match(r"^\*\*(.+?)\s*[–—-]\s*\*\*\s*(.*)$", md)
        if o:
            add({"type": "option", "item": {"title": o.group(1).strip(" –-"), "md": o.group(2).strip()}}); continue
        add({"type": "text", "md": md})

    OUT.write_text("// Built from Lessons/Lessons.docx by build-lessons.py — edit the Word doc, not this file.\n"
                   "window.LESSONS = " + json.dumps(lessons, indent=2, ensure_ascii=False) + ";\n", encoding="utf-8")
    for l in lessons:
        print(f"{'Overview' if l['num'] is None else 'Lesson ' + str(l['num'])}: {l['title']} — "
              f"{len(l['steps'])} sections{', video ' + l['video'] if l['video'] else ''}")
    print(f"Wrote {OUT.name}")


if __name__ == "__main__":
    main()
