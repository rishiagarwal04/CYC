import React from 'react';
import mathData from './Maths';
import ScienceData from './ScienceOlympiad';
import TecData from './TechAndComputingOlympiads';
import GkAndMis from './GkAndMis';
import PhysicsOlympiadData from './PhysicsOlymp';
import ChemistryOlympiadData from './Chemistry';

const Data = ({ selectedSubcategory }) => {
    let varia; // Use `let` so we can reassign the value

    if (selectedSubcategory === "Mathematics") {
        varia = mathData;
    } else if (selectedSubcategory === "Chemistry") {
        varia = ChemistryOlympiadData;
    } else if (selectedSubcategory === "Physics") {
        varia = PhysicsOlympiadData;
    } else if (selectedSubcategory === "Science Olympiads") {
        varia = ScienceData;
    } else if (selectedSubcategory === "Technology and Computing") {
        varia = TecData;
    } else if (selectedSubcategory === "General Knowledge and Miscellaneous") {
        varia = GkAndMis;
    } else {
        varia = { title: "Olympiads", items: [] }; // Default fallback
    }

    return (
        <div className="font-sans w-full flex justify-center">
            <div className="bg-purple-100 p-8 rounded-lg w-full -m-5 pl-[5%]">
                {/* Header Section */}
                <div className="bg-purple-800 text-white py-6 text-center w-full rounded-lg">
                    <h2 className="text-3xl font-bold">{varia.title}</h2>
                </div>

                {/* Content Section */}
                {varia.items.map((item, index) => (
                    <div key={index} className="mb-8">
                        <div className="bg-purple-800 text-white font-bold py-2 px-4 rounded-md inline-block mb-4 mt-9">
                            {item.name}
                        </div>

                        <p className="text-gray-600 mt-4">{item.overview}</p>

                        {/* Eligibility */}
                        <div className="mt-4">
                            <strong className="block text-lg text-gray-800">Eligibility:</strong>
                            <ul className="space-y-2 pl-5 text-gray-600">
                                {item.eligibility.map((eligibility, idx) => (
                                    <li key={idx}>{eligibility}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Format */}
                        <div className="mt-4">
                            <strong className="block text-lg text-gray-800">Format:</strong>
                            <ul className="space-y-2 pl-5 text-gray-600">
                                {item.format.map((format, idx) => (
                                    <li key={idx}>{format}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Important Notes */}
                        <div className="mt-4">
                            <strong className="block text-lg text-gray-800">Important Notes:</strong>
                            <ul className="space-y-2 pl-5 text-gray-600">
                                {item.importantNotes.map((note, idx) => (
                                    <li key={idx}>{note}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Why Participate */}
                        <div className="mt-4">
                            <strong className="block text-lg text-gray-800">Why Participate:</strong>
                            <p className="text-gray-600">{item.whyParticipate}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Data;
