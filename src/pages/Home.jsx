import ContactSection from "../components/Contact";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";

import HeroSection from "../components/Hero";
import NewsletterSection from "../components/Newsletter";



import WhyPalene from "../components/Reason";
import Services from "../components/Services";






const Home = () => {
  return (
    <div>
     
      <HeroSection/>
      <WhyPalene/>
      <CTA/>
      <Services/>
      <FAQ/>
      <ContactSection/>
      <NewsletterSection/>
    </div>
  );
};

export default Home;
