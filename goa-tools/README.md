# GOA tools

Tests GOA (the training page's assistant) against lists of questions, using the exact engine from the page
and the data built from the `goa` folder and `Lessons.docx`.

Run from this folder (needs Node.js):

    node goa-test.mjs                    # tuning set: goa-tests.txt
    node goa-test.mjs goa-holdout.txt    # held-out set
    node goa-test.mjs --verbose          # print every answer

- **goa-tests.txt**: questions used while writing the manual's `Questions:` lines and synonyms.
- **goa-holdout.txt**: questions kept back to measure how GOA handles new wording. Once you've used a
  held-out miss to improve GOA, that question isn't a fair test any more — write fresh ones.

## Improving GOA

1. Edit `goa/manual.md` (answers, `Questions:` phrasings, `Lesson:` links) or `goa/small-talk.md`.
2. Run `python3 build-lessons.py` in the CIS-Training folder (it rebuilds GOA too).
3. Run the tests.

## How GOA learns (each person's own)

Each person's GOA learns from their own 👍 / 👎 and corrections, kept in their browser. There are no
permission prompts, and one person's feedback never changes anyone else's GOA.

- It survives refreshes and restarts, but not clearing the browser's data or switching to another browser
  or computer.
- To reset it, clear the browser's site data for the page.
- To improve GOA for everyone, add the wording people use to `goa/manual.md` (`Questions:` lines) and rebuild.
