#!/usr/bin/env python3
"""
Build goa-data.js (what GOA knows) from the files in the goa folder:

  goa/manual.md       the manual GOA answers from
  goa/small-talk.md   his replies to everyday chat ("hi", "how are you", "thanks"…)
  goa/prompts.md      suggested questions he picks from at random when a chat starts
  goa/learned*.json   optional: extra learning to build in for everyone (same format as GOA's memory).
                      Each person's own feedback stays in their browser.

    python3 build-goa.py        (build-lessons.py runs this for you)
"""
import json, re
from pathlib import Path

HERE = Path(__file__).resolve().parent
GOA = HERE / "goa"
OUT = HERE / "goa-data.js"


def strip_comments(text):
    return re.sub(r"<!--.*?-->", "", text, flags=re.S).strip() + "\n"


def small_talk(text):
    out, cur = [], None
    for line in strip_comments(text).splitlines():
        line = line.strip()
        if line.startswith("## "):
            cur = {"id": line[3:].strip(), "match": [], "replies": []}; out.append(cur)
        elif cur and re.match(r"^match\s*:", line, re.I):
            cur["match"] += [m.strip() for m in line.split(":", 1)[1].split("|") if m.strip()]
        elif cur and line.startswith("- "):
            cur["replies"].append(line[2:].strip())
    return [c for c in out if c["match"] and c["replies"]]


def prompts(text):
    out, cur = {}, None
    for line in strip_comments(text).splitlines():
        line = line.strip()
        if line.startswith("## "): cur = out.setdefault(line[3:].strip().lower(), [])
        elif cur is not None and line.startswith("- "): cur.append(line[2:].strip())
    return out


def learned():
    merged = {"votes": {}, "good": [], "fixes": []}
    for f in sorted(GOA.glob("learned*.json")):
        try: d = json.loads(f.read_text(encoding="utf-8"))
        except Exception as e: print(f"  skipped {f.name}: {e}"); continue
        for k, (up, down) in (d.get("votes") or {}).items():
            v = merged["votes"].setdefault(k, [0, 0]); v[0] += up; v[1] += down
        merged["good"] += d.get("good") or []
        merged["fixes"] += d.get("fixes") or []
    return merged


def main():
    manual = strip_comments((GOA / "manual.md").read_text(encoding="utf-8"))
    talk = small_talk((GOA / "small-talk.md").read_text(encoding="utf-8")) if (GOA / "small-talk.md").exists() else []
    pr = prompts((GOA / "prompts.md").read_text(encoding="utf-8")) if (GOA / "prompts.md").exists() else {}
    data = {"manual": manual, "smallTalk": talk, "prompts": pr, "learned": learned()}
    OUT.write_text("// Built from the goa folder by build-goa.py — edit those files, not this one.\n"
                   "window.GOA_DATA = " + json.dumps(data, ensure_ascii=False, indent=1) + ";\n", encoding="utf-8")
    sections = len(re.findall(r"^## ", manual, re.M))
    print(f"GOA: {sections} manual sections, {len(talk)} kinds of small talk, "
          f"{sum(len(v) for v in pr.values())} suggested questions — wrote {OUT.name}")


if __name__ == "__main__":
    main()
