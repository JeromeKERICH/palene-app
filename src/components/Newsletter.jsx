import React, { useState } from 'react';
import '../styles/Newsletter.css';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setMessage('Thank you for subscribing!');
      setEmail('');
    } else {
      setMessage('Please enter a valid email.');
    }
  };

  return (
    <div className="newsletter-container">
      <div className="newsletter-content">
        <h2 className="newsletter-title">Stay Updated with Our Newsletter</h2>
        <p className="newsletter-subtitle">
          Subscribe to get the latest health tips and updates directly to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="newsletter-form">
          <input
            type="email"
            className="newsletter-input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="newsletter-button">Subscribe</button>
        </form>
        {message && <p className="newsletter-message">{message}</p>}
      </div>
    </div>
  );
};

export default NewsletterSection;
