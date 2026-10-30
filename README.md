# AI-Like Software Help Bot Roadmap

## Overview

The current bot functions as an intelligent search engine that:

- Removes filler words from user questions
- Identifies key terms and phrases
- Expands synonyms where available
- Searches the software manual
- Ranks results based on:
  - Keyword frequency
  - Heading matches
  - Phrase matches
  - Body text matches
- Returns the highest-scoring answer

The goal is to make the bot behave more like an AI assistant while remaining completely client-side (HTML/CSS/JavaScript only, no server required).

---

# Recommended Development Order

## 1. Add User Feedback Learning (Highest Priority)

After every answer:

```text
Did this answer solve your problem?

[Yes]
[No]
```

Store:

```javascript
{
    question: "How do I save a report?",
    answerSection: "Export Reports",
    helpful: true
}
```

### Usage

Increase ranking scores for successful answers:

```javascript
sectionScore += helpfulVotes * 5;
sectionScore -= unhelpfulVotes * 2;
```

### Benefits

- Appears to learn over time
- Improves ranking automatically
- No AI model required

---

## 2. Build a Successful Question Database

Store every successful question.

Example:

```javascript
{
    question: "How do I export a PDF?",
    answerSection: "Export Reports"
}
```

When a new question arrives:

```text
How do I save a report?
```

Check its similarity against previous successful questions.

If a similar question exists:

```javascript
boost(answerSection);
```

### Benefits

- Learns from real users
- Remembers good answers
- Often more valuable than AI models for software documentation

---

## 3. Add Intent Detection

Move beyond keywords.

Map multiple actions to the same intent:

```javascript
save
export
generate
print
output
```

↓

```javascript
OUTPUT_REPORT
```

Example:

```javascript
const intents = {
    OUTPUT_REPORT: [
        "save",
        "export",
        "generate",
        "print",
        "output"
    ]
};
```

Search intent-related sections first.

### Benefits

- Understands user goals
- Handles different wording naturally

---

## 4. Improve Ranking Algorithm

Current approach:

```text
Keyword Match
+
Heading Match
+
Phrase Match
```

Target approach:

```text
Keyword Score
+
Heading Score
+
Phrase Score
+
Intent Score
+
User Feedback Score
+
Previous Success Score
```

Example:

```javascript
finalScore =
    keywordScore * 0.30 +
    headingScore * 0.20 +
    phraseScore * 0.20 +
    intentScore * 0.10 +
    feedbackScore * 0.10 +
    historyScore * 0.10;
```

---

## 5. Expand Synonym Groups

Current example:

```javascript
export → save
```

Expand into synonym clusters:

```javascript
{
    export: [
        "save",
        "generate",
        "output",
        "create pdf",
        "print"
    ]
}
```

```javascript
{
    borehole: [
        "bh",
        "drillhole",
        "hole"
    ]
}
```

### Benefits

- Better matching
- Accommodates user terminology

---

## 6. Add Section Reputation

Track answer performance by manual section.

Example:

```javascript
{
    section: "Export Reports",
    helpful: 128,
    unhelpful: 9
}
```

Calculate:

```javascript
reputation =
    helpful /
    (helpful + unhelpful);
```

Use reputation as a ranking factor.

### Benefits

- Good sections rise automatically
- Poor sections fall automatically

---

## 7. Learn From User Corrections

If the bot gives an incorrect answer:

```text
Was this answer helpful?

No
```

Allow the user to select the correct result.

Store:

```javascript
{
    question: "How do I save a report?",
    wrongAnswer: "Report Templates",
    correctAnswer: "Export Reports"
}
```

Use this information to improve future rankings.

### Benefits

- The bot genuinely improves over time
- Creates training data from users

---

## 8. Add Persistent Memory

Store all learned data in:

```javascript
localStorage
```

or preferably:

```javascript
IndexedDB
```

Store:

- Feedback
- Successful questions
- Section reputation
- User corrections
- Search statistics

### Benefits

- Learning survives browser refreshes
- Continuous improvement

---

# Optional Future Feature: Vector Search

## What It Does

Converts questions and manual sections into mathematical representations ("embeddings") and compares meaning rather than exact words.

Example:

```text
save report
```

can match:

```text
export report
```

even if the words are different.

---

## Recommended Priority

LOW

For a manual under 100 pages, the following improvements will likely provide a larger benefit:

1. User feedback learning
2. Successful question memory
3. Intent detection
4. Improved ranking
5. User correction tracking

These features will usually increase accuracy more than vector embeddings alone.

---

# Final Target Workflow

```text
User Question
        ↓
Remove filler words
        ↓
Detect intent
        ↓
Expand synonyms
        ↓
Find phrase matches
        ↓
Search manual
        ↓
Search previous successful questions
        ↓
Apply ranking algorithm
        ↓
Apply reputation scores
        ↓
Return answer
        ↓
Collect user feedback
        ↓
Store learning data
        ↓
Improve future rankings
```
# 9. Generate Natural-Language Answers

## Goal

Instead of displaying raw manual text, have the bot construct its own responses using information retrieved from the manual.

This is one of the biggest improvements for making the bot feel like an AI assistant.

---

## Current Behaviour

```text
Question
↓
Find matching section
↓
Display section text
```

Example:

Manual:

"To export a report, open the Reports menu, select Export, choose PDF format and click Save."

Bot response:

"To export a report, open the Reports menu, select Export, choose PDF format and click Save."
```

---

## Target Behaviour

```text
Question
↓
Find matching section(s)
↓
Extract important information
↓
Construct response
↓
Return answer
```

Example:

Bot response:

"To save a report as a PDF:

1. Open the Reports menu.
2. Select Export.
3. Choose PDF format.
4. Click Save.

The completed PDF will then be generated."
```

---

## Method 1: Template-Based Response Generation

Extract key information from matched sections:

```javascript
{
    action: "export a report",
    steps: [
        "open the Reports menu",
        "select Export",
        "choose PDF format",
        "click Save"
    ]
}
```

Generate:

```javascript
return `
To ${action}:

1. ${steps[0]}
2. ${steps[1]}
3. ${steps[2]}
4. ${steps[3]}
`;
```

### Benefits

- Feels intelligent
- Consistent answers
- Easy to implement
- No AI model required

---

## Method 2: Multi-Section Answer Stitching

Allow the bot to combine information from multiple manual sections.

Example:

Section A:

```text
Reports can be exported as PDFs.
```

Section B:

```text
The Export button is located in the Reports menu.
```

Section C:

```text
Generated files are saved in the Output folder.
```

Construct:

```text
Reports can be exported as PDFs using the Export button in the Reports menu. Generated files are automatically saved in the Output folder.
```

### Benefits

- More complete answers
- Appears to understand the manual
- Reduces need for users to read multiple sections

---

## Method 3: Learn Better Wording

Store successful answers:

```javascript
{
    question: "How do I save a report as PDF?",
    answer: "To save a report as a PDF..."
}
```

If similar questions appear later:

```text
How do I export a report?

How do I create a PDF report?

How do I generate a report PDF?
```

Reuse and adapt successful answer wording.

### Benefits

- Responses improve over time
- Feels more conversational
- Creates an evolving knowledge base

---

## Future Upgrade: Local Language Model

A small browser-based language model could eventually be used.

Process:

```text
Question
↓
Find best manual sections
↓
Provide sections as context
↓
Local model generates answer
```

Possible technologies:

- Transformers.js
- WebLLM
- ONNX Runtime Web

This would produce genuinely original responses while remaining client-side.

---

## Recommended Immediate Approach

For a manual under 100 pages:

```text
Question
↓
Search Manual
↓
Retrieve Top 3 Sections
↓
Extract Key Sentences
↓
Remove Duplicate Information
↓
Generate Structured Answer
↓
Display Response
```

This will likely provide most of the perceived benefits of AI without the complexity of running a language model.

---

## Long-Term Goal

The bot should eventually:

- Search the manual
- Detect user intent
- Combine information from multiple sections
- Rewrite information into natural language
- Learn from user feedback
- Improve answer quality over time

At this point the bot behaves much more like an AI assistant rather than a traditional search engine.

# End Goal

Create a fully client-side assistant that:

- Remembers successful answers
- Learns from user feedback
- Learns from corrections
- Understands intent
- Handles different wording naturally
- Improves over time
- Feels like an AI assistant without requiring a server or external AI model
``` ````
