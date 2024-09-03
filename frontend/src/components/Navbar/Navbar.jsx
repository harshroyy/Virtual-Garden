import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGripLines } from "react-icons/fa";
import './Navbar.css';

function Navbar() {
  const links = [
    {
      title: "HOME",
      link: "/",
    },
    {
      title: "HERB CATALOG",
      link: "/herb-catalog", // Match this with the route in App.jsx
    }
  ];

  const [MobileNav, setMobileNav] = useState("hidden");

  return (
    <>
      <nav className="z-50 flex bg-green-800 text-white px-8 py-4 items-center justify-between sticky top-0 h-[100px]">
        <Link to="/" className="flex items-center">
          <img className="h-10 me-4" src="/logo1.png" alt="logo" />
        </Link>

        <div className="hidden md:flex items-center bg-white rounded overflow-hidden w-1/3 styler">
          <input
            type="text"
            placeholder="Search for herbs and more..."
            className="px-4 py-2 w-full text-gray-700 focus:outline-none"
          />
          <button className="px-4 py-2 text-white hover:bg-green-500 transition duration-300">
            <img src="/search.jpg" className="w-[35px]" alt="Search" />
          </button>
        </div>

        <div className="nav-links-hellscript block md:flex items-center gap-4">
          <div className="hidden md:flex font-thin gap-4">
            {links.map((item, i) => (
              <Link
                to={item.link}
                className="hover:text-green-300 transition-all duration-300"
                key={i}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex gap-4">
            <Link
              to="/street-view"
              className="px-4 py-1 font-thin border border-green-300 rounded hover:bg-white hover:text-green-900 transition-all duration-300"
            >
              Street View
            </Link>
          </div>
          <div className="hidden md:flex gap-4">
            <Link
              to="/street-view"
              className="px-4 py-1 font-thin border border-green-300 rounded hover:bg-white hover:text-green-900 transition-all duration-300"
            >
              Virtual Garden
            </Link>
          </div>
          <button
            className="block md:hidden text-white text-2xl hover:text-green-300"
            onClick={() =>
              MobileNav === "hidden"
                ? setMobileNav("block")
                : setMobileNav("hidden")
            }
          >
            <FaGripLines />
          </button>
        </div>
      </nav>

      <div
        className={`${MobileNav} text-white glass absolute top-0 left-0 w-full z-40 flex flex-col items-center justify-center`}  
        style={{ height: "100vh", width: "100vw" }}
      >
        {links.map((item, i) => (
          <Link
            to={item.link}
            className={`${MobileNav} text-white text-4xl mb-8 font-thin hover:text-green-300 transition-all duration-300`}
            key={i}
            onClick={() =>
              MobileNav === "hidden"
                ? setMobileNav("block")
                : setMobileNav("hidden")
            }
          >
            {item.title}
          </Link>
        ))}
        <Link
          to="/street-view"
          className={`${MobileNav} px-8 pl-3 pr-3 text-white text-4xl mb-8 py-2 font-thin border border-green-300 rounded hover:bg-white hover:text-green-900 transition-all duration-300`}
        >
          Street View
        </Link>
        <Link
          to="/street-view"
          className={`${MobileNav} px-8 pl-3 pr-3 text-white text-4xl mb-8 py-2 font-thin border border-green-300 rounded hover:bg-white hover:text-green-900 transition-all duration-300`}
        >
          Virtual Garden
        </Link>
      </div>
    </>
  );
}

export default Navbar;
