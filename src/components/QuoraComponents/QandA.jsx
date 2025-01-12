import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // useNavigate for programmatic navigation
import axios from 'axios';

const QuestionDetail = () => {
  const { id } = useParams();  // Get the question ID from the URL
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [newAnswer, setNewAnswer] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the question and answers based on the question ID
    axios.get(`http://localhost:5000/questions/${id}`)
      .then(response => {
        setQuestion(response.data);
      })
      .catch(error => {
        console.error("Error fetching question!", error);
      });

    axios.get(`http://localhost:5000/questions/${id}/answers`)
      .then(response => {
        setAnswers(response.data);
      })
      .catch(error => {
        console.error("Error fetching answers!", error);
      });
  }, [id]);

  const handlePostAnswer = () => {
    // Post a new answer to the question
    axios.post(`http://localhost:5000/questions/${id}/answer`, {
      answer: newAnswer,
      author: 'currentUser',  // Replace with logged-in user's name
    })
      .then(response => {
        setAnswers([...answers, response.data.answers[response.data.answers.length - 1]]);
        setNewAnswer('');
      })
      .catch(error => {
        console.error("Error posting answer!", error);
      });
  };

  if (!question) return <div>Loading...</div>;

  return (
    <div>
      <h1>{question.title}</h1>
      <p>Posted by: {question.author}</p>
      <p>Date: {new Date(question.createdAt).toLocaleDateString()}</p>

      <h3>Answers</h3>
      <ul>
        {answers.map((answer, index) => (
          <li key={index}>
            <p>{answer.text}</p>
            <p>Answered by: {answer.author}</p>
            <p>Date: {new Date(answer.createdAt).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>

      <h3>Post an Answer</h3>
      <textarea
        value={newAnswer}
        onChange={(e) => setNewAnswer(e.target.value)}
        placeholder="Write your answer"
      />
      <button onClick={handlePostAnswer}>Post Answer</button>
    </div>
  );
};

export default QuestionDetail;
