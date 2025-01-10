import { FaLinkedin, FaTwitter, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import CTA from "../components/CTA";
import "../styles/About.css";

const About = () => {
  const teamMembers = [
    {
      name: "Magdalene Wambui",
      role: "Lead Writer",
      image: "assets/magg.jpg",
      socials: [
        { platform: "linkedin", link: "https://linkedin.com/in/magdalene-wambui", icon: <FaLinkedin /> },
        { platform: "twitter", link: "https://twitter.com/magdalene", icon: <FaTwitter /> },
        { platform: "facebook", link: "https://facebook.com/magdalene", icon: <FaFacebook /> },
      ],
    },
    {
      name: "Jane Smith",
      role: "Chief Medical Officer",
      image: "assets/magg.jpg",
      socials: [
        { platform: "linkedin", link: "https://linkedin.com/in/jane-smith", icon: <FaLinkedin /> },
        { platform: "twitter", link: "https://twitter.com/magdalene", icon: <FaTwitter /> },
        { platform: "instagram", link: "https://instagram.com/jane", icon: <FaInstagram /> },
      ],
    },
    {
      name: "Michael Brown",
      role: "Technology Lead",
      image: "assets/magg.jpg",
      socials: [
        { platform: "twitter", link: "https://twitter.com/magdalene", icon: <FaTwitter /> },
        { platform: "linkedin", link: "https://linkedin.com/in/michael-brown", icon: <FaLinkedin /> },
        { platform: "instagram", link: "https://instagram.com/jane", icon: <FaInstagram /> },
      ],
    },
    {
      name: "Emily Davis",
      role: "Lead Nurse",
      image: "assets/magg.jpg",
      socials: [
        { platform: "linkedin", link: "https://linkedin.com/in/emily-davis", icon: <FaLinkedin /> },
        { platform: "instagram", link: "https://instagram.com/jane", icon: <FaInstagram /> },
        { platform: "twitter", link: "https://twitter.com/magdalene", icon: <FaTwitter /> },
      ],
    },
  ];

  return (
    <>
      <section className="about-section">
        <div className="about-container">
          {/* Left Content */}
          <div className="about-content">
            <h1 className="about-heading">Welcome to Palene Health</h1>
            <p className="about-description">
              Palene Health is dedicated to redefining healthcare with cutting-edge
              technology and compassionate care. With years of expertise and a patient-centric approach, 
              we aim to provide accessible, affordable, and high-quality healthcare services for all.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h2>25,000+</h2>
                <p>Patients Helped</p>
              </div>
              <div className="stat">
                <h2>10+</h2>
                <p>Years in Service</p>
              </div>
              <div className="stat">
                <h2>15+</h2>
                <p>Locations Covered</p>
              </div>
            </div>
            <button className="cra-buttons">Learn More</button>
          </div>

          {/* Right Content (Image) */}
          <div className="about-image">
            <img src="/assets/care.jpg" alt="About Palene Health" />
          </div>
        </div>
      </section>

      <section className="about-mission">
        <div className="mission-container">
          <h2>About Our Mission</h2>
          <p>
            At Palene Health, our mission is to revolutionize healthcare
            accessibility and delivery by integrating modern technology with
            compassionate care. We believe in providing personalized healthcare
            solutions that empower individuals to lead healthier, happier lives.
            <br />
            <br />
            Our team is committed to fostering a holistic approach to health,
            with an emphasis on prevention, education, and support. We aim to
            create a world where quality healthcare is not a privilege, but a
            universal right for all.
          </p>
        </div>
      </section>

      <CTA />

      <section className="expertise-section">
        <div className="container">
          <h2>Our Expertise</h2>
          <p>
            At Palene Health, our expertise lies in leveraging innovative solutions
            to provide personalized healthcare services. We specialize in holistic
            care that combines technology with compassion, focusing on prevention,
            education, and support.
          </p>
          <div className="expertise-cards">
            <div className="expertise-card">
              <h3>Technology-Driven Care</h3>
              <p>
                We harness the power of technology to enhance healthcare delivery
                and accessibility, making healthcare services more efficient and
                personalized.
              </p>
            </div>
            <div className="expertise-card">
              <h3>Holistic Health Solutions</h3>
              <p>
                Our team adopts a holistic approach, focusing on the physical,
                mental, and emotional well-being of every individual.
              </p>
            </div>
            <div className="expertise-card">
              <h3>Prevention & Education</h3>
              <p>
                Prevention is at the heart of our services. We educate and empower
                individuals to take charge of their health and well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h2>Behind the Curtains</h2>
          <div className="team-cards">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <img src={member.image} alt={`Portrait of ${member.name}`} />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <div className="social-links">
                  {member.socials?.map((social, i) => (
                    <a
                      key={i}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.platform}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
