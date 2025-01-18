import React from 'react';

const WGSHA = () => {
  const highlights = [
    {
      title: "Programs Offered",
      description: "Bachelor of Hotel Management (BHM), BA in Culinary Arts, Master’s in Indian Cuisine and Food Culture, Certificate and diploma programs in hospitality and culinary skills."
    },
    {
      title: "State-of-the-Art Facilities",
      description: "Advanced training kitchens, bakery and patisserie labs, food and beverage service labs, and model guest rooms. Access to the vast resources and modern infrastructure of MAHE."
    },
    {
      title: "Industry Partnerships",
      description: "Collaboration with ITC Hotels for training, internships, and placements. Strong ties with global hotel chains, airlines, cruise lines, and the tourism industry."
    },
    {
      title: "Global Recognition",
      description: "Accredited by international bodies and consistently ranked among India’s top hotel management institutes. Alumni placed in leadership roles across the global hospitality industry."
    },
    {
      title: "Focus on Holistic Development",
      description: "Emphasis on both practical skills and theoretical knowledge. Curriculum enriched with extracurricular activities, culinary competitions, and exposure to global hospitality trends."
    }
  ];

  const description = "The Welcomgroup Graduate School of Hotel Administration (WGSHA) in Manipal is one of India’s most prestigious institutions for hospitality and culinary education. Established in 1986 through a collaboration between the Manipal Academy of Higher Education (MAHE) and ITC’s Hotel Division, WGSHA is renowned for its academic excellence and strong industry connections.";

  return (
    <div className="wgsha">
      <h1>Welcomgroup Graduate School of Hotel Administration (WGSHA)</h1>

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

export default WGSHA;
