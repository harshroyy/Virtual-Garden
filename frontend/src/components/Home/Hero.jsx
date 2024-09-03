import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <div className="h-screen flex flex-col md:flex-row items-center justify-center bg-green-900 text-white z-100 banner">
      
      <div className="w-full ml-10 mb-12 md:mb-0 lg:w-3/6 flex flex-col items-center lg:items-start justify-center">
        <h1 className="text-4xl lg:text-6xl font-semibold text-green-50 text-center lg:text-left">
          Explore the World of Herbs
        </h1>
        <p className="mt-4 md:mb-0 lg:text-2xl font-thick text-center lg:text-left">
          Discover the diverse range of medicinal herbs and their uses in our virtual garden.
        </p>
        <div className="mt-8">
          <Link to="/herb-catalog" className="text-green-50 text-xl lg:text-2xl font-semibold border border-green-200 px-10 py-3 hover:bg-green-700 rounded-full">
            Explore Herbs
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-2/5 h-auto flex items-center justify-center lg:ml-20 lg:pl-10 p-4">
        {/* You can add an image or other content here */}
      </div>
    </div>
  );
}

export default Hero;
