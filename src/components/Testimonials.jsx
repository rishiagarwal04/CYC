import React, { useState } from "react";

const testimonials = [
  { id: 1, text: "This platform changed my life! Highly recommended.", author: "Sachin" },
  { id: 2, text: "Amazing experience! Will definitely use it again.", author: "Sachin" },
  { id: 3, text: "Excellent service and support. Couldn't be happier!", author: "Sachin" },
  { id: 4, text: "Five stars! Everything I needed and more.", author: "Sachin" },
  { id: 5, text: "Absolutely fantastic! Highly efficient and reliable.", author: "Sachin" },
  { id: 6, text: "Absolutely fantastic! Highly efficient and reliable.", author: "Sachin" },
];

const Testimonials = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className="w-full overflow-hidden bg-transparent py-8 shadow-md hover:cursor-pointer items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`flex gap-8 animate-scroll ${
          isHovered ? "paused" : ""
        }`}
        style={{
          animationPlayState: isHovered ? "paused" : "running",
        }}
      >
        

        {testimonials.map((testimonial) => (
            <div
            key={testimonial.id}
            className="flex-shrink-0 w-72 bg-[#685aab] text-white p-6 rounded-lg shadow-lg text-center "
            >
            <p className="text-sm mb-4">"{testimonial.text}"</p>
            <p className="text-sm font-bold">~ {testimonial.author}</p>
          </div>
        ))}
        
      </div>
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          .animate-scroll {
            animation: scroll 15s linear infinite;
          }
          .paused {
            animation-play-state: paused !important;
          }
        `}
      </style>
    </div>
  );
};

export default Testimonials;
