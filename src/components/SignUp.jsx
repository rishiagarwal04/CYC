import React, { useState } from "react";
import { Link } from "react-router-dom";
const SignUp = () => {
    const [formData, setFormData] = useState({
        month: "",
        day: "",
        year: "",
        username: "",
        password: "",
        gender: "",
        contact: "",
        qualification: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center relative"
            style={{
                backgroundImage:
                    "url('https://images.rbxcdn.com/782b7fc18a24ee997efd9a7f02fa4bf9-bg_08072019.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
             
           
                <Link to="/signin" className="text-black text-sm absolute right-10 z-10 top-8 bg-white px-5 py-2 rounded-[10px]">
                    LogIn
                </Link>
            


            {/* Overlay to reduce opacity */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Signup Form */}
            <form
                onSubmit={handleSubmit}
                className="relative bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-lg w-[480px]" // 1.2x original width
            >
                <h1 className="text-white text-2xl font-bold text-center mb-6">
                    SIGN UP AND START HAVING FUN!
                </h1>

                {/* Birthday */}
                <div className="mb-4">
                    <label className="block text-white mb-1">Birthday</label>
                    <div className="flex space-x-2">
                        <select
                            name="month"
                            value={formData.month}
                            onChange={handleChange}
                            className="flex-1 p-3 rounded-md border border-gray-600 bg-gray-700 text-white"
                        >
                            <option value="">Month</option>
                            <option value="January">January</option>
                            <option value="February">February</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="August">August</option>
                            <option value="September">September</option>
                            <option value="October">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option>
                        </select>
                        <select
                            name="day"
                            value={formData.day}
                            onChange={handleChange}
                            className="flex-1 p-3 rounded-md border border-gray-600 bg-gray-700 text-white"
                        >
                            <option value="">Day</option>
                            {Array.from({ length: 31 }, (_, i) => (
                                <option key={i + 1} value={i + 1}>
                                    {i + 1}
                                </option>
                            ))}
                        </select>
                        <select
                            name="year"
                            value={formData.year}
                            onChange={handleChange}
                            className="flex-1 p-3 rounded-md border border-gray-600 bg-gray-700 text-white"
                        >
                            <option value="">Year</option>
                            {Array.from({ length: 100 }, (_, i) => (
                                <option key={2023 - i} value={2023 - i}>
                                    {2023 - i}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Username */}
                <div className="mb-4">
                    <label className="block text-white mb-1">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Don't use your real name"
                        className="w-full p-3 rounded-md border border-gray-600 bg-gray-700 text-white"
                    />
                </div>

                {/* Password */}
                <div className="mb-4">
                    <label className="block text-white mb-1">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="At least 8 characters"
                        className="w-full p-3 rounded-md border border-gray-600 bg-gray-700 text-white"
                    />
                </div>

                {/* Contact */}
                <div className="mb-4">
                    <label className="block text-white mb-1">Contact</label>
                    <input
                        type="text"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        placeholder="Enter your contact number"
                        className="w-full p-3 rounded-md border border-gray-600 bg-gray-700 text-white"
                    />
                </div>

                {/* Education Qualification */}
                <div className="mb-4">
                    <label className="block text-white mb-1">Education Qualification</label>
                    <select
                        name="qualification"
                        value={formData.qualification}
                        onChange={handleChange}
                        className="w-full p-3 rounded-md border border-gray-600 bg-gray-700 text-white"
                    >
                        <option value="">Select your qualification</option>
                        <option value="High School">High School</option>
                        <option value="Diploma">Diploma</option>
                        <option value="Undergraduate">Undergraduate</option>
                        <option value="Postgraduate">Postgraduate</option>
                        <option value="Doctorate">Doctorate</option>
                    </select>
                </div>

                {/* Gender */}
                <div className="mb-4">
                    <label className="block text-white mb-1">Gender (optional)</label>
                    <div className="flex justify-between">
                        <button
                            type="button"
                            onClick={() => setFormData({ ...formData, gender: "Female" })}
                            className={`flex-1 p-3 mx-1 rounded-md border ${formData.gender === "Female"
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-700 text-gray-300"
                                }`}
                        >
                            Female
                        </button>
                        <button
                            type="button"
                            onClick={() => setFormData({ ...formData, gender: "Male" })}
                            className={`flex-1 p-3 mx-1 rounded-md border ${formData.gender === "Male"
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-700 text-gray-300"
                                }`}
                        >
                            Male
                        </button>
                    </div>
                </div>

                {/* Terms */}
                {/* <p className="text-gray-400 text-xs mb-4">
          By clicking Sign Up, you are agreeing to the{" "}
          <a href="#" className="text-blue-500">
            Terms of Use
          </a>{" "}
          including the arbitration clause and you are acknowledging the{" "}
          <a href="#" className="text-blue-500">
            Privacy Policy
          </a>
          .
        </p> */}

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                    Sign Up
                </button>
            </form>
           
        </div>
    );
};

export default SignUp;
