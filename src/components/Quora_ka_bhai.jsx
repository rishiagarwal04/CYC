import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const QandA = () => {
  const [questions, setQuestions] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [newQuestion, setNewQuestion] = useState({
    title: "",
    author: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/questions")
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((error) => {
        console.error("Error fetching questions!", error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewQuestion({ ...newQuestion, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/questions", newQuestion)
      .then((response) => {
        setQuestions([...questions, response.data]);
        setNewQuestion({ title: "", author: "" });
      })
      .catch((error) => {
        console.error("Error submitting question!", error);
      });
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredQuestions = questions.filter((question) =>
    question.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      className="min-h-screen bg-[#8b65ab] pt-5 pb-16 px-10"
      style={{
        width: "100%",
        borderRadius: "10px",
      }}
    >
      <div
        className="max-w-7xl mx-auto"
        style={{
          width: "100%",
        }}
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Community Q&A</h1>
          <p className="text-purple-100">
            Ask questions and get answers from the community
          </p>
        </div>

        {/* Search and Ask Form */}
        <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full p-4 pl-12 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-purple-50"
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="title"
              placeholder="What's your question?"
              value={newQuestion.title}
              onChange={handleInputChange}
              className="w-full p-4 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-purple-50"
              required
            />
            <input
              type="text"
              name="author"
              placeholder="Your name (optional)"
              value={newQuestion.author}
              onChange={handleInputChange}
              className="w-full p-4 border border-purple-200 rounded-lg bg-purple-50"
            />
            <button
              type="submit"
              className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-200"
            >
              Ask Question
            </button>
          </form>
        </div>

        {/* Horizontally Scrollable Questions */}
        {filteredQuestions.length > 0 && (
          <div className="overflow-x-auto">
            <div className="flex space-x-6 min-w-max pb-4">
              {filteredQuestions.map((question) => (
                <div
                  key={question._id}
                  className="bg-white rounded-xl min-w-[300px] w-[300px] flex-shrink-0 shadow-lg hover:shadow-xl transition-shadow duration-200"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-purple-100 p-3 rounded-full mr-4">
                        <svg
                          className="w-6 h-6 text-purple-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        Q) {question.title}
                      </h3>
                    </div>

                    <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                      <span>@{question.author || "anonymous"}</span>
                      <span>
                        {question.createdAt
                          ? new Date(question.createdAt).toLocaleDateString()
                          : ""}
                      </span>
                    </div>

                    <Link
                      to={`/questions/${question._id}`}
                      className="block w-full py-3 px-4 text-center bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors duration-200"
                    >
                      View Answers
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredQuestions.length === 0 && (
          <div className="text-center py-12">
            <div className="inline-block bg-purple-100 p-6 rounded-full mb-4">
              <svg
                className="w-12 h-12 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-white mb-2">
              No questions found
            </h3>
            <p className="text-purple-200">Be the first to ask a question!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QandA;
