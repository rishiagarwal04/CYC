import React, { useState } from 'react';
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

const E910 = () => {
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [right, setRight] = useState(null); // To store the variable to send to Data
  const [showSkills, setShowSkills] = useState(false); // State to toggle between Data and Skills

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

  return (
    <div className="flex h-screen">
      {/* Left Navbar */}
      <div className="w-1/5 bg-purple-800 text-white p-4 fixed left-0 top-20 h-full rounded-r-xl overflow-scroll">
        <h2 className="text-xl font-bold mb-4">Categories</h2>
        <ul>
          {Object.keys(data).map((category) => (
            <li key={category} className="mb-4">
              <div className="cursor-pointer p-2 rounded bg-purple-900 text-purple-100" onClick={()=>skillss(category)}>
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
                            : ''
                        }`}
                        onClick={() => handleSubcategoryClick(item)}
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
                            : ''
                        }`}
                        onClick={() => handleSubcategoryClick(subcategory)}
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
        {showSkills ? (
          <Skills />
        ) : (
          <Data selectedSubcategory={right} />
        )}
      </div>
    </div>
  );
};

export default E910;
