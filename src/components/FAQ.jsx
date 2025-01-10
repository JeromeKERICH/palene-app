import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import '../styles/FAQ.css';

const faqData = [
  {
    question: 'What is Palene Health?',
    answer:
      'Palene Health is a healthcare service provider offering primary care, telemedicine, mental health support, and more to ensure your overall well-being.',
  },
  {
    question: 'How can I book an appointment?',
    answer:
      'You can book an appointment through our website by filling out the appointment form or contacting us via phone or WhatsApp.',
  },
  {
    question: 'Do you offer telemedicine services?',
    answer:
      'Yes, we provide telemedicine services that allow you to consult with our healthcare professionals remotely.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept various payment methods, including credit/debit cards, mobile money, and insurance payments.',
  },
  {
    question: 'Is Palene Health available 24/7?',
    answer:
      'Yes, our emergency services and telemedicine support are available 24/7 for your convenience.',
  },
  {
    question: 'Do you provide pediatric services?',
    answer:
      'Yes, we offer pediatric care, including vaccinations, routine check-ups, and specialized treatments for children.',
  },
  {
    question: 'Can I get a specialist referral?',
    answer:
      'Absolutely. We provide specialist referrals to ensure you receive the best possible care for advanced medical conditions.',
  },
  {
    question: 'Where are you located?',
    answer:
      'Our main office is located in Melbourne Australia, but we serve patients across various regions through telemedicine and onsite consultations.',
  },
  
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">FAQs</h2>
        <div className="faq-items">
          {faqData.map((item, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <h3>{item.question}</h3>
                {openIndex === index ? (
                  <FaChevronUp className="faq-icon" />
                ) : (
                  <FaChevronDown className="faq-icon" />
                )}
              </div>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
