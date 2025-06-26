import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "./LOGO.png";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const [skillData, setSkillData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [careerRecommendation, setCareerRecommendation] = useState(null);
  const [isRecommendationLoading, setIsRecommendationLoading] = useState(false);
  const [editSkillData, setEditSkillData] = useState(null);
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("userId");

  // Predefined lists for dropdowns
  const interestsList = [
    "Technology",
    "Cooking",
    "Photography",
    "Music",
    "Sports",
    "Art",
    "Reading",
    "Travel",
    "Gaming",
    "Fitness",
  ];

  const coursesList = [
    "Python Programming",
    "Web Development",
    "Data Science",
    "Machine Learning",
    "Graphic Design",
    "Digital Marketing",
    "Financial Accounting",
    "Business Management",
    "Creative Writing",
    "Mobile App Development",
  ];

  const skillsList = [
    "Programming",
    "Graphic Design",
    "Public Speaking",
    "Project Management",
    "Data Analysis",
    "Content Writing",
    "UI/UX Design",
    "Digital Marketing",
    "Photography",
    "Video Editing",
  ];

  const futureGoalsList = [
    "Software Engineer",
    "Data Scientist",
    "Designer",
    "Entrepreneur",
    "Artist",
    "Researcher",
    "Athlete",
    "Engineer",
    "Other",
  ];

  // Navigation items
  const navItems = ["Login", "Home", "1-2-1", "Chat", "Explore"];
  const mobileNavItems = ["Login", "Home", "1-2-1", "Chat"];

  // Filter out "Login" when user is logged in
  const filteredNavItems = isLoggedIn
    ? navItems.filter((item) => item !== "Login")
    : navItems;
  const filteredMobileNavItems = isLoggedIn
    ? mobileNavItems.filter((item) => item !== "Login")
    : mobileNavItems;

  // Toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    if (isEditing) setIsEditing(false);
  };

  // Fetch user data
  useEffect(() => {
    const fetchUserData = async () => {
      const userId = localStorage.getItem("userId");
      if (userId) {
        setIsLoading(true);
        try {
          const [response1, response2] = await Promise.all([
            axios.get(`https://cycbackend.vercel.app/signup/user/${userId}`),
            axios.get(`https://cycbackend.vercel.app/signup/skills/${userId}`),
          ]);
          setUserData(response1.data.user);
          setSkillData({
            interest: response2.data.skill.interest || [],
            courses_done: response2.data.skill.courses_done || [],
            current_skillset: response2.data.skill.current_skillset || [],
            your_future_goal: response2.data.skill.your_future_goal || "",
            qualification: response1.data.user.qualification,
          });
          setEditData(response1.data.user);
          setEditSkillData({
            ...response2.data.skill,
            interest: response2.data.skill.interest || [],
            courses_done: response2.data.skill.courses_done || [],
            current_skillset: response2.data.skill.current_skillset || [],
            your_future_goal: response2.data.skill.your_future_goal || "",
          });
          setError("");
        } catch (err) {
          console.error(
            "Error fetching user data:",
            err.response || err.message
          );
          setError(err.response?.data?.message || "Failed to load user data.");
        } finally {
          setIsLoading(false);
        }
      }
    };
    fetchUserData();
  }, []);

  // Fetch career recommendation
  const fetchCareerRecommendation = async () => {
    const userId = localStorage.getItem("userId");
    if (userId && skillData && !isEditing) {
      setIsRecommendationLoading(true);
      try {
        const response = await axios.post(
          `http://localhost:8000/recommend/career`,
          skillData,
          { headers: { "Content-Type": "application/json" } }
        );
        setCareerRecommendation(
          response.data.career_path || "No recommendation available"
        );
        setError("");
      } catch (err) {
        console.error(
          "Error fetching career recommendation:",
          err.response || err.message
        );
        setError(
          err.response?.data?.message || "Failed to load career recommendation."
        );
      } finally {
        setIsRecommendationLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchCareerRecommendation();
  }, [userData, isEditing]);

  // Handle multi-select changes
  const handleMultiSelectChange = (name, value) => {
    setEditSkillData((prev) => ({
      ...prev,
      [name]: prev[name].includes(value)
        ? prev[name].filter((item) => item !== value)
        : [...prev[name], value],
    }));
  };

  // Handle single select changes
  const handleSingleSelectChange = (e) => {
    const { name, value } = e.target;
    setEditSkillData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle user data changes
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  // Validate form
  const validateForm = () => {
    if (!editData?.username) return "Username is required.";
    if (!editData?.gender) return "Gender is required.";
    if (!editData?.qualification) return "Qualification is required.";
    if (!editData?.contact) return "Contact is required.";
    if (editSkillData?.interest.length === 0)
      return "Please select at least one interest.";
    if (editSkillData?.courses_done.length === 0)
      return "Please select at least one course.";
    if (editSkillData?.current_skillset.length === 0)
      return "Please select at least one skill.";
    if (!editSkillData?.your_future_goal) return "Please select a future goal.";
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
      console.log("Skill data being sent:", editSkillData);
      console.log("User data being sent:", editData);
      const response = await axios.put(
        `https://cycbackend.vercel.app/signup/user/${userId}`,
        editData
      );
      const response_2 = await axios.put(
        `https://cycbackend.vercel.app/signup/skills/${userId}`,
        editSkillData
      );
      setUserData(response.data.user);
      setSkillData({
        ...response_2.data.skill,
        qualification: response.data.user.qualification,
      });
      setEditData(response.data.user);
      setEditSkillData(response_2.data.skill);
      setIsEditing(false);
      setError("");
      fetchCareerRecommendation();
      window.location.reload();
    } catch (err) {
      console.error("Error saving user data:", {
        message: err.message,
        response: err.response?.data,
        status: err.response?.status,
      });
      setError(err.response?.data?.message || "Failed to save user data.");
    }
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("userId");
    setUserData(null);
    setEditData(null);
    setCareerRecommendation(null);
    setIsSidebarOpen(false);
    navigate("/");
  };

  // MultiSelectDropdown component
  const MultiSelectDropdown = ({ label, name, options, selectedItems }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target)
        ) {
          setIsOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    return (
      <div className="mb-4 relative" ref={dropdownRef}>
        <label className="block text-sm font-medium mb-1 text-white">
          {label}
        </label>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full p-2 bg-[#6a4a8a]/50 text-white rounded-md border border-gray-600 text-left focus:ring-2 focus:ring-[#ffce56] focus:outline-none transition-all duration-200"
        >
          {selectedItems.length > 0
            ? selectedItems.join(", ")
            : `Select ${label.toLowerCase()}`}
          <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
            <svg
              className={`w-4 h-4 transform transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </button>
        {isOpen && (
          <div className="absolute z-20 w-full mt-1 bg-gray-800 border border-gray-600 rounded-md max-h-40 overflow-y-auto shadow-lg transition-all duration-200 ease-in-out">
            {options.map((option) => (
              <div
                key={option}
                className={`px-4 py-2 hover:bg-gray-700 cursor-pointer flex items-center ${
                  selectedItems.includes(option)
                    ? "bg-blue-900 bg-opacity-50"
                    : ""
                }`}
                onClick={() => {
                  handleMultiSelectChange(name, option);
                }}
              >
                <input
                  type="checkbox"
                  checked={selectedItems.includes(option)}
                  readOnly
                  className="mr-2 cursor-pointer"
                />
                <span className="text-white">{option}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  // SingleSelectDropdown component
  const SingleSelectDropdown = ({ label, name, options, value, onChange }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-2 bg-[#6a4a8a]/50 text-white rounded-md focus:ring-2 focus:ring-[#ffce56] focus:outline-none transition-all duration-200"
      >
        <option value="">Select {label.toLowerCase()}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#8b65ab] to-[#7a5a9a] shadow-lg z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center">
              <img
                src={Logo}
                alt="Logo"
                className="h-12 w-auto transform hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <ul className="hidden md:flex space-x-6 text-white text-lg font-medium">
              {filteredNavItems.map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Login" ? "/" : `/${item.toLowerCase()}`}
                    className="relative group px-2 py-1 hover:text-[#ffce56] transition-colors duration-200"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ffce56] group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center space-x-4">
            {isLoggedIn && (
              <button
                onClick={toggleSidebar}
                className="text-white hover:bg-[#6a4a8a] p-2 rounded-full focus:outline-none transition-colors duration-200"
                aria-label="Toggle Sidebar"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
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
            {!isLoggedIn && (
              <Link
                to="/"
                className="text-white bg-[#4bc0c0] hover:bg-[#3aa0a0] px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
        {/* Mobile Menu */}
        <div className="md:hidden bg-[#8b65ab] px-4 py-2">
          <ul className="flex flex-col space-y-2 text-white text-lg font-medium">
            {filteredMobileNavItems.map((item) => (
              <li key={item}>
                <Link
                  to={item === "Login" ? "/" : `/explore`}
                  className="block px-2 py-1 hover:text-[#ffce56] transition-colors duration-200"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {isLoggedIn && (
        <div
          className={`fixed top-0 right-0 h-full w-80 bg-[#8b65ab]/90 backdrop-blur-md text-white p-6 z-50 transform transition-transform duration-500 ease-in-out overflow-y-auto shadow-2xl ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            onClick={toggleSidebar}
            className="absolute top-4 right-4 text-white hover:text-[#ffce56] focus:outline-none"
            aria-label="Close Sidebar"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <h2 className="text-2xl font-bold mb-6 text-[#ffce56] tracking-wide">
            Your Profile
          </h2>
          {error && (
            <p className="text-red-300 bg-red-500/20 p-2 rounded-md mb-4 animate-pulse">
              {error}
            </p>
          )}
          {isLoading ? (
            <div className="flex justify-center items-center h-40">
              <div className="w-8 h-8 border-4 border-[#ffce56] border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : userData ? (
            <div className="space-y-4 bg-white/10 p-4 rounded-xl shadow-inner">
              {isEditing ? (
                <>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Username
                    </label>
                    <input
                      type="text"
                      name="username"
                      value={editData?.username || ""}
                      onChange={handleEditChange}
                      className="w-full p-2 bg-[#6a4a8a]/50 text-white rounded-md focus:ring-2 focus:ring-[#ffce56] focus:outline-none transition-all duration-200"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Gender
                    </label>
                    <select
                      name="gender"
                      value={editData?.gender || ""}
                      onChange={handleEditChange}
                      className="w-full p-2 bg-[#6a4a8a]/50 text-white rounded-md focus:ring-2 focus:ring-[#ffce56] focus:outline-none transition-all duration-200"
                      required
                    >
                      <option value="">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Qualification
                    </label>
                    <select
                      name="qualification"
                      value={editData?.qualification || ""}
                      onChange={handleEditChange}
                      className="w-full p-2 bg-[#6a4a8a]/50 text-white rounded-md focus:ring-2 focus:ring-[#ffce56] focus:outline-none transition-all duration-200"
                      required
                    >
                      <option value="">Select</option>
                      <option value="High School">High School</option>
                      <option value="9th Grade">9th Grade</option>
                      <option value="Postgraduate">Postgraduate</option>
                      <option value="10th Grade">10th Grade</option>
                      <option value="Undergraduate">Undergraduate</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Contact
                    </label>
                    <input
                      type="text"
                      name="contact"
                      value={editData?.contact || ""}
                      onChange={handleEditChange}
                      className="w-full p-2 bg-[#6a4a8a]/50 text-white rounded-md focus:ring-2 focus:ring-[#ffce56] focus:outline-none transition-all duration-200"
                      required
                    />
                  </div>

                  <MultiSelectDropdown
                    label="Interests"
                    name="interest"
                    options={interestsList}
                    selectedItems={editSkillData?.interest || []}
                  />

                  <MultiSelectDropdown
                    label="Courses Done"
                    name="courses_done"
                    options={coursesList}
                    selectedItems={editSkillData?.courses_done || []}
                  />

                  <MultiSelectDropdown
                    label="Skills"
                    name="current_skillset"
                    options={skillsList}
                    selectedItems={editSkillData?.current_skillset || []}
                  />

                  <SingleSelectDropdown
                    label="Future Goal"
                    name="your_future_goal"
                    options={futureGoalsList}
                    value={editSkillData?.your_future_goal || ""}
                    onChange={handleSingleSelectChange}
                  />

                  <div className="flex space-x-2 mt-4">
                    <button
                      onClick={handleSave}
                      className="w-1/2 bg-[#4bc0c0] hover:bg-[#3aa0a0] text-white py-2 rounded-md font-medium transition-colors duration-200"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => {
                        setIsEditing(false);
                        setEditData(userData);
                        setEditSkillData(skillData);
                        setError("");
                      }}
                      className="w-1/2 bg-gray-600 hover:bg-gray-700 text-white py-2 rounded-md font-medium transition-colors duration-200"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h3 className="text-sm font-semibold text-[#ffce56] mb-1">
                      Username
                    </h3>
                    <p className="text-white">{userData.username || "N/A"}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#ffce56] mb-1">
                      Gender
                    </h3>
                    <p className="text-white">{userData.gender || "N/A"}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#ffce56] mb-1">
                      Qualification
                    </h3>
                    <p className="text-white">
                      {userData.qualification || "N/A"}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#ffce56] mb-1">
                      Contact
                    </h3>
                    <p className="text-white">{userData.contact || "N/A"}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#ffce56] mb-1">
                      Interest
                    </h3>
                    {skillData?.interest?.length > 0 ? (
                      skillData.interest.map((element, idx) => (
                        <p className="text-white" key={idx}>
                          {element || "N/A"}
                        </p>
                      ))
                    ) : (
                      <p className="text-white">N/A</p>
                    )}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#ffce56] mb-1">
                      Courses Done
                    </h3>
                    {skillData?.courses_done?.length > 0 ? (
                      skillData.courses_done.map((course, idx) => (
                        <p className="text-white" key={idx}>
                          {course || "N/A"}
                        </p>
                      ))
                    ) : (
                      <p className="text-white">N/A</p>
                    )}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#ffce56] mb-1">
                      Skill set
                    </h3>
                    {skillData?.current_skillset?.length > 0 ? (
                      skillData.current_skillset.map((skill, idx) => (
                        <p className="text-white" key={idx}>
                          {skill || "N/A"}
                        </p>
                      ))
                    ) : (
                      <p className="text-white">N/A</p>
                    )}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#ffce56] mb-1">
                      Future Goal
                    </h3>
                    <p className="text-white">
                      {skillData?.your_future_goal || "N/A"}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#ffce56] mb-1">
                      Career Recommendation
                    </h3>
                    {isRecommendationLoading ? (
                      <p className="text-gray-300 animate-pulse flex items-center">
                        <svg
                          className="w-4 h-4 mr-2 animate-spin"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8h8a8 8 0 11-16 0z"
                          ></path>
                        </svg>
                        Fetching...
                      </p>
                    ) : (
                      <p className="text-[#ffce56] font-medium bg-[#6a4a8a]/50 p-2 rounded-md flex items-center">
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                          <path
                            fillRule="evenodd"
                            d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {careerRecommendation || "No recommendation available"}
                      </p>
                    )}
                    <button
                      onClick={fetchCareerRecommendation}
                      className="w-full bg-[#8b65ab] hover:bg-[#7a5a9a] text-white py-1 rounded-md mt-2 font-medium transition-colors duration-200"
                      disabled={isRecommendationLoading}
                    >
                      Refresh Recommendation
                    </button>
                  </div>
                  <button
                    onClick={() => setIsEditing(true)}
                    className="w-full bg-[#4bc0c0] hover:bg-[#3aa0a0] text-white py-2 rounded-md font-medium transition-colors duration-200"
                  >
                    Edit Profile
                  </button>
                </>
              )}
              <button
                onClick={handleLogout}
                className="w-full bg-[#ff6384] hover:bg-[#e55374] text-white py-2 rounded-md font-medium transition-colors duration-200"
              >
                Logout
              </button>
            </div>
          ) : (
            <p className="text-gray-300">No user data available.</p>
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
