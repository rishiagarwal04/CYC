import React, { useState } from 'react';

const Navbar = ({ setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="text-xl pt-2 px-4 py-3 h-20 flex flex-row md:flex-row justify-between bg-[#8b65ab] border-black text-white">
      {/* Left Section */}
      <div className="left text-2xl font-bold">
      <ul className="flex md:flex-row md:space-x-12 md-m-20 space-x-4 pt-2 pl-4">
          <li>
            <button onClick={() => setCurrentPage('/')} className="hover:underline">
              Home
            </button>
          </li>
          <li>
            <button onClick={() => setCurrentPage('/explore')} className="hover:underline">
              Explore
            </button></li>
            <li>
            <button onClick={() => setCurrentPage('/1-2-1')} className="hover:underline">
              1-2-1
            </button>
          </li>
          <li>
            <button onClick={() => setCurrentPage('/chat')} className="hover:underline">
              Chat</button></li>
            </ul>
      </div>

      {/* Right Section */}
      <div
        className={`right pt-4 md:w-auto ${
          isMenuOpen ? 'block' : 'hidden'
        } md:flex flex-col md:flex-col space-y-2 md:space-y-0 md:space-x-4 items-center text-white`}
      >
        <ul className="flex md:flex-row md:space-x-12  space-x-4">
        <li>
  <button 
    onClick={() => setCurrentPage('/')} 
    className="hover:underline flex items-center gap-2"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24" 
      height="24" 
      viewBox="0 0 128 128" 
      aria-hidden="true"
      role="img"
      className="iconify iconify--noto"
      preserveAspectRatio="xMidYMid meet"
    >
      <circle cx="62.5" cy="112" r="12" fill="#fff"></circle>
      <circle cx="60.9" cy="112" r="10.3" fill="#fff"></circle>
      <path d="M55.1 108.4c1.2-1.8 3.8-3.3 6.5-3.7c.7-.1 1.3-.1 1.9.1c.4.2.8.6.5 1c-.2.4-.7.5-1.1.6c-2.5.7-4.8 2.4-6.2 4.4c-.5.8-1.4 2.9-2.4 2.4c-1-.7-.8-2.6.8-4.8z" fill="#fff"></path>
      <path d="M46.1 24.3c-2.1 2-3.4 4.4-4 7.4c-.3 1.9-2 3.2-3.9 3.2h6.9c1.9 0 3.6-1.3 3.9-3.2c.5-3 1.9-5.4 4-7.4c2.1-1.9 4.7-3.1 7.8-3.6c-1.1-.2-2.3-.3-3.5-.3c-4.6.1-8.3 1.4-11.2 3.9z" fill="#fff"></path>
      <path d="M89.5 12.2C83.4 6.7 75 4 64.2 4c-1.2 0-2.3 0-3.4.1c9.1.5 16.4 3.2 21.8 8.1c6.1 5.5 9.1 13.2 9.1 23c0 8.8-4.1 17.4-12.2 25.9l-9.8 9.6l-.3.3c-2.9 3.4-4.6 8-5.2 13.9c-.2 2-1.9 3.6-4 3.6h6.9c2 0 3.8-1.6 4-3.6c.5-5.9 2.3-10.5 5.2-13.9l.3-.3l9.8-9.6c8.2-8.5 12.2-17.1 12.2-25.9c-.1-9.8-3.1-17.5-9.1-23z" fill="#fff"></path>
      <path d="M64.2 85c.5-5.9 2.3-10.5 5.2-13.9l.3-.3l9.8-9.6c8.2-8.5 12.2-17.1 12.2-25.9c0-9.8-3-17.5-9.1-23C77.2 7.4 70 4.7 60.8 4.2c-8.9.5-16.2 3.3-21.9 8.2c-5.3 4.6-8.5 10.6-9.4 18.1c-.3 2.4 1.6 4.4 4 4.4h4.8c1.9 0 3.6-1.3 3.9-3.2c.5-3 1.9-5.4 4-7.4c2.8-2.6 6.6-3.9 11.2-3.9c1.2 0 2.4.1 3.5.3c1.1-.2 2.2-.3 3.4-.3c4.8 0 8.5 1.3 11 4s3.8 6.5 3.8 11.5c0 3.8-1.1 7.4-3.2 10.6c-1.4 2.2-4.7 5.8-10 10.9c-5.2 5.1-8.8 9.8-10.5 14c-1.4 3.4-2.3 7.7-2.5 12.9c-.1 2.3 1.7 4.2 4 4.2h3.5c1.8.1 3.6-1.5 3.8-3.5z" fill="#fff"></path>
      <path d="M39.6 15.9C43 11.7 49.5 8.7 56 8.3c1.6-.1 3.2 0 4.5.7c1 .5 1.7 1.6 1 2.6c-.6.8-1.8 1.1-2.8 1.3c-6.1 1.2-12 4.7-15.9 9.3c-1.5 1.8-4 6.8-6.2 5.2c-2.3-1.9-1.2-6.4 3-11.5z" fill="#fff"></path>
    </svg>
    
  </button>
</li>
<li>
  <button
    onClick={() => setCurrentPage('/share')}
    className="hover:underline flex items-center gap-2"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 512 503.91"
      className="w-6 h-6"
    >
      <path
        fill="#fff"
        fillRule="nonzero"
        d="M408.8 0c28.5 0 54.31 11.56 72.97 30.23C500.44 48.89 512 74.7 512 103.2c0 28.48-11.56 54.3-30.23 72.96-18.66 18.67-44.47 30.23-72.97 30.23-28.48 0-54.3-11.56-72.96-30.23-1.19-1.18-2.35-2.4-3.48-3.64l-129.22 53.72c2.12 8.22 3.25 16.84 3.25 25.71 0 4.68-.31 9.3-.92 13.81l130.99 61.36c40.17-39.49 105.49-39.2 145.31.62 18.67 18.67 30.23 44.49 30.23 72.97 0 28.49-11.56 54.3-30.23 72.97-18.66 18.67-44.47 30.23-72.97 30.23-28.48 0-54.3-11.56-72.96-30.23-18.67-18.67-30.23-44.48-30.23-72.97 0-12.28 2.15-24.06 6.1-34.99l-122.18-57.23c-3.89 5.92-8.38 11.44-13.37 16.43-18.66 18.67-44.48 30.23-72.96 30.23-28.5 0-54.31-11.56-72.97-30.23C11.56 306.25 0 280.44 0 251.95c0-28.4 11.57-54.2 30.27-72.92 18.62-18.71 44.43-30.27 72.93-30.27 30.77 0 59.3 13.47 78.96 36.86l127.69-53.08c-2.76-9.31-4.24-19.15-4.24-29.34 0-28.5 11.56-54.31 30.23-72.97C354.5 11.56 380.32 0 408.8 0z"
      />
    </svg>
    
  </button>
</li>
        </ul>
      </div>

      {/* Hamburger Menu for Small Screens */}
      <div className="md:hidden">
        <button
          className="text-black focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>
    </div>
  );
};

export default Navbar;
