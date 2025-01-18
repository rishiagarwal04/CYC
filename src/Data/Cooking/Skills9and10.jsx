import React from "react";

const culinaryCareerPath = {
  streamSelection: [
    {
      option: "Home Science/Arts",
      details: "Includes subjects like food preparation, nutrition, and hospitality.",
    },
    {
      option: "Science (Optional)",
      details: "Study science with biology for food science, molecular gastronomy, or nutrition science.",
    },
  ],
  keySubjectsToChoose: [
    { subject: "Home Science", focus: "Cooking, food preservation, and basic culinary skills." },
    { subject: "Biology", focus: "Understanding food science, nutrition, and dietetics." },
    { subject: "Physical Education", focus: "Includes health and nutrition, related to culinary arts." },
    { subject: "Chemistry", focus: "Essential for food science or molecular gastronomy." },
    { subject: "Business Studies/Economics", focus: "Useful for starting food businesses." },
    { subject: "Mathematics", focus: "Helpful for entrepreneurship or food production." },
  ],
  specializedCoursesAfter10th: {
    certificateCourses: [
      "Certificate Courses in Culinary Arts",
      "Basic Baking and Pastry",
      "Fundamentals of Culinary Arts",
    ],
    diplomaCourses: [
      "Diploma in Food Production",
      "Diploma in Bakery and Confectionery",
    ],
    vocationalCourses: [
      { program: "NSDC or Skill India programs", focus: "Catering and Hospitality" },
      { specialization: "Regional Cuisine Specializations" },
    ],
    partTimeClasses: [
      "Weekend baking or cooking workshops",
      "Short-term culinary courses",
    ],
  },
};

const CulinaryCareerPath = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Culinary Career Path</h1>
        
        {/* Stream Selection */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Stream Selection</h2>
          <ul className="list-disc pl-6 space-y-2">
            {culinaryCareerPath.streamSelection.map((stream, index) => (
              <li key={index}>
                <strong className="text-gray-800">{stream.option}:</strong> <span className="text-gray-600">{stream.details}</span>
              </li>
            ))}
          </ul>
        </section>
        
        {/* Key Subjects to Choose */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Key Subjects to Choose</h2>
          <ul className="list-disc pl-6 space-y-2">
            {culinaryCareerPath.keySubjectsToChoose.map((subject, index) => (
              <li key={index}>
                <strong className="text-gray-800">{subject.subject}:</strong> <span className="text-gray-600">{subject.focus}</span>
              </li>
            ))}
          </ul>
        </section>
        
        {/* Specialized Courses After 10th */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Specialized Courses After 10th</h2>
          
          <div className="mb-4">
            <h3 className="text-xl font-medium text-gray-800 mb-2">Certificate Courses</h3>
            <ul className="list-disc pl-6 space-y-2">
              {culinaryCareerPath.specializedCoursesAfter10th.certificateCourses.map((course, index) => (
                <li key={index} className="text-gray-600">{course}</li>
              ))}
            </ul>
          </div>
          
          <div className="mb-4">
            <h3 className="text-xl font-medium text-gray-800 mb-2">Diploma Courses</h3>
            <ul className="list-disc pl-6 space-y-2">
              {culinaryCareerPath.specializedCoursesAfter10th.diplomaCourses.map((course, index) => (
                <li key={index} className="text-gray-600">{course}</li>
              ))}
            </ul>
          </div>
          
          <div className="mb-4">
            <h3 className="text-xl font-medium text-gray-800 mb-2">Vocational Courses</h3>
            <ul className="list-disc pl-6 space-y-2">
              {culinaryCareerPath.specializedCoursesAfter10th.vocationalCourses.map((course, index) => (
                <li key={index} className="text-gray-600">
                  {course.program || course.specialization}
                  {course.focus && ` - ${course.focus}`}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-medium text-gray-800 mb-2">Part-Time Classes</h3>
            <ul className="list-disc pl-6 space-y-2">
              {culinaryCareerPath.specializedCoursesAfter10th.partTimeClasses.map((className, index) => (
                <li key={index} className="text-gray-600">{className}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CulinaryCareerPath;
