import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    text: "John consistently excels in academics, showing outstanding dedication and analytical skills.",
    author: "Ms. Clara White, Teacher",
  },
  {
    id: 2,
    text: "Priya’s leadership and teamwork were key to our debate team's success.",
    author: "Mr. Rajesh Khanna, Coach",
  },
  {
    id: 3,
    text: "Rahul’s determination and perseverance are truly inspiring.",
    author: "Mrs. Anjali Sharma, Teacher",
  },
  {
    id: 4,
    text: "Meera’s innovative ideas and creative approach stand out in every project.",
    author: "Dr. Kavita Roy, Faculty",
  },
  {
    id: 5,
    text: "Ananya is a disciplined and talented all-rounder with great potential.",
    author: "Mr. David Lee, Principal",
  },
];

const Testimonials = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className="w-full overflow-hidden bg-to-b bg-[#6a4a8a] py-16 px-4 relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-white/10 pointer-events-none" />

      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#4C1D95] mb-12 drop-shadow-md animate-fade-in">
        Voices of Success
      </h2>
      <div
        className={`flex gap-6 animate-scroll ${isHovered ? "paused" : ""}`}
        style={{
          animationPlayState: isHovered ? "paused" : "running",
        }}
      >
        {testimonials.concat(testimonials).map((testimonial, index) => (
          <div
            key={`${testimonial.id}-${index}`}
            className="flex-shrink-0 w-80 md:w-96 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-[#C4B5FD]/50 transition-all duration-300 transform hover:scale-105"
          >
            <p className="text-gray-600 text-base md:text-lg mb-6 italic font-light tracking-wide">
              "{testimonial.text}"
            </p>
            <p className="text-[#4C1D95] text-sm md:text-base font-semibold text-right drop-shadow-sm">
              ~ {testimonial.author}
            </p>
          </div>
        ))}
      </div>
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-scroll {
            display: flex;
            width: max-content;
            animation: scroll 20s linear infinite;
          }
          .paused {
            animation-play-state: paused !important;
          }
          .animate-fade-in {
            animation: fade-in 1s ease-out forwards;
          }
          @media (max-width: 640px) {
            .animate-scroll > div {
              width: 80vw;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Testimonials;
