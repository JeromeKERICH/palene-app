import React from "react";
import "../styles/Book.css";

const VirtualConsultation = () => {
  return (
    <section className="virtual-consultation">
      <div className="consultation-content">
        <div className="consultation-text">
          <h2>Virtual Consultation</h2>
          <p>
            Access quality healthcare from the comfort of your home. Our virtual consultation service connects you with experienced healthcare professionals for personalized advice, diagnosis, and follow-ups.
          </p>
          <h3>How It Works</h3>
          <ul>
            <li>Select your preferred date and time.</li>
            <li>Choose a healthcare provider.</li>
            <li>Receive a secure video link for the consultation.</li>
          </ul>
          <button className="book-now-btn">Book Now</button>
        </div>
        <div className="consultation-image">
          <img src="assets/meet.jpg" alt="Virtual Consultation" />
        </div>
      </div>
    </section>
  );
};

export default VirtualConsultation;
