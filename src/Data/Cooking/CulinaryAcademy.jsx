import React from 'react';

const CulinaryAcademyOfIndia = () => {
  const highlights = [
    {
      title: "Programs Offered",
      description: "CAI offers a variety of programs, including a Bachelor’s in Culinary Arts (affiliated with Osmania University), postgraduate diplomas, and craft courses in culinary skills."
    },
    {
      title: "Facilities",
      description: "Equipped with world-class kitchens, bakery labs, and demonstration theaters, the academy provides hands-on training in a professional environment."
    },
    {
      title: "Industry Connections",
      description: "Strong ties with leading hotel chains and restaurants, ensuring excellent internship and placement opportunities for students."
    },
    {
      title: "Competitions & Achievements",
      description: "CAI students frequently excel in national and international culinary competitions, highlighting the academy’s emphasis on creativity and skill development."
    },
    {
      title: "Specialized Training",
      description: "The curriculum includes training in global cuisines, baking, patisserie, food styling, and more, providing comprehensive culinary education."
    },
  ];

  const description = "The Culinary Academy of India (CAI), located in Hyderabad, is a premier institution for culinary arts education in India. Established in 1996, CAI is renowned for its rigorous programs, state-of-the-art facilities, and focus on industry-oriented training. It prepares students for dynamic careers in the culinary and hospitality sectors.";

  return (
    <div className="culinary-academy">
      <h1>The Culinary Academy of India (CAI)</h1>

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

export default CulinaryAcademyOfIndia;
