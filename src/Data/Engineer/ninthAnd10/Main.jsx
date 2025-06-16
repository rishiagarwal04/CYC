import React, { useState, useRef } from 'react';
import Data from './Data';
import Skills from './Skills.jsx';

const data = {
  Olympiads: [
    'Mathematics',
    'Chemistry',
    'Physics',
    'Science Olympiads',
    'Technology and Computing',
    'General Knowledge and Miscellaneous',
  ],
  Skills: {},
};

const suggestions = {
  Olympiads: "Explore Olympiads to challenge yourself and stand out in academics!",
  Mathematics: "Excel in Math Olympiads to sharpen your problem-solving skills!",
  Chemistry: "Master Chemistry Olympiads to prepare for careers in research or medicine!",
  Physics: "Tackle Physics Olympiads to build a strong foundation for engineering!",
  "Science Olympiads": "Participate in Science Olympiads to showcase your scientific curiosity!",
  "Technology and Computing": "Compete in Tech Olympiads to boost your coding and innovation skills!",
  "General Knowledge and Miscellaneous": "Engage in GK Olympiads to enhance your awareness and versatility!",
  Skills: "Develop key skills to complement your Olympiad achievements and career goals!",
  default: "Hover over a category or subcategory to get personalized advice for your journey!"
};

const E910 = () => {
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [right, setRight] = useState(null); // To store the variable to send to Data
  const [showSkills, setShowSkills] = useState(false); // State to toggle between Data and Skills
  const [isInstructorOpen, setIsInstructorOpen] = useState(false); // State for instructor bubble
  const [hoveredItem, setHoveredItem] = useState(null); // Track hovered category/subcategory
  const instructorRef = useRef(null);

  // Handle click outside to close speech bubble
  const handleClickOutside = (event) => {
    if (instructorRef.current && !instructorRef.current.contains(event.target)) {
      setIsInstructorOpen(false);
    }
  };

  // Add click-outside listener
  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Toggle instructor manually
  const toggleInstructor = () => {
    setIsInstructorOpen(!isInstructorOpen);
  };

  // Handle category hover
  const handleCategoryHover = (category) => {
    setHoveredItem(category);
    setIsInstructorOpen(true);
  };

  // Handle subcategory hover
  const handleSubcategoryHover = (subcategory) => {
    setHoveredItem(subcategory);
    setIsInstructorOpen(true);
  };

  // Handle item leave
  const handleItemLeave = () => {
    setHoveredItem(null);
    setIsInstructorOpen(false);
  };

  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(subcategory);
    setRight(subcategory); // Update the variable to send to Data
  };

  const skillss = (category) => {
    if (category === "Skills") {
      setShowSkills(true);
    } else {
      setShowSkills(false);
    }
  };

  // Get current suggestion
  const currentSuggestion = hoveredItem ? suggestions[hoveredItem] : suggestions.default;

  return (
    <div className="flex h-screen relative">
      {/* Left Navbar */}
      <div className="w-1/5 bg-purple-800 text-white p-4 fixed left-0 top-20 h-full rounded-r-xl overflow-scroll">
        <h2 className="text-xl font-bold mb-4">Categories</h2>
        <ul>
          {Object.keys(data).map((category) => (
            <li key={category} className="mb-4">
              <div
                className="cursor-pointer p-2 rounded bg-purple-900 text-purple-100 hover:bg-purple-700 transition-colors duration-200"
                onClick={() => skillss(category)}
                onMouseEnter={() => handleCategoryHover(category)}
                onMouseLeave={handleItemLeave}
              >
                {category}
              </div>
              {/* Subcategories */}
              <ul className="ml-4 mt-2">
                {Array.isArray(data[category])
                  ? data[category].map((item, index) => (
                      <li
                        key={index}
                        className={`cursor-pointer p-2 rounded ${
                          selectedSubcategory === item
                            ? 'bg-white text-purple-800'
                            : 'hover:bg-purple-600 hover:text-purple-100'
                        } transition-colors duration-200`}
                        onClick={() => handleSubcategoryClick(item)}
                        onMouseEnter={() => handleSubcategoryHover(item)}
                        onMouseLeave={handleItemLeave}
                      >
                        {item}
                      </li>
                    ))
                  : Object.keys(data[category]).map((subcategory) => (
                      <li
                        key={subcategory}
                        className={`cursor-pointer p-2 rounded ${
                          selectedSubcategory === subcategory
                            ? 'bg-white text-purple-800'
                            : 'hover:bg-purple-600 hover:text-purple-100'
                        } transition-colors duration-200`}
                        onClick={() => handleSubcategoryClick(subcategory)}
                        onMouseEnter={() => handleSubcategoryHover(subcategory)}
                        onMouseLeave={handleItemLeave}
                      >
                        {subcategory}
                      </li>
                    ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Content */}
      <div className="w-4/5 text-black p-6 ml-[20%] mt-20">
        {showSkills ? <Skills /> : <Data selectedSubcategory={right} />}
      </div>

      {/* Human-Like Instructor Button */}
      <div className="fixed bottom-6 right-6 z-50" ref={instructorRef}>
        <button
          onClick={toggleInstructor}
          className="flex items-center bg-[#C4B5FD] text-[#4C1D95] rounded-full px-4 py-2 shadow-lg hover:bg-[#A78BFA] hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#4C1D95]"
          aria-label="Toggle Olympiad and skills suggestions from Coach Clara"
          tabIndex={0}
        >
          <div className="w-10 h-10 bg-[#EDE9FE] rounded-full flex items-center justify-center mr-2">
            <span className="text-[#4C1D95] text-lg font-semibold">C</span>
          </div>
          <span className="text-sm font-semibold">Coach Clara</span>
        </button>
        {isInstructorOpen && (
          <div className="absolute bottom-14 right-0 w-72 bg-white p-6 rounded-xl shadow-xl border border-[#C4B5FD] animate-fade-in">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-[#EDE9FE] rounded-full flex items-center justify-center mr-3">
                <span className="text-[#4C1D95] text-base font-semibold">C</span>
              </div>
              <h3 className="text-[#4C1D95] text-lg font-semibold">Coach Clara</h3>
            </div>
            <p className="text-gray-600 text-sm">{currentSuggestion}</p>
            <button
              onClick={() => setIsInstructorOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-[#4C1D95] focus:outline-none"
              aria-label="Close instructor suggestions"
            >
              ✕
            </button>
          </div>
        )}
      </div>
      <style>
        {`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in {
            animation: fade-in 0.3s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default E910;