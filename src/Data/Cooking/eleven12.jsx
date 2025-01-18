import React from 'react';

const C1112 = () => {
  const data = {
    advancedCulinarySpecialization: {
      title: 'Advanced Culinary Specialization',
      description: 'Pursue specialized education in various culinary fields to become an expert in your area of interest.',
      india: [
        'IHM Mumbai: Offers postgraduate programs in culinary arts and hospitality management; open to graduates with relevant qualifications.',
        'Academy of Pastry and Culinary Arts (Delhi, Mumbai, Bengaluru): Focuses on advanced pastry techniques; offers postgraduate diplomas.',
        'Truffle Nation: Offers advanced programs in baking and pastry arts; direct application for recent graduates.',
        'Apicius (Delhi): Offers short-term, advanced courses in Mediterranean and European culinary techniques.',
      ],
      abroad: [
        'Le Cordon Bleu (Paris, London, Australia, etc.): Specializes in culinary arts, pâtisserie, and culinary management; requires a basic culinary background.',
        'Culinary Institute of America (CIA) (USA): Offers advanced programs in culinary and pastry arts; requires a culinary degree or experience for admission.',
        'École Hôtelière de Lausanne (Switzerland): Offers specialized master’s programs in hospitality management and culinary arts; ideal for those interested in managing high-end kitchens.',
        'Apicius International School of Hospitality (Italy): Offers specialized courses in Mediterranean cuisine; application-based, requiring culinary experience.',
      ],
    },
    competitionsAndShows: {
      title: 'Competitions and Culinary Shows',
      description: 'Participate in prestigious culinary competitions to gain industry recognition and make valuable connections.',
      india: [
        'Nestlé Professional Culinary Challenge: A highly competitive event where chefs can showcase their skills; registration via institute or individual.',
        'Young Chef Olympiad: A global culinary competition in India for young chefs; entry via participating culinary institutes.',
        'Indian Chef Awards (IFCA): A highly respected award recognizing talent in the Indian culinary industry; entry is by nomination or application.',
        'MasterChef India: A popular TV competition open to aspiring chefs; auditions are held annually.',
      ],
      abroad: [
        'Bocuse d\'Or: A prestigious international culinary competition; selection typically involves national qualifiers.',
        'World Pastry Cup: Open to pastry chefs globally; entry via national qualifying rounds.',
        'International Young Chef Olympiad: A competition with global participation for young chefs; registration through educational institutes.',
        'MasterChef (UK, USA, Australia): A world-renowned TV show for culinary professionals; open auditions or through online application.',
      ],
    },
    renownedTrainingPrograms: {
      title: 'Renowned Culinary Training Programs',
      description: 'Enroll in prestigious chef training programs to get hands-on experience in the world of high-end culinary arts.',
      india: [
        'Taj Management Training Programme: Focused on luxury hotel kitchens and hospitality services; requires an interview and aptitude test.',
        'Oberoi STEP Programme: Offers practical training in culinary skills in Oberoi hotels; selection through an entrance test.',
        'ITC Hotels Culinary Training: Offers extensive chef training; candidates are selected based on application and interviews.',
        'The Leela Culinary Institute: A high-level program offering training in luxury kitchens across the country.',
      ],
      abroad: [
        'Le Cordon Bleu: Known for its in-depth culinary programs; requires an online application and some prior culinary experience.',
        'Culinary Institute of America (CIA, USA): Offers an intensive hands-on culinary degree; requires completion of basic culinary education or equivalent experience.',
        'Culinary Arts Academy Switzerland: Offers an international pathway to becoming a chef or pastry chef; direct application.',
      ],
    },
    certificationsAndCourses: {
      title: 'Certifications and Short-Term Courses',
      description: 'Enhance your expertise in various culinary fields through specialized certifications and short-term courses.',
      india: [
        'NCHMCT: Offers certifications in food production, culinary management, and food safety.',
        'Food and Beverage Management (IHM): Available across IHMs in India, this course offers essential skills for aspiring chefs and food managers.',
        'HACCP Certification: Required for food safety practices; available through various food safety institutes in India.',
        'Chocolate and Confectionery Courses: Offered by institutes like Apicius and IHM for specialized learning in chocolate work and confectionery.',
      ],
      abroad: [
        'WSET Wine and Beverage Certification: Available through various global centers; it provides expertise in beverage management and pairing.',
        'Advanced Pastry Arts Certification (Le Cordon Bleu, Paris): Available as a short-term advanced pastry course.',
        'Food Safety and HACCP Certification (USA/UK): Available through various online platforms and culinary schools.',
        'Chocolate Masterclasses (e.g., Callebaut Chocolate Academy, Belgium): Learn the art of chocolate making from world-class chefs.',
      ],
    },
    entrepreneurship: {
      title: 'Entrepreneurship in the Culinary Industry',
      description: 'Start your own business or culinary venture to create a strong presence in the food industry.',
      india: [
        'Open a cloud kitchen or meal delivery service targeting niche markets (e.g., organic, vegan, local foods).',
        'Start a regional or local cuisine restaurant or bakery offering a unique experience (e.g., South Indian, street food, or desserts).',
        'Develop a cooking or recipe blog, YouTube channel, or social media presence.',
        'Launch a food products line: sauces, jams, chutneys, or ready-to-eat meals.',
      ],
      abroad: [
        'Open a pop-up restaurant or food truck in key cities like London or New York, specializing in unique or fusion cuisines.',
        'Launch a specialty coffee shop or bakery: Popular in cities like Paris, Milan, and New York.',
        'Start an international cooking school or online culinary classes targeting global audiences.',
      ],
    },
    researchAndTech: {
      title: 'Research and Food Technology',
      description: 'Engage in food research, technology, and sustainable food practices to bring innovation to the industry.',
      india: [
        'Collaborate with CFTRI (Central Food Technological Research Institute) for food preservation and technology research.',
        'Work with agritech or food-tech startups focusing on plant-based food innovations or sustainable food packaging.',
        'Research Indian food culture and its connection with health through universities like Shivaji University or NIFTEM (National Institute of Food Technology Entrepreneurship and Management).',
      ],
      abroad: [
        'University of Gastronomic Sciences (Italy): Specializes in food research and sustainable gastronomy.',
        'Harvard T.H. Chan School of Public Health: Conducts research on food safety and nutrition, ideal for those looking to improve public health.',
        'University of California, Davis (USA): Known for food science and technology research.',
      ],
    },
    teachingAndAcademia: {
      title: 'Teaching and Academia in Culinary Arts',
      description: 'Contribute to the future of cooking by becoming an educator or trainer in renowned culinary institutes.',
      india: [
        'Become a faculty member at IHMs (Institute of Hotel Management) across India.',
        'Conduct cooking workshops or online culinary courses through platforms like Udemy or Skillshare.',
        'Collaborate with food NGOs or community organizations to teach sustainable cooking practices.',
      ],
      abroad: [
        'Join international culinary institutions such as Le Cordon Bleu, Apicius, or Culinary Institute of America as an instructor.',
        'Offer online cooking courses on international platforms like MasterClass, Skillshare, or YouTube.',
      ],
    },
    networkingAndExposure: {
      title: 'Networking and Industry Exposure',
      description: 'Build valuable connections through professional associations and food expos.',
      india: [
        'Join the Indian Federation of Culinary Associations (IFCA) or All India Hotel and Restaurant Association (AHAR).',
        'Attend food and beverage expos like the India Food Expo or Gulfood India to meet industry professionals.',
        'Participate in industry events like India International Hospitality Expo (IIHE) for networking opportunities.',
      ],
      abroad: [
        'Attend major culinary expos like SIAL Paris, FHC China, or World Food Expo (USA).',
        'Join global professional organizations like World Association of Chefs’ Societies (WACS) or International Culinary Tourism Association (ICTA).',
      ],
    },
  };

  return (
<div className="font-sans w-full flex justify-center">
  <div className="bg-purple-100 p-8 rounded-lg w-full m-5 mt-8 pl-[5%]">

    {Object.keys(data).map((sectionKey) => {
      const section = data[sectionKey];
      return (
        <div key={sectionKey} className="mb-8">
          
          {/* Section Title */}
          <div className="bg-purple-800 text-white py-6 text-center w-full rounded-lg mb-4">
            <h2 className="text-3xl font-bold">{section.title}</h2>
          </div>
          
          {/* Section Description */}
          <p className="text-gray-600 mt-4">{section.description}</p>

          {/* India & Abroad Lists */}
          <div className="mt-6">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-purple-800">India:</h3>
              <ul className="space-y-2 pl-5 text-gray-600">
                {section.india.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-purple-800">Abroad:</h3>
              <ul className="space-y-2 pl-5 text-gray-600">
                {section.abroad.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      );
    })}
  </div>
</div>

  );
};

export default C1112;
