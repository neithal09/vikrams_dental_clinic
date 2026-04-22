import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ServicesPage.css";
import {
  FaUserMd,
  FaMicroscope,
  FaShieldAlt,
  FaHeart,
  FaChevronDown,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const featuredServices = [
  {
    id: 1,
    name: "Dental Implants",
    tagline: "The gold standard in tooth replacement",
    description:
      "We use Dental Implants by Nobel Biocare, the world's most used Implant system. It has achieved this status by performing well in all indications, through its ease-of-use, and due to its wide range of prosthetic options. We shall be happy to provide you with its detailed brochure.",
    image: "/dental_implants_demo.png",
    tag: "Restorative",
    highlight: "Nobel Biocare System",
  },
  {
    id: 2,
    name: "Lingual Orthodontics",
    tagline: "Invisible braces, visible results",
    description:
      "There is no need to be terrified or self-conscious about wearing braces now. Lingual Orthodontics are fixed braces bonded on inside surfaces of the teeth and therefore aren't visible to others when you speak or smile. Feel free to ask for further procedural details and guidance.",
    image: "/lingual_orthodontics_demo.png",
    tag: "Cosmetic",
    highlight: "Completely Invisible",
  },
  {
    id: 3,
    name: "Metal Free Crowns & Bridges",
    tagline: "Natural-looking restoration",
    description:
      "With the newer ceramics like Procera, Lava Ceron etc, you do not have to bother about the aesthetics of the crowns & Bridges any more. The days of black metallic margins under the crowns and bridges are gone.",
    image: "/dental_crowns_bridges_demo.png",
    tag: "Restorative",
    highlight: "Procera · Lava Ceron Ceramics",
  },
];

const generalServices = [
  {
    id: 1,
    name: "Scaling & Cleaning",
    desc: "Professional removal of tartar and plaque for a healthier smile.",
    tag: "General",
  },
  {
    id: 2,
    name: "Tooth Fillings",
    desc: "Tooth-coloured composite fillings to restore decayed teeth.",
    tag: "General",
  },
  {
    id: 3,
    name: "Root Canal Treatment",
    desc: "Painless nerve/root canal treatments to save infected teeth.",
    tag: "General",
  },
  {
    id: 4,
    name: "Crowns & Bridges",
    desc: "Fixed prosthetics to replace or cap damaged teeth.",
    tag: "Restorative",
  },
  {
    id: 5,
    name: "Dental Implants",
    desc: "Permanent titanium roots for a natural look and feel.",
    tag: "Restorative",
  },
  {
    id: 6,
    name: "Partial Dentures",
    desc: "Removable partials to replace one or more missing teeth.",
    tag: "Restorative",
  },
  {
    id: 7,
    name: "Complete Dentures",
    desc: "Full-arch removable dentures for complete tooth replacement.",
    tag: "Restorative",
  },
  {
    id: 8,
    name: "Tooth Extractions",
    desc: "Simple and surgical extractions including impacted wisdom teeth.",
    tag: "General",
  },
  {
    id: 9,
    name: "Cosmetic Dentistry",
    desc: "Smile makeovers — veneers, bonding, contouring and more.",
    tag: "Cosmetic",
  },
  {
    id: 10,
    name: "Braces & Orthodontics",
    desc: "Metal, ceramic and lingual braces for teeth alignment.",
    tag: "Cosmetic",
  },
];

const valueProps = [
  {
    icon: FaUserMd,
    title: "Personal Attention",
    desc: "We value your time and medical needs. Appointments are booked exclusively to give you undivided attention — no long waiting rooms, ever.",
  },
  {
    icon: FaMicroscope,
    title: "Latest Instruments",
    desc: "Our instruments and technology are among the most advanced available to dental practitioners worldwide, enabling better outcomes.",
  },
  {
    icon: FaShieldAlt,
    title: "Strict Sterilisation",
    desc: "Ultra-hygienic standards and strict sterilisation protocols are followed without exception. Your safety is our highest priority.",
  },
  {
    icon: FaHeart,
    title: "Competitive Pricing",
    desc: "Premium quality dental care is available at highly competitive prices — because excellent dental health shouldn't be a luxury.",
  },
];

const ServicesPage = () => {
  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  const featuredRef = useRef(null);
  const gridRef = useRef(null);
  const valuesRef = useRef(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Hero content — fade up on mount
  useEffect(() => {
    if (!heroRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        Array.from(heroRef.current.children),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.13,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 82%",
            once: true,
          },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Featured cards — slide up on scroll
  useEffect(() => {
    if (!featuredRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".sp-featured__card",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: featuredRef.current,
            start: "top 75%",
            once: true,
          },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Grid cards — stagger fade in on scroll
  useEffect(() => {
    if (!gridRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".sp-grid__card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.06,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            once: true,
          },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Value cards — stagger slide up on scroll
  useEffect(() => {
    if (!valuesRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".sp-value__card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: valuesRef.current,
            start: "top 78%",
            once: true,
          },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="sp" ref={sectionRef}>
      {/* ───────────────────────────────────────────
          1. HERO
      ─────────────────────────────────────────── */}
      <section className="sp-hero">
        <div className="sp-hero__bg" aria-hidden="true" />
        <div className="sp-hero__overlay" aria-hidden="true" />

        <div className="sp-hero__content" ref={heroRef}>
          <span className="sp-hero__eyebrow">
            Est. 2004 · South Extension, New Delhi
          </span>

          <h1 className="sp-hero__h1">
            Our Dental
            <br />
            <em>Services</em>
          </h1>

          <p className="sp-hero__sub">
            Comprehensive Care · Advanced Technology · Expert Treatment
          </p>

          <div className="sp-hero__btns">
            <a
              href="#sp-featured"
              className="sp-hero__btn sp-hero__btn--primary"
            >
              Explore Services
            </a>
            <Link
              to="/book-appointment"
              className="sp-hero__btn sp-hero__btn--outline"
            >
              Book an Appointment
            </Link>
          </div>
        </div>

        <div className="sp-hero__scroll" aria-hidden="true">
          <FaChevronDown />
        </div>
      </section>

      {/* ───────────────────────────────────────────
          2. STATS BAR
      ─────────────────────────────────────────── */}
      <div className="sp-stats">
        <div className="sp-stat">
          <span className="sp-stat__num">17+</span>
          <span className="sp-stat__label">Treatments Offered</span>
        </div>

        <div className="sp-stat__sep" aria-hidden="true" />

        <div className="sp-stat">
          <span className="sp-stat__num">25+</span>
          <span className="sp-stat__label">Years Experience</span>
        </div>

        <div className="sp-stat__sep" aria-hidden="true" />

        <div className="sp-stat">
          <span className="sp-stat__num">Nobel Biocare</span>
          <span className="sp-stat__label">Implant System</span>
        </div>

        <div className="sp-stat__sep" aria-hidden="true" />

        <div className="sp-stat">
          <span className="sp-stat__num">10,000+</span>
          <span className="sp-stat__label">Patients Treated</span>
        </div>
      </div>

      {/* ───────────────────────────────────────────
          3. FEATURED / SIGNATURE SERVICES
      ─────────────────────────────────────────── */}
      <section id="sp-featured" className="sp-featured">
        <div className="sp-container">
          <div className="sp-section-head">
            <span className="sp-eyebrow">Signature Treatments</span>
            <h2 className="sp-h2">
              Where Excellence <em>Meets Care</em>
            </h2>
          </div>
        </div>

        <div className="sp-featured__list" ref={featuredRef}>
          {featuredServices.map((service, index) => (
            <div
              key={service.id}
              className={`sp-featured__card${index % 2 === 1 ? " sp-featured__card--reverse" : ""}`}
            >
              {/* Image side */}
              <div className="sp-featured__img-side">
                <img
                  src={service.image}
                  alt={service.name}
                  className="sp-featured__img"
                />
                <span className="sp-featured__num" aria-hidden="true">
                  0{service.id}
                </span>
              </div>

              {/* Content side */}
              <div className="sp-featured__content-side">
                <span className="sp-featured__tag">{service.tag}</span>
                <span className="sp-featured__highlight">
                  {service.highlight}
                </span>
                <h3 className="sp-featured__name">{service.name}</h3>
                <p className="sp-featured__tagline">{service.tagline}</p>
                <div className="sp-featured__rule" aria-hidden="true" />
                <p className="sp-featured__desc">{service.description}</p>
                <a href="#" className="sp-featured__link">
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ───────────────────────────────────────────
          4. GENERAL SERVICES GRID
      ─────────────────────────────────────────── */}
      <section className="sp-grid-section">
        <div className="sp-container">
          <div className="sp-section-head">
            <span className="sp-eyebrow">Complete Care</span>
            <h2 className="sp-h2">
              All Under <em>One Roof</em>
            </h2>
            <p className="sp-section-sub">
              From routine check-ups to complex restorations, our comprehensive
              range of treatments ensures every smile gets the care it deserves.
            </p>
          </div>

          <div className="sp-grid" ref={gridRef}>
            {generalServices.map((service) => (
              <div key={service.id} className="sp-grid__card">
                <span className="sp-grid__num" aria-hidden="true">
                  {String(service.id).padStart(2, "0")}
                </span>
                <span className="sp-grid__tag">{service.tag}</span>
                <h3 className="sp-grid__name">{service.name}</h3>
                <p className="sp-grid__desc">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────
          5. VALUE PROPOSITIONS
      ─────────────────────────────────────────── */}
      <section className="sp-values">
        <div className="sp-container">
          <div className="sp-section-head">
            <span className="sp-eyebrow">The Vikram Difference</span>
            <h2 className="sp-h2">
              Why Patients <em>Choose Us</em>
            </h2>
          </div>

          <div className="sp-values__grid" ref={valuesRef}>
            {valueProps.map((prop, index) => {
              const Icon = prop.icon;
              return (
                <div key={index} className="sp-value__card">
                  <div className="sp-value__icon-wrap">
                    <Icon className="sp-value__icon" />
                  </div>
                  <h3 className="sp-value__title">{prop.title}</h3>
                  <p className="sp-value__desc">{prop.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────
          6. FULL-WIDTH CTA BANNER
      ─────────────────────────────────────────── */}
      <section className="sp-cta">
        <div className="sp-cta__content">
          <h2 className="sp-cta__h2">
            Ready to <em>Transform</em> Your Smile?
          </h2>
          <p className="sp-cta__sub">
            Book your consultation today and take the first step towards a
            healthier, more confident smile.
          </p>
          <Link to="/book-appointment" className="sp-cta__btn">
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
