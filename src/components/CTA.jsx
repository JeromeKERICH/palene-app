import React from "react";
import { FaRegHandshake } from "react-icons/fa";
import "../styles/CTA.css";

const CTA = () => {
  return (
    <section className="cta">
      <div className="cta-container">
        <h2 className="cta-title">Ready to take the next step in your health journey?</h2>
        <p className="cta-description">
          Join Palene Health today and experience personalized care, accessible services, and expert
          health guidance tailored to your needs.
        </p>
        <div className="cta-buttons">
          <a href="#sign-up" className="cta-button cta-button-primary">
            Get Started
          </a>
          <a href="#contact-us" className="cta-button cta-button-secondary">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
