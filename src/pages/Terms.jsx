import React from "react";
import "../styles/Terms.css";

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <h1>Terms and Conditions</h1>
      <p>Welcome to Palene Health!</p>
      <p>
        These terms and conditions outline the rules and regulations for the use of Palene
        Health's Website, located at <a href="https://palenehealth.com">palenehealth.com</a>.
      </p>
      <h2>1. Introduction</h2>
      <p>
        By accessing this website, you agree to comply with these terms and conditions.
        If you disagree with any part, you must not use this website.
      </p>
      <h2>2. Intellectual Property Rights</h2>
      <p>
        Other than the content you own, under these terms, Palene Health and/or its
        licensors own all the intellectual property rights and materials contained in this
        website.
      </p>
      <h2>3. Restrictions</h2>
      <p>You are specifically restricted from:</p>
      <ul>
        <li>Publishing any website material in any other media.</li>
        <li>Selling or commercializing website material.</li>
        <li>Using this website contrary to applicable laws and regulations.</li>
        <li>Engaging in data mining or similar activities.</li>
      </ul>
      <h2>4. Limitation of Liability</h2>
      <p>
        In no event shall Palene Health be held liable for anything arising out of or in any
        way connected with your use of this website.
      </p>
      <h2>5. Changes to Terms</h2>
      <p>
        Palene Health reserves the right to revise these terms at any time as it sees fit.
        By using this website, you are expected to review these terms regularly.
      </p>
      <h2>6. Contact Us</h2>
      <p>
        If you have any questions about these terms, please contact us at{" "}
        <a href="mailto:support@palenehealth.com">support@palenehealth.com</a>.
      </p>
    </div>
  );
};

export default TermsAndConditions;
