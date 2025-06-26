import React from 'react';

const JEECoachingCenters = () => {
  const JEECoachingCentersData = {
    title: "JEE Coaching Centers",
    items: [
      {
        name: "ALLEN Career Institute",
        courses: "Nurture, Enthusiast, Leader Programs",
        duration: "1-2 Years",
        fees: "₹1,60,000 - ₹3,50,000",
        contact: "ALLEN",
      },
      {
        name: "Aakash Institute",
        courses: "Two-Year Integrated Classroom Program",
        duration: "1-2 Years",
        fees: "₹1,50,000 - ₹3,00,000",
        contact: "Aakash",
      },
      {
        name: "FIITJEE",
        courses: "Classroom Programs (2-4 Year)",
        duration: "1-4 Years",
        fees: "₹1,20,000 - ₹5,00,000",
        contact: "FIITJEE",
      },
      {
        name: "Resonance",
        courses: "Classroom and Distance Learning Programs",
        duration: "1-2 Years",
        fees: "₹1,30,000 - ₹3,50,000",
        contact: "Resonance",
      },
      {
        name: "Vibrant Academy",
        courses: "Enthusiast, Scholar, and Achiever Programs",
        duration: "1-2 Years",
        fees: "₹1,50,000 - ₹3,50,000",
        contact: "Vibrant Academy",
      },
      {
        name: "Narayana Group",
        courses: "JEE Classroom Courses",
        duration: "1-2 Years",
        fees: "₹1,50,000 - ₹4,00,000",
        contact: "Narayana",
      },
      {
        name: "Motion Education",
        courses: "JEE Classroom and Online Programs",
        duration: "1-2 Years",
        fees: "₹1,50,000 - ₹3,00,000",
        contact: "Motion Education",
      },
      {
        name: "Sri Chaitanya",
        courses: "JEE Main and Advanced Classroom Programs",
        duration: "1-2 Years",
        fees: "₹1,50,000 - ₹4,00,000",
        contact: "Sri Chaitanya",
      },
      {
        name: "Super 30",
        courses: "Intensive JEE Preparation Program",
        duration: "1 Year",
        fees: "Minimal or Free",
        contact: "Super 30",
      },
      {
        name: "Physics Wallah",
        courses: "Lakshya, Arjuna Batch (Online + Offline)",
        duration: "1-2 Years",
        fees: "₹50,000 - ₹1,50,000",
        contact: "Physics Wallah",
      },
      {
        name: "Bansal Classes",
        courses: "JEE Main and Advanced Programs",
        duration: "1-2 Years",
        fees: "₹1,20,000 - ₹2,50,000",
        contact: "Bansal Classes",
      },
      {
        name: "PACE IIT and Medical",
        courses: "JEE Foundation and Advanced Programs",
        duration: "1-2 Years",
        fees: "₹1,30,000 - ₹3,00,000",
        contact: "PACE",
      },
    ],
  };

  return (
    <div className="bg-purple-100 min-h-screen py-8 px-4 sm:px-8 rounded-xl">
      <h1 className="text-3xl font-bold text-purple-800 text-center mb-6">
        {JEECoachingCentersData.title}
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg border border-purple-200">
          <thead className="bg-purple-800 text-white">
            <tr>
              <th className="px-6 py-3 text-left font-semibold">Name</th>
              <th className="px-6 py-3 text-left font-semibold">Courses</th>
              <th className="px-6 py-3 text-left font-semibold">Duration</th>
              <th className="px-6 py-3 text-left font-semibold">Fees</th>
              <th className="px-6 py-3 text-left font-semibold">Contact</th>
            </tr>
          </thead>
          <tbody>
            {JEECoachingCentersData.items.map((center, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-purple-100" : "bg-white"
                } hover:bg-purple-200`}
              >
                <td className="px-6 py-4 text-black">{center.name}</td>
                <td className="px-6 py-4 text-black">{center.courses}</td>
                <td className="px-6 py-4 text-black">{center.duration}</td>
                <td className="px-6 py-4 text-black">{center.fees}</td>
                <td className="px-6 py-4 text-black">{center.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JEECoachingCenters;
