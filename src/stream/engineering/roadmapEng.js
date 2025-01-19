import React from "react";
import { Link } from "react-router-dom";
import "./roadmap.css"; // Import optional CSS for styling
import image from "./road1.png";
import sticker from "./sticker.png";
import roapmapname from "./roadmapname.png";

const RoadmapEng = () => {
  // Checkpoints with specified coordinates and paths
  const checkpoints = [
    { id: 1, x: 70, y: 450, label: "9-10", path: "explore/engineer/nine10", sticker: sticker },
    { id: 2, x: 800, y: 300, label: "11-12", path: "explore/engineer/eleven12", sticker: sticker },
    { id: 3, x: 450, y: 150, label: "college", path: "explore/engineer/college", sticker: sticker },
    { id: 4, x: 725, y: 100, label: "specialisation", path: "explore/engineer/specializations", sticker: sticker },
    { id: 5, x: 805, y: 5, label: "destination", path: "roadmap/endeng", sticker: sticker },
   

  ];

  return (
    <div className="roadmap-container">
           

      <img src={image} alt="Roadmap" className="roadmap-image" />
      <h3 className="name ">ROADMAP</h3>
      {checkpoints.map((point) => (
        <Link to={point.path} key={point.id}>
          <div
            className="checkpoint"
            style={{
              left: `${point.x}px`,
              top: `${point.y}px`,
            }}
          >
            <img src={point.sticker} alt={point.label} className="checkpoint-sticker" />
            <div className="checkpoint-label">{point.label}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RoadmapEng;
