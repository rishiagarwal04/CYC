import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "./LOGO.png";

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [userData, setUserData] = useState(null);
    const [editData, setEditData] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const isLoggedIn = !!localStorage.getItem("userId");

    // Toggle sidebar
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        if (isEditing) setIsEditing(false); // Exit edit mode when closing
    };

    // Fetch user data
    useEffect(() => {
        const fetchUserData = async () => {
            const userId = localStorage.getItem("userId");
            if (userId) {
                setIsLoading(true);
                try {
                    const response = await axios.get(`http://localhost:5000/signup/user/${userId}`);
                    setUserData(response.data.user);
                    setEditData(response.data.user); // Initialize edit form
                    setError("");
                } catch (err) {
                    console.error("Error fetching user data:", err.response || err.message);
                    setError(err.response?.data?.message || "Failed to load user data.");
                } finally {
                    setIsLoading(false);
                }
            }
        };
        fetchUserData();
    }, []);

    // Handle edit form changes
    const handleEditChange = (e) => {
        const { name, value } = e.target;
        // if (name.startsWith("birthday.")) {
        //     const field = name.split(".")[1];
        //     setEditData({ ...editData, birthday: { ...editData.birthday, [field]: value } });
        
            setEditData({ ...editData, [name]: value });
    };

    // Validate form data
    const validateForm = () => {
        if (!editData.username) return "Username is required.";
        // if (!editData.birthday.month || !editData.birthday.day) return "Birthday is required.";
        if (!editData.gender) return "Gender is required.";
        if (!editData.qualification) return "Qualification is required.";
        if (!editData.contact) return "Contact is required.";
        // if (editData.birthday.month < 1 || editData.birthday.month > 12) return "Month must be 01-12.";
        // if (editData.birthday.day < 1 || editData.birthday.day > 31) return "Day must be 01-31.";
        return "";
    };

    // Save edited data
    const handleSave = async () => {
        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            return;
        }

        try {
            const userId = localStorage.getItem("userId");
            const response = await axios.put(`http://localhost:5000/signup/user/${userId}`, editData);
            setUserData(response.data.user);
            setEditData(response.data.user);
            setIsEditing(false);
            setError("");
        } catch (err) {
            console.error("Error saving user data:", err.response || err.message);
            setError(err.response?.data?.message || "Failed to save user data.");
        }
    };

    // Handle logout
    const handleLogout = () => {
        localStorage.removeItem("userId");
        setUserData(null);
        setEditData(null);
        setIsSidebarOpen(false);
        navigate("/signin");
    };

    return (
        <>
            {/* Navbar */}
            <div className="text-xl z-20 px-4 py-3 h-20 flex flex-row justify-between items-center bg-[#8b65ab] w-full text-white fixed top-0 left-0">
                <div className="left text-2xl font-bold">
                    <ul className="flex flex-row space-x-8 pt-2">
                        <li>
                            <Link to="/" className="hover:underline">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/explore" className="hover:underline">
                                Explore
                            </Link>
                        </li>
                        <li>
                            <Link to="/1-2-1" className="hover:underline">
                                1-2-1
                            </Link>
                        </li>
                        <li>
                            <Link to="/chat" className="hover:underline">
                                Chat
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="right flex items-center space-x-4">
                    <img src={Logo} alt="Logo" className="h-20 w-auto object-contain" />
                    {isLoggedIn && (
                        <button
                            onClick={toggleSidebar}
                            className="text-white hover:bg-[#7a5a9a] p-2 rounded-md focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                    )}
                </div>
            </div>

            {/* Sidebar */}
            {isLoggedIn && (
                <div
                    className={`fixed top-0 right-0 h-full w-80 bg-[#8b65ab] text-white p-8 z-30 transform transition-transform duration-300 overflow-y-auto ${
                        isSidebarOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                >
                    <button
                        onClick={toggleSidebar}
                        className="absolute top-4 right-4 text-white hover:text-gray-300"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                    <h2 className="text-2xl font-bold mb-6">Your Profile</h2>
                    {error && <p className="text-red-300 mb-4">{error}</p>}
                    {isLoading ? (
                        <p>Loading user data...</p>
                    ) : userData ? (
                        <div className="space-y-4">
                            {isEditing ? (
                                <>
                                    <div>
                                        <h3 className="text-lg font-semibold">Username</h3>
                                        <input
                                            type="text"
                                            name="username"
                                            value={editData.username || ""}
                                            onChange={handleEditChange}
                                            className="w-full p-2 bg-gray-700 text-white rounded-md"
                                            required
                                        />
                                    </div>
                                    {/* <div>
                                        {/* <h3 className="text-lg font-semibold">Birthday</h3>
                                        <div className="flex space-x-2">
                                            <input
                                                type="date"
                                                name="birthday"
                                                value={editData.birthday.month || ""}
                                                onChange={handleEditChange}
                                                placeholder="MM"
                                                className="w-1/2 p-2 bg-gray-700 text-white rounded-md"
                                                maxLength="2"
                                                required
                                            />
                                            <input
                                                type="text"
                                                name="birthday.day"
                                                value={editData.birthday.day || ""}
                                                onChange={handleEditChange}
                                                placeholder="DD"
                                                className="w-1/2 p-2 bg-gray-700 text-white rounded-md"
                                                maxLength="2"
                                                required
                                            />
                                            <input
                                                type="text"
                                                name="birthday.year"
                                                value={editData.birthday.year || ""}
                                                onChange={handleEditChange}
                                                placeholder="YYYY"
                                                className="w-1/2 p-2 bg-gray-700 text-white rounded-md"
                                                maxLength="2"
                                                required
                                            />
                                        </div> */}
                                    {/* </div> */} 
                                    <div>
                                        <h3 className="text-lg font-semibold">Gender</h3>
                                        <select
                                            name="gender"
                                            value={editData.gender || ""}
                                            onChange={handleEditChange}
                                            className="w-full p-2 bg-gray-700 text-white rounded-md"
                                            required
                                        >
                                            <option value="">Select</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">Qualification</h3>
                                        <input
                                            type="text"
                                            name="qualification"
                                            value={editData.qualification || ""}
                                            onChange={handleEditChange}
                                            className="w-full p-2 bg-gray-700 text-white rounded-md"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">Contact</h3>
                                        <input
                                            type="text"
                                            name="contact"
                                            value={editData.contact || ""}
                                            onChange={handleEditChange}
                                            className="w-full p-2 bg-gray-700 text-white rounded-md"
                                            required
                                        />
                                    </div>
                                    <div className="flex space-x-2 mt-4">
                                        <button
                                            onClick={handleSave}
                                            className="w-1/2 bg-green-500 hover:bg-green-600 text-white py-2 rounded-md"
                                        >
                                            Save
                                        </button>
                                        <button
                                            onClick={() => {
                                                setIsEditing(false);
                                                setEditData(userData); // Reset to original data
                                                setError("");
                                            }}
                                            className="w-1/2 bg-gray-500 hover:bg-gray-600 text-white py-2 rounded-md"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div>
                                        <h3 className="text-lg font-semibold">Username</h3>
                                        <p>{userData.username || "N/A"}</p>
                                    </div>
                                    {/* <div>
                                        <h3 className="text-lg font-semibold">Birthday</h3>
                                        <p>
                                            {/* {userData.birthday} */}
                                        {/* </p>
                                    </div> */} 
                                    <div>
                                        <h3 className="text-lg font-semibold">Gender</h3>
                                        <p>{userData.gender || "N/A"}</p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">Qualification</h3>
                                        <p>{userData.qualification || "N/A"}</p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">Contact</h3>
                                        <p>{userData.contact || "N/A"}</p>
                                    </div>
                                    <button
                                        onClick={() => setIsEditing(true)}
                                        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md mt-4"
                                    >
                                        Edit Profile
                                    </button>
                                </>
                            )}
                            <button
                                onClick={handleLogout}
                                className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-md mt-4"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <p>No user data available.</p>
                    )}
                </div>
            )}
        </>
    );
};

export default Navbar;