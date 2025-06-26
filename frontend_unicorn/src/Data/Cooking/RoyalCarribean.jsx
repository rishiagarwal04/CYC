import React from 'react';

const RoyalCaribbeanOverview = () => {
  const royalCaribbeanHighlights = {
    innovativeShips: [
      "Oasis Class: Home to the largest cruise ships in the world, such as the Oasis of the Seas, Allure of the Seas, and Symphony of the Seas. These ships feature a range of unique amenities, including zip lines, water parks, theaters, and multiple dining venues.",
      "Quantum Class: These ships feature cutting-edge technology, including virtual balconies, robotic bartenders, and skydiving simulators. Anthem of the Seas and Quantum of the Seas are examples of this class."
    ],
    globalPresence: "Royal Caribbean operates cruises to more than 300 destinations in over 70 countries, with itineraries spanning the Caribbean, Europe, Alaska, South America, Asia, and Australia. The company’s ships depart from ports around the world, including major US ports like Miami, Fort Lauderdale, and Port Canaveral, as well as international hubs.",
    uniqueOnboardExperiences: [
      "Entertainment: Broadway-style shows, ice skating performances, water shows, and high-tech experiences such as virtual reality and 3D cinemas.",
      "Dining: A diverse array of dining options, including specialty restaurants, buffet-style meals, and fine dining, with cuisine from around the world.",
      "Activities: From rock climbing walls and surfing simulators to ice skating rinks and zip lines, the cruise line offers an abundance of activities for adventure seekers and relaxation options for those looking to unwind."
    ],
    familyFriendlyAtmosphere: "Royal Caribbean is known for its family-friendly cruises, offering dedicated kids' clubs, teen lounges, and family suites. The Adventure Ocean program provides age-specific activities for children, while parents can enjoy adult-only areas, lounges, and spas. Additionally, the line offers family-oriented shore excursions and special events onboard.",
    luxuryAndPremiumExperiences: [
      "The Suite Class: Premium accommodations with access to private areas, dedicated concierge services, and priority boarding.",
      "The Concierge Club: VIP access to lounges and personalized services for guests in suites.",
      "Perfect Day at CocoCay: A private island in the Bahamas exclusively for Royal Caribbean guests, Perfect Day at CocoCay offers an extraordinary experience with features like the Oasis Lagoon (the Caribbean’s largest freshwater pool), thrill water parks, zip lines, and overwater cabanas."
    ],
    sustainabilityEfforts: "Royal Caribbean has made strides toward environmental sustainability by adopting energy-efficient technologies, reducing carbon emissions, and implementing waste management systems. The company has also set ambitious goals to reduce its environmental footprint by using cleaner fuels, promoting sustainable tourism, and recycling.",
    awardWinningCruises: "Royal Caribbean consistently receives accolades for its customer service, innovative ships, and outstanding cruise experiences. It has won numerous awards for 'Best Cruise Line for Families' and 'Best Cruise Line for Dining' due to its emphasis on guest satisfaction."
  };

  return (
    <div>
      <h2>Royal Caribbean International Overview</h2>
      
      <h3>Innovative Ships</h3>
      <ul>
        {royalCaribbeanHighlights.innovativeShips.map((ship, index) => (
          <li key={index}>{ship}</li>
        ))}
      </ul>

      <h3>Global Presence</h3>
      <p>{royalCaribbeanHighlights.globalPresence}</p>

      <h3>Unique Onboard Experiences</h3>
      <ul>
        {royalCaribbeanHighlights.uniqueOnboardExperiences.map((experience, index) => (
          <li key={index}>{experience}</li>
        ))}
      </ul>

      <h3>Family-Friendly Atmosphere</h3>
      <p>{royalCaribbeanHighlights.familyFriendlyAtmosphere}</p>

      <h3>Luxury and Premium Experiences</h3>
      <ul>
        {royalCaribbeanHighlights.luxuryAndPremiumExperiences.map((experience, index) => (
          <li key={index}>{experience}</li>
        ))}
      </ul>

      <h3>Sustainability Efforts</h3>
      <p>{royalCaribbeanHighlights.sustainabilityEfforts}</p>

      <h3>Award-Winning Cruises</h3>
      <p>{royalCaribbeanHighlights.awardWinningCruises}</p>
      
      <p><strong>Conclusion:</strong> Royal Caribbean International stands out in the cruise industry for its commitment to innovation, luxury, and family-friendly experiences. Known for its large, state-of-the-art ships and diverse itineraries, Royal Caribbean continues to attract millions of travelers seeking a dynamic, all-inclusive vacation at sea. Whether it's for adventure, relaxation, or exploration, Royal Caribbean offers something for everyone.</p>
    </div>
  );
};

export default RoyalCaribbeanOverview;
