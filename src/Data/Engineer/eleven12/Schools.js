import React from 'react';
const JEEPreparationSchoolsData = {
    title: "Integrated Schools and Coaching Programs for JEE Preparation",
    items: [
        {
            category: "Integrated Schools with Coaching Programs",
            description: "These schools integrate JEE preparation into their curriculum, saving time and ensuring a balance between school studies and competitive exam training.",
            schools: [
                {
                    name: "FIITJEE World Schools",
                    highlights: "Offers an integrated approach to CBSE/State syllabus and JEE coaching."
                },
                {
                    name: "Narayana Schools",
                    highlights: "Known for their intensive JEE-focused programs."
                },
                {
                    name: "Sri Chaitanya Schools",
                    highlights: "Provide integrated courses tailored for JEE and other engineering entrance exams."
                },
                {
                    name: "Vibrant Academy (Kota)",
                    highlights: "Offers a schooling program alongside JEE coaching."
                }
            ]
        },
        {
            category: "CBSE/ICSE/State Board Schools with Tie-ups",
            description: "Certain schools collaborate with coaching institutes like Aakash, Allen, or FIITJEE to provide specialized JEE coaching.",
            schools: [
                {
                    name: "Delhi Public School (DPS)",
                    highlights: "Some branches have tie-ups with JEE coaching institutes."
                },
                {
                    name: "Bharatiya Vidya Bhavan",
                    highlights: "Focuses on academic excellence with optional coaching partnerships."
                },
                {
                    name: "Podar International School",
                    highlights: "Offers flexibility and extra support for competitive exams."
                }
            ]
        },
        {
            category: "Residential Coaching-Cum-Schools",
            description: "These institutions provide a residential program combining school and coaching under one roof.",
            schools: [
                {
                    name: "Allen Global Studies (AGS)",
                    highlights: "Aimed at holistic development alongside JEE preparation."
                },
                {
                    name: "Resonance School of Excellence",
                    highlights: "Located in Kota and other cities, blending school and coaching."
                },
                {
                    name: "Aakash + BYJU'S Learning Programs",
                    highlights: "Some schools collaborate with them for in-house training."
                }
            ]
        },
        {
            category: "Online and Distance Learning Programs",
            description: "For students enrolled in regular schools but looking for JEE coaching, online and hybrid models are popular.",
            schools: [
                {
                    name: "Vedantu Online School",
                    highlights: "Provides live classes aligned with JEE preparation."
                },
                {
                    name: "BYJU'S Learning App",
                    highlights: "Offers online study material for JEE."
                },
                {
                    name: "Khan Academy",
                    highlights: "Free and high-quality resources for JEE and board exams."
                },
                {
                    name: "Unacademy",
                    highlights: "Features online classes by top educators for JEE Main and Advanced."
                }
            ]
        },
        {
            category: "Government Schools and Jawahar Navodaya Vidyalayas (JNVs)",
            description: "While not specifically tailored for JEE, government schools like JNVs focus on quality education, and students can independently enroll in external coaching.",
            schools: []
        }
    ]
};

const JEEPreparationSchools = () => {

  return (
    <div className="bg-purple-100 min-h-screen py-8 px-4 sm:px-8 rounded-xl">
      <h1 className="text-3xl font-bold text-purple-800 text-center mb-6">
        {JEEPreparationSchoolsData.title}
      </h1>
      <div className="space-y-6">
        {JEEPreparationSchoolsData.items.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 border border-purple-200"
          >
            <h2 className="text-2xl font-semibold text-purple-800">
              {item.category}
            </h2>
            <p className="text-black text-sm mt-2">{item.description}</p>
            {item.schools.length > 0 ? (
              <ul className="list-disc list-inside mt-4 space-y-3">
                {item.schools.map((school, schoolIndex) => (
                  <li key={schoolIndex}>
                    <span className="font-semibold text-purple-800">
                      {school.name}
                    </span>
                    : <span className="text-black">{school.highlights}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-black italic mt-4">
                No specific schools listed in this category.
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JEEPreparationSchools;
