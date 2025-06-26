const express = require("express");
const router = express.Router();
const Question = require("./QandA_db.js");

// Post a question
router.post("/", async (req, res) => {
  try {
    const { title, author } = req.body; // title and author are passed in the body

    const newQuestion = new Question({
      title,
      author,
    });

    await newQuestion.save();
    res.status(201).json(newQuestion);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
});

// Post an answer to a question
router.post("/:id/answer", async (req, res) => {
  try {
    const { id } = req.params;
    const { answer, author } = req.body; // answer and author are passed in the body

    const question = await Question.findById(id);

    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }

    // Add the new answer to the question
    question.answers.push({
      text: answer,
      author,
    });

    await question.save();
    res.status(200).json(question);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
});

router.get("/", async (req, res) => {
  try {
    const questions = await Question.find().select("title author createdAt");
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
});

// Fetch answers for a specific question
router.get("/:id/answers", async (req, res) => {
  const { id } = req.params;
  try {
    const question = await Question.findById(id);

    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }

    res.json(question.answers);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const question = await Question.findById(id);

    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }

    res.json(question);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
});

module.exports = router;
