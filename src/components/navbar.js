import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="text-xl z-100  px-4 py-3 h-20 flex flex-row md:flex-row justify-between bg-[#8b65ab]  w-full  text-white ">
      {/* Left Section */}
      <div className="left text-2xl font-bold">
        <ul className="flex md:flex-row md:space-x-12 md-m-20 space-x-4 pt-2 pl-4">
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
      {/* ... remaining code */}
    </div>
  );
};

export default Navbar;
