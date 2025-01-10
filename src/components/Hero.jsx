import React from "react";
import "../styles/Hero.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-container">
        {/* Left Section - Content */}
        <div className="hero-content">
          <h1 className="hero-heading">
           <span> Transforming Wellness</span> <br></br>One Step at a Time
          </h1>
          <p className="hero-text">
            Palene Health is redefining healthcare with technology-driven, personalized care.
            Join us in revolutionizing health management for everyone, everywhere.
          </p>
          <button className="cta-button">Join the Movement</button>
        </div>

        {/* Right Section - Single Image */}
        <div className="hero-images">
          <img
            src="/assets/bg4.jpg"
            alt="Health innovation"
            className="hero-image"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
