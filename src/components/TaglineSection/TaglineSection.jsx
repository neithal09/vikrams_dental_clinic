import React, { useEffect, useRef, useState } from "react";
import "./TaglineSection.css";

const TaglineSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="tagline" ref={sectionRef}>
      <div className="tagline__container">
        {/* Left Side */}
        <div className="tagline__left">
          <h1 className="tagline__heading">
            Flaunt the Freedom
            <br />
            to Smile.
          </h1>
          <p className="tagline__subtitle">
            We create smiles that feel as good as they look — natural, radiant,
            and truly yours.
          </p>
          <a href="#book" className="tagline__cta">
            Book an Appointment
          </a>
        </div>

        {/* Divider */}
        <div className="tagline__divider"></div>

        {/* Right Side - Envelope Animation */}
        <div className="tagline__right">
          <div className={`envelope-wrapper ${isVisible ? "playing" : ""}`}>
            {/* The Letter / Prescription */}
            <div className="letter">
              <div className="letter__inner">
                <div className="letter__header">
                  <h2 className="letter__clinic-name">Dr. Vikram's</h2>
                  <p className="letter__clinic-sub">Dental Clinic</p>
                </div>
                <div className="letter__details">
                  <div className="letter__detail-row">
                    <div className="letter__detail">
                      <span className="letter__label">Patient ID</span>
                      <span className="letter__value">VDC-2025-001</span>
                    </div>
                    <div className="letter__detail">
                      <span className="letter__label">Age</span>
                      <span className="letter__value">28</span>
                    </div>
                    <div className="letter__detail">
                      <span className="letter__label">Date</span>
                      <span className="letter__value">22.04.2026</span>
                    </div>
                  </div>
                </div>
                <div className="letter__rx">
                  R<sub>x</sub>
                </div>
                <div className="letter__message">
                  <p>Let's celebrate you,</p>
                  <p>shall we?</p>
                </div>
                <div className="letter__footer">
                  <span>www.vikramsdental.com</span>
                </div>
              </div>
            </div>

            {/* The Envelope */}
            <div className="envelope">
              <div className="envelope__back"></div>
              <div className="envelope__front">
                <div className="envelope__flap-shadow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaglineSection;
