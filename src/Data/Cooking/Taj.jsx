import React from 'react';

const TajHotelsOverview = () => {
  const tajHighlights = {
    luxuryAndHeritage: "Taj Hotels are known for their lavish accommodations and commitment to high standards of service. They offer a blend of modern amenities and traditional Indian hospitality, often featuring distinctive architecture and décor that reflects India's rich cultural heritage.",
    globalPresence: [
      "Operates more than 100 properties across India and internationally in major cities like New York, London, Dubai, Cape Town, and Bangkok.",
      "Spans luxury, business, and heritage hotels."
    ],
    serviceExcellence: "The brand has consistently been recognized for providing exceptional service and creating memorable experiences for its guests, including world-class dining, spa treatments, and event hosting.",
    tajGroupOfHotels: {
      theTaj: "The Taj: Ultra-luxury hotels offering high-end experiences.",
      vivantaByTaj: "Vivanta by Taj: A more contemporary, upscale brand catering to modern travelers.",
      ginger: "Ginger: A budget-friendly hotel chain providing quality accommodations for business and leisure travelers."
    },
    awardsAndRecognition: "Taj Hotels has won numerous awards for its commitment to excellence, luxury, and sustainability, solidifying its place as one of the most prestigious hotel brands globally.",
    sustainability: "Taj Hotels emphasize sustainability, adopting eco-friendly practices in their operations, ranging from waste management to sourcing local ingredients for their kitchens."
  };

  return (
    <div className="taj-hotels-overview">
      <h1>Taj Hotels</h1>
      
      <p><strong>Luxury and Heritage:</strong> {tajHighlights.luxuryAndHeritage}</p>
      
      <h2>Global Presence</h2>
      <ul>
        {tajHighlights.globalPresence.map((presence, index) => (
          <li key={index}>{presence}</li>
        ))}
      </ul>
      
      <h2>Service Excellence</h2>
      <p>{tajHighlights.serviceExcellence}</p>
      
      <h2>Taj Group of Hotels</h2>
      <p><strong>The Taj:</strong> {tajHighlights.tajGroupOfHotels.theTaj}</p>
      <p><strong>Vivanta by Taj:</strong> {tajHighlights.tajGroupOfHotels.vivantaByTaj}</p>
      <p><strong>Ginger:</strong> {tajHighlights.tajGroupOfHotels.ginger}</p>
      
      <h2>Awards and Recognition</h2>
      <p>{tajHighlights.awardsAndRecognition}</p>
      
      <h2>Sustainability</h2>
      <p>{tajHighlights.sustainability}</p>
    </div>
  );
};

export default TajHotelsOverview;
