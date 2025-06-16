import React, { useState, useRef } from "react";

const suggestions = {
  "Internships": "Secure internships to gain practical experience and build your professional network!",
  "Part-Time Jobs": "Explore part-time roles to develop skills and earn while studying!",
  "Higher Studies": "Plan for master’s programs or MBAs to specialize in your field of interest!",
  "Entrepreneurship": "Start a campus venture to turn your innovative ideas into reality!",
  "Campus Placements": "Polish your resume and interview skills to land top campus placement offers!",
  "Research Opportunities": "Engage in research projects to explore cutting-edge advancements in your field!",
  "Freelancing": "Freelance in skills like coding or design to gain flexibility and experience!",
  "Competitive Exams": "Prepare for exams like GRE or CAT to unlock advanced career opportunities!",
  default: "Hover over a career option to get personalized advice for your undergraduate journey!"
};

export default function Undergraduate() {
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
        Career Options During and After Undergraduate Studies
      </h1>

      <section
        className="my-8 p-6 bg-purple-100 rounded-lg m-5 hover:bg-purple-200 transition-colors duration-200"
        onMouseEnter={() => handleSectionHover("Internships")}
        onMouseLeave={handleSectionLeave}
      >
        <h2 className="text-purple-800 text-2xl font-semibold">1. Internships</h2>
        <p className="mt-2 text-gray-700">
          Internships provide hands-on experience in your field of study, helping you apply classroom knowledge to real-world scenarios.
        </p>
        <p className="mt-2 text-gray-600">Popular internship fields include:</p>
        <ul className="mt-2 list-disc pl-5 text-gray-600">
          <li>Software development</li>
          <li>Marketing</li>
          <li>Engineering design</li>
          <li>Finance</li>
        </ul>
        <p className="mt-2 text-gray-700">
          Use platforms like LinkedIn or Internshala to find opportunities.
        </p>
      </section>

      <section
        className="my-8 p-6 bg-purple-100 rounded-lg m-5 hover:bg-purple-200 transition-colors duration-200"
        onMouseEnter={() => handleSectionHover("Part-Time Jobs")}
        onMouseLeave={handleSectionLeave}
      >
        <h2 className="text-purple-800 text-2xl font-semibold">2. Part-Time Jobs</h2>
        <p className="mt-2 text-gray-700">
          Part-time jobs allow you to earn money while studying, develop time management skills, and gain work experience.
        </p>
        <p className="mt-2 text-gray-600">Common part-time roles include:</p>
        <ul className="mt-2 list-disc pl-5 text-gray-600">
          <li>Tutoring</li>
          <li>Campus ambassador</li>
          <li>Retail associate</li>
          <li>Content writing</li>
        </ul>
        <p className="mt-2 text-gray-700">
          Look for on-campus jobs or local opportunities to balance with studies.
        </p>
      </section>

      <section
        className="my-8 p-6 bg-purple-100 rounded-lg m-5 hover:bg-purple-200 transition-colors duration-200"
        onMouseEnter={() => handleSectionHover("Higher Studies")}
        onMouseLeave={handleSectionLeave}
      >
        <h2 className="text-purple-800 text-2xl font-semibold">3. Higher Studies</h2>
        <p className="mt-2 text-gray-700">
          Pursuing a master’s degree, PhD, or MBA can deepen your expertise and open doors to advanced career roles.
        </p>
        <p className="mt-2 text-gray-600">Tips for planning higher studies:</p>
        <ul className="mt-2 list-disc pl-5 text-gray-600">
          <li>Maintain a strong GPA</li>
          <li>Prepare for exams like GRE, GMAT, or GATE</li>
          <li>Research universities and programs</li>
          <li>Secure recommendation letters</li>
        </ul>
      </section>

      <section
        className="my-8 p-6 bg-purple-100 rounded-lg m-5 hover:bg-purple-200 transition-colors duration-200"
        onMouseEnter={() => handleSectionHover("Entrepreneurship")}
        onMouseLeave={handleSectionLeave}
      >
        <h2 className="text-purple-800 text-2xl font-semibold">4. Entrepreneurship</h2>
        <p className="mt-2 text-gray-700">
          Start your own venture by leveraging campus resources like incubators and pitching ideas to investors.
        </p>
        <p className="mt-2 text-gray-600">Steps to get started:</p>
        <ul className="mt-2 list-disc pl-5 text-gray-600">
          <li>Identify a market need</li>
          <li>Join entrepreneurship clubs</li>
          <li>Develop a business plan</li>
          <li>Seek mentorship from faculty</li>
        </ul>
      </section>

      <section
        className="my-8 p-6 bg-purple-100 rounded-lg m-5 hover:bg-purple-200 transition-colors duration-200"
        onMouseEnter={() => handleSectionHover("Campus Placements")}
        onMouseLeave={handleSectionLeave}
      >
        <h2 className="text-purple-800 text-2xl font-semibold">5. Campus Placements</h2>
        <p className="mt-2 text-gray-700">
          Many companies recruit directly from campuses, offering high-paying jobs in fields like tech, consulting, and finance.
        </p>
        <p className="mt-2 text-gray-600">Preparation tips:</p>
        <ul className="mt-2 list-disc pl-5 text-gray-600">
          <li>Build a strong resume</li>
          <li>Practice coding and aptitude tests</li>
          <li>Participate in mock interviews</li>
          <li>Research company profiles</li>
        </ul>
      </section>

      <section
        className="my-8 p-6 bg-purple-100 rounded-lg m-5 hover:bg-purple-200 transition-colors duration-200"
        onMouseEnter={() => handleSectionHover("Research Opportunities")}
        onMouseLeave={handleSectionLeave}
      >
        <h2 className="text-purple-800 text-2xl font-semibold">6. Research Opportunities</h2>
        <p className="mt-2 text-gray-700">
          Engage in research projects under faculty guidance or through summer programs to contribute to your field.
        </p>
        <p className="mt-2 text-gray-600">Research areas include:</p>
        <ul className="mt-2 list-disc pl-5 text-gray-600">
          <li>Artificial intelligence</li>
          <li>Biotechnology</li>
          <li>Renewable energy</li>
          <li>Social sciences</li>
        </ul>
      </section>

      <section
        className="my-8 p-6 bg-purple-100 rounded-lg m-5 hover:bg-purple-200 transition-colors duration-200"
        onMouseEnter={() => handleSectionHover("Freelancing")}
        onMouseLeave={handleSectionLeave}
      >
        <h2 className="text-purple-800 text-2xl font-semibold">7. Freelancing</h2>
        <p className="mt-2 text-gray-700">
          Offer services like web development, graphic design, or content creation on platforms like Upwork or Fiverr.
        </p>
        <p className="mt-2 text-gray-600">Tips for freelancing success:</p>
        <ul className="mt-2 list-disc pl-5 text-gray-600">
          <li>Build a portfolio</li>
          <li>Learn client communication</li>
          <li>Set competitive rates</li>
          <li>Upskill regularly</li>
        </ul>
      </section>

      <section
        className="my-8 p-6 bg-purple-100 rounded-lg m-5 hover:bg-purple-200 transition-colors duration-200"
        onMouseEnter={() => handleSectionHover("Competitive Exams")}
        onMouseLeave={handleSectionLeave}
      >
        <h2 className="text-purple-800 text-2xl font-semibold">8. Competitive Exams</h2>
        <p className="mt-2 text-gray-700">
          Prepare for exams like CAT, UPSC, or GRE to pursue careers in management, civil services, or international studies.
        </p>
        <p className="mt-2 text-gray-600">Preparation strategies:</p>
        <ul className="mt-2 list-disc pl-5 text-gray-600">
          <li>Join coaching classes</li>
          <li>Practice past papers</li>
          <li>Stay updated on current affairs</li>
          <li>Manage time effectively</li>
        </ul>
      </section>

      {/* Human-Like Instructor Button */}
      <div className="fixed bottom-6 right-6 z-50" ref={instructorRef}>
        <button
          onClick={toggleInstructor}
          className="flex items-center bg-[#C4B5FD] text-[#4C1D95] rounded-full px-4 py-2 shadow-lg hover:bg-[#A78BFA] hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#4C1D95]"
          aria-label="Toggle career suggestions from Coach Clara"
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