import React, { useState, useRef } from "react";

const suggestions = {
  "Engineering Mathematics": "Strengthen your math skills to solve complex engineering problems with ease!",
  "Programming": "Master programming to excel in software development and automation projects!",
  "Mechanics": "Dive into mechanics to design robust structures and machines!",
  "Thermodynamics": "Learn thermodynamics to innovate in energy systems and sustainability!",
  "Data Structures and Algorithms": "Optimize your coding with data structures for top tech roles!",
  "Electrical Circuits": "Understand circuits to excel in electronics and power systems!",
  "Materials Science": "Explore materials science to create stronger, lighter engineering solutions!",
  "Control Systems": "Master control systems to design smart, automated technologies!",
  default: "Hover over a subject to get personalized advice for your engineering studies!"
};

export default function CoreEngineeringSubjects() {
  const [isInstructorOpen, setIsInstructorOpen] = useState(false);
  const [hoveredSection, setHoveredSection] = useState(null);
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

  // Handle section hover
  const handleSectionHover = (sectionTitle) => {
    setHoveredSection(sectionTitle);
    setIsInstructorOpen(true); // Open bubble automatically on hover
  };

  // Handle section leave
  const handleSectionLeave = () => {
    setHoveredSection(null);
    setIsInstructorOpen(false); // Close bubble when leaving section
  };

  // Get current suggestion
  const currentSuggestion = hoveredSection ? suggestions[hoveredSection] : suggestions.default;

  return (
    <div className="text-gray-900 font-sans mt-12 bg-purple-200 pt-6 m-4 rounded-xl pb-4 relative">
      <h1 className="text-center text-purple-800 text-3xl font-semibold mb-12">
        Core Engineering Subjects
      </h1>

      <section
        className="my-8 p-6 bg-purple-100 rounded-lg m-5 hover:bg-purple-200 transition-colors duration-200"
        onMouseEnter={() => handleSectionHover("Engineering Mathematics")}
        onMouseLeave={handleSectionLeave}
      >
        <h2 className="text-purple-800 text-2xl font-semibold">1. Engineering Mathematics</h2>
        <p className="mt-2 text-gray-700">
          Engineering Mathematics forms the backbone of engineering, covering calculus, linear algebra, and differential equations.
        </p>
        <p className="mt-2 text-gray-600">Applications include:</p>
        <ul className="mt-2 list-disc pl-5 text-gray-600">
          <li>Modeling physical systems</li>
          <li>Optimizing designs</li>
          <li>Signal processing</li>
          <li>Data analysis</li>
        </ul>
        <p className="mt-2 text-gray-700">
          Practice problem-solving and use tools like MATLAB for better understanding.
        </p>
      </section>

      <section
        className="my-8 p-6 bg-purple-100 rounded-lg m-5 hover:bg-purple-200 transition-colors duration-200"
        onMouseEnter={() => handleSectionHover("Programming")}
        onMouseLeave={handleSectionLeave}
      >
        <h2 className="text-purple-800 text-2xl font-semibold">2. Programming</h2>
        <p className="mt-2 text-gray-700">
          Programming involves writing code to solve problems, using languages like C++, Java, or Python.
        </p>
        <p className="mt-2 text-gray-600">Key areas include:</p>
        <ul className="mt-2 list-disc pl-5 text-gray-600">
          <li>Software development</li>
          <li>Automation</li>
          <li>Web development</li>
          <li>AI and machine learning</li>
        </ul>
        <p className="mt-2 text-gray-700">
          Build projects and practice on platforms like LeetCode or HackerRank.
        </p>
      </section>

      <section
        className="my-8 p-6 bg-purple-100 rounded-lg m-5 hover:bg-purple-200 transition-colors duration-200"
        onMouseEnter={() => handleSectionHover("Mechanics")}
        onMouseLeave={handleSectionLeave}
      >
        <h2 className="text-purple-800 text-2xl font-semibold">3. Mechanics</h2>
        <p className="mt-2 text-gray-700">
          Mechanics studies forces, motion, and material behavior, essential for mechanical and civil engineering.
        </p>
        <p className="mt-2 text-gray-600">Applications include:</p>
        <ul className="mt-2 list-disc pl-5 text-gray-600">
          <li>Structural design</li>
          <li>Vehicle dynamics</li>
          <li>Robotics</li>
          <li>Bridge construction</li>
        </ul>
        <p className="mt-2 text-gray-700">
          Use simulations and lab experiments to visualize concepts.
        </p>
      </section>

      <section
        className="my-8 p-6 bg-purple-100 rounded-lg m-5 hover:bg-purple-200 transition-colors duration-200"
        onMouseEnter={() => handleSectionHover("Thermodynamics")}
        onMouseLeave={handleSectionLeave}
      >
        <h2 className="text-purple-800 text-2xl font-semibold">4. Thermodynamics</h2>
        <p className="mt-2 text-gray-700">
          Thermodynamics explores energy, heat, and work, critical for energy systems and mechanical engineering.
        </p>
        <p className="mt-2 text-gray-600">Applications include:</p>
        <ul className="mt-2 list-disc pl-5 text-gray-600">
          <li>Power plants</li>
          <li>Engines</li>
          <li>Refrigeration</li>
          <li>Renewable energy</li>
        </ul>
        <p className="mt-2 text-gray-700">
          Focus on understanding energy balance and practice with real-world problems.
        </p>
      </section>

      <section
        className="my-8 p-6 bg-purple-100 rounded-lg m-5 hover:bg-purple-200 transition-colors duration-200"
        onMouseEnter={() => handleSectionHover("Data Structures and Algorithms")}
        onMouseLeave={handleSectionLeave}
      >
        <h2 className="text-purple-800 text-2xl font-semibold">5. Data Structures and Algorithms</h2>
        <p className="mt-2 text-gray-700">
          Data Structures and Algorithms optimize data organization and problem-solving, vital for computer science.
        </p>
        <p className="mt-2 text-gray-600">Key topics include:</p>
        <ul className="mt-2 list-disc pl-5 text-gray-600">
          <li>Arrays and linked lists</li>
          <li>Trees and graphs</li>
          <li>Sorting and searching</li>
          <li>Dynamic programming</li>
        </ul>
        <p className="mt-2 text-gray-700">
          Solve coding challenges on platforms like Codeforces to excel.
        </p>
      </section>

      <section
        className="my-8 p-6 bg-purple-100 rounded-lg m-5 hover:bg-purple-200 transition-colors duration-200"
        onMouseEnter={() => handleSectionHover("Electrical Circuits")}
        onMouseLeave={handleSectionLeave}
      >
        <h2 className="text-purple-800 text-2xl font-semibold">6. Electrical Circuits</h2>
        <p className="mt-2 text-gray-700">
          Electrical Circuits covers the design and analysis of circuits, foundational for electrical and electronics engineering.
        </p>
        <p className="mt-2 text-gray-600">Applications include:</p>
        <ul className="mt-2 list-disc pl-5 text-gray-600">
          <li>Electronics</li>
          <li>Power distribution</li>
          <li>Telecommunications</li>
          <li>Embedded systems</li>
        </ul>
        <p className="mt-2 text-gray-700">
          Use tools like Multisim for circuit simulation and hands-on practice.
        </p>
      </section>

      <section
        className="my-8 p-6 bg-purple-100 rounded-lg m-5 hover:bg-purple-200 transition-colors duration-200"
        onMouseEnter={() => handleSectionHover("Materials Science")}
        onMouseLeave={handleSectionLeave}
      >
        <h2 className="text-purple-800 text-2xl font-semibold">7. Materials Science</h2>
        <p className="mt-2 text-gray-700">
          Materials Science studies the properties and applications of materials, crucial for all engineering disciplines.
        </p>
        <p className="mt-2 text-gray-600">Applications include:</p>
        <ul className="mt-2 list-disc pl-5 text-gray-600">
          <li>Aerospace components</li>
          <li>Biomedical implants</li>
          <li>Semiconductors</li>
          <li>Construction materials</li>
        </ul>
        <p className="mt-2 text-gray-700">
          Conduct lab experiments to understand material behavior.
        </p>
      </section>

      <section
        className="my-8 p-6 bg-purple-100 rounded-lg m-5 hover:bg-purple-200 transition-colors duration-200"
        onMouseEnter={() => handleSectionHover("Control Systems")}
        onMouseLeave={handleSectionLeave}
      >
        <h2 className="text-purple-800 text-2xl font-semibold">8. Control Systems</h2>
        <p className="mt-2 text-gray-700">
          Control Systems focuses on designing systems to manage dynamic behavior, used in automation and robotics.
        </p>
        <p className="mt-2 text-gray-600">Applications include:</p>
        <ul className="mt-2 list-disc pl-5 text-gray-600">
          <li>Autonomous vehicles</li>
          <li>Industrial automation</li>
          <li>Aerospace control</li>
          <li>Smart grids</li>
        </ul>
        <p className="mt-2 text-gray-700">
          Learn tools like Simulink to model and analyze control systems.
        </p>
      </section>

      {/* Human-Like Instructor Button */}
      <div className="fixed bottom-6 right-6 z-50" ref={instructorRef}>
        <button
          onClick={toggleInstructor}
          className="flex items-center bg-[#C4B5FD] text-[#4C1D95] rounded-full px-4 py-2 shadow-lg hover:bg-[#A78BFA] hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#4C1D95]"
          aria-label="Toggle subject suggestions from Coach Clara"
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
}