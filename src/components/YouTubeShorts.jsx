import React, { useState, useEffect, useRef } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiX,
  FiPlay,
  FiPause,
  FiVolume2,
  FiVolumeX,
} from "react-icons/fi";

const YouTubeShorts = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);
  const progressRef = useRef(null);

  const videos = [
    "https://raw.githubusercontent.com/lostinvsc/ppl/main/WhatsApp%20Video%202025-01-19%20at%203.13.02%20AM.mp4",
    "https://raw.githubusercontent.com/lostinvsc/ppl/main/WhatsApp%20Video%202025-01-19%20at%203.13.27%20AM.mp4",
    "https://raw.githubusercontent.com/lostinvsc/ppl/main/WhatsApp%20Video%202025-01-19%20at%203.13.49%20AM.mp4",
    "https://raw.githubusercontent.com/lostinvsc/ppl/main/WhatsApp%20Video%202025-01-19%20at%203.12.45%20AM.mp4",
    "https://raw.githubusercontent.com/lostinvsc/ppl/main/WhatsApp%20Video%202025-01-19%20at%203.12.31%20AM.mp4",
    "https://raw.githubusercontent.com/lostinvsc/ppl/main/WhatsApp%20Video%202025-01-19%20at%203.12.03%20AM.mp4",
    "https://raw.githubusercontent.com/lostinvsc/ppl/main/WhatsApp%20Video%202025-01-19%20at%203.12.14%20AM.mp4",
  ];

  const tags = [
    ["Coding vs Logic"],
    ["Drop Year Challenges"],
    ["Prep Life vs College"],
    ["Branch Scope"],
    ["High School Coders"],
    ["Start Early"],
    ["Engineering Rat Race"],
  ];

  const titles = [
    "What's more important: coding or logic?",
    "The reality of drop years",
    "Preparation life vs college life",
    "Is there scope in your branch?",
    "High school coders - pros & cons",
    "Should you start coding early?",
    "Engineering - a rat race?",
  ];

  const handleVideoClick = (index) => {
    setCurrentVideoIndex(index);
    setIsPopupOpen(true);
    setIsPlaying(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setIsPlaying(false);
  };

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(!isMuted);
  };

  const playNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    setIsPlaying(true);
  };

  const playPreviousVideo = () => {
    setCurrentVideoIndex(
      (prevIndex) => (prevIndex - 1 + videos.length) % videos.length
    );
    setIsPlaying(true);
  };

  const updateProgress = () => {
    if (videoRef.current && progressRef.current) {
      const progress =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      progressRef.current.style.width = `${progress}%`;
    }
  };

  useEffect(() => {
    if (isPopupOpen && videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying, isPopupOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (isPopupOpen) {
        if (event.key === "ArrowRight") {
          playNextVideo();
        } else if (event.key === "ArrowLeft") {
          playPreviousVideo();
        } else if (event.key === " ") {
          togglePlayPause();
        } else if (event.key === "m") {
          toggleMute();
        } else if (event.key === "Escape") {
          closePopup();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPopupOpen, isPlaying, isMuted]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-indigo-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-purple-800 mb-2">
            CareerClips
          </h1>
          <p className="text-purple-600">
            Short videos with big career insights
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {videos.map((video, idx) => (
            <div
              key={idx}
              className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => handleVideoClick(idx)}
            >
              <div className="relative aspect-[9/16]">
                <video
                  src={video}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg mb-2">
                    {titles[idx]}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {tags[idx].map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="inline-block bg-purple-600/80 text-white text-xs px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-black/50 rounded-full p-4">
                    <FiPlay className="text-white text-2xl" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Popup */}
        {isPopupOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
            <div className="relative w-full max-w-md aspect-[9/16] bg-black rounded-xl overflow-hidden">
              <video
                ref={videoRef}
                src={videos[currentVideoIndex]}
                className="w-full h-full object-cover"
                autoPlay
                muted={isMuted}
                onClick={togglePlayPause}
                onTimeUpdate={updateProgress}
                onEnded={playNextVideo}
              />

              {/* Video Info */}
              <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/70 to-transparent">
                <div className="flex justify-between items-center">
                  <button
                    onClick={closePopup}
                    className="text-white hover:text-purple-300 transition-colors"
                  >
                    <FiX className="text-2xl" />
                  </button>
                  <span className="text-white font-medium">CareerClips</span>
                </div>
              </div>

              {/* Video Controls */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <div className="mb-2 h-1 w-full bg-gray-600 rounded-full overflow-hidden">
                  <div ref={progressRef} className="h-full bg-purple-500" />
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={togglePlayPause}
                      className="text-white hover:text-purple-300 transition-colors"
                    >
                      {isPlaying ? (
                        <FiPause className="text-xl" />
                      ) : (
                        <FiPlay className="text-xl" />
                      )}
                    </button>
                    <button
                      onClick={toggleMute}
                      className="text-white hover:text-purple-300 transition-colors"
                    >
                      {isMuted ? (
                        <FiVolumeX className="text-xl" />
                      ) : (
                        <FiVolume2 className="text-xl" />
                      )}
                    </button>
                  </div>

                  <div className="flex items-center space-x-4">
                    <button
                      onClick={playPreviousVideo}
                      className="text-white hover:text-purple-300 transition-colors"
                    >
                      <FiChevronLeft className="text-xl" />
                    </button>
                    <button
                      onClick={playNextVideo}
                      className="text-white hover:text-purple-300 transition-colors"
                    >
                      <FiChevronRight className="text-xl" />
                    </button>
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="text-white font-semibold text-lg">
                    {titles[currentVideoIndex]}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {tags[currentVideoIndex].map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="inline-block bg-purple-600/80 text-white text-xs px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default YouTubeShorts;
