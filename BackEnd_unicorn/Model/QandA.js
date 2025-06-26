const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  text: { type: String, required: true },
  author: { type: String,default:"NoOne"},
  createdAt: { type: Date, default: Date.now }, // Added creation date for answers
});

const questionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, default:"NoOne"},
  answers: [answerSchema], // Embedding the answers within the question document
  createdAt: { type: Date, default: Date.now }, // Added creation date for questions
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
