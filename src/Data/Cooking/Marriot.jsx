import React from 'react';

const MarriottOverview = () => {
  const marriottHighlights = {
    globalPresence: "Marriott operates in more than 130 countries and territories, with over 7,000 properties across its various brands, including both full-service hotels and extended-stay properties.",
    diverseBrandPortfolio: [
      "The Ritz-Carlton: A luxury brand known for its elegant, high-end accommodations and impeccable service.",
      "Marriott Hotels: A full-service hotel brand offering a mix of luxury and convenience, commonly found in major cities and business centers.",
      "Sheraton: A globally recognized brand known for upscale accommodations and conference facilities.",
      "Courtyard by Marriott: A mid-range brand designed for business and leisure travelers with modern amenities.",
      "Fairfield by Marriott: A budget-friendly brand focused on simplicity and value.",
      "JW Marriott: A luxury brand offering refined experiences with exceptional amenities and personalized service."
    ],
    acquisitions: "In 2016, Marriott acquired Starwood Hotels & Resorts, adding prestigious brands such as W Hotels, St. Regis, Westin, and Le Méridien to its portfolio, significantly expanding its global reach and enhancing its luxury offerings.",
    loyaltyProgram: "Marriott offers a popular rewards program called Marriott Bonvoy, which allows members to earn and redeem points across a variety of properties, including hotels, resorts, and vacation rentals.",
    serviceExcellence: "Marriott is recognized for providing outstanding customer service and maintaining high standards of hospitality, with a strong focus on guest satisfaction.",
    sustainability: "Marriott has committed to sustainability through various initiatives, including reducing energy consumption, minimizing waste, and promoting sustainable sourcing.",
    innovationAndTechnology: "Marriott is a leader in adopting technology to enhance the guest experience, offering features like mobile check-in/check-out, keyless room entry via smartphones, and personalized in-room experiences.",
  };

  return (
    <div>
      <h2>Marriott International Overview</h2>
      <p>{marriottHighlights.globalPresence}</p>
      
      <h3>Diverse Brand Portfolio</h3>
      <ul>
        {marriottHighlights.diverseBrandPortfolio.map((brand, index) => (
          <li key={index}>{brand}</li>
        ))}
      </ul>
      
      <p><strong>Acquisitions:</strong> {marriottHighlights.acquisitions}</p>
      <p><strong>Loyalty Program:</strong> {marriottHighlights.loyaltyProgram}</p>
      <p><strong>Service Excellence:</strong> {marriottHighlights.serviceExcellence}</p>
      <p><strong>Sustainability:</strong> {marriottHighlights.sustainability}</p>
      <p><strong>Innovation and Technology:</strong> {marriottHighlights.innovationAndTechnology}</p>
      
      <p><strong>Conclusion:</strong> Marriott International is a prominent player in the global hospitality industry, known for its wide array of brands, commitment to service excellence, and innovation. It continues to expand its presence and influence in the travel and tourism sector while maintaining a focus on providing memorable experiences for travelers around the world.</p>
    </div>
  );
};

export default MarriottOverview;
