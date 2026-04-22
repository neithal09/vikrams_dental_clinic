import React, { useEffect, useRef, useState } from "react";
import "./DoctorSection.css";

const DoctorSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`doctor-section ${isVisible ? "is-active" : ""}`}
      ref={sectionRef}
    >
      {/* Text content - sits behind the image initially */}
      <div className="doctor-section__content">
        {/* Pink arc decoration */}
        <div className="doctor-section__arc">
          <svg
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 40 180 Q 100 20, 160 180"
              stroke="rgba(240, 180, 210, 0.5)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <h5 className="doctor-section__name">DR VIKRAM</h5>
        <h2 className="doctor-section__title">
          <em>The Smile Wizard</em>
        </h2>
        <p className="doctor-section__description">
          With an un-misable Midas touch for smile transformations that are
          suited to your personality.
        </p>
        <a href="#contact" className="doctor-section__cta">
          Book an Appointment
        </a>
      </div>

      {/* Image panel - starts full width, glides to the right */}
      <div className="doctor-section__image-panel">
        <div className="doctor-section__image-inner">
          <img
            src="/JAYVIKRAM.jpeg"
            alt="Dr. Vikram"
            className="doctor-section__image"
          />
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;
