import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ServicesSection.css";

const _bgAssets = import.meta.glob("/src/assets/services-bg.jpg", {
  eager: true,
});
const servicesBg = _bgAssets["/src/assets/services-bg.jpg"]?.default ?? null;

gsap.registerPlugin(ScrollTrigger);

const data = [
  { name: "Full Mouth Rehabilitation", cat: "Restorative", icon: "🦷" },
  { name: "Dental Implants", cat: "Restorative", icon: "🔩" },
  { name: "Bone Grafting & Sinus Lift", cat: "Restorative", icon: "🏥" },
  { name: "Dentures", cat: "Restorative", icon: "😁" },
  { name: "Dental Crowns & Bridges", cat: "Restorative", icon: "👑" },
  { name: "Sedation Dentistry", cat: "General", icon: "💉" },
  { name: "Dentistry For Kids", cat: "General", icon: "🧒" },
  { name: "Cavity Fillings", cat: "General", icon: "🔬" },
  { name: "Wisdom Tooth Extractions", cat: "General", icon: "🦴" },
  { name: "Painless Root Canals", cat: "General", icon: "⚕️" },
  { name: "Teeth Cleaning & Polishing", cat: "General", icon: "✨" },
  { name: "Porcelain Veneers", cat: "Cosmetic", icon: "💎" },
  { name: "Invisible Aligners", cat: "Cosmetic", icon: "🌀" },
  { name: "Braces (Clear)", cat: "Cosmetic", icon: "🔲" },
  { name: "Instant Teeth Whitening", cat: "Cosmetic", icon: "🌟" },
  { name: "Tooth Bondings", cat: "Cosmetic", icon: "🔗" },
  { name: "Laser Gum Treatments", cat: "Cosmetic", icon: "🔆" },
];

const catConfig = {
  All: {
    emoji: "🏅",
    color: "#0b6e6b",
    light: "#e4f3f3",
    desc: "All treatments",
  },
  Restorative: {
    emoji: "🦷",
    color: "#e05a2b",
    light: "#fff1ec",
    desc: "Repair & rebuild",
  },
  General: {
    emoji: "⚕️",
    color: "#16a34a",
    light: "#e9faf1",
    desc: "Everyday care",
  },
  Cosmetic: {
    emoji: "✨",
    color: "#7c3aed",
    light: "#f3eeff",
    desc: "Smile makeovers",
  },
};

// const stats = [
//   { num: "1,000+", label: "Happy Patients" },
//   { num: "15+", label: "Years Experience" },
//   { num: "17+", label: "Treatments" },
//   { num: "5.0 ★", label: "Patient Rating" },
// ];

const cats = Object.keys(catConfig);

const ServicesSection = () => {
  const [active, setActive] = useState("All");
  const sectionRef = useRef(null);
  const heroContentRef = useRef(null);
  const gridRef = useRef(null);

  const filtered =
    active === "All" ? data : data.filter((d) => d.cat === active);

  useEffect(() => {
    if (!heroContentRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        Array.from(heroContentRef.current.children),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.13,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heroContentRef.current,
            start: "top 82%",
            once: true,
          },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll(".ss-item");
    if (!cards || !cards.length) return;
    gsap.fromTo(
      cards,
      { opacity: 0, x: -12 },
      {
        opacity: 1,
        x: 0,
        duration: 0.35,
        stagger: 0.04,
        ease: "power2.out",
      },
    );
  }, [active]);

  return (
    <section className="ss" ref={sectionRef}>
      {/* ── HERO ── */}
      <div className="ss-hero">
        {servicesBg && (
          <img
            className="ss-hero-bg"
            src={servicesBg}
            alt=""
            aria-hidden="true"
          />
        )}
        <div className="ss-hero-overlay" />

        <div className="ss-hero-content" ref={heroContentRef}>
          <span className="ss-badge">
            <span className="ss-badge-pulse" />
            Premier Dental Studio
          </span>
          <h2 className="ss-heading">
            <em>Goodbye</em>
            <br />
            Dental Dilemmas
          </h2>
          <p className="ss-hero-desc">
            Unparalleled general, cosmetic &amp; urgent dentistry —<br />
            built around your comfort and confidence.
          </p>
          <a href="#contact" className="faq__cta">
            Book Free Consultation
            <span className="ss-cta-arrow">→</span>
          </a>
          {/* href="#contact" className="faq__cta" */}
        </div>

        {/* Stats bar */}
        {/* <div className="ss-stats">
          {stats.map((s, i) => (
            <React.Fragment key={i}>
              <div className="ss-stat">
                <span className="ss-stat-num">{s.num}</span>
                <span className="ss-stat-label">{s.label}</span>
              </div>
              {i < stats.length - 1 && <span className="ss-stat-sep" />}
            </React.Fragment>
          ))}
        </div>*/}

        {/* Wave */}
        <div className="ss-wave" aria-hidden="true">
          <svg
            viewBox="0 0 1440 70"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,35 C240,70 480,0 720,35 C960,70 1200,0 1440,35 L1440,70 L0,70 Z"
              fill="#f6f9f9"
            />
          </svg>
        </div>
      </div>

      {/* ── SERVICES ── */}
      <div className="ss-services-wrap">
        <div className="ss-services">
          <div className="ss-services-top">
            <p className="ss-services-eyebrow">What we offer</p>
            <h3 className="ss-services-title">Care for Every Kind of Smile</h3>
            <p className="ss-services-sub">
              From your first check-up to a complete smile transformation —
              we've got you covered.
            </p>
          </div>

          {/* Category cards */}
          <div className="ss-cats">
            {cats.map((c) => {
              const cfg = catConfig[c];
              const count =
                c === "All"
                  ? data.length
                  : data.filter((d) => d.cat === c).length;
              const isActive = active === c;
              return (
                <button
                  key={c}
                  className={`ss-cat${isActive ? " ss-cat--active" : ""}`}
                  style={{ "--cat-color": cfg.color, "--cat-light": cfg.light }}
                  onClick={() => setActive(c)}
                >
                  <span className="ss-cat-emoji">{cfg.emoji}</span>
                  <span className="ss-cat-name">{c}</span>
                  <span className="ss-cat-desc">{cfg.desc}</span>
                  <span className="ss-cat-pill">{count}</span>
                </button>
              );
            })}
          </div>

          {/* Service list */}
          <div className="ss-list" ref={gridRef}>
            {filtered.map((s, i) => {
              const cfg = catConfig[s.cat];
              return (
                <a
                  href="#"
                  className="ss-item"
                  key={i}
                  style={{ "--cat-color": cfg.color, "--cat-light": cfg.light }}
                >
                  <div className="ss-item-icon">
                    <span>{s.icon}</span>
                  </div>
                  <div className="ss-item-body">
                    <span className="ss-item-name">{s.name}</span>
                    <span className="ss-item-cat">{s.cat}</span>
                  </div>
                  <span className="ss-item-arrow">→</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
