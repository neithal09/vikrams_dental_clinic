import React from "react";
import Hero from "../components/Hero/Hero";
import TaglineSection from "../components/TaglineSection/TaglineSection";
import DoctorSection from "../components/DoctorSection/DoctorSection";
import StatsBar from "../components/StatsBar/StatsBar";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import Testimonials from "../components/Testimonials/Testimonials";
import LocationSection from "../components/LocationSection/LocationSection";
import SmileGallery from "../components/SmileGallery/SmileGallery";
import FAQSection from "../components/FAQSection/FAQSection";
import ContactForm from "../components/ContactForm/ContactForm";

const HomePage = () => {
  return (
    <>
      <Hero />
      <TaglineSection />
      <DoctorSection />
      <StatsBar />
      <ServicesSection />
      <Testimonials />
      <LocationSection />
      <SmileGallery />
      <FAQSection />
      <ContactForm />
    </>
  );
};

export default HomePage;
