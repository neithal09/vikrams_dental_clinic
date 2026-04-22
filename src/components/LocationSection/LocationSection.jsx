import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./LocationSection.css";

gsap.registerPlugin(ScrollTrigger);

const LocationSection = () => {
  const sectionRef = useRef(null);
  const arrowRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);
  const arcsRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 60%", once: true },
        },
      );

      // Description
      gsap.fromTo(
        descRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 60%", once: true },
        },
      );

      // CTA
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.5,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 60%", once: true },
        },
      );

      // Scribble arrow - draw stroke animation
      const arrowPaths = arrowRef.current?.querySelectorAll("path");
      if (arrowPaths) {
        arrowPaths.forEach((path) => {
          const length = path.getTotalLength();
          gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
          });
          gsap.to(path, {
            strokeDashoffset: 0,
            duration: 1.5,
            delay: 0.8,
            ease: "power2.inOut",
            scrollTrigger: { trigger: section, start: "top 60%", once: true },
          });
        });
      }

      // Decorative arcs fade in
      gsap.fromTo(
        arcsRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.5,
          delay: 0.5,
          ease: "power2.out",
          scrollTrigger: { trigger: section, start: "top 60%", once: true },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="location" ref={sectionRef}>
      {/* LEFT: Content */}
      <div className="location__left">
        <div className="location__content">
          <div className="location__text" ref={headingRef}>
            <h2 className="location__heading">
              <span className="location__heading-line1">The world</span>
              <span className="location__heading-line2">
                <em>aligns</em> at SouthEx
              </span>
            </h2>

            {/* Scribble Arrow */}
            <div className="location__arrow" ref={arrowRef}>
              <svg
                width="60"
                height="50"
                viewBox="0 0 60 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 40 Q15 5, 35 15 Q55 25, 30 35"
                  stroke="#c0392b"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M30 35 L25 28"
                  stroke="#c0392b"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M30 35 L36 30"
                  stroke="#c0392b"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          <p className="location__description" ref={descRef}>
            SouthEx is &ldquo;Everything you want, right where you are&rdquo;.
            We would much rather have our studio brimming with smiles and
            chatter than refer to it as anything clinical. Drop in and
            experience the Dr. Vikram&rsquo;s difference for yourself.
          </p>

          <a href="#book" className="location__cta" ref={ctaRef}>
            Book an Appointment
          </a>
        </div>

        {/* Decorative white arcs */}
        <div className="location__arcs" ref={arcsRef}>
          <svg
            className="location__arcs-svg"
            viewBox="0 0 1400 700"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M500 700 Q650 400, 800 700"
              stroke="rgba(255,255,255,0.25)"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M800 700 Q1000 300, 1200 700"
              stroke="rgba(255,255,255,0.25)"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M1100 700 Q1300 350, 1500 700"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
      </div>

      {/* RIGHT: Image */}
      <div className="location__right">
        <img
          src="/ENTRANCE.jpg"
          alt="Dr. Vikram's Dental Clinic Entrance"
          className="location__image"
        />
      </div>
    </section>
  );
};

export default LocationSection;
