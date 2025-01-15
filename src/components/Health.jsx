import React from "react";
import "../styles/Health.css";

const programs = [
  {
    name: "Wellness Workshops",
    description: "Learn healthy habits for a balanced lifestyle through our interactive workshops.",
    image: "assets/1.jpg",
  },
  {
    name: "Fitness Camps",
    description: "Get fit and stay active with our guided fitness programs designed for all levels.",
    image: "assets/2.jpg",
  },
  {
    name: "Nutrition Coaching",
    description: "Personalized nutrition plans to help you achieve your health goals.",
    image: "assets/3.jpg",
  },
  {
    name: "Mental Health Awareness",
    description: "Join our sessions to promote mental wellness and stress management.",
    image: "assets/4.jpg",
  },
];

const HealthPrograms = () => {
  return (
    <section className="health-programs">
      <h1>Our Health Programs</h1>
      <p>Empowering you to live a healthier life through our specialized programs and initiatives.</p>
      <div className="program-grid">
        {programs.map((program, index) => (
          <div className="program-card" key={index}>
            <img src={program.image} alt={program.name} />
            <h3>{program.name}</h3>
            <p>{program.description}</p>
            <button>Learn More</button>
          </div>
        ))}
      </div>
      <div className="cta">
        <p>Take the first step toward a healthier future. Join our programs today!</p>
        <button><a href="#">Join a Caring Community</a></button>
      </div>
    </section>
  );
};

export default HealthPrograms;
