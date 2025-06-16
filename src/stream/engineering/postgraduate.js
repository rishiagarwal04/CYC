import React, { useState, useRef } from "react";

const suggestions = {
  "Industry Roles":
    "Target high-impact roles in tech or finance with your advanced degree!",
  "Research and Academia":
    "Pursue research or teaching to contribute to cutting-edge knowledge!",
  "PhD Programs":
    "Enroll in a PhD to specialize and lead innovation in your field!",
  Entrepreneurship:
    "Launch a startup to turn your expertise into a thriving business!",
  Consulting: "Join consulting firms to solve complex business challenges!",
  "Government Jobs":
    "Explore stable, impactful roles in public sector organizations!",
  Freelancing:
    "Freelance in your expertise area for flexibility and global opportunities!",
  "Upskilling and Certifications":
    "Gain certifications to stay competitive in emerging fields!",
  default:
    "Hover over a career option to get personalized advice for your postgraduate journey!",
};

export default function Postgraduate() {
  const [isInstructorOpen, setIsInstructorOpen] = useState(false);
  const [hoveredSection, setHoveredSection] = useState(null);
  const instructorRef = useRef(null);

  // Handle click outside to close speech bubble
  const handleClickOutside = (event) => {
    if (
      instructorRef.current &&
      !instructorRef.current.contains(event.target)
    ) {
      setIsInstructorOpen(false);
    }
  };

  // Add click-outside listener
  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
  const currentSuggestion = hoveredSection
    ? suggestions[hoveredSection]
    : suggestions.default;

  return (
    <div className="text-gray-900 font-sans mt-12 bg-purple-200 pt-6 m-4 rounded-xl pb-4 relative">
      <h1 className="text-center text-purple-800 text-3xl font-semibold mb-12">
        Career Options During and After Postgraduate Studies
      </h1>

      <section
        className="my-8 p-6 bg-purple-100 rounded-lg m-5 hover:bg-purple-200 transition-colors duration-200"
        onMouseEnter={() => handleSectionHover("Industry Roles")}
        onMouseLeave={handleSectionLeave}
      >
        <h2 className="text-purple-800 text-2xl font-semibold">
          1. Industry Roles
        </h2>
        <p className="mt-2 text-gray-700">
          Leverage your postgraduate degree to secure high-level roles in
          industries like technology, finance, or healthcare.
        </p>
        <p className="mt-2 text-gray-600">Popular roles include:</p>
        <ul className="mt-2 list-disc pl-5 text-gray-600">
          <li>Data Scientist</li>
          <li>Product Manager</li>
          <li>Financial Analyst</li>
          <li>Biomedical Engineer</li>
        </ul>
        <p className="mt-2 text-gray-700">
          Network on LinkedIn and tailor your resume to highlight specialized
          skills.
        </p>
      </section>

      <section
        className="my-8 p-6 bg-purple-100 rounded-lg m-5 hover:bg-purple-200 transition-colors duration-200"
        onMouseEnter={() => handleSectionHover("Research and Academia")}
        onMouseLeave={handleSectionLeave}
      >
        <h2 className="text-purple-800 text-2xl font-semibold">
          2. Research and Academia
        </h2>
        <p className="mt-2 text-gray-700">
          Contribute to knowledge creation through research or teaching
          positions at universities and research institutes.
        </p>
        <p className="mt-2 text-gray-600">Opportunities include:</p>
        <ul className="mt-2 list-disc pl-5 text-gray-600">
          <li>Postdoctoral Researcher</li>
          <li>Assistant Professor</li>
          <li>Research Scientist</li>
          <li>Lab Director</li>
        </ul>
        <p className="mt-2 text-gray-700">
          Publish papers and attend conferences to build your academic profile.
        </p>
      </section>

      <section
        className="my-8 p-6 bg-purple-100 rounded-lg m-5 hover:bg-purple-200 transition-colors duration-200"
        onMouseEnter={() => handleSectionHover("PhD Programs")}
        onMouseLeave={handleSectionLeave}
      >
        <h2 className="text-purple-800 text-2xl font-semibold">
          3. PhD Programs
        </h2>
        <p className="mt-2 text-gray-700">
          Pursue a PhD to deepen your expertise and lead innovation in fields
          like AI, biotechnology, or sustainable energy.
        </p>
        <p className="mt-2 text-gray-600">Tips for PhD preparation:</p>
        <ul className="mt-2 list-disc pl-5 text-gray-600">
          <li>Identify research interests</li>
          <li>Contact potential supervisors</li>
          <li>Secure funding or scholarships</li>
          <li>Prepare for entrance exams like GATE or GRE</li>
        </ul>
      </section>

      <section
        className="my-8 p-6 bg-purple-100 rounded-lg m-5 hover:bg-purple-200 transition-colors duration-200"
        onMouseEnter={() => handleSectionHover("Entrepreneurship")}
        onMouseLeave={handleSectionLeave}
      >
        <h2 className="text-purple-800 text-2xl font-semibold">
          4. Entrepreneurship
        </h2>
        <p className="mt-2 text-gray-700">
          Start your own company by leveraging your advanced knowledge and
          industry connections.
        </p>
        <p className="mt-2 text-gray-600">Steps to get started:</p>
        <ul className="mt-2 list-disc pl-5 text-gray-600">
          <li>Validate your business idea</li>
          <li>Join startup incubators</li>
          <li>Pitch to venture capitalists</li>
          <li>Build a skilled team</li>
        </ul>
      </section>

      <section
        className="my-8 p-6 bg-purple-100 rounded-lg m-5 hover:bg-purple-200 transition-colors duration-200"
        onMouseEnter={() => handleSectionHover("Consulting")}
        onMouseLeave={handleSectionLeave}
      >
        <h2 className="text-purple-800 text-2xl font-semibold">
          5. Consulting
        </h2>
        <p className="mt-2 text-gray-700">
          Join consulting firms to provide strategic solutions to businesses in
          areas like management, technology, or operations.
        </p>
        <p className="mt-2 text-gray-600">Preparation tips:</p>
        <ul className="mt-2 list-disc pl-5 text-gray-600">
          <li>Practice case studies</li>
          <li>Develop analytical skills</li>
          <li>Network with consultants</li>
          <li>Prepare for behavioral interviews</li>
        </ul>
      </section>

      <section
        className="my-8 p-6 bg-purple-100 rounded-lg m-5 hover:bg-purple-200 transition-colors duration-200"
        onMouseEnter={() => handleSectionHover("Government Jobs")}
        onMouseLeave={handleSectionLeave}
      >
        <h2 className="text-purple-800 text-2xl font-semibold">
          6. Government Jobs
        </h2>
        <p className="mt-2 text-gray-700">
          Secure stable, prestigious roles in public sector organizations or
          research institutions.
        </p>
        <p className="mt-2 text-gray-600">Examples include:</p>
        <ul className="mt-2 list-disc pl-5 text-gray-600">
          <li>Scientist at ISRO/DRDO</li>
          <li>Public Sector Undertaking (PSU) roles</li>
          <li>Civil Services (IAS/IPS)</li>
          <li>Policy Analyst</li>
        </ul>
        <p className="mt-2 text-gray-700">
          Prepare for exams like UPSC or GATE for technical roles.
        </p>
      </section>

      <section
        className="my-8 p-6 bg-purple-100 rounded-lg m-5 hover:bg-purple-200 transition-colors duration-200"
        onMouseEnter={() => handleSectionHover("Freelancing")}
        onMouseLeave={handleSectionLeave}
      >
        <h2 className="text-purple-800 text-2xl font-semibold">
          7. Freelancing
        </h2>
        <p className="mt-2 text-gray-700">
          Offer specialized services like data analysis, technical writing, or
          software development on platforms like Upwork.
        </p>
        <p className="mt-2 text-gray-600">Tips for freelancing success:</p>
        <ul className="mt-2 list-disc pl-5 text-gray-600">
          <li>Create a strong portfolio</li>
          <li>Market your expertise</li>
          <li>Negotiate fair rates</li>
          <li>Build long-term client relationships</li>
        </ul>
      </section>

      <section
        className="my-8 p-6 bg-purple-100 rounded-lg m-5 hover:bg-purple-200 transition-colors duration-200"
        onMouseEnter={() => handleSectionHover("Upskilling and Certifications")}
        onMouseLeave={handleSectionLeave}
      >
        <h2 className="text-purple-800 text-2xl font-semibold">
          8. Upskilling and Certifications
        </h2>
        <p className="mt-2 text-gray-700">
          Enhance your skills through certifications in areas like AI,
          blockchain, or project management to stay competitive.
        </p>
        <p className="mt-2 text-gray-600">Popular platforms:</p>
        <ul className="mt-2 list-disc pl-5 text-gray-600">
          <li>Coursera</li>
          <li>edX</li>
          <li>Udemy</li>
          <li>Google Certifications</li>
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
