# GOA tools

Tests GOA, the training page's manual assistant, against lists of questions, using the exact code from the page.

Run from this folder (needs Node.js):

    node goa-test.mjs                                          # tuning set: goa-tests.txt
    node goa-test.mjs ../core-rack-planner-training.html goa-holdout.txt   # held-out set
    node goa-test.mjs ../core-rack-planner-training.html goa-tests.txt --verbose   # show each answer

- **goa-tests.txt**: questions used while writing the manual's `Questions:` lines and synonyms.
- **goa-holdout.txt**: questions never used for tuning. Its score is the honest measure of how GOA handles new wording.

Both files currently hold questions for the sample manual. Replace them when the real manual goes in.
