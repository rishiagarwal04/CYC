import React from 'react';

const CulinaryOpportunitiesData = {
    title: "Culinary Opportunities for Students",
    categories: [
        {
            category: "Competitions",
            subcategories: [
                {
                    name: "Main Challenges",
                    competitions: [
                        {
                            name: "Young Chef India Schools",
                            description: "A national culinary competition for school students to showcase creativity and technical skills.",
                            eligibility: "Students aged 12-18 years, often through schools.",
                            timeline: "Registration begins in early summer; finals held in winter.",
                            stepsToParticipate: [
                                "Nominate yourself through your school.",
                                "Participate in preliminary cooking rounds.",
                                "Compete in the national finals if shortlisted."
                            ]
                        },
                        {
                            name: "Junior MasterChef India",
                            description: "A televised cooking competition for talented young chefs across India.",
                            eligibility: "Students aged 8-15 years.",
                            timeline: "Held every 2-3 years; auditions open months before the event.",
                            stepsToParticipate: [
                                "Apply through the official website or at audition centers.",
                                "Attend auditions showcasing your signature dish.",
                                "Selected participants compete on TV through themed challenges."
                            ]
                        },
                        {
                            name: "Future Chefs of India Contest",
                            description: "Focused on grooming young talents for the culinary industry.",
                            eligibility: "Students aged 14-18 years.",
                            timeline: "Held annually, spanning multiple phases over 3-6 months.",
                            stepsToParticipate: [
                                "Enroll through your school or independently.",
                                "Attend mentoring sessions to improve your skills.",
                                "Compete in regional, zonal, and final rounds."
                            ]
                        }
                    ]
                },
                {
                    name: "Other Challenges",
                    competitions: [
                        "Indian LPG Cooking Competition",
                        "Kerala State School Arts Festival",
                        "Healthy Cooking Challenge by Nestlé",
                        "Tasty Table Junior Chef Competition",
                        "Junior Bake-Off India",
                        "Cooking with Culture Contest",
                        "Local Farmers’ Market Recipe Challenge",
                        "School-Based Cook-a-Thon",
                        "MyGov Food Recipe Contest",
                        "Bake-A-Thon",
                        "Eco-Cuisine Challenge",
                        "Science in Cooking Contest",
                        "Heritage Recipe Challenge"
                    ]
                }
            ]
        },
        {
            category: "Workshops",
            subcategories: [
                {
                    name: "Main Challenges",
                    workshops: [
                        {
                            name: "Knife Skills Workshop",
                            description: "Teaches safe and efficient knife handling for students.",
                            eligibility: "Students aged 14-18 years.",
                            timeline: "Available in summer or winter.",
                            stepsToParticipate: [
                                "Sign up online or through your school.",
                                "Participate in practical demonstrations and exercises."
                            ]
                        },
                        {
                            name: "Baking Science Workshop",
                            description: "Focuses on the science behind baking, like how ingredients interact.",
                            eligibility: "Students aged 12-18 years.",
                            timeline: "Available during winter breaks or over weekends.",
                            stepsToParticipate: [
                                "Sign up through your school or a local science center.",
                                "Attend the interactive session."
                            ]
                        },
                        {
                            name: "Molecular Gastronomy",
                            description: "A scientific approach to cooking that uses chemistry and physics to create new dishes.",
                            eligibility: "Students interested in science and cooking.",
                            timeline: "Workshops held in summer or during special events.",
                            stepsToParticipate: [
                                "Sign up for specialized courses.",
                                "Experiment with techniques like spherification and foaming."
                            ]
                        }
                    ]
                },
                {
                    name: "Other Challenges",
                    workshops: [
                        "Beginner Baking Classes",
                        "Chocolate Making Workshop",
                        "Indian Regional Cuisine Workshop",
                        "Summer Smoothies Workshop",
                        "Food Art Workshop",
                        "Quick Meals for Teens Workshop",
                        "Pizza-Making Workshop",
                        "Cake Decoration Workshop",
                        "Plating & Food Presentation",
                        "Vegan & Plant-Based Cooking",
                        "Sushi Making",
                        "Molecular Mixology",
                        "Bread Baking (Artisan & Sourdough)"
                    ]
                }
            ]
        },
        {
            category: "Food Festivals",
            subcategories: [
                {
                    name: "Main Challenges",
                    festivals: [
                        {
                            name: "Goa Food & Cultural Festival",
                            description: "A celebration of Goan cuisine and culture with live cooking events.",
                            eligibility: "Open to all, but students can participate in cooking demos.",
                            timeline: "Held annually in December.",
                            stepsToParticipate: [
                                "Register for student cooking workshops.",
                                "Participate in food-related activities and competitions."
                            ]
                        },
                        {
                            name: "Mumbai Food Carnival",
                            description: "A food festival featuring diverse cuisines, including international dishes.",
                            eligibility: "Open to all ages; students can participate in cooking or serving.",
                            timeline: "Held annually, typically in early spring.",
                            stepsToParticipate: [
                                "Register as a volunteer or competitor.",
                                "Prepare or serve dishes at the event."
                            ]
                        },
                        {
                            name: "Delhi Street Food Festival",
                            description: "A festival celebrating street food from all over India.",
                            eligibility: "Open to all, with special competitions for young chefs.",
                            timeline: "Typically held in October.",
                            stepsToParticipate: [
                                "Register as part of a school or individual participant.",
                                "Cook and present street food specialties."
                            ]
                        }
                    ]
                },
                {
                    name: "Other Challenges",
                    festivals: [
                        "Kolkata Food Festival",
                        "Bengaluru Food Fête",
                        "Lucknow Food Festival",
                        "Chennai Food & Art Festival",
                        "Ahmedabad Food Festival",
                        "Pune Food Expo",
                        "Hyderabad Food & Spice Festival"
                    ]
                }
            ]
        },
        {
            category: "Volunteering",
            subcategories: [
                {
                    name: "Main Challenges",
                    volunteeringOpportunities: [
                        {
                            name: "Robin Hood Army Food Distribution",
                            description: "Volunteering to distribute food to underprivileged communities.",
                            eligibility: "Students aged 15-18 years.",
                            timeline: "Regular events throughout the year.",
                            stepsToParticipate: [
                                "Sign up as a volunteer.",
                                "Join food distribution drives during weekends."
                            ]
                        },
                        {
                            name: "Feeding India Programs",
                            description: "Volunteering with Feeding India to reduce hunger.",
                            eligibility: "Students aged 14-18 years.",
                            timeline: "Ongoing, with regular community drives.",
                            stepsToParticipate: [
                                "Register as a volunteer online.",
                                "Participate in food collection and distribution activities."
                            ]
                        },
                        {
                            name: "Hunger Relief Campaigns",
                            description: "Volunteering for hunger relief initiatives and programs.",
                            eligibility: "Students aged 12-18 years.",
                            timeline: "Ongoing, with special events during festivals.",
                            stepsToParticipate: [
                                "Register with hunger relief organizations.",
                                "Participate in campaigns by organizing food collections."
                            ]
                        }
                    ]
                },
                {
                    name: "Other Challenges",
                    volunteeringOpportunities: [
                        "Volunteer at Local Community Kitchens",
                        "Volunteer for Food Banks",
                        "Street Food Charity Events",
                        "Local School Canteen Service",
                        "Clean-Up Drives After Food Festivals",
                        "Soup Kitchens for Homeless People",
                        "Volunteer for Food Collection Drives"
                    ]
                }
            ]
        },
        {
            category: "Food Science",
            subcategories: [
                {
                    name: "Main Challenges",
                    workshops: [
                        {
                            name: "Introduction to Food Chemistry",
                            description: "Learn the chemical processes involved in food preparation and preservation.",
                            eligibility: "Students aged 14-18 years.",
                            timeline: "Available through summer or weekend courses.",
                            stepsToParticipate: [
                                "Register for a course on food chemistry.",
                                "Attend lectures and laboratory sessions."
                            ]
                        },
                        {
                            name: "Food Microbiology Workshops",
                            description: "Learn about microbes and their impact on food safety.",
                            eligibility: "Students aged 14-18 years.",
                            timeline: "Conducted during science fairs or food science events.",
                            stepsToParticipate: [
                                "Sign up for workshops on food safety.",
                                "Conduct microbiological experiments."
                            ]
                        },
                        {
                            name: "Advanced Cooking Science",
                            description: "Explore the scientific principles behind advanced cooking techniques.",
                            eligibility: "Students aged 14-18 years.",
                            timeline: "Held as part of advanced cooking programs.",
                            stepsToParticipate: [
                                "Register for cooking science workshops.",
                                "Learn about the thermodynamics and chemistry involved in cooking."
                            ]
                        }
                    ]
                },
                {
                    name: "Other Challenges",
                    workshops: [
                        "Nutritional Science Program",
                        "Food Preservation Techniques",
                        "Sensory Analysis of Food",
                        "Biotechnology in Food Production",
                        "Food Safety and Hygiene Classes",
                        "Sustainable Food Systems",
                        "Food Engineering Courses"
                    ]
                }
            ]
        }
    ]
};


const Card = ({ title, description, details }) => (
    <div className="bg-gray-100 p-5 rounded-md mb-4">
        <div className="font-bold text-lg">{title}</div>
        <p className="text-sm mt-2">{description}</p>
        {details && (
            <ul className="mt-3 space-y-2">
                {details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                ))}
            </ul>
        )}
    </div>
);

const Subcategory = ({ name, items, type, otherChallenges = [] }) => (
    <div>
        <div className="font-semibold text-xl mt-6 mb-4">{name}</div>
        {items && items.length > 0 ? (
            items.map((item, idx) => (
                <Card
                    key={`${name}-${type}-${idx}`}
                    title={item.name}
                    description={item.description}
                    details={[
                        `Eligibility: ${item.eligibility}`,
                        `Timeline: ${item.timeline}`,
                        `Steps: ${item.stepsToParticipate?.join(", ") || "No steps available"}`
                    ]}
                />
            ))
        ) : (
            <p className="text-gray-500">No {type} available.</p>
        )}

        {otherChallenges.length > 0 && (
            <div className="mt-6">
                <h3 className="text-lg font-semibold">Other Challenges</h3>
                <ul className="list-disc pl-5 mt-2">
                    {otherChallenges.map((challenge, idx) => (
                        <li key={idx}>{challenge}</li>
                    ))}
                </ul>
            </div>
        )}
    </div>
);

const C910 = () => {
    return (
        <div className="font-sans w-full flex justify-center">
            <div className="bg-purple-100 p-8 rounded-lg w-full m-5 mt-8 pl-[5%]">
                <div className="bg-purple-800 text-white py-6 text-center w-full rounded-lg">
                    <h2 className="text-3xl font-bold">{CulinaryOpportunitiesData.title}</h2>
                </div>

                {CulinaryOpportunitiesData.categories.map((category, idx) => (
                    <div key={category.category + idx} className="mb-8">
                        <div className="bg-purple-800 text-white font-bold py-2 px-4 rounded-md inline-block mb-4 mt-9">
                            {category.category}
                        </div>
                        {category.subcategories?.map((subcategory, subIdx) => (
    <Subcategory
        key={`${category.category}-${subIdx}`}
        name={subcategory.name}
        items={
            subcategory.competitions ??
            subcategory.workshops ??
            subcategory.festivals ??
            subcategory.volunteeringOpportunities
        }
        type={
            subcategory.competitions
                ? "competitions"
                : subcategory.workshops
                ? "workshops"
                : subcategory.festivals
                ? "festivals"
                : "volunteering opportunities"
        }
        otherChallenges={
            subcategory.otherChallenges // Replace with correct property if available
        }
    />
))}

                    </div>
                ))}
            </div>
        </div>
    );
};

export default C910;