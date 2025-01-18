import React from 'react';

const DegreeProgramsOverview = () => {
  const programs = [
    {
      title: "Bachelor’s Degree in Culinary Arts",
      focus: "Specializes in cooking techniques, global cuisines, food styling, and kitchen management.",
      coreTopics: ["Culinary fundamentals", "Pastry arts", "Food safety", "Kitchen operations"],
      careerPaths: ["Executive Chef", "Food Stylist", "Culinary Instructor", "R&D Chef"],
      keyHighlight: "Emphasis on hands-on training and creativity in food presentation."
    },
    {
      title: "Bachelor’s in Hotel Management and Catering Technology (BHMCT)",
      focus: "Comprehensive training in hotel operations, catering services, and customer management.",
      coreTopics: ["Front office", "Housekeeping", "F&B service", "Event management"],
      careerPaths: ["Hotel Manager", "Catering Manager", "Hospitality Consultant"],
      keyHighlight: "Combines theoretical knowledge with practical exposure through internships."
    },
    {
      title: "Bachelor’s in Bakery and Pastry Arts",
      focus: "Specializes in baking, patisserie, and dessert-making techniques.",
      coreTopics: ["Artisan bread-making", "Chocolate work", "Cake decoration", "Bakery management"],
      careerPaths: ["Pastry Chef", "Chocolatier", "Bakery Owner"],
      keyHighlight: "Hands-on experience in creating innovative baked goods."
    },
    {
      title: "Bachelor’s in Hospitality and Hotel Administration (BHA)",
      focus: "Broad focus on hospitality operations and administration.",
      coreTopics: ["Hotel management", "Tourism", "Marketing", "Customer service"],
      careerPaths: ["Hospitality Manager", "Tourism Officer", "Event Coordinator"],
      keyHighlight: "Combines hospitality operations with business administration skills."
    },
    {
      title: "B.Sc. in Food Technology",
      focus: "Study of food production, preservation, and quality assurance.",
      coreTopics: ["Food chemistry", "Microbiology", "Food processing", "Packaging"],
      careerPaths: ["Food Technologist", "Quality Control Analyst", "Product Developer"],
      keyHighlight: "Strong emphasis on science and technology in food manufacturing."
    },
    {
      title: "B.Sc. in Nutrition and Dietetics",
      focus: "Study of human nutrition, diet planning, and health sciences.",
      coreTopics: ["Clinical nutrition", "Sports nutrition", "Food science", "Therapeutic diets"],
      careerPaths: ["Dietitian", "Nutrition Consultant", "Public Health Expert"],
      keyHighlight: "Prepares graduates for healthcare and wellness industries."
    },
    {
      title: "Bachelor’s in Business Administration (BBA) in Hospitality Management",
      focus: "Business and managerial aspects of the hospitality industry.",
      coreTopics: ["Hospitality marketing", "Financial management", "Operations", "Entrepreneurship"],
      careerPaths: ["Hotel Manager", "Operations Manager", "Hospitality Entrepreneur"],
      keyHighlight: "Strong focus on leadership and strategic planning in hospitality."
    },
    {
      title: "Bachelor’s in Restaurant and Catering Management",
      focus: "Management of restaurant operations and catering services.",
      coreTopics: ["Menu planning", "Food service management", "Event catering"],
      careerPaths: ["Restaurant Manager", "Catering Business Owner", "F&B Director"],
      keyHighlight: "Focused curriculum for aspiring entrepreneurs in the food service sector."
    }
  ];

  return (
    <div className="degree-programs-overview">
      <h1>Degree Programs in Hospitality, Culinary, and Food Sciences</h1>
      
      {programs.map((program, index) => (
        <div key={index} className="program">
          <h2>{program.title}</h2>
          <p><strong>Focus:</strong> {program.focus}</p>
          <p><strong>Core Topics:</strong> {program.coreTopics.join(", ")}</p>
          <p><strong>Career Paths:</strong> {program.careerPaths.join(", ")}</p>
          <p><strong>Key Highlight:</strong> {program.keyHighlight}</p>
        </div>
      ))}
    </div>
  );
};

export default DegreeProgramsOverview;
