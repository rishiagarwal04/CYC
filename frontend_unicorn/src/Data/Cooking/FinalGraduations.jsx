import React from 'react';

const EducationSteps = () => {
    const educationData = {
        1: {
          title: "Choose a Relevant Course and Build Your Education",
          description: "Formal education in culinary arts, hospitality management, or food technology is essential for developing foundational skills and industry knowledge. Degrees like B.Sc. in Culinary Arts, diplomas in Baking and Pastry Arts, or specialized programs in Food Science & Technology prepare you for diverse roles in the culinary field. Courses in food styling, plating, and innovation add creative elements to your expertise.",
          examples: {
            India: [
              "Culinary Academy of India (Hyderabad)",
              "IHM (Delhi, Mumbai, Bangalore)",
              "WGSHA (Manipal)",
              "SRM Institute of Hotel Management (Chennai)"
            ],
            Abroad: [
              "Le Cordon Bleu (Paris, London)",
              "Culinary Institute of America (USA)",
              "École Hôtelière de Lausanne (Switzerland)",
              "Johnson & Wales University (USA)"
            ]
          }
        },
        2: {
          title: "Gain Practical Experience During Studies",
          description: "Internships, part-time jobs, and volunteering help you gain real-world culinary experience.",
          internships: [
            "Oberoi",
            "Taj",
            "Marriott",
            "Carnival",
            "Royal Caribbean"
          ],
          partTimeJobs: [
            "Commis chef",
            "Baker’s assistant",
            "Food stylist apprentice"
          ],
          volunteering: [
            "Feeding India",
            "Large-scale catering events"
          ]
        },
        3: {
          title: "Participate in Competitions and Events",
          description: "Competing in culinary contests and attending food festivals enhances your visibility and credibility.",
          competitions: {
            India: [
              "Indian Culinary Forum Chef Awards",
              "Young Chef Olympiad",
              "Nestlé Professional Competitions",
              "National Baking Contest"
            ],
            Global: [
              "Bocuse d’Or",
              "World Pastry Cup",
              "International Chocolate Awards",
              "Global Pizza Challenge"
            ]
          },
          foodFestivals: {
            India: [
              "Goa Food & Cultural Festival",
              "Mumbai Wine & Food Festival",
              "Delhi Street Food Festival"
            ],
            Global: [
              "SIAL Paris",
              "New York Food & Wine Festival",
              "Taste of London"
            ]
          }
        },
        4: {
          title: "Specialize in Key Skills During College",
          description: "While studying, focus on developing critical techniques like knife skills, plating, and food safety, along with advanced methods such as sous-vide cooking, molecular gastronomy, and artisanal bread-making.",
          keySkills: [
            "Knife skills",
            "Plating",
            "Food safety",
            "Sous-vide cooking",
            "Molecular gastronomy",
            "Artisanal bread-making"
          ]
        },
        5: {
          title: "Learn Supplementary Skills",
          description: "In addition to culinary techniques, learn supplementary skills such as foreign languages, building a digital presence, and mastering technical tools for content creation.",
          skills: {
            foreignLanguages: [
              "French",
              "Italian",
              "Japanese",
              "Spanish"
            ],
            digitalPresence: [
              "Food blog",
              "YouTube channel",
              "Instagram page"
            ],
            technicalTools: [
              "Adobe Premiere Pro",
              "Lightroom"
            ]
          }
        },
        6: {
          title: "Certifications for Additional Expertise",
          description: "Certifications in food safety, advanced techniques, and global cuisine skills add credibility and specialized knowledge.",
          certifications: {
            foodSafety: [
              "HACCP",
              "FSSAI",
              "ServSafe"
            ],
            advancedTechniques: [
              "Molecular gastronomy",
              "Sous-vide cooking",
              "Artisanal chocolate-making"
            ],
            globalCuisine: [
              "Sushi-making workshops (Japan)",
              "Gelato masterclasses (Italy)",
              "Wine-pairing certifications (WSET)"
            ]
          }
        },
        7: {
          title: "Decide Your Specialization",
          description: "Refine your interests and select an area to focus on, such as pastry arts, global cuisine, sustainable cooking, or entrepreneurship.",
          specializations: [
            "Pastry Arts",
            "Global Cuisine",
            "Sustainable Cooking",
            "Entrepreneurship"
          ]
        },
        8: {
          title: "Workshops and Training Programs",
          description: "Engage in specialized training programs and masterclasses from renowned chefs to enhance your culinary expertise.",
          workshops: [
            "Artisan bread-making",
            "Wine-tasting sessions",
            "Barista training",
            "Food photography"
          ],
          masterclasses: [
            "Gordon Ramsay",
            "Dominique Ansel",
            "Massimo Bottura"
          ],
          luxuryTrainingPrograms: [
            "Taj Management Training Programme",
            "Oberoi STEP Programme"
          ]
        },
        9: {
          title: "B.Sc. in Culinary Arts",
          description: "A B.Sc. in Culinary Arts offers a blend of theoretical knowledge and practical culinary skills, preparing you for leadership and management roles in the foodservice industry.",
          curriculum: [
            "Culinary techniques",
            "Food science",
            "Food management",
            "Cultural cuisines",
            "Menu planning",
            "Sustainability"
          ],
          careerOpportunities: [
            "Executive Chef",
            "Sous Chef",
            "Pastry Chef",
            "Restaurant Manager",
            "Catering Director",
            "Food Consultant",
            "Food Stylist",
            "Nutritionist/Dietitian",
            "Food Critic/Writer",
            "Culinary Educator",
            "Food Product Development"
          ],
          duration: "Typically 3 to 4 years",
          requirements: [
            "High school diploma",
            "Passion for food and cooking",
            "Basic knowledge of math and science"
          ]
        }
      };
      
      
  return (
    <div>
      {Object.keys(educationData).map(key => {
        const step = educationData[key];
        return (
          <div key={key}>
            <h2>{step.title}</h2>
            <p>{step.description}</p>

            {step.examples && (
              <div>
                <h3>Examples:</h3>
                <ul>
                  {Object.keys(step.examples).map(location => (
                    <li key={location}>
                      <strong>{location}:</strong>
                      <ul>
                        {step.examples[location].map((institute, idx) => (
                          <li key={idx}>{institute}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {step.keySkills && (
              <div>
                <h3>Key Skills:</h3>
                <ul>
                  {step.keySkills.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </div>
            )}

            {step.certifications && (
              <div>
                <h3>Certifications:</h3>
                <ul>
                  {Object.keys(step.certifications).map(certType => (
                    <li key={certType}>
                      <strong>{certType}:</strong>
                      <ul>
                        {step.certifications[certType].map((cert, idx) => (
                          <li key={idx}>{cert}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {step.specializations && (
              <div>
                <h3>Specializations:</h3>
                <ul>
                  {step.specializations.map((spec, idx) => (
                    <li key={idx}>{spec}</li>
                  ))}
                </ul>
              </div>
            )}

            {step.workshops && (
              <div>
                <h3>Workshops:</h3>
                <ul>
                  {step.workshops.map((workshop, idx) => (
                    <li key={idx}>{workshop}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default EducationSteps;
