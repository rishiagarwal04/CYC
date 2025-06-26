import React from 'react';

const SRMIHM = () => {
  const highlights = [
    {
      title: "Programs Offered",
      description: "B.Sc. in Hospitality and Hotel Administration, MBA in Hospitality Management, Diploma and certificate courses in food production, front office, and housekeeping."
    },
    {
      title: "State-of-the-Art Facilities",
      description: "Fully equipped training kitchens, bakery labs, front office labs, and housekeeping labs. On-campus mock hotel and restaurants for real-world practice."
    },
    {
      title: "Industry Integration",
      description: "Regular internships and training programs with top hotels, airlines, and cruise lines. Collaboration with global hospitality brands for placements and live projects."
    },
    {
      title: "Focus on Practical Learning",
      description: "Hands-on training in food production, service, and operations management. Workshops, culinary competitions, and exposure to global hospitality trends."
    },
    {
      title: "Placement Excellence",
      description: "Robust campus recruitment with placements in leading hotel chains, luxury resorts, and corporate hospitality sectors. Alumni network spread across the global hospitality industry."
    }
  ];

  const description = "The SRM Institute of Hotel Management (SRM IHM) in Chennai is a leading hospitality and culinary institute in India, affiliated with SRM Institute of Science and Technology (SRMIST). Established with a vision to produce skilled hospitality professionals, SRM IHM is known for its industry-oriented curriculum, modern infrastructure, and strong placement records.";

  return (
    <div className="srm-ihm">
      <h1>SRM Institute of Hotel Management (SRM IHM)</h1>

      <section>
        <h2>Overview</h2>
        <p>{description}</p>
      </section>

      <section>
        <h2>Highlights</h2>
        <ul>
          {highlights.map((highlight, index) => (
            <li key={index}>
              <h3>{highlight.title}</h3>
              <p>{highlight.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default SRMIHM;
