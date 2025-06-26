import React from 'react';

const InstitutesOfHotelManagement = () => {
  const highlights = [
    {
      title: "Programs Offered",
      description: "B.Sc. in Hospitality and Hotel Administration (offered jointly with IGNOU). Postgraduate Diplomas and Craftsmanship Courses in Food Production, Bakery, and Front Office. Short-term skill-oriented programs for niche hospitality needs."
    },
    {
      title: "Industry-Oriented Curriculum",
      description: "Training in culinary arts, hotel operations, tourism management, and event planning. Strong emphasis on practical exposure through internships in leading hotels."
    },
    {
      title: "State-of-the-Art Facilities",
      description: "Modern training kitchens, restaurants, mock bars, and housekeeping labs. Libraries and IT-enabled classrooms to enhance learning experiences."
    },
    {
      title: "Placement Excellence",
      description: "Robust placement records with top recruiters from hotels, airlines, cruise lines, and corporate hospitality services. Alumni network includes industry leaders globally."
    },
    {
      title: "Distinct Features",
      description: "IHM Delhi: Known as the pioneer IHM in India, established in 1962, with a rich legacy and a central location in the capital. IHM Mumbai: Renowned for its industry connections and strong focus on culinary and hospitality innovation. IHM Bangalore: Offers a vibrant campus life and emphasizes modern hospitality trends, sustainability, and entrepreneurship."
    }
  ];

  const description = "The Institutes of Hotel Management (IHM) in Delhi, Mumbai, and Bangalore are among India's premier institutions for hospitality and culinary education. These institutes are affiliated with the National Council for Hotel Management and Catering Technology (NCHMCT) and the Ministry of Tourism, Government of India. They are known for producing industry-ready professionals in hotel management, culinary arts, and hospitality sectors.";

  return (
    <div className="institutes-of-hotel-management">
      <h1>Institutes of Hotel Management (IHM)</h1>

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

export default InstitutesOfHotelManagement;
