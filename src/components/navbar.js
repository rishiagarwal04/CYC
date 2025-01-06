import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="text-xl pt-2 px-4 py-3 flex flex-row md:flex-row justify-between  bg-yellow-200 border-4 border-black ">
      {/* Left Section */}
      <div className="left text-2xl font-bold">Logo</div>

      {/* Hamburger Menu for Small Screens */}
      

      {/* Right Section */}
      <div
        className={`right  md:w-auto ${
          isMenuOpen ? 'block' : 'hidden'
        } md:flex flex-col md:flex-col space-y-2 md:space-y-0 md:space-x-4 items-center`}
      >
        <ul className="flex md:flex-row md:space-x-12 md-m-20 space-x-4">
          <li>Home</li>
          <li>Explore</li>
          <li>1-2-1</li>
          <li>Chat</li>
          <li>Share</li>
          <li>Priya</li>
        </ul>
       
      </div>
      <div className="md:hidden">
        <button
          className="text-black focus:outline-none "
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>
    </div>
  );
};

export default Navbar;
