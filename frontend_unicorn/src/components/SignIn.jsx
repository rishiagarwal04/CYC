import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = () => {
  const [formData, setFormData] = useState({
    username: "", // Fixed field name to match input
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error state

    try {
      console.log("Form data before submission:", formData); // Debugging log
      const response = await axios.post(
        `https://cycbackend.vercel.app/signup/signin`,
        formData
      ); // Changed to POST
      console.log("Response data:", response.data);

      if (response.status === 200) {
        localStorage.setItem("userId", response.data.userId); // Store userId
        navigate(`/personalize/${localStorage.getItem("userId")}`); // Redirect to dashboard
      } else {
        setError(response.data.message || "Invalid username or password");
      }
    } catch (err) {
      console.error("Login error:", err.response || err.message); // Improved error logging
      setError(
        err.response?.data?.message ||
          "Unable to login. Please try again later."
      );
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <div className="bg-gray-900 text-white rounded-lg p-8 w-96 shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          Login to Career Unicorn
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Username/Email/Phone Field */}
          <div className="mb-4">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username / Phone"
              className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
              required
            />
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-md transition-colors duration-300"
          >
            Log In
          </button>
        </form>

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
