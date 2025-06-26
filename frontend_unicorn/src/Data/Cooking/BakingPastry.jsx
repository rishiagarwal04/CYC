import React from 'react';

const BakingAndPastryArts = () => {
  const keyComponents = [
    "Baking Basics: Mastery of techniques for breads, cakes, cookies, and pies.",
    "Pastry Creations: Skills in crafting pastries like croissants, éclairs, and danishes.",
    "Decorative Techniques: Use of frosting, fondant, and chocolate to create intricate designs.",
    "Desserts: Preparation of desserts such as tarts, mousses, and plated desserts.",
    "Plating and Presentation: Enhancing the visual appeal of baked goods and desserts.",
    "Ingredient Knowledge: Understanding the properties of flour, sugar, eggs, and other essentials.",
    "Food Safety: Maintaining hygiene and safe practices in the kitchen.",
  ];

  const careerPaths = [
    "Pastry Chef",
    "Baker",
    "Cake Designer",
    "Chocolatier",
    "Dessert Caterer",
  ];

  const whyItsSpecial = "Baking and pastry arts offer a blend of art and science, allowing professionals to be innovative while maintaining precision. It's a rewarding field for those passionate about creating edible masterpieces that delight the senses.";

  return (
    <div className="baking-pastry-arts">
      <h1>Baking and Pastry Arts</h1>
      
      <section>
        <h2>Key Components</h2>
        <ul>
          {keyComponents.map((component, index) => (
            <li key={index}>{component}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Career Paths</h2>
        <ul>
          {careerPaths.map((path, index) => (
            <li key={index}>{path}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Why It’s Special</h2>
        <p>{whyItsSpecial}</p>
      </section>
    </div>
  );
};

export default BakingAndPastryArts;
