
import "../styles/Testimonials.css";

const SuccessStories = () => {
  const stories = [
    {
      title: "Helping John Regain His Mobility",
      challenge: "John faced severe back pain limiting his daily activities.",
      solution: "Our physiotherapy and wellness team developed a tailored rehabilitation program.",
      result: "Within 3 months, John experienced 80% improvement and resumed his daily routines pain-free.",
      image: "/images/john-story.jpg", 
      testimonial: "Palene Health changed my life! I'm back to doing what I love.",
    },
    {
      title: "Sarah's Journey to a Healthier Life",
      challenge: "Sarah struggled with obesity and related health issues.",
      solution: "We provided a personalized weight loss and nutrition plan.",
      result: "Sarah lost 25kg in 6 months and improved her overall health.",
      image: "/images/sarah-story.jpg",
      testimonial: "Thanks to Palene Health, I feel confident and healthy again!",
    },
    {
      title: "Michael's Recovery After Surgery",
      challenge: "Michael needed post-surgery care to regain strength.",
      solution: "Our team provided intensive physiotherapy and regular checkups.",
      result: "Michael regained full mobility in just 4 months.",
      image: "/images/michael-story.jpg",
      testimonial: "I couldn't have done it without Palene Health. Thank you!",
    },
  ];

  return (
    <div className="success-stories">
      <h2>Our Success Stories</h2>
      <p>
        At Palene Health, we're dedicated to making a difference. Here are some
        of the inspiring stories from our clients.
      </p>
      <div className="stories-container">
        {stories.map((story, index) => (
          <div key={index} className="story-card">
            <img src={story.image} alt={story.title} className="story-image" />
            <h3>{story.title}</h3>
            <p><strong>Challenge:</strong> {story.challenge}</p>
            <p><strong>Solution:</strong> {story.solution}</p>
            <p><strong>Result:</strong> {story.result}</p>
            <blockquote>"{story.testimonial}"</blockquote>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;
