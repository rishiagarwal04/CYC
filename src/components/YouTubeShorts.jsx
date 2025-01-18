import React, { useState, useEffect,useref } from "react";
import axios from "axios";

const YouTubeShorts = () => {



  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleVideoClick = () => {
      setIsPopupOpen(true);
  };

  const closePopup = () => {
      setIsPopupOpen(false);
  };


  // const [shorts, setShorts] = useState([]);
  // const [visibleCount, setVisibleCount] = useState(3);
  // const [currentShort, setCurrentShort] = useState(null);
  // const [isPopupOpen, setIsPopupOpen] = useState(false);

  // useEffect(() => {
  //   fetchShorts();

  //   const handleKeyPress = (event) => {
  //     if (isPopupOpen) {
  //       if (event.key === "ArrowDown") playNext();
  //       if (event.key === "ArrowUp") playPrev();
  //     }
  //   };
  //   window.addEventListener("keydown", handleKeyPress);

  //   return () => {
  //     window.removeEventListener("keydown", handleKeyPress);
  //   };
  // }, [isPopupOpen, currentShort]);

  // const fetchShorts = async () => {
  //   try {
  //     let res = await axios.get("http://localhost:5000/shorts");
  //     setShorts(res.data);
  //   } catch (error) {
  //     console.error("Error fetching shorts:", error.response?.data || error.message);
  //     alert("Failed to fetch YouTube shorts. Please try again later.");
  //   }
  // };

  // const handleShowMore = () => {
  //   setVisibleCount((prev) => prev + 3);
  // };

  // const openPopup = (index) => {
  //   setCurrentShort(index);
  //   setIsPopupOpen(true);
  // };

  // const closePopup = () => {
  //   setIsPopupOpen(false);
  // };

  // const playNext = () => {
  //   if (currentShort < shorts.length - 1) {
  //     setCurrentShort((prev) => prev + 1);
  //   }
  // };

  // const playPrev = () => {
  //   if (currentShort > 0) {
  //     setCurrentShort((prev) => prev - 1);
  //   }
  // };

  return (


    <div className="flex justify-center items-center min-h-screen bg-[#f4ecfa] ">
    {/* Main Video Thumbnail */}
    <div className="w-[360px] h-[640px] overflow-hidden relative rounded-lg">
        <video
            src="https://raw.githubusercontent.com/lostinvsc/ppl/main/WhatsApp%20Video%202025-01-15%20at%202.43.27%20PM.mp4"
            className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 object-cover cursor-pointer"
            onClick={handleVideoClick}
            muted
            loop
        ></video>
    </div>

    {/* Popup */}
    {isPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
            <div className="relative w-[360px] h-[640px] bg-black rounded-lg overflow-hidden">
                <video
                    src="https://raw.githubusercontent.com/lostinvsc/ppl/main/WhatsApp%20Video%202025-01-15%20at%202.43.27%20PM.mp4"
                    className="w-full h-full object-cover"
                    autoPlay
                    controls
                ></video>
                <button
                    className="absolute -top-2 right-1 text-white text-2xl font-bold rounded-full p-2"
                    onClick={closePopup}
                >
                    &times;
                </button>
            </div>
        </div>
    )}
</div>



  );
};

export default YouTubeShorts;
