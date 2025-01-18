import React, { useState } from 'react';
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

const E1112 = () => {
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [right, setRight] = useState(<JEEPreparationSchools />); // To store the component to render

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
    <div className="flex h-screen">
      {/* Left Navbar */}
      <div className="w-1/5 bg-purple-800 text-white p-4 fixed left-0 top-0 h-full rounded-r-xl overflow-scroll">
        <h2 className="text-xl font-bold mb-4">Categories</h2>
        <ul>
          {Object.keys(data).map((category) => (
            <li key={category} className="mb-4">
              <div className="cursor-pointer p-2 rounded bg-purple-900 text-purple-100">
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
                        : ''
                    }`}
                    onClick={() => handleSubcategoryClick(item)}
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
    </div>
  );
};

export default E1112;
