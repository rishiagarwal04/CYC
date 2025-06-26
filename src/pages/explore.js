import React, { useState, useRef } from "react";

const suggestions = {
  Engineering: "Dive into technical skills to excel in engineering fields!",
  Cooking: "Master culinary arts to pursue a career in cooking!",
  default:
    "Hover over a category to get personalized advice for your career journey!",
};

const milestoneDetails = {
  Engineering: (
    <div className="p-8">
      <h3 className="text-purple-800 text-2xl font-semibold mb-4">
        Engineering - Detailed Guide
      </h3>
      <p className="text-gray-700 text-lg mb-4">
        Engineering offers a wide range of opportunities in fields like
        software, mechanical, and civil engineering.
      </p>
      <h4 className="text-purple-800 font-semibold mb-2 text-lg">
        Steps to Succeed:
      </h4>
      <ul className="list-disc pl-5 text-gray-600 text-md mb-4">
        <li>Learn programming languages like Python, Java, or C++.</li>
        <li>Work on hands-on projects (e.g., build a robot or app).</li>
        <li>Join engineering communities (e.g., IEEE, hackathons).</li>
        <li>Pursue internships to gain real-world experience.</li>
      </ul>
      <h4 className="text-purple-800 font-semibold mb-2 text-lg">Resources:</h4>
      <ul className="list-disc pl-5 text-gray-600 text-md">
        <li>edX: Offers engineering courses from top universities.</li>
        <li>GitHub: Collaborate on open-source projects.</li>
        <li>Khan Academy: Free resources for math and physics.</li>
      </ul>
    </div>
  ),
  Cooking: (
    <div className="p-8">
      <h3 className="text-purple-800 text-2xl font-semibold mb-4">
        Cooking - Detailed Guide
      </h3>
      <p className="text-gray-700 text-lg mb-4">
        A career in cooking lets you explore culinary arts, from baking to
        gourmet cuisine.
      </p>
      <h4 className="text-purple-800 font-semibold mb-2 text-lg">
        Steps to Succeed:
      </h4>
      <ul className="list-disc pl-5 text-gray-600 text-md mb-4">
        <li>Practice fundamental techniques (e.g., knife skills, baking).</li>
        <li>Experiment with recipes from different cuisines.</li>
        <li>Attend culinary workshops or classes.</li>
        <li>Work in a restaurant to gain professional experience.</li>
      </ul>
      <h4 className="text-purple-800 font-semibold mb-2 text-lg">Resources:</h4>
      <ul className="list-disc pl-5 text-gray-600 text-md">
        <li>MasterClass: Learn from top chefs like Gordon Ramsay.</li>
        <li>Serious Eats: Recipes and cooking techniques.</li>
        <li>YouTube: Free tutorials on cooking and baking.</li>
      </ul>
    </div>
  ),
};

export default function CareerMilestones() {
  const [isInstructorOpen, setIsInstructorOpen] = useState(false);
  const [hoveredBlock, setHoveredBlock] = useState(null);
  const [selectedMilestone, setSelectedMilestone] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [chosenCareer, setChosenCareer] = useState(null);
  const instructorRef = useRef(null);
  const popupRef = useRef(null);

  // Handle click outside to close speech bubble
  const handleClickOutsideInstructor = (event) => {
    if (
      instructorRef.current &&
      !instructorRef.current.contains(event.target)
    ) {
      setIsInstructorOpen(false);
    }
  };

  // Handle click outside to close popup
  const handleClickOutsidePopup = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setShowPopup(false);
    }
  };

  // Add click-outside listeners
  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideInstructor);
    document.addEventListener("mousedown", handleClickOutsidePopup);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideInstructor);
      document.removeEventListener("mousedown", handleClickOutsidePopup);
    };
  }, []);

  // Toggle instructor manually
  const toggleInstructor = () => {
    setIsInstructorOpen(!isInstructorOpen);
  };

  // Handle block hover
  const handleBlockHover = (blockTitle) => {
    setHoveredBlock(blockTitle);
    setIsInstructorOpen(true);
  };

  // Handle block leave
  const handleBlockLeave = () => {
    setHoveredBlock(null);
    setIsInstructorOpen(false);
  };

  // Handle block click
  const handleBlockClick = (blockTitle) => {
    setSelectedMilestone(blockTitle);
    setChosenCareer(blockTitle);
    setShowPopup(true);
    // Set localStorage Career based on the clicked block
    if (blockTitle === "Engineering") {
      localStorage.setItem("Career", "engineering");
    } else if (blockTitle === "Cooking") {
      localStorage.setItem("Career", "cooking");
    }
    setInterval(() => {
      window.location.reload();
    }, 4000);
  };

  // Get current suggestion
  const currentSuggestion = hoveredBlock
    ? suggestions[hoveredBlock]
    : suggestions.default;

  return (
    <div className="min-h-screen bg-purple-200 p-8 relative">
      <h1 className="text-center text-purple-800 text-4xl font-semibold mb-12">
        Key Career Paths
      </h1>

      {/* 1x2 Grid of Larger Block Containers (Now Buttons) */}
      <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto md:grid-cols-2 sm:grid-cols-1">
        {/* Block 1: Engineering */}
        <button
          className="bg-purple-100 rounded-lg p-8 shadow-md hover:bg-purple-200 transition-colors duration-200 text-left focus:outline-none focus:ring-2 focus:ring-[#4C1D95]"
          onMouseEnter={() => handleBlockHover("Engineering")}
          onMouseLeave={handleBlockLeave}
          onClick={() => handleBlockClick("Engineering")}
          aria-label="Learn more about Engineering"
        >
          <img
            src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
            alt="Engineering tools and workspace"
            className="w-full h-64 object-cover rounded-md mb-6 sm:h-48"
          />
          <h2 className="text-purple-800 text-3xl font-semibold mb-4">
            Engineering
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            Explore careers in engineering, from software to mechanical.
          </p>
          <ul className="list-disc pl-5 text-gray-600 text-md">
            <li>Learn programming (Python, Java)</li>
            <li>Work on hands-on projects</li>
            <li>Join engineering communities</li>
            <li>Pursue internships</li>
          </ul>
        </button>

        {/* Block 2: Cooking */}
        <button
          className="bg-purple-100 rounded-lg p-8 shadow-md hover:bg-purple-200 transition-colors duration-200 text-left focus:outline-none focus:ring-2 focus:ring-[#4C1D95]"
          onMouseEnter={() => handleBlockHover("Cooking")}
          onMouseLeave={handleBlockLeave}
          onClick={() => handleBlockClick("Cooking")}
          aria-label="Learn more about Cooking"
        >
          <img
            src="https://images.creativemarket.com/0.1.0/ps/6817836/1820/1213/m1/fpnw/wm1/ppjyzfwgu3bslgx649uvkwoixqqyaecyqhdumlgebllo3eacpfu8n08enom0fnhj-.jpg?1565781144&s=37b74a19c3153bef88295533b08f6155"
            alt="Cooking ingredients and kitchen setup"
            className="w-full h-64 object-cover rounded-md mb-6 sm:h-48"
          />
          <h2 className="text-purple-800 text-3xl font-semibold mb-4">
            Cooking
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            Discover the art of cooking, from baking to gourmet cuisine.
          </p>
          <ul className="list-disc pl-5 text-gray-600 text-md">
            <li>Practice fundamental techniques</li>
            <li>Experiment with recipes</li>
            <li>Attend culinary workshops</li>
            <li>Work in a restaurant</li>
          </ul>
        </button>
      </div>

      {/* Popup Message */}
      {showPopup && chosenCareer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            ref={popupRef}
            className="bg-purple-100 rounded-xl p-6 shadow-xl border border-[#C4B5FD] w-96 animate-fade-in"
            tabIndex={0}
            aria-label={`Career selection confirmation: ${chosenCareer}`}
          >
            <div className="flex items-center mb-4">
              <h3 className="text-purple-800 text-lg font-semibold">
                Career Selected!
              </h3>
            </div>
            <p className="text-gray-700 text-lg mb-4">
              You have chosen {chosenCareer} as your career path! . <br />
              Reloading...
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-[#4C1D95] focus:outline-none focus:ring-2 focus:ring-[#4C1D95]"
              aria-label="Close career selection popup"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Human-Like Instructor Button */}
      <div className="fixed bottom-6 right-6 z-50" ref={instructorRef}>
        <button
          onClick={toggleInstructor}
          className="flex items-center bg-[#C4B5FD] text-[#4C1D95] rounded-full px-4 py-2 shadow-lg hover:bg-[#A78BFA] hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#4C1D95]"
          aria-label="Toggle career path suggestions from Coach Clara"
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
                <span className="text-[#4C1D95] text-base font-semibold">
                  C
                </span>
              </div>
              <h3 className="text-[#4C1D95] text-lg font-semibold">
                Coach Clara
              </h3>
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
