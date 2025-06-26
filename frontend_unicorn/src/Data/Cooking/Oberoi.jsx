import React from 'react';

const OberoiGroupOverview = () => {
  const oberoiHighlights = {
    luxuryHospitality: "The Oberoi Group is synonymous with opulence, offering world-class services and exquisite properties designed to deliver unparalleled guest experiences.",
    properties: [
      "Located in iconic destinations across India and internationally, including Egypt, Indonesia, and Mauritius."
    ],
    flagshipBrands: {
      oberoiHotels: "Oberoi Hotels & Resorts: Focused on premium luxury with bespoke services and exceptional design.",
      tridentHotels: "Trident Hotels: Aimed at delivering luxury at a slightly more affordable price point while maintaining the Oberoi standard of service."
    },
    uniqueOfferings: [
      "Renowned for personalized service, exquisite culinary experiences, and sustainable luxury practices.",
      "Operates luxury river cruises on the Nile and in Kerala."
    ],
    managementTrainingProgram: "The Oberoi Centre of Learning and Development (OCLD) is one of the most prestigious training programs in the hospitality industry, offering specialized management training programs for careers in guest services, housekeeping, and food & beverage operations.",
    awardsRecognition: [
      "Consistently recognized for excellence, with awards from Travel + Leisure, Condé Nast Traveler, and Forbes Travel Guide.",
      "Many properties are rated among the top luxury hotels globally."
    ],
    commitmentToSustainability: "Focuses on eco-friendly practices, local community engagement, and conservation efforts while maintaining luxury standards."
  };

  return (
    <div className="oberoi-group-overview">
      <h1>The Oberoi Group</h1>
      
      <p><strong>Luxury Hospitality:</strong> {oberoiHighlights.luxuryHospitality}</p>
      
      <p><strong>Properties:</strong> {oberoiHighlights.properties.join(", ")}</p>
      
      <h2>Flagship Brands</h2>
      <p><strong>Oberoi Hotels & Resorts:</strong> {oberoiHighlights.flagshipBrands.oberoiHotels}</p>
      <p><strong>Trident Hotels:</strong> {oberoiHighlights.flagshipBrands.tridentHotels}</p>
      
      <h2>Unique Offerings</h2>
      <ul>
        {oberoiHighlights.uniqueOfferings.map((offering, index) => (
          <li key={index}>{offering}</li>
        ))}
      </ul>
      
      <h2>Management Training Program</h2>
      <p>{oberoiHighlights.managementTrainingProgram}</p>
      
      <h2>Awards & Recognition</h2>
      <ul>
        {oberoiHighlights.awardsRecognition.map((award, index) => (
          <li key={index}>{award}</li>
        ))}
      </ul>
      
      <h2>Commitment to Sustainability</h2>
      <p>{oberoiHighlights.commitmentToSustainability}</p>
    </div>
  );
};

export default OberoiGroupOverview;
