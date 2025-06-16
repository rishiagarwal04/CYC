import React, { useState, useRef } from 'react';

const suggestions = {
  "Pursue Advanced Culinary Degrees": "Elevate your culinary career with a postgraduate degree!",
  "Gain Professional Experience Post-Graduation": "Apply your advanced skills in professional kitchens!",
  "Specialize Through Postgraduate Certifications": "Enhance your expertise with specialized certifications!",
  "Engage in Advanced Culinary Research": "Innovate in the culinary field through research!",
  "Participate in High-Level Competitions": "Showcase your skills in prestigious culinary contests!",
  "Network with Industry Leaders": "Build connections to advance your culinary career!",
  "Launch Your Culinary Career": "Step into leadership roles with your postgraduate training!",
  default: "Hover over a step to get insights about your postgraduate cooking journey!"
};

const PostgraduateCooking = () => {
  const postgraduateData = {
    1: {
      title: "Pursue Advanced Culinary Degrees",
      description: "Postgraduate programs in culinary arts, hospitality management, or food technology provide advanced knowledge and skills for leadership roles in the culinary industry. These programs often include practical training, research opportunities, and business management courses.",
      programs: {
        India: [
          "IHM Mumbai: Postgraduate Diploma in Culinary Arts",
          "IIHM (Delhi, Kolkata): Master’s in Hospitality Management",
          "Symbiosis School of Culinary Arts (Pune): Advanced Culinary Program",
          "GNIHM (Kolkata): Master’s in Culinary and Hospitality Management"
        ],
        Abroad: [
          "Le Cordon Bleu (Paris, London): Master’s in Culinary Arts",
          "Culinary Institute of America (USA): Master of Professional Studies in Food Business",
          "École Hôtelière de Lausanne (Switzerland): Master’s in Global Hospitality Business",
          "University of Gastronomic Sciences (Italy): Master’s in Food Innovation"
        ]
      },
      duration: "Typically 1 to 2 years",
      requirements: [
        "Bachelor’s degree in culinary arts or related field",
        "Relevant work experience (preferred)",
        "Portfolio or entrance exam (varies by program)"
      ]
    },
    2: {
      title: "Gain Professional Experience Post-Graduation",
      description: "Work in high-end restaurants, hotels, or catering companies to apply your advanced skills and build a professional reputation.",
      opportunities: [
        "Sous Chef at luxury hotels (e.g., Taj, Oberoi)",
        "Pastry Chef in renowned bakeries (e.g., Ladurée, Pierre Hermé)",
        "Catering Manager for large events",
        "Consultant for food startups"
      ],
      locations: {
        India: [
          "Taj Hotels (Mumbai, Delhi)",
          "Oberoi Hotels (Bangalore, Kolkata)",
          "ITC Hotels (Chennai, Hyderabad)",
          "The Leela Palaces (Goa, Udaipur)"
        ],
        Abroad: [
          "Hilton Worldwide (USA, UK)",
          "Four Seasons Hotels (Dubai, Singapore)",
          "Ritz-Carlton (Paris, Tokyo)",
          "Mandarin Oriental (Hong Kong, New York)"
        ]
      }
    },
    3: {
      title: "Specialize Through Postgraduate Certifications",
      description: "Earn certifications to deepen your expertise in niche areas like pastry arts, global cuisines, or food safety.",
      certifications: {
        pastryArts: [
          "Advanced Pastry Arts (Le Cordon Bleu)",
          "Chocolate and Confectionery (Callebaut Academy, Belgium)",
          "Artisan Baking (San Francisco Baking Institute)"
        ],
        globalCuisine: [
          "Mediterranean Cuisine (Apicius, Italy)",
          "Japanese Culinary Techniques (Tsuji Culinary Institute, Japan)",
          "Indian Regional Cuisines (IHM Mumbai)"
        ],
        foodSafety: [
          "HACCP Level 4 (Highfield, UK)",
          "ServSafe Manager Certification (USA)",
          "FSSAI Advanced Certification (India)"
        ]
      }
    },
    4: {
      title: "Engage in Advanced Culinary Research",
      description: "Contribute to culinary innovation by researching sustainable practices, food technology, or cultural cuisines.",
      researchAreas: [
        "Sustainable cooking methods",
        "Plant-based cuisine innovation",
        "Food preservation techniques",
        "Cultural influences on modern cuisine"
      ],
      institutions: {
        India: [
          "CFTRI (Mysore): Food Technology Research",
          "NIFTEM (Haryana): Food Innovation and Entrepreneurship",
          "Shivaji University (Kolhapur): Food Culture Studies"
        ],
        Abroad: [
          "University of Gastronomic Sciences (Italy): Sustainable Gastronomy",
          "Harvard T.H. Chan School of Public Health (USA): Food Safety Research",
          "University of California, Davis (USA): Food Science Research"
        ]
      }
    },
    5: {
      title: "Participate in High-Level Competitions",
      description: "Compete in prestigious culinary competitions to gain recognition and network with industry professionals.",
      competitions: {
        India: [
          "Indian Culinary Forum Chef Awards",
          "Nestlé Professional Culinary Challenge",
          "Young Chef Olympiad (India Round)"
        ],
        Global: [
          "Bocuse d’Or (France)",
          "World Pastry Cup (Lyon)",
          "International Chocolate Awards (London)"
        ]
      }
    },
    6: {
      title: "Network with Industry Leaders",
      description: "Attend culinary expos, join professional associations, and collaborate with chefs to build a strong industry network.",
      expos: {
        India: [
          "India Food Expo (Delhi)",
          "Gulfood India (Mumbai)",
          "India International Hospitality Expo (Noida)"
        ],
        Global: [
          "SIAL Paris (France)",
          "FHC China (Shanghai)",
          "World Food Expo (USA)"
        ]
      },
      associations: [
        "Indian Federation of Culinary Associations (IFCA)",
        "World Association of Chefs’ Societies (WACS)",
        "International Culinary Tourism Association (ICTA)"
      ]
    },
    7: {
      title: "Launch Your Culinary Career",
      description: "Use your postgraduate training to step into leadership roles or start your own culinary venture.",
      careerPaths: [
        "Executive Chef at a luxury restaurant",
        "Culinary Director for a hotel chain",
        "Owner of a specialty restaurant or bakery",
        "Culinary Consultant for food brands",
        "Instructor at a culinary institute"
      ],
      entrepreneurialIdeas: [
        "Launch a cloud kitchen focusing on regional cuisines",
        "Start a culinary YouTube channel or blog",
        "Develop a line of gourmet food products",
        "Open a cooking school for international cuisines"
      ]
    }
  };

  const [isInstructorOpen, setIsInstructorOpen] = useState(false);
  const [hoveredStep, setHoveredStep] = useState(null);
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

  // Handle step hover
  const handleStepHover = (stepTitle) => {
    setHoveredStep(stepTitle);
    setIsInstructorOpen(true);
  };

  // Handle step leave
  const handleStepLeave = () => {
    setHoveredStep(null);
    setIsInstructorOpen(false);
  };

  // Get current suggestion
  const currentSuggestion = hoveredStep ? suggestions[hoveredStep] : suggestions.default;

  return (
    <div className="min-h-screen bg-purple-200 py-12 px-6 relative">
      <div className="bg-gradient-to-r from-[#8b65ab] to-[#7a5a9a] py-6 mb-12 rounded-lg shadow-lg">
        <h1 className="text-center text-white text-4xl font-semibold tracking-wide">
          Postgraduate Journey in a Cooking Career
        </h1>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {Object.keys(postgraduateData).map(key => {
          const step = postgraduateData[key];
          return (
            <div
              key={key}
              className="bg-purple-100 rounded-lg p-6 shadow-md hover:bg-purple-200 hover:shadow-xl transition-all duration-200"
              onMouseEnter={() => handleStepHover(step.title)}
              onMouseLeave={handleStepLeave}
              aria-label={`Learn more about ${step.title}`}
            >
              <div className="bg-gradient-to-r from-[#8b65ab] to-[#7a5a9a] py-4 text-center w-full rounded-lg mb-4">
                <h2 className="text-3xl font-semibold text-white">{step.title}</h2>
              </div>
              <p className="text-gray-700 text-lg mb-4">{step.description}</p>

              {step.programs && (
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-purple-800 mb-2">Programs:</h3>
                  <ul className="space-y-2">
                    {Object.keys(step.programs).map(location => (
                      <li key={location}>
                        <strong className="text-purple-800">{location}:</strong>
                        <ul className="list-disc pl-5 text-gray-700 text-lg">
                          {step.programs[location].map((program, idx) => (
                            <li key={idx} className="hover:text-[#ffce56] transition-colors duration-200">{program}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {step.duration && (
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-purple-800 mb-2">Duration:</h3>
                  <p className="text-gray-700 text-lg">{step.duration}</p>
                </div>
              )}

              {step.requirements && (
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-purple-800 mb-2">Requirements:</h3>
                  <ul className="list-disc pl-5 text-gray-700 text-lg space-y-2">
                    {step.requirements.map((req, idx) => (
                      <li key={idx} className="hover:text-[#ffce56] transition-colors duration-200">{req}</li>
                    ))}
                  </ul>
                </div>
              )}

              {step.opportunities && (
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-purple-800 mb-2">Opportunities:</h3>
                  <ul className="list-disc pl-5 text-gray-700 text-lg space-y-2">
                    {step.opportunities.map((opportunity, idx) => (
                      <li key={idx} className="hover:text-[#ffce56] transition-colors duration-200">{opportunity}</li>
                    ))}
                  </ul>
                </div>
              )}

              {step.locations && (
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-purple-800 mb-2">Locations:</h3>
                  <ul className="space-y-2">
                    {Object.keys(step.locations).map(location => (
                      <li key={location}>
                        <strong className="text-purple-800">{location}:</strong>
                        <ul className="list-disc pl-5 text-gray-700 text-lg">
                          {step.locations[location].map((place, idx) => (
                            <li key={idx} className="hover:text-[#ffce56] transition-colors duration-200">{place}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {step.certifications && (
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-purple-800 mb-2">Certifications:</h3>
                  <ul className="space-y-2">
                    {Object.keys(step.certifications).map(certType => (
                      <li key={certType}>
                        <strong className="text-purple-800">{certType}:</strong>
                        <ul className="list-disc pl-5 text-gray-700 text-lg">
                          {step.certifications[certType].map((cert, idx) => (
                            <li key={idx} className="hover:text-[#ffce56] transition-colors duration-200">{cert}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {step.researchAreas && (
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-purple-800 mb-2">Research Areas:</h3>
                  <ul className="list-disc pl-5 text-gray-700 text-lg space-y-2">
                    {step.researchAreas.map((area, idx) => (
                      <li key={idx} className="hover:text-[#ffce56] transition-colors duration-200">{area}</li>
                    ))}
                  </ul>
                </div>
              )}

              {step.institutions && (
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-purple-800 mb-2">Institutions:</h3>
                  <ul className="space-y-2">
                    {Object.keys(step.institutions).map(location => (
                      <li key={location}>
                        <strong className="text-purple-800">{location}:</strong>
                        <ul className="list-disc pl-5 text-gray-700 text-lg">
                          {step.institutions[location].map((institute, idx) => (
                            <li key={idx} className="hover:text-[#ffce56] transition-colors duration-200">{institute}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {step.competitions && (
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-purple-800 mb-2">Competitions:</h3>
                  <ul className="space-y-2">
                    {Object.keys(step.competitions).map(compType => (
                      <li key={compType}>
                        <strong className="text-purple-800">{compType}:</strong>
                        <ul className="list-disc pl-5 text-gray-700 text-lg">
                          {step.competitions[compType].map((comp, idx) => (
                            <li key={idx} className="hover:text-[#ffce56] transition-colors duration-200">{comp}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {step.expos && (
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-purple-800 mb-2">Expos:</h3>
                  <ul className="space-y-2">
                    {Object.keys(step.expos).map(expoType => (
                      <li key={expoType}>
                        <strong className="text-purple-800">{expoType}:</strong>
                        <ul className="list-disc pl-5 text-gray-700 text-lg">
                          {step.expos[expoType].map((expo, idx) => (
                            <li key={idx} className="hover:text-[#ffce56] transition-colors duration-200">{expo}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {step.associations && (
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-purple-800 mb-2">Associations:</h3>
                  <ul className="list-disc pl-5 text-gray-700 text-lg space-y-2">
                    {step.associations.map((assoc, idx) => (
                      <li key={idx} className="hover:text-[#ffce56] transition-colors duration-200">{assoc}</li>
                    ))}
                  </ul>
                </div>
              )}

              {step.careerPaths && (
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-purple-800 mb-2">Career Paths:</h3>
                  <ul className="list-disc pl-5 text-gray-700 text-lg space-y-2">
                    {step.careerPaths.map((path, idx) => (
                      <li key={idx} className="hover:text-[#ffce56] transition-colors duration-200">{path}</li>
                    ))}
                  </ul>
                </div>
              )}

              {step.entrepreneurialIdeas && (
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-purple-800 mb-2">Entrepreneurial Ideas:</h3>
                  <ul className="list-disc pl-5 text-gray-700 text-lg space-y-2">
                    {step.entrepreneurialIdeas.map((idea, idx) => (
                      <li key={idx} className="hover:text-[#ffce56] transition-colors duration-200">{idea}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Human-Like Instructor Button */}
      <div className="fixed bottom-6 right-6 z-50" ref={instructorRef}>
        <button
          onClick={toggleInstructor}
          className="flex items-center bg-[#C4B5FD] text-[#4C1D95] rounded-full px-4 py-2 shadow-lg hover:bg-[#A78BFA] hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#4C1D95]"
          aria-label="Toggle postgraduate cooking insights from Coach Clara"
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

export default PostgraduateCooking;