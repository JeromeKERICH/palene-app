// PrivacyPolicy.jsx
import React from 'react';
import '../styles/Privacy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <div className="privacy-policy-header">
        <h1>Privacy Policy</h1>
        <p>Effective Date: January 15, 2025</p>
      </div>
      <div className="privacy-policy-content">
        <section>
          <h2>Introduction</h2>
          <p>
            At PaleneHealth, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you use our services.
          </p>
        </section>
        <section>
          <h2>Information We Collect</h2>
          <ul>
            <li>Personal Identification Information (Name, email address, phone number, etc.)</li>
            <li>Health-related information provided by you</li>
            <li>Usage data, such as IP address, browser type, and pages visited</li>
          </ul>
        </section>
        <section>
          <h2>How We Use Your Information</h2>
          <p>
            We use the information collected to provide and improve our services, communicate with you, and ensure a secure experience. This includes:
          </p>
          <ul>
            <li>Responding to inquiries and support requests</li>
            <li>Personalizing your experience</li>
            <li>Compliance with legal obligations</li>
          </ul>
        </section>
        <section>
          <h2>Sharing Your Information</h2>
          <p>
            Your personal information will not be sold or shared with third parties except as necessary to provide our services or comply with legal obligations.
          </p>
        </section>
        <section>
          <h2>Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at <a href="mailto:support@palenehealth.com">support@palenehealth.com</a>.
          </p>
        </section>
        <section>
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <address>
            <p>Email: <a href="mailto:support@palenehealth.com">support@palenehealth.com</a></p>
            <p>Phone: +1-800-123-4567</p>
          </address>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
