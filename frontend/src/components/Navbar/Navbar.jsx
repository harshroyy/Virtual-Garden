import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGripLines } from "react-icons/fa";
import './Navbar.css'; // Make sure this file contains relevant styling

function Navbar() {
  const links = [
    { title: "HOME", link: "/" },
    { title: "HERB CATALOG", link: "/herb-catalog" },
  ];

  const [mobileNav, setMobileNav] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between bg-green-700 text-white px-8 py-6 sticky top-0 shadow-lg z-50">
        <Link to="/" className="flex items-center">
          <img className="h-12 me-4" src="/logo2.png" alt="Logo" />
          <span className="text-3xl font-serif">Sanjivini</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="hover:text-green-300 transition duration-300 font-medium"
            >
              {item.title}
            </Link>
          ))}
          <Link
            to="/street-view"
            className="px-4 py-2 border border-white rounded-full hover:bg-white hover:text-green-800 transition duration-300"
          >
            Street View
          </Link>
          <Link
            to="/virtual-garden"
            className="px-4 py-2 border border-white rounded-full hover:bg-white hover:text-green-800 transition duration-300"
          >
            Virtual Garden
          </Link>
          <div className="relative flex items-center bg-white rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Search for herbs and more..."
              className="px-4 py-2 w-full text-gray-700 focus:outline-none"
            />
            <button className="px-4 py-2">
              <img src="/search.jpg" className="w-6" alt="Search" />
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden text-2xl"
          onClick={() => setMobileNav(!mobileNav)}
        >
          <FaGripLines />
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileNav && (
        <div className="absolute top-0 left-0 w-full h-full bg-green-800 bg-opacity-90 flex flex-col items-center pt-24 z-40">
          {links.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="text-3xl mb-6 text-white font-medium hover:text-green-300 transition duration-300"
              onClick={() => setMobileNav(false)}
            >
              {item.title}
            </Link>
          ))}
          <Link
            to="/street-view"
            className="text-3xl mb-6 px-6 py-2 border border-white rounded-full hover:bg-white hover:text-green-800 transition duration-300"
            onClick={() => setMobileNav(false)}
          >
            Street View
          </Link>
          <Link
            to="/virtual-garden"
            className="text-3xl mb-6 px-6 py-2 border border-white rounded-full hover:bg-white hover:text-green-800 transition duration-300"
            onClick={() => setMobileNav(false)}
          >
            Virtual Garden
          </Link>
        </div>
      )}
    </>
  );
}

export default Navbar;
