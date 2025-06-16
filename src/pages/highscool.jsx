import React, { useState, useRef } from "react";

const suggestions = {
  "Pursue Higher Education": "Start researching colleges early to find your perfect fit and prepare for entrance exams!",
  "Vocational or Trade School": "Explore vocational programs like automotive repair or IT for quick, hands-on career training!",
  "Enter the Workforce": "Kickstart your career with entry-level jobs in retail or hospitality to build valuable skills!",
  "Apprenticeships": "Look into apprenticeships in construction or tech for paid, on-the-job learning opportunities!",
  "Take a Gap Year": "Consider a gap year to travel or volunteer, helping you discover your true passions!",
  "Start a Business": "Unleash your entrepreneurial spirit by starting a small business on platforms like Etsy!",
  "Join the Military": "Explore military service for structured training and benefits like education funding!",
  "Online Learning and Certifications": "Boost your skills with online courses in coding or digital marketing to stand out!",
  default: "Hover over a career option to get personalized advice for your post-high school journey!"
};

export default function HighSchool() {
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
        Career Options After High School
      </h1>

      <section
        className="my-8 p-6 bg-purple-100 rounded-lg m-5 hover:bg-purple-200 transition-colors duration-200"
        onMouseEnter={() => handleSectionHover("Pursue Higher Education")}
        onMouseLeave={handleSectionLeave}
      >
        <h2 className="text-purple-800 text-2xl font-semibold">
          1. Pursue Higher Education
        </h2>
        <p className="mt-2 text-gray-700">
          Attending college or university is a popular choice for high school
          graduates. You can pursue a degree in fields like engineering,
          medicine, business, or the arts based on your interests.
        </p>
        <p className="mt-2 text-gray-700">
          Colleges offer opportunities to explore various subjects and build a
          strong foundation for your career.
        </p>
        <p className="mt-4 font-semibold">Tips for college preparation:</p>
        <ul className="mt-2 list-disc pl-5 text-gray-600">
          <li>Research colleges and programs that align with your interests</li>
          <li>Prepare for entrance exams like SAT or ACT</li>
          <li>Apply for scholarships or financial aid</li>
          <li>Visit campuses to find the right fit</li>
        </ul>
      </section>

      <section
        className="my-8 p-6 bg-purple-100 rounded-lg m-5 hover:bg-purple-200 transition-colors duration-200"
        onMouseEnter={() => handleSectionHover("Vocational or Trade School")}
        onMouseLeave={handleSectionLeave}
      >
        <h2 className="text-purple-800 text-2xl font-semibold">
          2. Vocational or Trade School
        </h2>
        <p className="mt-2 text-gray-700">
          Vocational training programs teach specific skills for careers like
          electrician, plumber, or medical technician. These programs are
          shorter than college degrees and focus on hands-on training.
        </p>
        <p className="mt-2 text-gray-600">Popular vocational fields include:</p>
        <ul className="mt-2 list-disc pl-5 text-gray-600">
          <li>Automotive repair</li>
          <li>Culinary arts</li>
          <li>Information technology</li>
          <li>Healthcare support</li>
        </ul>
        <p className="mt-2 text-gray-700">
          These careers offer quick entry into the workforce with good earning
          potential.
        </p>
      </section>

      <section
        className="my-8 p-6 bg-purple-100 rounded-lg m-5 hover:bg-purple-200 transition-colors duration-200"
        onMouseEnter={() => handleSectionHover("Enter the Workforce")}
        onMouseLeave={handleSectionLeave}
      >
        <h2 className="text-purple-800 text-2xl font-semibold">
          3. Enter the Workforce
        </h2>
        <p className="mt-2 text-gray-700">
          If you prefer to start working right away, entry-level jobs in retail,
          hospitality, or customer service can be great starting points. These
          roles help you gain experience and develop soft skills.
        </p>
        <p className="mt-2 text-gray-600">
          Look for opportunities in local businesses or through job boards to
          kickstart your career.
        </p>
      </section>

      <section
        className="my-8 p-6 bg-purple-100 rounded-lg m-5 hover:bg-purple-200 transition-colors duration-200"
        onMouseEnter={() => handleSectionHover("Apprenticeships")}
        onMouseLeave={handleSectionLeave}
      >
        <h2 className="text-purple-800 text-2xl font-semibold">
          4. Apprenticeships
        </h2>
        <p className="mt-2 text-gray-700">
          Apprenticeships combine on-the-job training with classroom
          instruction. They’re ideal for fields like construction,
          manufacturing, or technology, offering paid learning opportunities.
        </p>
        <p className="mt-2 text-gray-600">
          Search for apprenticeships through government programs or industry
          associations.
        </p>
      </section>

      <section
        className="my-8 p-6 bg-purple-100 rounded-lg m-5 hover:bg-purple-200 transition-colors duration-200"
        onMouseEnter={() => handleSectionHover("Take a Gap Year")}
        onMouseLeave={handleSectionLeave}
      >
        <h2 className="text-purple-800 text-2xl font-semibold">
          5. Take a Gap Year
        </h2>
        <p className="mt-2 text-gray-700">
          A gap year allows you to explore your interests, travel, volunteer, or
          work before committing to a career or education path. It can help you
          gain clarity about your goals.
        </p>
        <p className="mt-2 text-gray-600">Ideas for a productive gap year:</p>
        <ul className="mt-2 list-disc pl-5 text-gray-600">
          <li>Volunteer with community organizations</li>
          <li>Travel to learn about different cultures</li>
          <li>Take short online courses to explore interests</li>
          <li>Work part-time to save money</li>
        </ul>
      </section>

      <section
        className="my-8 p-6 bg-purple-100 rounded-lg m-5 hover:bg-purple-200 transition-colors duration-200"
        onMouseEnter={() => handleSectionHover("Start a Business")}
        onMouseLeave={handleSectionLeave}
      >
        <h2 className="text-purple-800 text-2xl font-semibold">
          6. Start a Business
        </h2>
        <p className="mt-2 text-gray-700">
          If you have an entrepreneurial spirit, consider starting a small
          business. This could be anything from selling handmade products to
          offering tutoring services.
        </p>
        <p className="mt-2 text-gray-600">
          Use online platforms like Etsy or social media to market your business
          and build a customer base.
        </p>
      </section>

      <section
        className="my-8 p-6 bg-purple-100 rounded-lg m-5 hover:bg-purple-200 transition-colors duration-200"
        onMouseEnter={() => handleSectionHover("Join the Military")}
        onMouseLeave={handleSectionLeave}
      >
        <h2 className="text-purple-800 text-2xl font-semibold">
          7. Join the Military
        </h2>
        <p className="mt-2 text-gray-700">
          Enlisting in the military offers training, discipline, and benefits
          like education funding. It’s a structured path for those interested in
          serving their country.
        </p>
        <p className="mt-2 text-gray-600">
          Research different branches and speak with recruiters to find the
          right fit.
        </p>
      </section>

      <section
        className="my-8 p-6 bg-purple-100 rounded-lg m-5 hover:bg-purple-200 transition-colors duration-200"
        onMouseEnter={() => handleSectionHover("Online Learning and Certifications")}
        onMouseLeave={handleSectionLeave}
      >
        <h2 className="text-purple-800 text-2xl font-semibold">
          8. Online Learning and Certifications
        </h2>
        <p className="mt-2 text-gray-700">
          Platforms like Coursera, Udemy, or Khan Academy offer courses in
          fields like coding, digital marketing, or graphic design. These
          certifications can boost your skills and employability.
        </p>
        <p className="mt-2 text-gray-600">
          Focus on in-demand skills to stand out in the job market.
        </p>
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
            <p className="text-gray-600 text-sm">
              {currentSuggestion}
            </p>
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