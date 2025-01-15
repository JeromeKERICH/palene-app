import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import "../styles/Contact.css";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>We’d love to hear from you! Feel free to reach out using the details below or send us a message directly.</p>
      <div className="contact-content">
        {/* Contact Details and Form */}
        <div className="details-form">
          <div className="contact-details">
            <h2>Contact Information</h2>
            <p><FaMapMarkerAlt /> Malindi, Kenya</p>
            <p><FaPhoneAlt /> (+254) 717 717  616 </p>
            <p><FaEnvelope /> info@palenehealth.com</p>
            <p><FaWhatsapp /> <a href="#">Chat with us on WhatsApp</a></p>
          </div>
          <div className="contact-form">
            <h2>Send Us a Message</h2>
            <form className="form">
              <label>
                Name
                <input type="text" placeholder="Your Name" required />
              </label>
              <label>
                Email
                <input type="email" placeholder="Your Email" required />
              </label>
              <label>
                Message
                <textarea placeholder="Your Message" rows="4" required></textarea>
              </label>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
