import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const PersonalizeForm = () => {
  const navigate = useNavigate();
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [futureGoal, setFutureGoal] = useState("");
  const [error, setError] = useState("");
  const [openDropdown, setOpenDropdown] = useState(null); // 'interests', 'courses', or 'skills'

  // Predefined lists
  const interestsList = [
    "Technology",
    "Cooking",
    "Photography",
    "Music",
    "Sports",
    "Art",
    "Reading",
    "Travel",
    "Gaming",
    "Fitness",
  ];

  const coursesList = [
    "Python Programming",
    "Web Development",
    "Data Science",
    "Machine Learning",
    "Graphic Design",
    "Digital Marketing",
    "Financial Accounting",
    "Business Management",
    "Creative Writing",
    "Mobile App Development",
  ];

  const skillsList = [
    "Programming",
    "Graphic Design",
    "Public Speaking",
    "Project Management",
    "Data Analysis",
    "Content Writing",
    "UI/UX Design",
    "Digital Marketing",
    "Photography",
    "Video Editing",
  ];

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const handleSelection = (item, selectedItems, setSelectedItems) => {
    const newSelection = selectedItems.includes(item)
      ? selectedItems.filter((i) => i !== item)
      : [...selectedItems, item];
    setSelectedItems(newSelection);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validate inputs
    if (selectedInterests.length === 0) {
      setError("Please select at least one interest.");
      return;
    }
    if (selectedCourses.length === 0) {
      setError("Please select at least one completed course.");
      return;
    }
    if (selectedSkills.length === 0) {
      setError("Please select at least one skill.");
      return;
    }

    const formData = {
      interest: selectedInterests,
      courses_done: selectedCourses,
      current_skillset: selectedSkills,
      your_future_goal: futureGoal || "",
    };

    try {
      const id = localStorage.getItem("userId");
      if (!id) {
        throw new Error("User ID not found in localStorage");
      }
      const response = await axios.post(
        `https://cyc-backend-3.onrender.com/signup/personalize/${id}`,
        formData
      );
      alert("Personalization data saved successfully!");

      // Save to localStorage
      // localStorage.setItem(
      //   "interest",
      //   JSON.stringify(response.data.data.interest)
      // );
      // localStorage.setItem(
      //   "courses_done",
      //   JSON.stringify(response.data.data.courses_done)
      // );
      // localStorage.setItem(
      //   "current_skillset",
      //   JSON.stringify(response.data.data.current_skillset)
      // );
      // localStorage.setItem(
      //   "your_future_goal",
      //   response.data.data.your_future_goal || ""
      // );

      navigate("/");
    } catch (error) {
      console.error("Error submitting form data:", error);
      setError(
        error.response?.data?.error ||
          "Failed to save your data. Please try again."
      );
    }
  };

  // Helper component for dropdown
  const DropdownSelector = ({
    label,
    items,
    selectedItems,
    setSelectedItems,
    dropdownName,
  }) => (
    <div className="mb-4 relative">
      <label className="text-gray-300 block mb-2">{label}</label>
      <div
        className="w-full px-4 py-2 bg-gray-700 text-gray-300 rounded-md border border-gray-600 cursor-pointer"
        onClick={() => toggleDropdown(dropdownName)}
      >
        {selectedItems.length > 0
          ? selectedItems.join(", ")
          : `Select ${dropdownName}`}
      </div>
      {openDropdown === dropdownName && (
        <div
          className="absolute z-10 w-full mt-1 bg-gray-800 border border-gray-600 rounded-md max-h-60 overflow-y-auto shadow-lg"
          onBlur={() => setOpenDropdown(null)}
          tabIndex={0}
        >
          {items.map((item) => (
            <div
              key={item}
              className={`px-4 py-2 hover:bg-gray-700 cursor-pointer flex items-center ${
                selectedItems.includes(item) ? "bg-blue-900 bg-opacity-50" : ""
              }`}
              onClick={() => {
                handleSelection(item, selectedItems, setSelectedItems);
              }}
              style={{ color: "white" }}
            >
              <input
                type="checkbox"
                checked={selectedItems.includes(item)}
                readOnly
                className="mr-2 cursor-pointer"
              />
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center bg-opacity-90"
      style={{
        backgroundImage: `url('https://images.rbxcdn.com/782b7fc18a24ee997efd9a7f02fa4bf9-bg_08072019.jpg')`,
        backgroundBlendMode: "overlay",
      }}
    >
      {/* <Link
        to="/home"
        className="text-black text-sm absolute right-10 z-10 top-8 bg-white px-5 py-2 rounded-[10px]"
      >
        Skip
      </Link> */}
      <div className="w-1/3 bg-gray-900 p-8 rounded-lg shadow-lg">
        <h2 className="text-white text-2xl font-bold mb-6 text-center">
          Let's Get to Know YOU
        </h2>
        {error && <p className="text-red-400 mb-4 text-center">{error}</p>}
        <form onSubmit={handleSubmit}>
          {/* Interests Dropdown */}
          <DropdownSelector
            label="What are your interests? (Select at least one)"
            items={interestsList}
            selectedItems={selectedInterests}
            setSelectedItems={setSelectedInterests}
            dropdownName="interests"
          />

          {/* Courses Dropdown */}
          <DropdownSelector
            label="Courses you have completed (Select at least one)"
            items={coursesList}
            selectedItems={selectedCourses}
            setSelectedItems={setSelectedCourses}
            dropdownName="courses"
          />

          {/* Skills Dropdown */}
          <DropdownSelector
            label="Your current skillset (Select at least one)"
            items={skillsList}
            selectedItems={selectedSkills}
            setSelectedItems={setSelectedSkills}
            dropdownName="skills"
          />

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
