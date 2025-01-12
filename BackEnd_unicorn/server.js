require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const axios = require("axios");
const Question = require("./Model/QandA.js");
const { configDotenv } = require("dotenv");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/qna")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

const router = app;

// Post a question
router.post('/questions', async (req, res) => {
  try {
    const { title, author } = req.body; // title and author are passed in the body

    const newQuestion = new Question({
      title,
      author,
    });

    await newQuestion.save();
    res.status(201).json(newQuestion);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
});

// Post an answer to a question
router.post('/questions/:id/answer', async (req, res) => {
  try {
    const { id } = req.params;
    const { answer, author } = req.body; // answer and author are passed in the body

    const question = await Question.findById(id);

    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }

    // Add the new answer to the question
    question.answers.push({
      text: answer,
      author,
    });

    await question.save();
    res.status(200).json(question);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
});

router.get('/questions', async (req, res) => {
  try {
    const questions = await Question.find().select('title author createdAt');
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
});

// Fetch answers for a specific question
router.get('/questions/:id/answers', async (req, res) => {
  const { id } = req.params;
  try {
    const question = await Question.findById(id);

    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }

    res.json(question.answers);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
});

router.get('/questions/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const question = await Question.findById(id);

    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }

    res.json(question);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
});

// Your YouTube API integration
app.get("/shorts", async (req, res) => {
  try {
    const API_KEY = process.env.YOUTUBE_API_KEY;
    const CHANNEL_ID = process.env.CHANNEL_ID;

    if (!API_KEY) {
      return res.status(500).json({ error: "YouTube API Key is missing" });
    }

    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search`,
      {
        params: {
          part: "snippet",
          channelId: CHANNEL_ID,
          maxResults: 20,
          type: "video",
          key: API_KEY,
        },
      }
    );

    const shorts = response.data.items.map((item) => ({
      id: item.id.videoId,
      videoId: item.id.videoId,
      title: item.snippet.title,
    }));

    res.json(shorts);
  } catch (error) {
    console.error("YouTube API Error:", error.response?.data || error.message);
    res.status(500).json({ error: "Error fetching shorts from YouTube API" });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
