import { Link } from 'react-router-dom';
import Logo from './LOGO.png';
const Navbar = () => {
  return (
    <div className="text-xl z-10 px-4 py-3 h-20 flex flex-row justify-between items-center bg-[#8b65ab] w-full text-white fixed top-0 left-0">
      {/* Left Section */}
      <div className="left text-2xl font-bold">
        <ul className="flex flex-row space-x-8 pt-2">
          <li>
            <Link to="/" className="hover:underline">Home</Link>
          </li>
          <li>
            <Link to="/explore" className="hover:underline">Explore</Link>
          </li>
          <li>
            <Link to="/1-2-1" className="hover:underline">1-2-1</Link>
          </li>
          <li>
            <Link to="/chat" className="hover:underline">Chat</Link>
          </li>
        </ul>
      </div>

      {/* Right Section: Logo */}
      <div className="right">
        <img
          src={Logo} // Replace with the actual path to your logo image
          alt="Logo"
          className="h-20 w-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Navbar;
