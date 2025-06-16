import React, { useState, useRef } from 'react';

const suggestions = {
  "Bachelor’s Degree in Culinary Arts": "Unleash your creativity in the kitchen with this hands-on culinary program!",
  "Bachelor’s in Hotel Management and Catering Technology (BHMCT)": "Learn the ins and outs of hospitality with real-world internships!",
  "Bachelor’s in Bakery and Pastry Arts": "Perfect your baking skills and create stunning desserts!",
  "Bachelor’s in Hospitality and Hotel Administration (BHA)": "Master hospitality operations and business skills for a thriving career!",
  "B.Sc. in Food Technology": "Dive into the science of food production and innovation!",
  "B.Sc. in Nutrition and Dietetics": "Help people lead healthier lives with expertise in nutrition!",
  "Bachelor’s in Business Administration (BBA) in Hospitality Management": "Combine business acumen with hospitality for leadership roles!",
  "Bachelor’s in Restaurant and Catering Management": "Start your journey to owning a successful restaurant or catering business!",
  default: "Hover over a program to get personalized advice for your career journey!"
};

const DegreeProgramsOverview = () => {
  const programs = [
    {
      title: "Bachelor’s Degree in Culinary Arts",
      focus: "Specializes in cooking techniques, global cuisines, food styling, and kitchen management.",
      coreTopics: ["Culinary fundamentals", "Pastry arts", "Food safety", "Kitchen operations"],
      careerPaths: ["Executive Chef", "Food Stylist", "Culinary Instructor", "R&D Chef"],
      keyHighlight: "Emphasis on hands-on training and creativity in food presentation."
    },
    {
      title: "Bachelor’s in Hotel Management and Catering Technology (BHMCT)",
      focus: "Comprehensive training in hotel operations, catering services, and customer management.",
      coreTopics: ["Front office", "Housekeeping", "F&B service", "Event management"],
      careerPaths: ["Hotel Manager", "Catering Manager", "Hospitality Consultant"],
      keyHighlight: "Combines theoretical knowledge with practical exposure through internships."
    },
    {
      title: "Bachelor’s in Bakery and Pastry Arts",
      focus: "Specializes in baking, patisserie, and dessert-making techniques.",
      coreTopics: ["Artisan bread-making", "Chocolate work", "Cake decoration", "Bakery management"],
      careerPaths: ["Pastry Chef", "Chocolatier", "Bakery Owner"],
      keyHighlight: "Hands-on experience in creating innovative baked goods."
    },
    {
      title: "Bachelor’s in Hospitality and Hotel Administration (BHA)",
      focus: "Broad focus on hospitality operations and administration.",
      coreTopics: ["Hotel management", "Tourism", "Marketing", "Customer service"],
      careerPaths: ["Hospitality Manager", "Tourism Officer", "Event Coordinator"],
      keyHighlight: "Combines hospitality operations with business administration skills."
    },
    {
      title: "B.Sc. in Food Technology",
      focus: "Study of food production, preservation, and quality assurance.",
      coreTopics: ["Food chemistry", "Microbiology", "Food processing", "Packaging"],
      careerPaths: ["Food Technologist", "Quality Control Analyst", "Product Developer"],
      keyHighlight: "Strong emphasis on science and technology in food manufacturing."
    },
    {
      title: "B.Sc. in Nutrition and Dietetics",
      focus: "Study of human nutrition, diet planning, and health sciences.",
      coreTopics: ["Clinical nutrition", "Sports nutrition", "Food science", "Therapeutic diets"],
      careerPaths: ["Dietitian", "Nutrition Consultant", "Public Health Expert"],
      keyHighlight: "Prepares graduates for healthcare and wellness industries."
    },
    {
      title: "Bachelor’s in Business Administration (BBA) in Hospitality Management",
      focus: "Business and managerial aspects of the hospitality industry.",
      coreTopics: ["Hospitality marketing", "Financial management", "Operations", "Entrepreneurship"],
      careerPaths: ["Hotel Manager", "Operations Manager", "Hospitality Entrepreneur"],
      keyHighlight: "Strong focus on leadership and strategic planning in hospitality."
    },
    {
      title: "Bachelor’s in Restaurant and Catering Management",
      focus: "Management of restaurant operations and catering services.",
      coreTopics: ["Menu planning", "Food service management", "Event catering"],
      careerPaths: ["Restaurant Manager", "Catering Business Owner", "F&B Director"],
      keyHighlight: "Focused curriculum for aspiring entrepreneurs in the food service sector."
    }
  ];

  const [isInstructorOpen, setIsInstructorOpen] = useState(false);
  const [hoveredProgram, setHoveredProgram] = useState(null);
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

  // Handle program hover
  const handleProgramHover = (programTitle) => {
    setHoveredProgram(programTitle);
    setIsInstructorOpen(true);
  };

  // Handle program leave
  const handleProgramLeave = () => {
    setHoveredProgram(null);
    setIsInstructorOpen(false);
  };

  // Get current suggestion
  const currentSuggestion = hoveredProgram ? suggestions[hoveredProgram] : suggestions.default;

  return (
    <div className="min-h-screen bg-purple-200 py-12 px-6 relative">
      <div className="bg-gradient-to-r from-[#8b65ab] to-[#7a5a9a] py-6 mb-12 rounded-lg shadow-lg">
        <h1 className="text-center text-white text-4xl font-semibold tracking-wide">
          Degree Programs in Hospitality, Culinary, and Food Sciences
        </h1>
      </div>

      {/* Grid of Program Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {programs.map((program, index) => (
          <div
            key={index}
            className="bg-purple-100 rounded-lg p-6 shadow-md hover:bg-purple-200 hover:shadow-xl transition-all duration-200 cursor-pointer"
            onMouseEnter={() => handleProgramHover(program.title)}
            onMouseLeave={handleProgramLeave}
            aria-label={`Learn more about ${program.title}`}
          >
            <h2 className="text-purple-800 text-2xl font-semibold mb-4">{program.title}</h2>
            <p className="text-gray-700 text-lg mb-2">
              <span className="font-semibold text-purple-800">Focus:</span> {program.focus}
            </p>
            <p className="text-gray-700 text-lg mb-2">
              <span className="font-semibold text-purple-800">Core Topics:</span> {program.coreTopics.join(", ")}
            </p>
            <p className="text-gray-700 text-lg mb-2">
              <span className="font-semibold text-purple-800">Career Paths:</span> {program.careerPaths.join(", ")}
            </p>
            <p className="text-gray-700 text-lg">
              <span className="font-semibold text-purple-800">Key Highlight:</span> {program.keyHighlight}
            </p>
          </div>
        ))}
      </div>

      {/* Human-Like Instructor Button */}
      <div className="fixed bottom-6 right-6 z-50" ref={instructorRef}>
        <button
          onClick={toggleInstructor}
          className="flex items-center bg-[#C4B5FD] text-[#4C1D95] rounded-full px-4 py-2 shadow-lg hover:bg-[#A78BFA] hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#4C1D95]"
          aria-label="Toggle program suggestions from Coach Clara"
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

export default DegreeProgramsOverview;