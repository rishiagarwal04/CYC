import React, { useState, useEffect, useRef } from "react";

const YouTubeShorts = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [videos, setVideos] = useState([
    "https://raw.githubusercontent.com/lostinvsc/ppl/main/WhatsApp%20Video%202025-01-19%20at%203.13.02%20AM.mp4",
    "https://raw.githubusercontent.com/lostinvsc/ppl/main/WhatsApp%20Video%202025-01-19%20at%203.13.27%20AM.mp4",
    "https://raw.githubusercontent.com/lostinvsc/ppl/main/WhatsApp%20Video%202025-01-19%20at%203.13.49%20AM.mp4",
    "https://raw.githubusercontent.com/lostinvsc/ppl/main/WhatsApp%20Video%202025-01-19%20at%203.12.45%20AM.mp4",
    "https://raw.githubusercontent.com/lostinvsc/ppl/main/WhatsApp%20Video%202025-01-19%20at%203.12.31%20AM.mp4",
    "https://raw.githubusercontent.com/lostinvsc/ppl/main/WhatsApp%20Video%202025-01-19%20at%203.12.03%20AM.mp4",
    "https://raw.githubusercontent.com/lostinvsc/ppl/main/WhatsApp%20Video%202025-01-19%20at%203.12.14%20AM.mp4",
  ]);

  // Tags array for each video
  const [tags, setTags] = useState([
    ["Whaat is more important, coding or logic"], // Tags for video 1
    ["Drop year Challenges"], // Tags for video 2
    ["Prepration life VS college life"], // Tags for video 3
    ["Is there scope in your branch? "], // Tags for video 4
    ["High school Coders"], // Tags for video 5
    ["You should Start Early?"], // Tags for video 6
    ["Enginneering, a rat race..."], // Tags for video 7
  ]);

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);

  const handleVideoClick = (index) => {
    setCurrentVideoIndex(index);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const playNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const playPreviousVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      (prevIndex - 1 + videos.length) % videos.length
    );
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (isPopupOpen) {
        if (event.key === "PageDown") {
          playNextVideo();
        } else if (event.key === "PageUp") {
          playPreviousVideo();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPopupOpen]);

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#f4ecfa]">
      <h2 className="font-bold text-[30px] pt-4 leading-6 text-[#8b65ab]">
        CareerClips
      </h2>
      {/* Videos Grid */}
      <div className="w-full flex gap-4 px-4 pt-10 overflow-x-scroll">
        {videos.map((video, idx) => (
          <div
            key={idx}
            className="flex-none w-[250px] h-[444px] relative bg-[#f4ecfa] rounded-lg overflow-hidden cursor-pointer"
          >
            <video
              src={video}
              className="w-full h-full object-cover"
              muted
              loop
              controls={false}
              onClick={() => handleVideoClick(idx)}
            ></video>
            <div className="absolute bottom-0 text-white text-center py-2">
              {/* <p className="text-sm truncate">{`Video ${idx + 1}`}</p> */}
              <div className="mt-2 text-center">
              {tags[idx].map((tag, tagIdx) => (
                <span
                  key={tagIdx}
                  className="inline-block bg-[#8b65ab] text-white text-xs px-2 py-1 rounded-full m-1 z-20"
                >
                  {tag}
                </span>
              ))}
            </div>
            </div>
            <div className="mt-2 text-center">
              {tags[idx].map((tag, tagIdx) => (
                <span
                  key={tagIdx}
                  className="inline-block bg-[#8b65ab] text-white text-xs px-2 py-1 rounded-full m-1 z-20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="relative w-[300px] h-[533px] bg-black rounded-lg overflow-hidden">
            <video
              ref={videoRef}
              src={videos[currentVideoIndex]}
              className="w-full h-full object-cover"
              autoPlay
              controls
            ></video>
            <button
              className="absolute top-2 left-2 text-white text-2xl font-bold rounded-full p-2"
              onClick={playPreviousVideo}
            >
              &lt;
            </button>
            <button
              className="absolute top-2 right-2 text-white text-2xl font-bold rounded-full p-2"
              onClick={playNextVideo}
            >
              &gt;
            </button>
            <button
              className="absolute top-2 right-8 text-white text-2xl font-bold rounded-full p-2"
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
