import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Install react-icons if needed
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    "HOME",
    "ABOUT",
    "ACADEMIC",
    "ADMISSION",
    "ACHIEVEMENTS",
    "GALLERY",
    "FACULTY",
    "FACILITIES",
    "HELP",
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-300 to-green-300 px-3 py-1">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-7 text-black font-semibold">
          {menuItems.map((item, index) => (
            <NavLink to={`/${(item != "HOME") ? item : ""}`} key={index} className="px-4 py-2 hover:bg-black/10 rounded-md cursor-pointer">
              {item}
            </NavLink>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center mt-3 space-y-2 bg-white shadow-md p-4">
          {menuItems.map((item, index) => (
            <NavLink to={`/${(item != "HOME") ? item : ""}`} key={index} className="w-full text-center py-2 border-b hover:bg-gray-100 cursor-pointer">
              {item}
            </NavLink>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
