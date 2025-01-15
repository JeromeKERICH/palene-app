
import VirtualConsultation from "../components/Book";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import HealthPrograms from "../components/Health";

import HeroSection from "../components/Hero";
import NewsletterSection from "../components/Newsletter";



import WhyPalene from "../components/Reason";
import Services from "../components/Services";
import SuccessStories from "../components/Testimonial";






const Home = () => {
  return (
    <div>
     
      <HeroSection/>
      <WhyPalene/>
      <CTA/>
      <Services/>
      <VirtualConsultation/>
      <HealthPrograms/>
      <SuccessStories/>
      <FAQ/>
      <NewsletterSection/>
    </div>
  );
};

export default Home;
