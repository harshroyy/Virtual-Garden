import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-container flex flex-col md:flex-row items-center  text-white banner">
      <div className="hero-content w-full mb-12 md:mb-0 lg:w-3/6 flex flex-col items-center lg:items-start justify-center">
        <h1 className="hero-title text-5xl lg:text-6xl font-bold lg:leading-tight text-center lg:text-left">
          Explore the World of Herbs
        </h1>
        <p className="hero-description mt-4 lg:text-xl text-center lg:text-left max-w-lg">
          Discover the diverse range of medicinal herbs and their uses in our virtual garden.
        </p>
        <div className="mt-8">
          <Link 
            to="/herb-catalog" 
            className="explore-button text-xl lg:text-2xl font-semibold px-10 py-3 rounded-full"
          >
            Explore Herbs
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
