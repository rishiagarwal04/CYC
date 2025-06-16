import React, { useState, useRef } from 'react';

const suggestions = {
  "Campus Placements": "Polish your interview skills and maintain a strong CGPA to ace campus placements!",
  "Become an Expert": "Enroll in courses for AI or Data Science to become a sought-after tech expert.",
  "Look for Internships": "Apply for internships to gain hands-on experience and build your network.",
  "Business Development": "Network with professionals to kickstart a career in business development.",
  "Entrepreneurship": "Brainstorm innovative ideas and connect with mentors to launch your startup!",
  "Higher Studies": "Pursue an M.Tech or MBA to specialize and aim for leadership roles.",
  "Civil Services (UPSC)": "Start preparing for UPSC to serve the nation in prestigious roles.",
  "GATE Examination": "Study for GATE to join PSUs or study at top institutes like IITs.",
  "Freelancing": "Build a portfolio in web development or digital marketing for freelancing success.",
  "Research and Development": "Explore R&D roles to innovate on cutting-edge tech projects.",
  default: "Explore these career paths to find the perfect fit for your skills and goals!"
};

const CareerOptions = () => {
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
      <h1 className="text-center text-purple-800 text-3xl font-semibold mb-12">Career Options After Graduation</h1>

      <section
        className="my-8 p-6 bg-purple-100 rounded-lg m-5"
        onMouseEnter={() => handleSectionHover("Campus Placements")}
        onMouseLeave={handleSectionLeave}
      >
        <h2 className="text-purple-800 text-2xl font-semibold">1. Campus Placements</h2>
        <p className="mt-2 text-gray-700">
          It is one of the most favourite career options after engineering for most of the engineering students. You can choose to get an engineering job through campus placements. Campus placements can help you get a high-paying job even before you get your degree.
        </p>
        <p className="mt-2 text-gray-700">
          Campus placements can be very lucrative. The number of job offers worth more than one crore has increased considerably in the past few years.
        </p>
        <p className="mt-4 font-semibold">Keep these points in mind when preparing for such jobs:</p>
        <ul className="mt-2 list-disc pl-5 text-gray-600">
          <li>Work hard to maintain a good CGPA score</li>
          <li>Prepare for job interviews</li>
          <li>Take part in extracurricular activities</li>
          <li>Study the companies you’re applying for</li>
        </ul>
        <p className="mt-2 text-gray-600">
          Taking part in extracurricular activities will help you in showcasing your soft skills (such as leadership, communication, creativity, etc.).
        </p>
      </section>

      <section
        className="my-8 p-6 bg-purple-100 rounded-lg m-5"
        onMouseEnter={() => handleSectionHover("Become an Expert")}
        onMouseLeave={handleSectionLeave}
      >
        <h2 className="text-purple-800 text-2xl font-semibold">2. Become an Expert</h2>
        <p className="mt-2 text-gray-700">
          If interested in one particular skill or type of work and having less grades, this is best for you to get a job. And if you have good grades along with these skills, then you can take a course or certification in an in-demand skill.
        </p>
        <p className="mt-2 text-gray-600">
          Many companies are looking for engineers who are familiar with the latest technologies:
        </p>
        <ul className="mt-2 list-disc pl-5 text-gray-600">
          <li>Blockchain</li>
          <li>Artificial Intelligence and Machine Learning</li>
          <li>Digital Marketing</li>
          <li>Data Science</li>
          <li>Cybersecurity</li>
          <li>Web development</li>
        </ul>
        <p className="mt-2 text-gray-700">
          These jobs are better-paying, and the demand for these skills is tremendously high. Companies are in dire need of professionals having these skill sets.
        </p>
      </section>

      <section
        className="my-8 p-6 bg-purple-100 rounded-lg m-5"
        onMouseEnter={() => handleSectionHover("Look for Internships")}
        onMouseLeave={handleSectionLeave}
      >
        <h2 className="text-purple-800 text-2xl font-semibold">3. Look for Internships</h2>
        <p className="mt-2 text-gray-700">
          Internships are excellent means to expose yourself to the real-world working environment. They present the perfect opportunity for you to learn and grow as a professional.
        </p>
      </section>

      <section
        className="my-8 p-6 bg-purple-100 rounded-lg m-5"
        onMouseEnter={() => handleSectionHover("Business Development")}
        onMouseLeave={handleSectionLeave}
      >
        <h2 className="text-purple-800 text-2xl font-semibold">4. Business Development</h2>
        <p className="mt-2 text-gray-700">
          If you have a B.Tech degree and are interested in business development, it can be a great career choice. It combines your technical knowledge with business skills.
        </p>
      </section>

      <section
        className="my-8 p-6 bg-purple-100 rounded-lg m-5"
        onMouseEnter={() => handleSectionHover("Entrepreneurship")}
        onMouseLeave={handleSectionLeave}
      >
        <h2 className="text-purple-800 text-2xl font-semibold">5. Entrepreneurship</h2>
        <p className="mt-2 text-gray-700">
          The next option after graduation is to start your own business. If you have an entrepreneurial mind, you may consider this as your career choice.
        </p>
        <p className="mt-2 text-gray-700">
          The only thing that will matter is how much you’re willing to take risks and the ideas you have. Entrepreneurs are recognized globally and often inspire many others to start their own businesses.
        </p>
        <p className="mt-2 text-gray-600">Steps to become an entrepreneur:</p>
        <ul className="mt-2 list-disc pl-5 text-gray-600">
          <li>Identify your area of interest</li>
          <li>Develop skills related to entrepreneurship</li>
          <li>Learn the financial side of business</li>
          <li>Work on an innovative idea</li>
          <li>Network and connect with other entrepreneurs</li>
        </ul>
      </section>

      <section
        className="my-8 p-6 bg-purple-100 rounded-lg m-5"
        onMouseEnter={() => handleSectionHover("Higher Studies")}
        onMouseLeave={handleSectionLeave}
      >
        <h2 className="text-purple-800 text-2xl font-semibold">6. Higher Studies</h2>
        <p className="mt-2 text-gray-700">
          Higher education can be the next step after graduation, and it is a good choice if you want to specialize in a particular field.
        </p>
        <p className="mt-2 text-gray-600">
          You can pursue a Master’s degree (M.Tech, M.S.) in the same field of your undergraduate course or explore other areas.
        </p>
        <p className="mt-2 text-gray-700">
          Also, an MBA is a popular choice among engineering graduates if you’re interested in management positions in the future.
        </p>
      </section>

      <section
        className="my-8 p-6 bg-purple-100 rounded-lg m-5"
        onMouseEnter={() => handleSectionHover("Civil Services (UPSC)")}
        onMouseLeave={handleSectionLeave}
      >
        <h2 className="text-purple-800 text-2xl font-semibold">7. Civil Services (UPSC)</h2>
        <p className="mt-2 text-gray-700">
          Some students are inclined towards civil services after completing their graduation. The Union Public Service Commission (UPSC) exams are tough but have great rewards.
        </p>
        <p className="mt-2 text-gray-700">
          If you aspire to serve the nation in top administrative roles, the UPSC is a great option. The preparation can take a couple of years, and it requires a lot of dedication.
        </p>
      </section>

      <section
        className="my-8 p-6 bg-purple-100 rounded-lg m-5"
        onMouseEnter={() => handleSectionHover("GATE Examination")}
        onMouseLeave={handleSectionLeave}
      >
        <h2 className="text-purple-800 text-2xl font-semibold">8. GATE Examination</h2>
        <p className="mt-2 text-gray-700">
          GATE (Graduate Aptitude Test in Engineering) is an important exam for those who want to pursue higher studies or want to join top public sector companies (PSUs).
        </p>
        <p className="mt-2 text-gray-700">
          GATE score is required by many government companies to recruit engineers, and it is also the gateway to higher studies in premier institutions like IITs and NITs.
        </p>
      </section>

      <section
        className="my-8 p-6 bg-purple-100 rounded-lg m-5"
        onMouseEnter={() => handleSectionHover("Freelancing")}
        onMouseLeave={handleSectionLeave}
      >
        <h2 className="text-purple-800 text-2xl font-semibold">9. Freelancing</h2>
        <p className="mt-2 text-gray-700">
          If you prefer flexibility and independence, freelancing might be the right choice. Many engineers prefer freelancing over a full-time job as it allows them to choose the type of work they do.
        </p>
        <p className="mt-2 text-gray-700">
          Freelancers in fields like software development, web design, content writing, and digital marketing are highly in demand. You can work with multiple clients or choose specific industries that interest you.
        </p>
      </section>

      <section
        className="my-8 p-6 bg-purple-100 rounded-lg m-5"
        onMouseEnter={() => handleSectionHover("Research and Development")}
        onMouseLeave={handleSectionLeave}
      >
        <h2 className="text-purple-800 text-2xl font-semibold">10. Research and Development</h2>
        <p className="mt-2 text-gray-700">
          Engineering graduates can also consider a career in Research and Development (R&D). This can be a rewarding career if you want to work on innovative and cutting-edge technologies.
        </p>
        <p className="mt-2 text-gray-700">
          Many tech companies and research institutes hire engineers to work on R&D projects.
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
};

export default CareerOptions;