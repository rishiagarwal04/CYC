import React, { useEffect, useRef } from 'react';

const News = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = containerRef.current;

    let scrollStep = 1; // Speed of scrolling
    let scrollInterval = null;

    const startScrolling = (id) => {
      scrollInterval = setInterval(() => {
        if (scrollContainer) {
          if (
            scrollContainer.scrollTop + scrollContainer.clientHeight >=
            scrollContainer.scrollHeight
          ) {
            // End of content, scroll back to top (loop to the first news using modulus)
            scrollContainer.scrollTop = 0;
            id=id-20;
          } else {
            scrollContainer.scrollTop += scrollStep; // Scroll down
          }
        }
      }, 50); // Adjust interval time for smoothness
    };

    startScrolling();

    return () => {
      if (scrollInterval) clearInterval(scrollInterval); // Cleanup on unmount
    };
  }, []);

  const newsItems = [
    { id: 1, headline: 'New 1', description: 'This is the latest update about News 1.', link: '#' },
    { id: 2, headline: 'New 2', description: 'This is the latest update about News 2.', link: '#' },
    { id: 3, headline: 'New 3', description: 'This is the latest update about News 3.', link: '#' },
    { id: 4, headline: 'New 4', description: 'This is the latest update about News 4.', link: '#' },
    { id: 5, headline: 'New 5', description: 'This is the latest update about News 5.', link: '#' },
    { id: 6, headline: 'New 6', description: 'This is the latest update about News 6.', link: '#' },
    { id: 7, headline: 'New 7', description: 'This is the latest update about News 7.', link: '#' },
    { id: 8, headline: 'New 8', description: 'This is the latest update about News 8.', link: '#' },
    { id: 9, headline: 'New 9', description: 'This is the latest update about News 9.', link: '#' },
    { id: 10, headline: 'New 10', description: 'This is the latest update about News 10.', link: '#' },
    { id: 11, headline: 'New 11', description: 'This is the latest update about News 11.', link: '#' },
    { id: 12, headline: 'New 12', description: 'This is the latest update about News 12.', link: '#' },
    { id: 13, headline: 'New 13', description: 'This is the latest update about News 13.', link: '#' },
    { id: 14, headline: 'New 14', description: 'This is the latest update about News 14.', link: '#' },
    { id: 15, headline: 'New 15', description: 'This is the latest update about News 15.', link: '#' },
    { id: 16, headline: 'New 16', description: 'This is the latest update about News 16.', link: '#' },
    { id: 17, headline: 'New 17', description: 'This is the latest update about News 17.', link: '#' },
    { id: 18, headline: 'New 18', description: 'This is the latest update about News 18.', link: '#' },
    { id: 19, headline: 'New 19', description: 'This is the latest update about News 19.', link: '#' },
    { id: 20, headline: 'New 20', description: 'This is the latest update about News 20.', link: '#' }
  ];

  return (
    <>
      <div className="h-14 font-bold text-center py-2  text-white rounded-lg bg-[#8b65ab]">
        LATEST NEWS
      </div>
      <div
        ref={containerRef}
        className="flex flex-col overflow-hidden space-y-2 h-[955px]"
        style={{ scrollBehavior: 'smooth', padding: '1px', border: '1px solid #ddd' }}
      >
        {newsItems.map((news, idx) => (
          <div
            key={news.id}
            className="min-h-30 bg-[#f4ecfa]p-1 rounded-lg shadow-md"
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
