import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import "./Hero.css";

const Hero = () => {
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // CTA button scale and fade in
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { opacity: 0, scale: 0.8, y: 20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1,
            ease: "elastic.out(1, 0.5)",
            delay: 0.5,
          },
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero">
      <div className="hero__video-wrapper">
        {/* <video
          width="400"
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        > */}
        <video
          width="400"
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          webkit-playsinline="true"
        >
          <source src="/video.webm" type="video/webm" />
        </video>
      </div>

      <div className="hero__content">
        {/* <img src="/LOGO.jpg" alt="Vikram's Dental Clinic Logo" className="hero__logo" /> */}
        <Link ref={ctaRef} to="/book-appointment" className="hero__cta">
          Book an Appointment
        </Link>
      </div>
    </section>
  );
};

export default Hero;
