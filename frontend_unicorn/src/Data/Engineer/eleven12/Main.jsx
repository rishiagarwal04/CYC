import React, { useState, useRef } from 'react';
import JEEPreparationSchools from './Schools';
import JEECoachingCenters from './Coaching';
import EngineeringSkills from './AdditionalSkills';

const data = {
  "11th&12th": [
    "Schools",
    "Coaching",
    "Additional Skills",
  ],
};

const suggestions = {
  "11th&12th": "Focus on a strong foundation in 11th and 12th to excel in JEE and beyond!",
  "Schools": "Choose a school with a robust JEE preparation program to balance academics and exams!",
  "Coaching": "Join a top coaching center to ace JEE with expert guidance and structured study!",
  "Additional Skills": "Build skills like problem-solving and coding to stand out in engineering!",
  default: "Hover over a category or subcategory to get personalized advice for your JEE journey!"
};

const E1112 = () => {
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [right, setRight] = useState(<JEEPreparationSchools />); // To store the component to render
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
    if (subcategory === "Schools") {
      setRight(<JEEPreparationSchools />);
    } else if (subcategory === "Coaching") {
      setRight(<JEECoachingCenters />);
    } else if (subcategory === "Additional Skills") {
      setRight(<EngineeringSkills />);
    }
  };

  return (
    <div className="flex h-screen relative">
      {/* Left Navbar */}
      <div className="w-1/5 bg-purple-800 text-white p-4 fixed left-0 top-0 h-full rounded-r-xl overflow-scroll">
        <h2 className="text-xl font-bold mb-4">Categories</h2>
        <ul>
          {Object.keys(data).map((category) => (
            <li key={category} className="mb-4">
              <div
                className="cursor-pointer p-2 rounded bg-purple-900 text-purple-100 hover:bg-purple-700 transition-colors duration-200"
                onMouseEnter={() => handleCategoryHover(category)}
                onMouseLeave={handleItemLeave}
              >
                {category}
              </div>
              {/* Subcategories */}
              <ul className="ml-4 mt-2">
                {data[category].map((item, index) => (
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
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Content */}
      <div className="ml-[21%] mt-2">{right}</div>

      {/* Human-Like Instructor Button */}
      <div className="fixed bottom-6 right-6 z-50" ref={instructorRef}>
        <button
          onClick={toggleInstructor}
          className="flex items-center bg-[#C4B5FD] text-[#4C1D95] rounded-full px-4 py-2 shadow-lg hover:bg-[#A78BFA] hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#4C1D95]"
          aria-label="Toggle JEE preparation suggestions from Coach Clara"
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
            <p className="text-gray-600 text-sm">{suggestions[hoveredItem] || suggestions.default}</p>
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

export default E1112;