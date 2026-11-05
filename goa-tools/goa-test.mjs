// GOA test runner — checks GOA's answers against a list of questions, using the exact engine from the page.
// Usage (from this folder, needs Node.js):
//   node goa-test.mjs                         tuning set (goa-tests.txt)
//   node goa-test.mjs goa-holdout.txt         held-out set
//   add --verbose to print every answer
//
// Test file format (one per line):
//   question => Section title          GOA should answer from that ## section of goa/manual.md
//   question => NONE | CLARIFY         "isn't in my manual" | asks what you mean
//   question => CHAT:greeting          small talk of that kind (goa/small-talk.md)
//   question => LESSONS                lists the lessons
//   question => LESSON:6 › Move guidance   points to that lesson step
//   > question => …                    a follow-up to the line above
//   @lesson-6#step-4 question => …     asked while that lesson (and step) is open
//     expected: THISLESSON:lesson-6 | THISSTEP:<step title> | NEXTLESSON:lesson-7 | LASTLESSON | NOLESSON
//   # comment
import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url)), root = join(here, "..");
const args = process.argv.slice(2), verbose = args.includes("--verbose");
const testPath = join(here, args.find(a => a.endsWith(".txt")) || "goa-tests.txt");
const html = readFileSync(join(root, "core-rack-planner-training.html"), "utf8");
const load = (f) => { const win = {}; if (existsSync(join(root, f))) new Function("window", readFileSync(join(root, f), "utf8"))(win); return win; };
const LESSONS = load("lessons-data.js").LESSONS || [], DATA = load("goa-data.js").GOA_DATA || {};
const src = html.slice(html.indexOf("/* GOA-ENGINE-START"), html.indexOf("/* GOA-ENGINE-END */"));
const createEngine = new Function(src + "\nreturn createEngine;")();
const engine = createEngine(DATA.manual || "", { lessons: LESSONS, smallTalk: DATA.smallTalk, learned: DATA.learned, random: () => 0 });

const titles = new Set(engine.chunks.filter(c => c.kind === "manual").map(c => c.title.toLowerCase()));
const lessonLabel = (l) => `${l.num == null ? 0 : l.num} › ${l.step}`;
let pass = 0, total = 0, lastCtx = null;
const fails = [];
for (const raw of readFileSync(testPath, "utf8").split("\n")) {
  const line = raw.trim();
  if (!line || line.startsWith("#")) continue;
  const follow = line.startsWith(">");
  let [q, expect] = line.replace(/^>\s*/, "").split("=>").map(s => s.trim());
  if (!expect) continue;
  let here = null; const at = q.match(/^@([\w-]+)(?:#([\w-]+))?\s+/);
  if (at) { here = { lessonId: at[1], stepId: at[2] || null }; q = q.slice(at[0].length); }
  const res = engine.answer(q, { ctx: follow ? lastCtx : null, here });
  const got = res.kind === "answer" ? res.chunk.title
    : res.kind === "chat" ? "CHAT:" + res.id
    : res.kind === "lesson" ? "LESSON:" + lessonLabel(res.lesson)
    : res.kind === "thisLesson" ? "THISLESSON:" + res.lesson.id
    : res.kind === "thisStep" ? "THISSTEP:" + (res.video ? "video" : res.chunk.title)
    : res.kind === "nextLesson" ? "NEXTLESSON:" + res.next.id : res.kind.toUpperCase();
  lastCtx = res.kind === "answer" ? res.chunk : (follow ? lastCtx : null);
  const ok = got.toLowerCase() === expect.toLowerCase()
    || (res.kind === "answer" && res.chunk.kind === "lesson" && expect.toLowerCase() === ("LESSON:" + lessonLabel(res.chunk.lesson)).toLowerCase());
  if (!/^(none|clarify|lessons|chat:|lesson:|thislesson|thisstep|nextlesson|lastlesson|nolesson)/i.test(expect) && !titles.has(expect.toLowerCase()))
    console.warn(`  ! "${expect}" isn't a section title in the manual (test: ${q})`);
  total++; if (ok) pass++; else fails.push({ q: (follow ? "> " : "") + q, expect, got });
  if (verbose) {
    const body = res.kind === "answer" ? (res.format === "steps" ? res.intro + " " + res.steps.map((s, i) => `${i + 1}) ${s.t}`).join(" ") : res.idxs.map(i => res.chunk.units[i].t).join(" / "))
      : res.kind === "chat" ? res.reply : res.kind === "lesson" ? "→ " + res.lesson.title + " › " + res.lesson.step : "";
    console.log(`${ok ? "✓" : "✗"} ${q}${res.prefix ? `  [${res.prefix}]` : ""}\n    → ${got}: ${body}${res.lesson && res.kind === "answer" ? `  [lesson: ${lessonLabel(res.lesson)}]` : ""}`);
  }
}
console.log(`\nGOA answered ${pass} of ${total} correctly (${Math.round(100 * pass / Math.max(1, total))}%)`);
if (fails.length) {
  console.log("\nMisses:");
  for (const f of fails) console.log(`  ✗ ${f.q}\n      expected: ${f.expect}\n      got:      ${f.got}`);
}
