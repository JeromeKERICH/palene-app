import React from "react";
import { FaUserMd, FaHeartbeat, FaAccessibleIcon } from "react-icons/fa";
import "../styles/Reason.css";

const WhyPalene = () => {
  return (
    <section className="why-palene">
      <div className="why-palene-container">
        <h2 className="section-title">Why Palene Health?</h2>
        <p className="section-subtitle">
          Discover why Palene Health is the right choice for your healthcare needs.
        </p>

        <div className="benefits">
          {/* Benefit 1 */}
          <div className="benefit-card">
            
            <div className="image-wrapper">
              <img src="assets/expert.jpg" alt="Expert Doctors" />
            </div>
            <h3>Expert Doctors</h3>
            <p>
              Our team of qualified and experienced doctors ensures the best care for you. With a focus on
              precision and compassion, we prioritize your health and provide expert medical services to meet
              your individual needs.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="benefit-card">
           
            <div className="image-wrapper">
              <img src="assets/care.jpg" alt="Personalized Care" />
            </div>
            <h3>Personalized Care</h3>
            <p>
              We tailor our healthcare solutions to meet your unique needs and preferences. Every patient is treated as an individual with personalized plans and treatments that address both short-term and long-term health goals.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="benefit-card">
            
            <div className="image-wrapper">
              <img src="assets/access.jpg" alt="Accessibility" />
            </div>
            <h3>Accessibility</h3>
            <p>
              Easy access to healthcare services from anywhere, anytime. With our innovative telemedicine solutions, you can get the care you need without leaving the comfort of your home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPalene;
