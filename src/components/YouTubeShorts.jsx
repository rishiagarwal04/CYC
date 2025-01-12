import React, { useState, useEffect } from "react";
import axios from "axios";

const YouTubeShorts = () => {
  const [shorts, setShorts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);
  const [currentShort, setCurrentShort] = useState(null); 
  const [isPopupOpen, setIsPopupOpen] = useState(false); 

  useEffect(() => {
    fetchShorts();

    const handleKeyPress = (event) => {
      if (isPopupOpen) {
        if (event.key === "ArrowDown") playNext();
        if (event.key === "ArrowUp") playPrev();
      }
    };
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [isPopupOpen, currentShort]);

  const fetchShorts = async () => {
    try {
      let res = await axios.get("http://localhost:5000/shorts");
      setShorts(res.data);
    } catch (error) {
      console.error("Error fetching shorts:", error.response?.data || error.message);
      alert("Failed to fetch YouTube shorts. Please try again later.");
    }
  };

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const openPopup = (index) => {
    setCurrentShort(index);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const playNext = () => {
    if (currentShort < shorts.length - 1) {
      setCurrentShort((prev) => prev + 1);
    }
  };

  const playPrev = () => {
    if (currentShort > 0) {
      setCurrentShort((prev) => prev - 1);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Shorts Viewer</h1>
      <div className=" flex gap-3">
        {shorts.slice(0, visibleCount).map((short, index) => (
          <div
      
            key={short.id}
            onClick={() => openPopup(index)}
            style={{
              border: "1px solid #ccc",
              margin: "10px 0",
              padding: "10px",
              borderRadius: "5px",
              backgroundColor: currentShort === index ? "#f0f8ff" : "#fff",
              cursor: "pointer",
              display: "inline-block",
              width: "400px", // Set the width for the shorts
              textAlign: "center",
              
            }}

            
          >
            {/* <h3>{short.title}</h3> */}
            <div
              style={{
                position: "relative",
                width: "300px", // Fixed width
                height: "611px", // Height based on 9:16 ratio
              }}
              
            >
              <iframe
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                }}
                src={`https://www.youtube.com/embed/${short.videoId}`}
                title={short.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
      {visibleCount < shorts.length && (
        <button
          onClick={handleShowMore}
          style={{ marginTop: "10px", padding: "10px", cursor: "pointer" }}
        >
          Show More
        </button>
      )}
      {isPopupOpen && currentShort !== null && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "1000",
          }}
        >
          <div
            style={{
              position: "relative",
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              width: "420px",
              textAlign: "center",
            }}
          >
            {/* <h3>{shorts[currentShort].title}</h3> */}
            <div
              style={{
                position: "relative",
                width: "380px", // Fixed width for popup
                height: "611px", // Height based on 9:16 ratio

              }}
            >
              <iframe
                style={{
                  position: "absolute",
                  top: "30px",
                  left: "0",
                  width: "100%",
                  height: "100%",
                }}
                src={`https://www.youtube.com/embed/${shorts[currentShort].videoId}?autoplay=1`}
                title={shorts[currentShort].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div style={{ marginTop: "20px" }}>
              {/* <button onClick={playPrev} disabled={currentShort === 0}>
                Previous
              </button> */}
              {/* <button
                onClick={playNext}
                disabled={currentShort === shorts.length - 1}
                style={{ marginLeft: "10px" }}
              >
                Next
              </button> */}
            </div>
            <button
              onClick={closePopup}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                cursor: "pointer",
                background: "none",
                border: "none",
                fontSize: "20px",
                color: "#000",
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default YouTubeShorts;
