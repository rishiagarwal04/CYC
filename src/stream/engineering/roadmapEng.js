import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./roadmap.css";

// Debounce utility
const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

const RoadmapEng = () => {
  const [qualification, setQualification] = useState(null);
  const [instructor, setInstructor] = useState({
    x: 50,
    y: 50,
    message: "Welcome to your roadmap!",
  });
  const [hoveredCheckpointId, setHoveredCheckpointId] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const svgRef = useRef(null);

  // Fetch qualification from FastAPI
  useEffect(() => {
    const fetchUserData = async () => {
      const userId = localStorage.getItem("userId");
      if (userId) {
        try {
          const response = await axios.get(
            `http://localhost:5000/signup/user/${userId}`
          );
          setQualification(response.data.user?.qualification || "9th Grade");
        } catch (error) {
          console.error("Error fetching user data:", error);
          setQualification("9th Grade"); // Fallback
        }
      }
    };
    fetchUserData();
  }, []);

  // Roadmap configurations
  const roadmapConfig = {
    "9th Grade": [
      { id: 1, x: 100, y: 500, label: "9-10", path: "engineer/nine10" },
      { id: 2, x: 300, y: 400, label: "11-12", path: "engineer/eleven12" },
      { id: 3, x: 500, y: 300, label: "College", path: "engineer/college" },
      {
        id: 4,
        x: 700,
        y: 200,
        label: "Specialization",
        path: "engineer/specializations",
      },
      { id: 5, x: 900, y: 100, label: "Destination", path: "roadmap/endeng" },
    ],
    "10th Grade": [
      { id: 1, x: 100, y: 500, label: "10th Grade", path: "engineer/ten" },
      { id: 2, x: 350, y: 400, label: "11-12", path: "engineer/eleven12" },
      { id: 3, x: 600, y: 300, label: "College", path: "engineer/college" },
      {
        id: 4,
        x: 850,
        y: 200,
        label: "Specialization",
        path: "engineer/specializations",
      },
      { id: 5, x: 1000, y: 100, label: "Destination", path: "roadmap/endeng" },
    ],
    "High School": [
      {
        id: 1,
        x: 100,
        y: 500,
        label: "High School",
        path: "engineer/highschool",
      },
      { id: 2, x: 400, y: 350, label: "College", path: "engineer/college" },
      {
        id: 3,
        x: 700,
        y: 200,
        label: "Specialization",
        path: "engineer/specializations",
      },
      { id: 4, x: 1000, y: 100, label: "Destination", path: "roadmap/endeng" },
    ],
    Bachelor: [
      {
        id: 1,
        x: 100,
        y: 500,
        label: "Bachelor's",
        path: "engineer/bachelors",
      },
      {
        id: 2,
        x: 500,
        y: 300,
        label: "Specialization",
        path: "engineer/specializations",
      },
      { id: 3, x: 900, y: 100, label: "Destination", path: "roadmap/endeng" },
    ],
    Postgraduate: [
      {
        id: 1,
        x: 100,
        y: 500,
        label: "Postgraduate",
        path: "engineer/postgraduate",
      },
      {
        id: 2,
        x: 500,
        y: 300,
        label: "Advanced Specialization",
        path: "engineer/advanced",
      },
      { id: 3, x: 900, y: 100, label: "Destination", path: "roadmap/endeng" },
    ],
  };

  const checkpoints =
    roadmapConfig[qualification] || roadmapConfig["9th Grade"];

  // Generate SVG path
  const generatePath = () => {
    if (!checkpoints.length) return "";
    let path = `M${checkpoints[0].x},${checkpoints[0].y}`;
    for (let i = 1; i < checkpoints.length; i++) {
      const prev = checkpoints[i - 1];
      const curr = checkpoints[i];
      const cx = (prev.x + curr.x) / 2;
      path += ` Q${cx},${prev.y} ${curr.x},${curr.y}`;
    }
    return path;
  };

  // Debounced checkpoint interaction
  const handleCheckpointInteraction = useCallback(
    debounce((point) => {
      if (hoveredCheckpointId !== point.id && !isTransitioning) {
        setIsTransitioning(true);
        setHoveredCheckpointId(point.id);
        setInstructor({
          x: point.x + 60,
          y: point.y - 80,
          message: `Explore ${point.label} to advance your engineering career!`,
        });
        setTimeout(() => setIsTransitioning(false), 1200); // Match transition duration
      }
    }, 300),
    [hoveredCheckpointId, isTransitioning]
  );

  const handleCheckpointLeave = useCallback(() => {
    if (!isTransitioning) {
      setHoveredCheckpointId(null);
      setInstructor((prev) => ({
        ...prev,
        message: "Select a checkpoint to continue your journey!",
      }));
    }
  }, [isTransitioning]);

  return (
    <div className="roadmap-container">
      <h3 className="name">Roadmap</h3>
      <svg ref={svgRef} className="roadmap-svg" viewBox="0 0 1100 600">
        <path
          d={generatePath()}
          className="roadmap-path"
          fill="none"
          stroke="#2c3e50"
          strokeWidth="5"
        />
        {checkpoints.map((point) => (
          <Link to={point.path} key={point.id}>
            <svg
              className="checkpoint-wrapper"
              x={point.x - 30}
              y={point.y - 30}
              width="60"
              height="60"
              onMouseEnter={() => handleCheckpointInteraction(point)}
              onMouseLeave={handleCheckpointLeave}
            >
              <g className="checkpoint">
                <circle
                  cx="30"
                  cy="30"
                  r="20"
                  fill="#3498db"
                  className="checkpoint-circle"
                />
                <text
                  x="30"
                  y="50"
                  textAnchor="middle"
                  fill="#2c3e50"
                  fontSize="14"
                >
                  {point.label}
                </text>
              </g>
            </svg>
          </Link>
        ))}
      </svg>
      <div
        className="instructor"
        style={{
          left: `${instructor.x}px`,
          top: `${instructor.y}px`,
        }}
      >
        <svg
          width="80"
          height="80"
          viewBox="0 0 100 100"
          className="instructor-svg"
        >
          <circle cx="50" cy="30" r="20" fill="#3498db" className="head" />
          <rect
            x="40"
            y="50"
            width="20"
            height="30"
            fill="#2c3e50"
            className="body"
          />
          <circle cx="45" cy="25" r="5" fill="#fff" className="eye" />
          <circle cx="55" cy="25" r="5" fill="#fff" className="eye" />
          <rect
            x="45"
            y="35"
            width="10"
            height="5"
            fill="#fff"
            className="mouth"
          />
        </svg>
        <div className="speech-bubble">{instructor.message}</div>
      </div>
    </div>
  );
};

export default RoadmapEng;
