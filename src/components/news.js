import React, { useEffect, useRef, useState } from 'react';

const News = () => {
  const containerRef = useRef(null);
  const [repeatedNewsItems, setRepeatedNewsItems] = useState([]);

  useEffect(() => {
    const scrollContainer = containerRef.current;

    let scrollStep = 1; // Speed of scrolling
    let scrollInterval = null;

    // Function to duplicate news items to fill the container
    const fillContainerWithNews = () => {
      if (!scrollContainer) return;

      const containerHeight = scrollContainer.clientHeight;
      const itemHeight = scrollContainer.scrollHeight / newsItems.length;
      const numItemsToFill = Math.ceil(containerHeight / itemHeight);

      const repeatedNews = [];
      for (let i = 0; i < numItemsToFill; i++) {
        repeatedNews.push(...newsItems);
      }

      setRepeatedNewsItems(repeatedNews);
    };

    // Start auto-scrolling from bottom to top
    const startScrolling = () => {
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight; // Start from the bottom
        scrollInterval = setInterval(() => {
          if (
            scrollContainer.scrollTop <= 0
          ) {
            scrollContainer.scrollTop = scrollContainer.scrollHeight; // Loop back to the bottom
          } else {
            scrollContainer.scrollTop -= scrollStep; // Scroll up
          }
        },0); // Adjust interval time for smoothness
      }
    };

    fillContainerWithNews();
    startScrolling();

    return () => {
      if (scrollInterval) clearInterval(scrollInterval); // Cleanup on unmount
    };
  }, []);

  const newsItems = [
    {
      id: 1,
      headline: "NEET 2025 to be held in a single shift",
      description:
        "The National Testing Agency (NTA) has confirmed that the NEET 2025 examination will be conducted in a single shift through the traditional pen-and-paper format.",
      link: "https://ndtv.in/career?utm_source=chatgpt.com",
    },
    {
      id: 2,
      headline: "CBSE tightens norms",
      description:
        "The Central Board of Secondary Education (CBSE) has identified 29 schools for violating regulations, potentially leading to the cancellation of their affiliation.",
      link: "https://www.abplive.com/education?utm_source=chatgpt.com",
    },
    {
      id: 3,
      headline: "Coal India Recruitment",
      description:
        "Coal India Limited has opened applications for multiple management trainee roles, presenting a significant opportunity for job seekers.",
      link: "https://www.abplive.com/education?utm_source=chatgpt.com",
    },
    {
      id: 4,
      headline: "UP Board: High-Tech Monitoring",
      description:
        "The Uttar Pradesh Board of Secondary Education (UPMSP) will implement 24/7 control room surveillance and advanced monitoring systems to prevent malpractice during board exams.",
      link: "https://navbharattimes.indiatimes.com/education/education-news/articlelist/2303761.cms?utm_source=chatgpt.com",
    },
    {
      id: 5,
      headline: "BPSC 70th: Final Answer Key",
      description:
        "The Bihar Public Service Commission (BPSC) has published the final answer key for the 70th preliminary exam, nullifying four questions.",
      link: "https://www.livehindustan.com/career/education?utm_source=chatgpt.com",
    },
  ];

  return (
    <>
      <div className="h-14 font-bold text-center py-2 text-white rounded-lg bg-[#8b65ab]">
        LATEST NEWS
      </div>
      <div
        ref={containerRef}
        className="flex flex-col overflow-hidden h-[1900px] space-y-2"
        style={{
          scrollBehavior: "smooth",
          padding: "1px",
          border: "1px solid #ddd",
        }}
      >
        {repeatedNewsItems.map((news, idx) => (
          <div
            key={`${news.id}-${idx}`}
            className="min-h-30 bg-[#f4ecfa] p-1 rounded-lg shadow-md"
          >
            <h3 className="font-semibold text-lg">{news.headline}</h3>
            <p className="text-sm text-gray-700">{news.description}</p>
            <a
              href={news.link}
              className="text-blue-500 text-sm underline hover:text-red-700"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default News;
