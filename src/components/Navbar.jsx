import React, { useState } from "react";
import { FaHome, FaInfoCircle, FaStethoscope, FaCalendarAlt, FaBlog, FaEnvelope } from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => setIsMobile(!isMobile);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo Section */}
          <div className="logo">
            <a href="/">
              <h4>Palene Health</h4>
            </a>
          </div>

          {/* Navigation Links */}
          <ul className={`nav-links ${isMobile ? "open" : ""}`}>
            <li>
              <a href="/" className="nav-link">
                <FaHome className="nav-icon" /> Home
              </a>
            </li>
            <li>
              <a href="/about" className="nav-link">
                <FaInfoCircle className="nav-icon" /> About
              </a>
            </li>
            <li>
              <a href="/servicepage" className="nav-link">
                <FaStethoscope className="nav-icon" /> Services
              </a>
            </li>
            <li>
              <a href="/appointments" className="nav-link">
                <FaCalendarAlt className="nav-icon" /> Appointments
              </a>
            </li>
            <li>
              <a href="/blog" className="nav-link">
                <FaBlog className="nav-icon" /> Blog
              </a>
            </li>
            <li>
              <a href="/contact" className="nav-link">
                <FaEnvelope className="nav-icon" /> Contact
              </a>
            </li>
          </ul>

          {/* Mobile Hamburger Menu */}
          <div className="hamburger" onClick={toggleMenu}>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="navbar-footer">
          <a href="/terms" className="footer-link">Terms & Conditions</a>
          <a href="/privacypolicy" className="footer-link">Privacy Policy</a>
        </div>
      </nav>

      
    </>
  );
};

export default Navbar;
