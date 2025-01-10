import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import "../styles/Contact.css";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Left: Contact Info */}
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>We’d love to hear from you. Reach out to us via the form or through the following channels:</p>
          <ul>
            <li>
              <FaMapMarkerAlt className="contact-icon" />
              123 Main Street, Nairobi, Kenya
            </li>
            <li>
              <FaPhone className="contact-icon" />
              (+254) 712 345 678
            </li>
            <li>
              <FaEnvelope className="contact-icon" />
              info@palenehealth.com
            </li>
            <li>
              <FaWhatsapp className="contact-icon" />
              <a href="https://wa.me/254712345678" target="_blank" rel="noopener noreferrer">
                Chat with us on WhatsApp
              </a>
            </li>
          </ul>
        </div>

        {/* Right: Contact Form */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
