// GOA test runner — checks GOA's answers against a list of questions.
// Usage:  node goa-test.mjs [path/to/training.html] [path/to/goa-tests.txt]
//
// Test file format (one per line):
//   question => Expected section title      GOA should answer from that ## section
//   question => NONE                        GOA should say it isn't in the manual
//   question => CLARIFY                     GOA should ask what you mean
//   > question => ...                       a follow-up: asked straight after the line above, in the same conversation
//   # comment                               ignored
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const htmlPath = process.argv[2] || join(here, "..", "core-rack-planner-training.html");
const testPath = process.argv[3] || join(here, "goa-tests.txt");
const html = readFileSync(htmlPath, "utf8");

const engineSrc = html.slice(html.indexOf("/* GOA-ENGINE-START"), html.indexOf("/* GOA-ENGINE-END */"));
const manual = html.match(/<script type="text\/markdown" id="manual">([\s\S]*?)<\/script>/)[1];
const createEngine = new Function(engineSrc + "\nreturn createEngine;")();
const engine = createEngine(manual);

const titles = new Set(engine.chunks.map(c => c.title.toLowerCase()));
let pass = 0, total = 0, ctx = null, lastCtx = null;
const fails = [];
for (const raw of readFileSync(testPath, "utf8").split("\n")) {
  const line = raw.trim();
  if (!line || line.startsWith("#")) continue;
  const follow = line.startsWith(">");
  const [q, expect] = line.replace(/^>\s*/, "").split("=>").map(s => s.trim());
  if (!expect) continue;
  ctx = follow ? lastCtx : null;
  const res = engine.answer(q, { ctx });
  const got = res.kind === "answer" ? res.chunk.title : res.kind.toUpperCase();
  lastCtx = res.kind === "answer" ? res.chunk : ctx;
  const ok = got.toLowerCase() === expect.toLowerCase();
  if (!["none", "clarify"].includes(expect.toLowerCase()) && !titles.has(expect.toLowerCase()))
    console.warn(`  ! "${expect}" isn't a section title in the manual (test: ${q})`);
  total++; if (ok) pass++; else fails.push({ q: (follow ? "> " : "") + q, expect, got });
  if (process.argv.includes("--verbose") && res.kind === "answer")
    console.log(`${ok ? "✓" : "✗"} ${q}\n    → ${res.chunk.title}: ${res.idxs.map(i => res.chunk.units[i].t).join(" / ")}`);
}
console.log(`\nGOA answered ${pass} of ${total} correctly (${Math.round(100 * pass / Math.max(1, total))}%)`);
if (fails.length) {
  console.log("\nMisses:");
  for (const f of fails) console.log(`  ✗ ${f.q}\n      expected: ${f.expect}\n      got:      ${f.got}`);
}
