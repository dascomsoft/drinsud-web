import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import ServicesSection from '../components/home/ServicesSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import TeamSection from '../components/home/TeamSection';
import ContactSection from '../components/home/ContactSection';
import Partners from '../components/home/Partners';

const Home = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-page">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <Testimonials />
      <TeamSection />
      <ContactSection />
      <Partners />
    </div>
  );
};

export default Home;