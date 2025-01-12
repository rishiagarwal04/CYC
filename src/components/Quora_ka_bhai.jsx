import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const QandA = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Fetch all questions
    axios.get('http://localhost:5000/questions')
      .then(response => {
        setQuestions(response.data);
      })
      .catch(error => {
        console.error("Error fetching questions!", error);
      });
  }, []);

  return (
    <div>
      <h1>Questions</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {questions.map((question) => (
          <div key={question._id} style={{ width: '200px', padding: '10px', margin: '10px', border: '1px solid #ddd', borderRadius: '10px', position: 'relative' }}>
            <h3>Q) {question.title}</h3>
            <p>--{question.author}</p>
            <p>--{new Date(question.createdAt).toLocaleDateString()}</p>
            <a target='_blank' href={`/questions/${question._id}`}>
              <button style={{ position: 'absolute', bottom: '10px', right: '10px' }}>More</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QandA;
