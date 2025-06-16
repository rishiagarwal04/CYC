import React, { useState, useRef } from 'react';

const suggestions = {
  "advancedCulinarySpecialization": "Specialize in a culinary field and become an expert in your passion!",
  "competitionsAndShows": "Showcase your skills in prestigious culinary competitions and TV shows!",
  "renownedTrainingPrograms": "Get hands-on experience with top-tier culinary training programs!",
  "certificationsAndCourses": "Boost your skills with certifications and short-term culinary courses!",
  "entrepreneurship": "Start your own culinary venture and make your mark in the industry!",
  "researchAndTech": "Innovate in food tech and sustainability through research and development!",
  "teachingAndAcademia": "Inspire the next generation by teaching culinary arts!",
  "networkingAndExposure": "Build connections and gain exposure at culinary expos and events!",
  default: "Hover over a section to get insights about culinary career opportunities!"
};

const C1112 = () => {
  const data = {
    advancedCulinarySpecialization: {
      title: 'Advanced Culinary Specialization',
      description: 'Pursue specialized education in various culinary fields to become an expert in your area of interest.',
      india: [
        'IHM Mumbai: Offers postgraduate programs in culinary arts and hospitality management; open to graduates with relevant qualifications.',
        'Academy of Pastry and Culinary Arts (Delhi, Mumbai, Bengaluru): Focuses on advanced pastry techniques; offers postgraduate diplomas.',
        'Truffle Nation: Offers advanced programs in baking and pastry arts; direct application for recent graduates.',
        'Apicius (Delhi): Offers short-term, advanced courses in Mediterranean and European culinary techniques.',
      ],
      abroad: [
        'Le Cordon Bleu (Paris, London, Australia, etc.): Specializes in culinary arts, pâtisserie, and culinary management; requires a basic culinary background.',
        'Culinary Institute of America (CIA) (USA): Offers advanced programs in culinary and pastry arts; requires a culinary degree or experience for admission.',
        'École Hôtelière de Lausanne (Switzerland): Offers specialized master’s programs in hospitality management and culinary arts; ideal for those interested in managing high-end kitchens.',
        'Apicius International School of Hospitality (Italy): Offers specialized courses in Mediterranean cuisine; application-based, requiring culinary experience.',
      ],
    },
    competitionsAndShows: {
      title: 'Competitions and Culinary Shows',
      description: 'Participate in prestigious culinary competitions to gain industry recognition and make valuable connections.',
      india: [
        'Nestlé Professional Culinary Challenge: A highly competitive event where chefs can showcase their skills; registration via institute or individual.',
        'Young Chef Olympiad: A global culinary competition in India for young chefs; entry via participating culinary institutes.',
        'Indian Chef Awards (IFCA): A highly respected award recognizing talent in the Indian culinary industry; entry is by nomination or application.',
        'MasterChef India: A popular TV competition open to aspiring chefs; auditions are held annually.',
      ],
      abroad: [
        'Bocuse d\'Or: A prestigious international culinary competition; selection typically involves national qualifiers.',
        'World Pastry Cup: Open to pastry chefs globally; entry via national qualifying rounds.',
        'International Young Chef Olympiad: A competition with global participation for young chefs; registration through educational institutes.',
        'MasterChef (UK, USA, Australia): A world-renowned TV show for culinary professionals; open auditions or through online application.',
      ],
    },
    renownedTrainingPrograms: {
      title: 'Renowned Culinary Training Programs',
      description: 'Enroll in prestigious chef training programs to get hands-on experience in the world of high-end culinary arts.',
      india: [
        'Taj Management Training Programme: Focused on luxury hotel kitchens and hospitality services; requires an interview and aptitude test.',
        'Oberoi STEP Programme: Offers practical training in culinary skills in Oberoi hotels; selection through an entrance test.',
        'ITC Hotels Culinary Training: Offers extensive chef training; candidates are selected based on application and interviews.',
        'The Leela Culinary Institute: A high-level program offering training in luxury kitchens across the country.',
      ],
      abroad: [
        'Le Cordon Bleu: Known for its in-depth culinary programs; requires an online application and some prior culinary experience.',
        'Culinary Institute of America (CIA, USA): Offers an intensive hands-on culinary degree; requires completion of basic culinary education or equivalent experience.',
        'Culinary Arts Academy Switzerland: Offers an international pathway to becoming a chef or pastry chef; direct application.',
      ],
    },
    certificationsAndCourses: {
      title: 'Certifications and Short-Term Courses',
      description: 'Enhance your expertise in various culinary fields through specialized certifications and short-term courses.',
      india: [
        'NCHMCT: Offers certifications in food production, culinary management, and food safety.',
        'Food and Beverage Management (IHM): Available across IHMs in India, this course offers essential skills for aspiring chefs and food managers.',
        'HACCP Certification: Required for food safety practices; available through various food safety institutes in India.',
        'Chocolate and Confectionery Courses: Offered by institutes like Apicius and IHM for specialized learning in chocolate work and confectionery.',
      ],
      abroad: [
        'WSET Wine and Beverage Certification: Available through various global centers; it provides expertise in beverage management and pairing.',
        'Advanced Pastry Arts Certification (Le Cordon Bleu, Paris): Available as a short-term advanced pastry course.',
        'Food Safety and HACCP Certification (USA/UK): Available through various online platforms and culinary schools.',
        'Chocolate Masterclasses (e.g., Callebaut Chocolate Academy, Belgium): Learn the art of chocolate making from world-class chefs.',
      ],
    },
    entrepreneurship: {
      title: 'Entrepreneurship in the Culinary Industry',
      description: 'Start your own business or culinary venture to create a strong presence in the food industry.',
      india: [
        'Open a cloud kitchen or meal delivery service targeting niche markets (e.g., organic, vegan, local foods).',
        'Start a regional or local cuisine restaurant or bakery offering a unique experience (e.g., South Indian, street food, or desserts).',
        'Develop a cooking or recipe blog, YouTube channel, or social media presence.',
        'Launch a food products line: sauces, jams, chutneys, or ready-to-eat meals.',
      ],
      abroad: [
        'Open a pop-up restaurant or food truck in key cities like London or New York, specializing in unique or fusion cuisines.',
        'Launch a specialty coffee shop or bakery: Popular in cities like Paris, Milan, and New York.',
        'Start an international cooking school or online culinary classes targeting global audiences.',
      ],
    },
    researchAndTech: {
      title: 'Research and Food Technology',
      description: 'Engage in food research, technology, and sustainable food practices to bring innovation to the industry.',
      india: [
        'Collaborate with CFTRI (Central Food Technological Research Institute) for food preservation and technology research.',
        'Work with agritech or food-tech startups focusing on plant-based food innovations or sustainable food packaging.',
        'Research Indian food culture and its connection with health through universities like Shivaji University or NIFTEM (National Institute of Food Technology Entrepreneurship and Management).',
      ],
      abroad: [
        'University of Gastronomic Sciences (Italy): Specializes in food research and sustainable gastronomy.',
        'Harvard T.H. Chan School of Public Health: Conducts research on food safety and nutrition, ideal for those looking to improve public health.',
        'University of California, Davis (USA): Known for food science and technology research.',
      ],
    },
    teachingAndAcademia: {
      title: 'Teaching and Academia in Culinary Arts',
      description: 'Contribute to the future of cooking by becoming an educator or trainer in renowned culinary institutes.',
      india: [
        'Become a faculty member at IHMs (Institute of Hotel Management) across India.',
        'Conduct cooking workshops or online culinary courses through platforms like Udemy or Skillshare.',
        'Collaborate with food NGOs or community organizations to teach sustainable cooking practices.',
      ],
      abroad: [
        'Join international culinary institutions such as Le Cordon Bleu, Apicius, or Culinary Institute of America as an instructor.',
        'Offer online cooking courses on international platforms like MasterClass, Skillshare, or YouTube.',
      ],
    },
    networkingAndExposure: {
      title: 'Networking and Industry Exposure',
      description: 'Build valuable connections through professional associations and food expos.',
      india: [
        'Join the Indian Federation of Culinary Associations (IFCA) or All India Hotel and Restaurant Association (AHAR).',
        'Attend food and beverage expos like the India Food Expo or Gulfood India to meet industry professionals.',
        'Participate in industry events like India International Hospitality Expo (IIHE) for networking opportunities.',
      ],
      abroad: [
        'Attend major culinary expos like SIAL Paris, FHC China, or World Food Expo (USA).',
        'Join global professional organizations like World Association of Chefs’ Societies (WACS) or International Culinary Tourism Association (ICTA).',
      ],
    },
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
    <div className="min-h-screen bg-purple-200 py-12 px-6 relative font-sans">
      <div className="max-w-5xl mx-auto space-y-8">
        {Object.keys(data).map((sectionKey) => {
          const section = data[sectionKey];
          return (
            <div
              key={sectionKey}
              className="bg-purple-100 rounded-lg p-6 shadow-md hover:bg-purple-200 hover:shadow-xl transition-all duration-200"
              onMouseEnter={() => handleSectionHover(sectionKey)}
              onMouseLeave={handleSectionLeave}
              aria-label={`Learn more about ${section.title}`}
            >
              {/* Section Title */}
              <div className="bg-gradient-to-r from-[#8b65ab] to-[#7a5a9a] py-6 text-center w-full rounded-lg mb-4">
                <h2 className="text-3xl font-semibold text-white">{section.title}</h2>
              </div>

              {/* Section Description */}
              <p className="text-gray-700 text-lg mt-4">{section.description}</p>

              {/* India & Abroad Lists */}
              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-purple-800">India:</h3>
                  <ul className="list-disc pl-5 text-gray-700 text-lg space-y-2">
                    {section.india.map((item, index) => (
                      <li key={index} className="hover:text-[#ffce56] transition-colors duration-200">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-purple-800">Abroad:</h3>
                  <ul className="list-disc pl-5 text-gray-700 text-lg space-y-2">
                    {section.abroad.map((item, index) => (
                      <li key={index} className="hover:text-[#ffce56] transition-colors duration-200">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Human-Like Instructor Button */}
      <div className="fixed bottom-6 right-6 z-50" ref={instructorRef}>
        <button
          onClick={toggleInstructor}
          className="flex items-center bg-[#C4B5FD] text-[#4C1D95] rounded-full px-4 py-2 shadow-lg hover:bg-[#A78BFA] hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#4C1D95]"
          aria-label="Toggle culinary insights from Coach Clara"
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

export default C1112;