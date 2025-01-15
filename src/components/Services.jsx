import React from 'react';
import { FaStethoscope, FaLaptopMedical, FaUserMd, FaClinicMedical, FaBrain, FaMedkit } from 'react-icons/fa';
import '../styles/Services.css';

const services = [
 
  {
    title: 'Telemedicine Services',
    icon: <FaLaptopMedical />,
    description: 'Access healthcare professionals remotely through virtual consultations and 24/7 support.',
  },
  {
    title: 'Mental Health Services',
    icon: <FaBrain />,
    description: 'Therapy, stress management, and emotional support to help you lead a balanced and healthy life.',
  },
  {
    title: 'Women’s Health',
    icon: <FaUserMd />,
    description: 'Prenatal, postnatal care, and women’s health screenings to prioritize the well-being of women.',
  },
  
 
  {
    title: 'Emergency Services',
    icon: <FaMedkit />,
    description: 'Immediate medical care for emergency situations, providing fast response and on-site treatment.',
  },
  {
    title: 'Specialist Referrals',
    icon: <FaClinicMedical />,
    description: 'Referrals to specialists for advanced care (e.g., cardiologists, dermatologists) to ensure you get expert advice.',
  },
  {
    title: 'Health Education',
    icon: <FaStethoscope />,
    description: 'Workshops and educational resources to help you learn more about maintaining a healthy lifestyle.',
  },
];

const Services = () => {
  return (
    <section className="services">
      <div className="services-container">
        <h2 className="services-title">Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
