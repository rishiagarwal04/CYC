import React, { useState, useRef } from 'react';

const suggestions = {
  "globalPresence": "Explore Carnival's worldwide destinations, from the Caribbean to Alaska!",
  "diverseBrandPortfolio": "Discover Carnival's diverse brands, catering to all types of travelers!",
  "cruiseExperience": "Enjoy a variety of onboard experiences, from entertainment to dining!",
  "sustainabilityInitiatives": "Learn how Carnival is committed to eco-friendly cruising!",
  "cruiseInnovation": "Experience cutting-edge technology like the Ocean Medallion on Princess Cruises!",
  "leadershipInIndustry": "Carnival leads the cruise industry with its innovative approach and global reach!",
  "conclusion": "Carnival offers unforgettable journeys for every traveler—book your cruise today!",
  default: "Hover over a section to get insights about Carnival’s cruise offerings!"
};

const CarnivalOverview = () => {
  const carnivalHighlights = {
    globalPresence: "Carnival operates cruises across the globe, with a fleet of more than 100 ships visiting popular destinations in the Caribbean, Alaska, Europe, Asia, Australia, and more.",
    diverseBrandPortfolio: [
      "Carnival Cruise Line: Known for its fun, family-friendly atmosphere and affordable cruises, offering a wide range of itineraries and onboard activities.",
      "Princess Cruises: A premium brand offering elegant ships and sophisticated itineraries, focusing on destinations such as Alaska and Europe.",
      "Holland America Line: A luxury brand catering to more mature and discerning travelers, offering intimate and refined cruise experiences.",
      "Costa Cruises: Focused on European travelers, Costa offers Mediterranean and other European voyages, known for vibrant experiences and Italian hospitality.",
      "Cunard Line: Famous for its luxury ocean liners and classic cruising experience, Cunard is the brand for travelers seeking a more traditional and refined voyage.",
      "Seabourn: A high-end, all-inclusive cruise line offering ultra-luxury cruises to exotic destinations.",
      "AIDA Cruises: A German-based brand targeting the European market, offering casual and family-oriented cruise experiences.",
      "P&O Cruises: A well-established British cruise line, offering both luxury and mid-range cruising experiences."
    ],
    cruiseExperience: [
      "Entertainment: Broadway-style shows, live music, comedy, casinos, and themed parties.",
      "Dining: A variety of dining options, from casual eateries to fine dining experiences, including specialty restaurants and 24-hour buffets.",
      "Recreation: Pools, water parks, spas, fitness centers, and sports facilities.",
      "Family-friendly activities: Kid's clubs, family suites, and family-oriented excursions.",
      "Luxury Services: For its premium brands, services such as private lounges, exclusive dining, and personalized excursions are available"
    ],
    sustainabilityInitiatives: "Carnival has made efforts to reduce its environmental impact, implementing eco-friendly technologies such as advanced wastewater treatment systems, energy-efficient ship designs, and initiatives to reduce emissions and waste.",
    cruiseInnovation: "Carnival is known for innovating within the cruise industry, offering unique experiences like the Ocean Medallion on Princess Cruises, which allows guests to access services and information via a wearable device, as well as advancements in digital technologies to improve onboard experiences.",
    leadershipInIndustry: "Carnival is a leader in the global cruise market, with a focus on making cruising accessible to a wide range of customers, from budget travelers to luxury seekers. It has a significant market share, particularly in the North American and European cruise sectors.",
  };

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
  const handleSectionHover = (sectionKey) => {
    setHoveredSection(sectionKey);
    setIsInstructorOpen(true);
  };

  // Handle section leave
  const handleSectionLeave = () => {
    setHoveredSection(null);
    setIsInstructorOpen(false);
  };

  // Get current suggestion
  const currentSuggestion = hoveredSection ? suggestions[hoveredSection] : suggestions.default;

  return (
    <div className="min-h-screen bg-purple-200 py-12 px-6 relative">
      <div className="bg-gradient-to-r from-[#8b65ab] to-[#7a5a9a] py-6 mb-12 rounded-lg shadow-lg">
        <h2 className="text-center text-white text-4xl font-semibold tracking-wide">
          Carnival Corporation & plc Overview
        </h2>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Global Presence */}
        <div
          className="bg-purple-100 rounded-lg p-6 shadow-md hover:bg-purple-200 hover:shadow-xl transition-all duration-200"
          onMouseEnter={() => handleSectionHover("globalPresence")}
          onMouseLeave={handleSectionLeave}
          aria-label="Learn more about Carnival's global presence"
        >
          <p className="text-gray-700 text-lg">{carnivalHighlights.globalPresence}</p>
        </div>

        {/* Diverse Brand Portfolio */}
        <div
          className="bg-purple-100 rounded-lg p-6 shadow-md hover:bg-purple-200 hover:shadow-xl transition-all duration-200"
          onMouseEnter={() => handleSectionHover("diverseBrandPortfolio")}
          onMouseLeave={handleSectionLeave}
          aria-label="Learn more about Carnival's diverse brand portfolio"
        >
          <h3 className="text-purple-800 text-2xl font-semibold mb-4">Diverse Brand Portfolio</h3>
          <ul className="list-disc pl-5 text-gray-700 text-lg">
            {carnivalHighlights.diverseBrandPortfolio.map((brand, index) => (
              <li key={index} className="mb-2 hover:text-[#ffce56] transition-colors duration-200">
                {brand}
              </li>
            ))}
          </ul>
        </div>

        {/* Cruise Experience */}
        <div
          className="bg-purple-100 rounded-lg p-6 shadow-md hover:bg-purple-200 hover:shadow-xl transition-all duration-200"
          onMouseEnter={() => handleSectionHover("cruiseExperience")}
          onMouseLeave={handleSectionLeave}
          aria-label="Learn more about Carnival's cruise experience"
        >
          <h3 className="text-purple-800 text-2xl font-semibold mb-4">Cruise Experience</h3>
          <ul className="list-disc pl-5 text-gray-700 text-lg">
            {carnivalHighlights.cruiseExperience.map((experience, index) => (
              <li key={index} className="mb-2 hover:text-[#ffce56] transition-colors duration-200">
                {experience}
              </li>
            ))}
          </ul>
        </div>

        {/* Sustainability Initiatives */}
        <div
          className="bg-purple-100 rounded-lg p-6 shadow-md hover:bg-purple-200 hover:shadow-xl transition-all duration-200"
          onMouseEnter={() => handleSectionHover("sustainabilityInitiatives")}
          onMouseLeave={handleSectionLeave}
          aria-label="Learn more about Carnival's sustainability initiatives"
        >
          <p className="text-gray-700 text-lg">
            <span className="font-semibold text-purple-800">Sustainability Initiatives:</span>{" "}
            {carnivalHighlights.sustainabilityInitiatives}
          </p>
        </div>

        {/* Cruise Innovation */}
        <div
          className="bg-purple-100 rounded-lg p-6 shadow-md hover:bg-purple-200 hover:shadow-xl transition-all duration-200"
          onMouseEnter={() => handleSectionHover("cruiseInnovation")}
          onMouseLeave={handleSectionLeave}
          aria-label="Learn more about Carnival's cruise innovation"
        >
          <p className="text-gray-700 text-lg">
            <span className="font-semibold text-purple-800">Cruise Innovation:</span>{" "}
            {carnivalHighlights.cruiseInnovation}
          </p>
        </div>

        {/* Leadership in Industry */}
        <div
          className="bg-purple-100 rounded-lg p-6 shadow-md hover:bg-purple-200 hover:shadow-xl transition-all duration-200"
          onMouseEnter={() => handleSectionHover("leadershipInIndustry")}
          onMouseLeave={handleSectionLeave}
          aria-label="Learn more about Carnival's leadership in the industry"
        >
          <p className="text-gray-700 text-lg">
            <span className="font-semibold text-purple-800">Leadership in the Industry:</span>{" "}
            {carnivalHighlights.leadershipInIndustry}
          </p>
        </div>

        {/* Conclusion */}
        <div
          className="bg-purple-100 rounded-lg p-6 shadow-md hover:bg-purple-200 hover:shadow-xl transition-all duration-200"
          onMouseEnter={() => handleSectionHover("conclusion")}
          onMouseLeave={handleSectionLeave}
          aria-label="Read the conclusion about Carnival"
        >
          <p className="text-gray-700 text-lg">
            <span className="font-semibold text-purple-800">Conclusion:</span>{" "}
            Carnival Corporation is an industry giant in the cruise sector, offering diverse experiences across its portfolio of brands, from family-friendly vacations to ultra-luxury cruises. With its global fleet, emphasis on innovation, and commitment to sustainability, Carnival continues to shape the future of the cruising industry while providing travelers with unforgettable maritime journeys.
          </p>
        </div>
      </div>

      {/* Human-Like Instructor Button */}
      <div className="fixed bottom-6 right-6 z-50" ref={instructorRef}>
        <button
          onClick={toggleInstructor}
          className="flex items-center bg-[#C4B5FD] text-[#4C1D95] rounded-full px-4 py-2 shadow-lg hover:bg-[#A78BFA] hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#4C1D95]"
          aria-label="Toggle insights from Coach Clara"
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
              aria-label="Close instructor insights"
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

export default CarnivalOverview;