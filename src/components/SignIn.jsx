import React from "react";
import { Link, Links } from "react-router-dom";
const Signin = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-800">
            <div className="bg-gray-900 text-white rounded-lg p-8 w-96 shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6">Login to Roblox</h2>

                {/* Username/Email/Phone Field */}
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Username / Phone"
                        className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
                    />
                </div>

                {/* Password Field */}
                <div className="mb-6">
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
                    />
                </div>

                {/* Login Button */}
                <button
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-md transition-colors duration-300"
                >
                    Log In
                </button>

                {/* Forgot Password or Username */}
                <p className="text-gray-400 text-sm mt-4">
                    <a
                        href="#"
                        className="text-blue-400 hover:underline"
                    >
                        Forgot Password or Username?
                    </a>
                </p>

                <hr className="my-6 border-gray-600" />

                {/* Signup Link */}
                <p className="text-gray-400 text-sm">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-blue-400 hover:underline">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Signin;
