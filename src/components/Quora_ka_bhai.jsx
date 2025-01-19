import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const QandA = () => {
  const [questions, setQuestions] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [newQuestion, setNewQuestion] = useState({
    title: '',
  });

  // Fetch all questions from the backend
  useEffect(() => {
    axios.get('http://localhost:5000/questions')
      .then(response => {
        setQuestions(response.data);
      })
      .catch(error => {
        console.error("Error fetching questions!", error);
      });
  }, []);

  // Handle question form changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewQuestion({ ...newQuestion, [name]: value });
  };

  // Submit a new question
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/questions', newQuestion)
      .then(response => {
        setQuestions([...questions, response.data]);
        setNewQuestion({ title: '', author: '' }); // Reset form
      })
      .catch(error => {
        console.error("Error submitting question!", error);
      });
  };

  // Handle search query change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter questions based on search query
  const filteredQuestions = questions.filter(question => 
    question.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className=" mx-auto  bg-[#8b65ab] rounded-lg w-100 overflow-y-scroll mt-4 w-full">
      <h1 className="text-3xl font-bold text-white text-center my-4">Questions</h1>

      {/* Search Bar */}
      <div className="mb-6 flex flex-row justify-center items-center">
        <input 
          type="text" 
          placeholder="Search questions..." 
          value={searchQuery} 
          onChange={handleSearchChange} 
          className="flex flex-row  justify-center items-center  p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 "
        />
      </div>

      {/* Ask New Question Form */}
      <form onSubmit={handleSubmit} className="mb-6 flex flex-row  justify-between items-center gap-9 mx-10 my-10">
        <input 
          type="text" 
          name="title" 
          placeholder="ask new question" 
          value={newQuestion.title}
          onChange={handleInputChange}
          className=" p-3 border border-gray-300 rounded-lg shadow-sm mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
          required 
        />
        {/* <textarea 
          name="content" 
          placeholder="Enter your question content" 
          value={newQuestion.content}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required 
        /> */}
        <button type="submit" className="flex flex-row justify-center items-center p-3 bg-indigo-500 text-white font-semibold rounded-lg shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 ">
          Ask Question
        </button>
      </form>

      {/* Displaying filtered questions */}
      <div className="flex flex-wrap">
        {filteredQuestions.map((question) => (
          <div key={question._id} className="w-1/3 p-4">
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md w-full hover:shadow-lg max-h-[300px]">
              <h3 className="text-xl font-semibold mb-2">Q) {question.title}</h3>
              <p className="text-sm text-gray-500">--{question.author}</p>
              <p className="text-sm text-gray-400">{new Date(question.createdAt).toLocaleDateString()}</p>
              <Link to={`/questions/${question._id}`} className="block mt-4 text-indigo-500 hover:text-indigo-600">
                <button className="w-full py-2 bg-indigo-500 text-white font-semibold rounded-lg shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QandA;