import React, { useState } from "react";

const testimonials = [
  { id: 1, text: "John consistently excels in academics, showing outstanding dedication and analytical skills.", author: "Ms. Clara White, Teacher" },
  { id: 2, text: "Priya’s leadership and teamwork were key to our debate team's success.", author: "Mr. Rajesh Khanna, Coach" },
  { id: 3, text: "Rahul’s determination and perseverance are truly inspiring.", author: "Mrs. Anjali Sharma, Teacher" },
  { id: 4, text: "Meera’s innovative ideas and creative approach stand out in every project.", author: "Dr. Kavita Roy, Faculty" },
  { id: 5, text: "Ananya is a disciplined and talented all-rounder with great potential.", author: "Mr. David Lee, Principal" },
  { id: 1, text: "John consistently excels in academics, showing outstanding dedication and analytical skills.", author: "Ms. Clara White, Teacher" },
  { id: 2, text: "Priya’s leadership and teamwork were key to our debate team's success.", author: "Mr. Rajesh Khanna, Coach" },
  { id: 3, text: "Rahul’s determination and perseverance are truly inspiring.", author: "Mrs. Anjali Sharma, Teacher" },
  { id: 4, text: "Meera’s innovative ideas and creative approach stand out in every project.", author: "Dr. Kavita Roy, Faculty" },
  { id: 5, text: "Ananya is a disciplined and talented all-rounder with great potential.", author: "Mr. David Lee, Principal" },
  { id: 1, text: "John consistently excels in academics, showing outstanding dedication and analytical skills.", author: "Ms. Clara White, Teacher" },
  { id: 2, text: "Priya’s leadership and teamwork were key to our debate team's success.", author: "Mr. Rajesh Khanna, Coach" },
  { id: 3, text: "Rahul’s determination and perseverance are truly inspiring.", author: "Mrs. Anjali Sharma, Teacher" },
  { id: 4, text: "Meera’s innovative ideas and creative approach stand out in every project.", author: "Dr. Kavita Roy, Faculty" },
  { id: 5, text: "Ananya is a disciplined and talented all-rounder with great potential.", author: "Mr. David Lee, Principal" },
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
