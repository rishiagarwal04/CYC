import React from 'react';

const EngineeringSkills = () => {
  const EngineeringSkillsData = {
    title: "Engineering Skills and Development",
    categories: [
      {
        category: "Technical Skills",
        details: [
          "Programming Skills: Proficiency in languages like Python, C++, Java, or MATLAB can be very useful, depending on the branch of engineering.",
          "Mathematics and Problem-Solving: A strong foundation in calculus, algebra, and statistics is critical for most engineering disciplines.",
          "Computer-Aided Design (CAD): Learning tools like AutoCAD, SolidWorks, or CATIA can help, especially for mechanical, civil, or architectural engineering.",
          "Data Analysis: Familiarity with tools like Excel, SQL, R, or Power BI can be advantageous.",
          "Electronics and Circuit Design: Basic understanding of circuits and tools like Multisim or PSpice (for electronics engineers).",
        ],
      },
      {
        category: "Soft Skills",
        details: [
          "Communication Skills: Clear verbal and written communication is crucial for teamwork, presentations, and technical documentation.",
          "Teamwork and Collaboration: The ability to work effectively in diverse teams is a key part of most engineering projects.",
          "Critical Thinking: Analytical skills to solve complex problems innovatively and logically.",
          "Time Management: Managing deadlines and multitasking during projects and internships.",
        ],
      },
      {
        category: "Project and Research Skills",
        details: [
          "Project Management: Understanding of project planning, budgeting, and execution using tools like Microsoft Project or Gantt charts.",
          "Research Abilities: Skills in literature review, hypothesis formulation, and report writing for academic and industry projects.",
        ],
      },
      {
        category: "Industry Awareness",
        details: [
          "Knowledge of Emerging Technologies: Familiarity with AI, IoT, blockchain, robotics, and renewable energy can give you an edge.",
          "Understanding Industry Standards: Awareness of ISO standards, safety norms, and ethical practices in engineering.",
        ],
      },
      {
        category: "Coding and Software Skills",
        details: [
          "Version Control: Experience with Git or other version control systems.",
          "Simulation Software: Learning tools like Ansys, Simulink, or LabVIEW.",
          "Web Development Basics: HTML, CSS, JavaScript (useful for software and computer engineers).",
        ],
      },
      {
        category: "Networking and Professional Skills",
        details: [
          "Networking: Building connections with professors, peers, and industry professionals through LinkedIn or industry events.",
          "Internships and Industrial Training: Hands-on experience in your field is invaluable for practical learning and skill application.",
        ],
      },
      {
        category: "Creative and Entrepreneurial Skills",
        details: [
          "Innovation and Creativity: Thinking out of the box for product design and process improvement.",
          "Entrepreneurial Skills: Basic knowledge of business and startup ecosystems for those interested in launching their ventures.",
        ],
      },
      {
        category: "Interpersonal Development",
        details: [
          "Leadership Skills: Ability to take initiative, guide teams, and manage conflicts.",
          "Adaptability: Being open to learning new skills and adapting to new technologies or environments.",
        ],
      },
      {
        category: "Languages and International Skills",
        details: [
          "Foreign Languages: Knowing an additional language like German, French, or Japanese can help if you plan to work or study abroad.",
          "Cultural Awareness: Understanding global perspectives is beneficial for international projects.",
        ],
      },
      {
        category: "Certifications",
        details: [
          "Online courses and certifications in areas like machine learning, cybersecurity, or cloud computing (through platforms like Coursera, edX, or Udemy) add credibility to your skills.",
        ],
      },
    ],
  };

  return (
<div className="bg-purple-100 py-8 px-4 sm:px-8 rounded-xl">
  <h1 className="text-3xl font-bold text-purple-800 text-center mb-8">
    {EngineeringSkillsData.title}
  </h1>
  <div className="space-y-6">
    {EngineeringSkillsData.categories.map((category, index) => (
      <div
        key={index}
        className="bg-white p-6 rounded-lg shadow-md border border-purple-800"
      >
        <h2 className="text-xl font-semibold text-black mb-4">
          {category.category}
        </h2>
        <ul className="list-disc pl-5 text-black">
          {category.details.map((detail, idx) => (
            <li key={idx} className="mb-2">
              {detail}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</div>

  );
};

export default EngineeringSkills;
