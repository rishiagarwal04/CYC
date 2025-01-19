import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // useNavigate for programmatic navigation
import axios from 'axios';

const QuestionDetail = () => {
  const { id } = useParams(); // Get the question ID from the URL
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [newAnswer, setNewAnswer] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the question and answers based on the question ID
    axios.get(`http://localhost:5000/questions/${id}`)
      .then((response) => {
        setQuestion(response.data);
      })
      .catch((error) => {
        console.error('Error fetching question!', error);
      });

    axios.get(`http://localhost:5000/questions/${id}/answers`)
      .then((response) => {
        setAnswers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching answers!', error);
      });
  }, [id]);

  const handlePostAnswer = () => {
    // Post a new answer to the question
    axios.post(`http://localhost:5000/questions/${id}/answer`, {
      answer: newAnswer,
      author: 'currentUser', // Replace with logged-in user's name
    })
      .then((response) => {
        setAnswers([...answers, response.data.answers[response.data.answers.length - 1]]);
        setNewAnswer('');
      })
      .catch((error) => {
        console.error('Error posting answer!', error);
      });
  };

  if (!question) return <div className="flex justify-center items-center h-screen">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
        {/* Question Details */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">{question.title}</h1>
          <p className="text-gray-600">Posted by: {question.author}</p>
          <p className="text-gray-600">Date: {new Date(question.createdAt).toLocaleDateString()}</p>
        </div>

        {/* Answers Section */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Answers</h3>
          {answers.length > 0 ? (
            <ul className="space-y-4">
              {answers.map((answer, index) => (
                <li key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                  <p className="text-gray-700">{answer.text}</p>
                  <p className="text-sm text-gray-500 mt-2">Answered by: {answer.author}</p>
                  <p className="text-sm text-gray-500">Date: {new Date(answer.createdAt).toLocaleDateString()}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No answers yet. Be the first to answer!</p>
          )}
        </div>

        {/* Post an Answer Section */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Post an Answer</h3>
          <textarea
            value={newAnswer}
            onChange={(e) => setNewAnswer(e.target.value)}
            placeholder="Write your answer"
            className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring focus:ring-purple-300"
          />
          <button
            onClick={handlePostAnswer}
            className="bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-200"
          >
            Post Answer
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionDetail;
