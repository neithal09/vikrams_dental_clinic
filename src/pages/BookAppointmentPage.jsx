import React, { useEffect, useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./BookAppointmentPage.css";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Smooth Check-In",
    desc: "No paperwork, no delays. Our front desk team will greet you warmly, confirm your appointment details, and prepare your private consultation room.",
  },
  {
    num: "02",
    title: "Comprehensive Examination",
    desc: "We dive deep to understand your dental needs — full dental & medical history review, detailed intraoral check-up, digital X-rays if needed, and expert diagnosis from our specialist.",
  },
  {
    num: "03",
    title: "Personalised Treatment Plan",
    desc: "We walk you through your options clearly — explaining every treatment in detail, along with pricing, timelines, and materials — so you feel fully informed and confident in your choice.",
  },
  {
    num: "04",
    title: "Begin Your Smile Journey",
    desc: "Once you're ready, we schedule your treatment at your most convenient time. Our team is with you every step — from the first visit to your final confident smile.",
  },
];

export default function BookAppointmentPage() {
  const heroTextRef = useRef(null);
  const heroPhotoRef = useRef(null);
  const stepsRef = useRef(null);
  const formSectionRef = useRef(null);
  const assuranceRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useLayoutEffect(() => {
    // Add class to navbar for this page only - BEFORE paint
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      navbar.classList.add("navbar--book-appointment");
    }

    return () => {
      // Remove class when leaving this page
      if (navbar) {
        navbar.classList.remove("navbar--book-appointment");
      }
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text fade up on mount
      if (heroTextRef.current) {
        const els = heroTextRef.current.querySelectorAll(
          ".ba-intro__eyebrow, .ba-intro__h1, .ba-intro__sub, .ba-intro__micro-stats, .ba-intro__cta",
        );
        gsap.fromTo(
          els,
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: "power3.out",
            delay: 0.2,
          },
        );
      }

      // Hero photo subtle scale in
      if (heroPhotoRef.current) {
        gsap.fromTo(
          heroPhotoRef.current,
          { scale: 1.06, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            delay: 0.1,
          },
        );
      }

      // Steps stagger slide up with ScrollTrigger
      if (stepsRef.current) {
        const stepEls = stepsRef.current.querySelectorAll(".ba-step");
        gsap.fromTo(
          stepEls,
          { opacity: 0, y: 48 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.14,
            ease: "power3.out",
            scrollTrigger: {
              trigger: stepsRef.current,
              start: "top 78%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // Form section fade in on scroll
      if (formSectionRef.current) {
        gsap.fromTo(
          formSectionRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: formSectionRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // Assurance banner fade in
      if (assuranceRef.current) {
        gsap.fromTo(
          assuranceRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: assuranceRef.current,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          },
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="ba">
      {/* ── SECTION 1: Cinematic Hero Split ── */}
      <section className="ba-intro">
        {/* Left: Doctor portrait */}
        <div className="ba-intro__photo-side">
          <img
            ref={heroPhotoRef}
            src="/JAYVIKRAM.jpeg"
            alt="Dr. Jay Vikram"
            className="ba-intro__photo"
          />
          <div className="ba-intro__photo-overlay" />
          <div className="ba-intro__badge">
            <span className="ba-intro__badge-num">25+</span>
            <span className="ba-intro__badge-text">
              Years of Dental Excellence
            </span>
          </div>
        </div>

        {/* Right: Dark panel with heading + subtext */}
        <div className="ba-intro__text-side" ref={heroTextRef}>
          <span className="ba-intro__eyebrow">
            Est. 2004 · South Extension, New Delhi
          </span>
          <h1 className="ba-intro__h1">
            Book Your
            <br />
            <em>Appointment</em>
          </h1>
          <p className="ba-intro__sub">
            Every consultation at Vikram's Dental Clinic is a personalised
            experience in precision and comfort. Step into a practice where 25
            years of expertise meets the most advanced dental technology —
            crafting smiles that feel as confident as they look.
          </p>

          <div className="ba-intro__micro-stats">
            <div className="ba-intro__micro-stat">
              <span className="ba-micro-num">10,000+</span>
              <span className="ba-micro-label">Patients Treated</span>
            </div>
            <div className="ba-intro__micro-sep" />
            <div className="ba-intro__micro-stat">
              <span className="ba-micro-num">25+</span>
              <span className="ba-micro-label">Years Experience</span>
            </div>
            <div className="ba-intro__micro-sep" />
            <div className="ba-intro__micro-stat">
              <span className="ba-micro-num">Nobel</span>
              <span className="ba-micro-label">Biocare Certified</span>
            </div>
          </div>

          <a href="#ba-form" className="ba-intro__cta">
            Reserve Your Slot <span>↓</span>
          </a>
        </div>
      </section>

      {/* ── SECTION 2: What Happens at Your Consultation ── */}
      <section className="ba-journey">
        <div className="ba-container">
          <div className="ba-journey__head">
            <span className="ba-eyebrow">Your Journey</span>
            <h2 className="ba-h2">
              What Happens In Your
              <br />
              <em>Consultation</em>
            </h2>
          </div>

          <div className="ba-journey__steps" ref={stepsRef}>
            {steps.map((step) => (
              <div className="ba-step" key={step.num}>
                <span className="ba-step__ghost">{step.num}</span>
                <div className="ba-step__badge">{step.num}</div>
                <h3 className="ba-step__title">{step.title}</h3>
                <p className="ba-step__desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Booking Form ── */}
      <section className="ba-form-section" id="ba-form" ref={formSectionRef}>
        <div className="ba-form-grid">
          {/* LEFT: Clinic Info Panel */}
          <div className="ba-form-info">
            <span className="ba-eyebrow">Vikram's Dental Clinic</span>
            <h3 className="ba-form-info__h3">
              Reserve Your
              <br />
              <em>Consultation</em>
            </h3>
            <div className="ba-form-info__rule" />

            <div className="ba-info-row">
              <span className="ba-info-icon">⊙</span>
              <div>
                <strong>Location</strong>
                <p>
                  D-42, South Extension Part-II,
                  <br />
                  New Delhi – 110049
                </p>
              </div>
            </div>

            <div className="ba-info-row">
              <span className="ba-info-icon">◷</span>
              <div>
                <strong>Clinic Hours</strong>
                <p>
                  Monday – Saturday
                  <br />
                  10:00 AM – 8:30 PM
                </p>
              </div>
            </div>

            <div className="ba-info-row">
              <span className="ba-info-icon">✆</span>
              <div>
                <strong>Call or WhatsApp</strong>
                <p>
                  <a href="tel:+918800971008">+91 8800971008</a>
                </p>
              </div>
            </div>

            <div className="ba-info-row">
              <span className="ba-info-icon">✉</span>
              <div>
                <strong>Email</strong>
                <p>
                  <a href="mailto:info@vikramsdental.com">
                    vikramsdentalclinic@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="ba-form-trust">
              <div className="ba-trust-item">
                <span>✓</span> IDA Member
              </div>
              <div className="ba-trust-item">
                <span>✓</span> Nobel Biocare
              </div>
              <div className="ba-trust-item">
                <span>✓</span> 25+ Years
              </div>
            </div>
          </div>

          {/* RIGHT: Actual Form */}
          <div className="ba-form-card">
            <h3 className="ba-form-card__title">Book Your Consultation</h3>
            <p className="ba-form-card__sub">
              Fill in the details below and our team will confirm your
              appointment within 2 hours.
            </p>

            <form
              className="ba-form"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="ba-form__row">
                <div className="ba-field">
                  <label className="ba-label">Full Name</label>
                  <input
                    type="text"
                    className="ba-input"
                    placeholder="Dr. / Mr. / Ms. Your Name"
                    required
                  />
                </div>
                <div className="ba-field">
                  <label className="ba-label">Phone Number</label>
                  <input
                    type="tel"
                    className="ba-input"
                    placeholder="+91 XXXXX XXXXX"
                    required
                  />
                </div>
              </div>

              <div className="ba-form__row">
                <div className="ba-field">
                  <label className="ba-label">Email Address</label>
                  <input
                    type="email"
                    className="ba-input"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="ba-field">
                  <label className="ba-label">Treatment Interested In</label>
                  <select
                    className="ba-input ba-select"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option>Dental Implants</option>
                    <option>Lingual Orthodontics</option>
                    <option>Metal Free Crowns &amp; Bridges</option>
                    <option>Root Canal Treatment</option>
                    <option>Cosmetic Dentistry</option>
                    <option>Scaling &amp; Cleaning</option>
                    <option>Dentures</option>
                    <option>Tooth Extractions</option>
                    <option>Braces &amp; Orthodontics</option>
                    <option>General Consultation</option>
                  </select>
                </div>
              </div>

              <div className="ba-form__row">
                <div className="ba-field">
                  <label className="ba-label">Preferred Date</label>
                  <input type="date" className="ba-input" />
                </div>
                <div className="ba-field">
                  <label className="ba-label">Preferred Time</label>
                  <select className="ba-input ba-select" defaultValue="">
                    <option value="">Any time</option>
                    <option>10:00 AM – 12:00 PM</option>
                    <option>12:00 PM – 2:00 PM</option>
                    <option>2:00 PM – 4:00 PM</option>
                    <option>4:00 PM – 6:00 PM</option>
                    <option>6:00 PM – 8:00 PM</option>
                  </select>
                </div>
              </div>

              <div className="ba-field ba-field--full">
                <label className="ba-label">
                  Additional Message (Optional)
                </label>
                <textarea
                  className="ba-input ba-textarea"
                  placeholder="Any specific concerns, previous dental history, or questions for Dr. Vikram..."
                  rows={4}
                />
              </div>

              <button type="submit" className="ba-submit">
                Confirm Appointment Request{" "}
                <span className="ba-submit-arrow">→</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Assurance Banner ── */}
      <div className="ba-assurance" ref={assuranceRef}>
        <div className="ba-container">
          <div className="ba-assurance__grid">
            <div className="ba-assurance__item">
              <span className="ba-assurance__num">25+</span>
              <span className="ba-assurance__label">Years of Practice</span>
            </div>
            <div className="ba-assurance__sep" />
            <div className="ba-assurance__item">
              <span className="ba-assurance__num">10,000+</span>
              <span className="ba-assurance__label">Patients Treated</span>
            </div>
            <div className="ba-assurance__sep" />
            <div className="ba-assurance__item">
              <span className="ba-assurance__num">IDA</span>
              <span className="ba-assurance__label">Member Certified</span>
            </div>
            <div className="ba-assurance__sep" />
            <div className="ba-assurance__item">
              <span className="ba-assurance__num">Nobel</span>
              <span className="ba-assurance__label">Biocare Partner</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
