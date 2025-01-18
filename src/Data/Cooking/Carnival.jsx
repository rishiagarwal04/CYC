import React from 'react';

const CarnivalOverview = () => {
  const carnivalHighlights = {
    globalPresence: "Carnival operates cruises across the globe, with a fleet of more than 100 ships visiting popular destinations in the Caribbean, Alaska, Europe, Asia, Australia, and more.",
    diverseBrandPortfolio: [
      "Carnival Cruise Line: Known for its fun, family-friendly atmosphere and affordable cruises, offering a wide range of itineraries and onboard activities.",
      "Princess Cruises: A premium brand offering elegant ships and sophisticated itineraries, focusing on destinations such as Alaska and Europe.",
      "Holland America Line: A luxury brand catering to more mature and discerning travelers, offering intimate and refined cruise experiences.",
      "Costa Cruises: Focused on European travelers, Costa offers Mediterranean and other European voyages, known for vibrant experiences and Italian hospitality.",
      "Cunard Line: Famous for its luxury ocean liners and classic cruising experience, Cunard is the brand for travelers seeking a more traditional and refined voyage.",
      "Seabourn: A high-end, all-inclusive cruise line offering ultra-luxury cruises to exotic destinations.",
      "AIDA Cruises: A German-based brand targeting the European market, offering casual and family-oriented cruise experiences.",
      "P&O Cruises: A well-established British cruise line, offering both luxury and mid-range cruising experiences."
    ],
    cruiseExperience: [
      "Entertainment: Broadway-style shows, live music, comedy, casinos, and themed parties.",
      "Dining: A variety of dining options, from casual eateries to fine dining experiences, including specialty restaurants and 24-hour buffets.",
      "Recreation: Pools, water parks, spas, fitness centers, and sports facilities.",
      "Family-friendly activities: Kid's clubs, family suites, and family-oriented excursions.",
      "Luxury Services: For its premium brands, services such as private lounges, exclusive dining, and personalized excursions are available."
    ],
    sustainabilityInitiatives: "Carnival has made efforts to reduce its environmental impact, implementing eco-friendly technologies such as advanced wastewater treatment systems, energy-efficient ship designs, and initiatives to reduce emissions and waste.",
    cruiseInnovation: "Carnival is known for innovating within the cruise industry, offering unique experiences like the Ocean Medallion on Princess Cruises, which allows guests to access services and information via a wearable device, as well as advancements in digital technologies to improve onboard experiences.",
    leadershipInIndustry: "Carnival is a leader in the global cruise market, with a focus on making cruising accessible to a wide range of customers, from budget travelers to luxury seekers. It has a significant market share, particularly in the North American and European cruise sectors.",
  };

  return (
    <div>
      <h2>Carnival Corporation & plc Overview</h2>
      <p>{carnivalHighlights.globalPresence}</p>
      
      <h3>Diverse Brand Portfolio</h3>
      <ul>
        {carnivalHighlights.diverseBrandPortfolio.map((brand, index) => (
          <li key={index}>{brand}</li>
        ))}
      </ul>

      <h3>Cruise Experience</h3>
      <ul>
        {carnivalHighlights.cruiseExperience.map((experience, index) => (
          <li key={index}>{experience}</li>
        ))}
      </ul>
      
      <p><strong>Sustainability Initiatives:</strong> {carnivalHighlights.sustainabilityInitiatives}</p>
      <p><strong>Cruise Innovation:</strong> {carnivalHighlights.cruiseInnovation}</p>
      <p><strong>Leadership in the Industry:</strong> {carnivalHighlights.leadershipInIndustry}</p>
      
      <p><strong>Conclusion:</strong> Carnival Corporation is an industry giant in the cruise sector, offering diverse experiences across its portfolio of brands, from family-friendly vacations to ultra-luxury cruises. With its global fleet, emphasis on innovation, and commitment to sustainability, Carnival continues to shape the future of the cruising industry while providing travelers with unforgettable maritime journeys.</p>
    </div>
  );
};

export default CarnivalOverview;
