import React from 'react';

const FeedingIndiaOverview = () => {
  const feedingIndiaInitiatives = {
    foodRescue: "Feeding India rescues excess food from restaurants, events, hotels, and other sources that would otherwise go to waste. This food is redistributed to underprivileged communities, shelters, and orphanages. They focus on preventing food wastage while feeding people in need.",
    mealDistribution: "The organization distributes nutritious meals to vulnerable populations, including the homeless, slum dwellers, and people in rural areas. It runs regular food distribution programs in major cities, including Delhi, Mumbai, Bengaluru, and others.",
    educationAndAwareness: "Feeding India works to raise awareness about food security, nutrition, and waste management through campaigns and initiatives. It educates communities about the importance of reducing food waste and how to contribute to ending hunger.",
    partnershipsAndCollaborations: "The organization collaborates with various government bodies, other non-profits, and corporate partners to expand its reach and impact. Through these partnerships, it organizes large-scale food distribution drives and awareness campaigns.",
    covidRelief: "During the COVID-19 pandemic, Feeding India played a critical role in providing food relief to millions of vulnerable people who were impacted by lockdowns and loss of livelihood. The organization set up food kitchens, provided dry ration kits, and distributed meals to migrant workers and daily wage earners.",
    youthEngagement: "A key element of Feeding India’s success is its vast network of volunteers, particularly young people, who actively participate in food drives, community outreach, and awareness-building efforts. The organization encourages youth involvement in social causes, promoting volunteerism as a way to create a positive impact.",
    sustainabilityAndInnovation: "Feeding India works towards creating sustainable solutions to hunger, focusing on waste reduction and resource efficiency. The organization has also pioneered initiatives like 'One Meal at a Time' campaigns to fundraise and distribute meals.",
    impact: "Feeding India has made a significant impact on food security across the country, serving millions of meals to people in need. By rescuing food that would have been discarded, the organization has contributed to reducing food wastage and creating a more sustainable food ecosystem."
  };

  return (
    <div>
      <h2>Feeding India Overview</h2>
      
      <h3>Food Rescue</h3>
      <p>{feedingIndiaInitiatives.foodRescue}</p>

      <h3>Meal Distribution</h3>
      <p>{feedingIndiaInitiatives.mealDistribution}</p>

      <h3>Education and Awareness</h3>
      <p>{feedingIndiaInitiatives.educationAndAwareness}</p>

      <h3>Partnerships and Collaborations</h3>
      <p>{feedingIndiaInitiatives.partnershipsAndCollaborations}</p>

      <h3>Covid-19 Relief</h3>
      <p>{feedingIndiaInitiatives.covidRelief}</p>

      <h3>Youth Engagement</h3>
      <p>{feedingIndiaInitiatives.youthEngagement}</p>

      <h3>Sustainability and Innovation</h3>
      <p>{feedingIndiaInitiatives.sustainabilityAndInnovation}</p>

      <h3>Impact</h3>
      <p>{feedingIndiaInitiatives.impact}</p>

      <p><strong>Conclusion:</strong> Feeding India’s work highlights the critical issue of hunger and food wastage in India. By mobilizing communities, rescuing excess food, and distributing meals, the organization is creating positive change and ensuring that no one in India goes to bed hungry. Its innovative and collaborative approach continues to inspire many to take action in the fight against hunger.</p>
    </div>
  );
};

export default FeedingIndiaOverview;
