import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const PersonalizeForm = () => {
  const navigate = useNavigate();
  const [showInterests, setShowInterests] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [coursesDone, setCoursesDone] = useState("");
  const [skillset, setSkillset] = useState("");
  const [futureGoal, setFutureGoal] = useState("");
  const [error, setError] = useState("");
  const interestsList = [
    { label: "Tech", value: "Tech" },
    { label: "Cooking", value: "Cooking" },
  ];

  const toggleInterest = (interest) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((item) => item !== interest)
        : [...prev, interest]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validate inputs
    if (selectedInterests.length === 0) {
      setError("Please select at least one interest.");
      return;
    }
    if (!coursesDone.trim()) {
      setError("Please enter at least one course completed.");
      return;
    }
    if (!skillset.trim()) {
      setError("Please describe your current skillset.");
      return;
    }

    const formData = {
      interest: selectedInterests,
      courses_done: coursesDone
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item),
      current_skillset: skillset,
      your_future_goal: futureGoal || "",
    };

    try {
      const id = localStorage.getItem("userId");
      if (!id) {
        throw new Error("User ID not found in localStorage");
      }
      console.log("Submitting personalization data:", formData);
      const response = await axios.post(
        `http://localhost:5000/signup/personalize/${id}`,
        formData
      );
      console.log("Personalization response:", response.data);
      alert("Personalization data saved successfully!");
      navigate("/");
      localStorage.setItem(
        "interest",
        JSON.stringify(response.data.data.interest)
      );
      localStorage.setItem(
        "courses_done",
        JSON.stringify(response.data.data.courses_done)
      );
      localStorage.setItem(
        "current_skillset",
        response.data.data.current_skillset
      );
      localStorage.setItem(
        "your_future_goal",
        response.data.data.your_future_goal || ""
      );
      navigate("/");
    } catch (error) {
      console.error(
        "Error submitting form data:",
        error.response?.data || error.message
      );
      setError(
        error.response?.data?.error ||
          "Failed to save your data. Please try again."
      );
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center bg-opacity-90"
      style={{
        backgroundImage: `url('https://images.rbxcdn.com/782b7fc18a24ee997efd9a7f02fa4bf9-bg_08072019.jpg')`,
        backgroundBlendMode: "overlay",
      }}
    >
      <Link
        to="/explore"
        className="text-black text-sm absolute right-10 z-10 top-8 bg-white px-5 py-2 rounded-[10px]"
      >
        Skip
      </Link>
      <div className="w-1/3 bg-gray-900 p-8 rounded-lg shadow-lg">
        <h2 className="text-white text-2xl font-bold mb-6 text-center">
          Let's Get to Know YOU
        </h2>
        {error && <p className="text-red-400 mb-4 text-center">{error}</p>}
        <form onSubmit={handleSubmit}>
          {/* Interests */}
          <div className="mb-4">
            <label className="text-gray-300 block mb-2">
              What are your interests?
            </label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowInterests(!showInterests)}
                className="w-full px-4 py-2 bg-gray-700 text-gray-300 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {selectedInterests.length > 0
                  ? selectedInterests.join(", ")
                  : "Select your interests"}
              </button>
              {showInterests && (
                <div className="z-10 bg-gray-800 border border-gray-600 rounded-md mt-2 p-4 max-h-40 overflow-y-auto">
                  {interestsList.map((interest) => (
                    <div
                      key={interest.value}
                      className="flex items-center mb-2"
                    >
                      <input
                        type="checkbox"
                        id={interest.value}
                        value={interest.value}
                        checked={selectedInterests.includes(interest.value)}
                        onChange={() => toggleInterest(interest.value)}
                        className="mr-2 cursor-pointer"
                      />
                      <label
                        htmlFor={interest.value}
                        className="text-gray-300 cursor-pointer"
                      >
                        {interest.label}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Courses Done */}
          <div className="mb-4">
            <label className="text-gray-300 block mb-2">
              Courses you have completed
            </label>
            <textarea
              rows="3"
              value={coursesDone}
              onChange={(e) => setCoursesDone(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 text-gray-300 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="List courses (comma-separated, e.g., Python 101, Data Science)..."
            ></textarea>
          </div>

          {/* Current Skillset */}
          <div className="mb-4">
            <label className="text-gray-300 block mb-2">
              Your current skillset
            </label>
            <textarea
              rows="3"
              value={skillset}
              onChange={(e) => setSkillset(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 text-gray-300 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Describe your current skills..."
            ></textarea>
          </div>

          {/* Future Goal (Optional) */}
          <div className="mb-4">
            <label className="text-gray-300 block mb-2">
              Your future goal (optional)
            </label>
            <textarea
              rows="3"
              value={futureGoal}
              onChange={(e) => setFutureGoal(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 text-gray-300 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Share your future goals (optional)..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PersonalizeForm;
