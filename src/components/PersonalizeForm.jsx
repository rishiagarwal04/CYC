import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const PersonalizeForm = () => {
    const navigate=useNavigate();
    const [showHobbies, setShowHobbies] = useState(false);
    const [selectedHobbies, setSelectedHobbies] = useState([]);
    const [skillset, setSkillset] = useState("");
    const hobbiesList = [
        // { label: "Art/Design", value: "Art/Design" },
        { label: "Tech", value: "Tech" },
        // { label: "Sports", value: "Sports" },
        { label: "Cooking", value: "Cooking" },
    ];

    const toggleHobby = (hobby) => {
        if (selectedHobbies.includes(hobby)) {
            setSelectedHobbies(selectedHobbies.filter((item) => item !== hobby));
        } else {
            setSelectedHobbies([...selectedHobbies, hobby]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            hobbies: selectedHobbies,
            skillset:skillset
        };

        try {
            const id = localStorage.getItem('userId');

            const response = await axios.put(`http://localhost:5000/signup/personalize/${id}`, formData); // Replace with your backend endpoint
            if (response.status === 200) {
                alert("Personalization data saved successfully!");
                navigate('/');
                localStorage.setItem("hobbies",[response.data.hobbies])
                // Optionally navigate to another route or reset the form
            }
        } catch (error) {
            console.error("Error submitting form data:", error.response?.data || error.message);
            alert("Failed to save your data. Please try again.");
        }
    };

    return (
        <div
            className="flex justify-center items-center min-h-screen bg-cover bg-center bg-opacity-90"
            style={{
                backgroundImage: `url('https://images.rbxcdn.com/782b7fc18a24ee997efd9a7f02fa4bf9-bg_08072019.jpg')`,
                backgroundBlendMode: "overlay",
            }}
        >
            <Link
                to="/"
                className="text-black text-sm absolute right-10 z-10 top-8 bg-white px-5 py-2 rounded-[10px]"
            >
                Skip
            </Link>
            <div className="w-1/3 bg-gray-900 p-8 rounded-lg shadow-lg">
                <h2 className="text-white text-2xl font-bold mb-6 text-center">
                    Let's Get to Know YOU
                </h2>

                <form onSubmit={handleSubmit}>
                    {/* Interests/Hobbies */}
                    <div className="mb-4">
                        <label className="text-gray-300 block mb-2">
                            What are your interests/hobbies?
                        </label>
                        <div className="relative">
                            <button
                                type="button"
                                onClick={() => setShowHobbies(!showHobbies)}
                                className="w-full px-4 py-2 bg-gray-700 text-gray-300 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                {selectedHobbies.length > 0
                                    ? selectedHobbies.join(", ")
                                    : "Select your hobbies"}
                            </button>
                            {showHobbies && (
                                <div className="z-10 bg-gray-800 border border-gray-600 rounded-md mt-2 p-4 max-h-40 overflow-y-auto">
                                    {hobbiesList.map((hobby) => (
                                        <div
                                            key={hobby.value}
                                            className="flex items-center mb-2"
                                        >
                                            <input
                                                type="checkbox"
                                                id={hobby.value}
                                                value={hobby.value}
                                                checked={selectedHobbies.includes(hobby.value)}
                                                onChange={() => toggleHobby(hobby.value)}
                                                className="mr-2 cursor-pointer"
                                            />
                                            <label
                                                htmlFor={hobby.value}
                                                className="text-gray-300 cursor-pointer"
                                            >
                                                {hobby.label}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Current Skillset */}
                    <div className="mb-4">
                        <label className="text-gray-300 block mb-2">
                            Your current skillset
                        </label>
                        <textarea
                            rows="4"
                            value={skillset}
                            onChange={(e) => setSkillset(e.target.value)}
                            className="w-full px-4 py-2 bg-gray-700 text-gray-300 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Describe your current skills..."
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PersonalizeForm;
