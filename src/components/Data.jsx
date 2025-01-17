import React from 'react';
import mathData from '../Data/Engineer/ninthAnd10/Maths';
import ScienceData from '../Data/Engineer/ninthAnd10/ScienceOlympiad';
import TecData from '../Data/Engineer/ninthAnd10/TechAndComputingOlympiads';
import GkAndMis from '../Data/Engineer/ninthAnd10/GkAndMis';
import physicsOlymp from '../Data/Engineer/ninthAnd10/PhysicsOlymp';
const Data = () => {
    const varia=GkAndMis;
    return (
        <div className="font-sans w-full flex justify-center">
            {/* Header Section */}
            {/* <div className="bg-purple-800 text-white py-6 text-center">
                <h2 className="text-2xl font-bold">Let's Start: Your Steps in 9th and 10th Grade</h2>
            </div> */}

            {/* Content Section */}
            <div className="bg-purple-100 p-8 rounded-lg w-full m-5 mt-8 pl-[5%]">
                {/* <h3 className="text-purple-800 text-xl font-semibold mb-6">What Olympiads you can give?</h3>
                 */}

<div className="bg-purple-800 text-white py-6 text-center w-full rounded-lg">
                <h2 className="text-3xl font-bold">{varia.title}</h2>
            </div>

                {varia.items.map((item, index) => (
                    <div key={index} className="mb-8">
                        {/* Category Header */}
                        <div className="bg-purple-800 text-white font-bold py-2 px-4 rounded-md inline-block mb-4 mt-9">
                            {item.name}
                        </div>

                        {/* Overview */}
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
                        {/* Awards */}
                        {/* {
                            item.awards?
                            <div className="mt-4">
                            <strong className="block text-lg text-gray-800">Awards:</strong>
                            <ul className="space-y-2 pl-5 text-gray-600">
                                {item.awards.map((note, idx) => (
                                    <li key={idx}>{note}</li>
                                ))}
                            </ul>
                        </div>
                        :""

                            } */}
                            
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