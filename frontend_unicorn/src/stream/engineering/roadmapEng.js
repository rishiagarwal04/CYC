import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./roadmap.css";
import instructorImage from "./instructor.png"; // Your instructor image
import roadImage from "./roadd.png"; // Your road image
import { FaMapMarkerAlt } from "react-icons/fa";

const RoadmapEng = () => {
  const [qualification, setQualification] = useState(null);
  const [currentCheckpoint, setCurrentCheckpoint] = useState(0);
  const [showDialog, setShowDialog] = useState(false);
  const [hoveredCheckpointId, setHoveredCheckpointId] = useState(null);
  const svgRef = useRef(null);
  const checkpointTimerRef = useRef(null);
  const dialogTimerRef = useRef(null);

  // Suggestions for each checkpoint
  const suggestions = {
    "9th Grade": [
      "Focus on building strong foundations in Math and Science",
      "Explore introductory engineering concepts through online courses",
      "Participate in STEM-related extracurricular activities",
    ],
    "10th Grade": [
      "Start researching engineering fields that interest you",
      "Take advanced Math and Science courses if available",
      "Consider joining a robotics club or science fair",
    ],
    "High School": [
      "Research engineering colleges and their requirements",
      "Take AP or IB courses in Math and Science",
      "Look for summer engineering programs or internships",
    ],
    "Bachelor's": [
      "Choose your engineering specialization carefully",
      "Seek out research opportunities with professors",
      "Build a portfolio of projects and internships",
    ],
    Graduation: [
      "Complete all academic and project requirements on time",
      "Prepare a strong final year project that reflects your skills",
      "Update your resume and portfolio with your accomplishments",
      "Apply for jobs, higher studies, or internships based on your interest",
      "Attend placement drives and career fairs organized by your institute",
      "Collect letters of recommendation from professors and mentors",
    ],
    College: [
      "Adapt to the new environment and focus on time management",
      "Explore different clubs, societies, and extracurricular activities",
      "Build a strong network of peers, seniors, and professors",
      "Maintain a balance between academics and personal development",
      "Take introductory courses seriously—they build your academic base",
      "Start exploring your interests in coding, design, research, or entrepreneurship",
    ],
    Specialization: [
      "Identify your area of interest through courses and projects",
      "Take electives and online certifications to gain deeper knowledge",
      "Follow industry trends and technologies related to your specialization",
      "Seek mentorship from experts in that domain",
      "Apply your skills in real-world problems through internships and research",
      "Document your work (e.g., GitHub, blogs, portfolios) to showcase expertise",
    ],

    "Core Engineering Subjects": [
      "Focus on understanding fundamental concepts like Thermodynamics, Data Structures, or Circuit Theory depending on your branch",
      "Practice problem-solving regularly to strengthen your technical skills",
      "Refer to standard textbooks and online resources for deeper insights",
      "Engage in lab work seriously to gain hands-on experience",
      "Seek clarification from professors and peers when topics are unclear",
      "Relate theory with real-world applications through mini-projects",
    ],
    Undergraduate: [
      "Choose a branch that aligns with your interests and career goals",
      "Build a strong foundation in mathematics and core subjects",
      "Participate in internships, workshops, and hackathons",
      "Get involved in student clubs and technical societies",
      "Work on personal and group projects to build your portfolio",
      "Start exploring potential specializations for higher studies or job roles",
    ],
    Postgraduate: [
      "Consider whether a Master's or PhD aligns with your goals",
      "Network with professionals in your desired field",
      "Publish research papers and attend conferences",
    ],
  };

  // Fetch qualification from FastAPI
  useEffect(() => {
    const fetchUserData = async () => {
      const userId = localStorage.getItem("userId");
      if (userId) {
        try {
          const response = await axios.get(
            `https://cyc-backend-3.onrender.com/signup/user/${userId}`
          );
          setQualification(response.data.user?.qualification || "9th Grade");
        } catch (error) {
          console.error("Error fetching user data:", error);
          setQualification("9th Grade");
        }
      }
    };
    fetchUserData();
  }, []);

  // Roadmap configurations
  const roadmapConfig = {
    "9th Grade": [
      { id: 1, x: "10%", y: "12%", label: "9-10", path: "engineer/nine10" },
      { id: 2, x: "35%", y: "25%", label: "11-12", path: "engineer/eleven12" },
      { id: 3, x: "50%", y: "50%", label: "College", path: "engineer/college" },
      {
        id: 4,
        x: "75%",
        y: "45%",
        label: "Specialization",
        path: "engineer/specializations",
      },
      {
        id: 5,
        x: "90%",
        y: "85%",
        label: "Destination",
        path: "roadmap/endeng",
      },
    ],
    "10th Grade": [
      { id: 1, x: "7%", y: "12%", label: "10th Grade", path: "engineer/ten" },
      { id: 2, x: "35%", y: "25%", label: "11-12", path: "engineer/eleven12" },
      { id: 3, x: "50%", y: "50%", label: "College", path: "engineer/college" },
      {
        id: 4,
        x: "75%",
        y: "45%",
        label: "Specialization",
        path: "engineer/specializations",
      },
      {
        id: 5,
        x: "90%",
        y: "85%",
        label: "Destination",
        path: "roadmap/endeng",
      },
    ],
    "High School": [
      {
        id: 1,
        x: "10%",
        y: "14%",
        label: "High School",
        path: "engineer/highschool",
      },
      { id: 2, x: "40%", y: "58%", label: "College", path: "engineer/college" },
      {
        id: 3,
        x: "70%",
        y: "45%",
        label: "Specialization",
        path: "engineer/specializations",
      },
      {
        id: 4,
        x: "90%",
        y: "85%",
        label: "Destination",
        path: "roadmap/endeng",
      },
    ],
    Bachelor: [
      {
        id: 1,
        x: "10%",
        y: "80%",
        label: "Bachelor's",
        path: "engineer/bachelors",
      },
      {
        id: 2,
        x: "50%",
        y: "50%",
        label: "Specialization",
        path: "engineer/specializations",
      },
      {
        id: 3,
        x: "90%",
        y: "20%",
        label: "Destination",
        path: "roadmap/endeng",
      },
    ],
    Postgraduate: [
      {
        id: 1,
        x: "10%",
        y: "15%",
        label: "Postgraduate",
        path: "engineer/postgraduate",
      },
      {
        id: 2,
        x: "50%",
        y: "50%",
        label: "Advanced Specialization",
        path: "engineer/specializations",
      },
      {
        id: 3,
        x: "90%",
        y: "85%",
        label: "Destination",
        path: "roadmap/endeng",
      },
    ],
    Undergraduate: [
      {
        id: 1,
        x: "10%",
        y: "12%",
        label: "Undergraduate",
        path: "engineer/undergraduate",
      },
      {
        id: 2,
        x: "50%",
        y: "50%",
        label: "Core Engineering Subjects",
        path: "engineer/core",
      },
      {
        id: 3,
        x: "90%",
        y: "85%",
        label: "Graduation",
        path: "roadmap/endug",
      },
    ],
  };

  const checkpoints =
    roadmapConfig[qualification] || roadmapConfig["9th Grade"];

  // Cycle through checkpoints
  const cycleCheckpoints = useCallback(() => {
    if (!checkpoints.length) return;

    clearTimeout(checkpointTimerRef.current);
    clearTimeout(dialogTimerRef.current);

    // Show dialog for current checkpoint
    setShowDialog(true);

    // Hide dialog after 5 seconds
    dialogTimerRef.current = setTimeout(() => {
      setShowDialog(false);

      // Move to next checkpoint after dialog closes
      checkpointTimerRef.current = setTimeout(() => {
        setCurrentCheckpoint((prev) => (prev + 1) % checkpoints.length);
      }, 1000);
    }, 5000);
  }, [checkpoints]);

  // Start cycling when checkpoints are loaded
  useEffect(() => {
    if (checkpoints.length > 0) {
      cycleCheckpoints();
    }

    return () => {
      clearTimeout(checkpointTimerRef.current);
      clearTimeout(dialogTimerRef.current);
    };
  }, [checkpoints, cycleCheckpoints]);

  const handleCheckpointHover = (pointId) => {
    setHoveredCheckpointId(pointId);
    const index = checkpoints.findIndex((cp) => cp.id === pointId);
    if (index >= 0) {
      setCurrentCheckpoint(index);
    }
  };

  const handleDialogClose = () => {
    setShowDialog(false);
  };

  // Get suggestions for current checkpoint
  const getCurrentSuggestions = () => {
    const checkpoint = checkpoints[currentCheckpoint];
    if (!checkpoint) return [];

    const matchingKey = Object.keys(suggestions).find((key) =>
      checkpoint.label.includes(key)
    );

    return matchingKey
      ? suggestions[matchingKey]
      : [
          "Focus on building strong foundations",
          "Explore different engineering fields",
          "Connect with professionals in your area of interest",
        ];
  };

  return (
    <div className="roadmap-container">
      <h3 className="roadmap-title">Engineering Career Roadmap</h3>

      {/* Road image as background path */}
      <div className="road-background">
        <img src={roadImage} alt="Road path" className="road-image" />

        {/* Checkpoints positioned along the road */}
        <div className="checkpoints-container">
          {checkpoints.map((point, index) => (
            <Link
              to={point.path}
              key={point.id}
              className={`checkpoint ${
                index === currentCheckpoint ? "active" : ""
              }`}
              style={{ left: point.x, top: point.y }}
              onMouseEnter={() => handleCheckpointHover(point.id)}
            >
              <div className="checkpoint-marker">
                <FaMapMarkerAlt className="marker-icon" />
              </div>
              <div className="checkpoint-label">{point.label}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* Static instructor image */}
      <div className="instructor-container">
        <img
          src={instructorImage}
          alt="Instructor"
          className="instructor-image"
        />

        {/* Suggestions dialog */}
        {showDialog && (
          <div className="suggestions-dialog">
            <button className="close-dialog" onClick={handleDialogClose}>
              ×
            </button>
            <h4>Suggestions for {checkpoints[currentCheckpoint]?.label}:</h4>
            <ul>
              {getCurrentSuggestions().map((suggestion, index) => (
                <li key={index}>{suggestion}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoadmapEng;
