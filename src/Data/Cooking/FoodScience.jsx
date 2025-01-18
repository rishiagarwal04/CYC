import React from 'react';

const FoodScienceAndTechnology = () => {
  const keyAreasOfFocus = [
    "Food Chemistry: Understanding the chemical composition of food and how it changes during processing and storage.",
    "Food Microbiology: Studying microorganisms in food, both harmful (pathogens) and beneficial (probiotics).",
    "Food Processing: Developing techniques to transform raw ingredients into safe, high-quality food products.",
    "Food Preservation: Ensuring food safety and extending shelf life using methods like freezing, canning, and drying.",
    "Food Packaging: Designing materials to protect food and maintain quality during distribution.",
    "Nutrition Science: Evaluating the nutritional value of food and developing healthier options.",
    "Sensory Analysis: Assessing taste, texture, aroma, and appearance to meet consumer preferences.",
  ];

  const applications = [
    "Developing new food products.",
    "Enhancing food safety and quality.",
    "Reducing food waste and improving sustainability.",
    "Innovating healthier food alternatives.",
    "Ensuring compliance with food regulations.",
  ];

  const careerOpportunities = [
    "Food Scientist/Technologist",
    "Quality Assurance Specialist",
    "Research and Development (R&D) Specialist",
    "Regulatory Affairs Manager",
    "Food Safety Inspector",
  ];

  const whyItMatters = "Food Science & Technology bridges the gap between agriculture, nutrition, and consumer needs. It ensures the global food supply is safe, sustainable, and capable of meeting the growing population's demands while addressing issues like food security and health.";

  return (
    <div className="food-science-technology">
      <h1>Food Science & Technology</h1>
      
      <section>
        <h2>Key Areas of Focus</h2>
        <ul>
          {keyAreasOfFocus.map((area, index) => (
            <li key={index}>{area}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Applications</h2>
        <ul>
          {applications.map((application, index) => (
            <li key={index}>{application}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Career Opportunities</h2>
        <ul>
          {careerOpportunities.map((career, index) => (
            <li key={index}>{career}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Why It Matters</h2>
        <p>{whyItMatters}</p>
      </section>
    </div>
  );
};

export default FoodScienceAndTechnology;
