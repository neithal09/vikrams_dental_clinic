import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BeforeAfterSlider from "./BeforeAfterSlider";
import "swiper/css";
import "swiper/css/pagination";
import "./SmileGallery.css";

gsap.registerPlugin(ScrollTrigger);

const cases = [
  {
    name: "Zayn",
    category: "smile",
    description:
      "A seamless smile transformation using porcelain veneers. Patient travelled from California. Flawless results delivered in one week.",
    before: "https://experteethcare.com/wp-content/uploads/2025/12/zayn-1.webp",
    after: "https://experteethcare.com/wp-content/uploads/2025/12/zayn-2.webp",
  },
  {
    name: "Pratiksha Malu",
    category: "smile",
    description:
      "When braces couldn't prevent recurring gaps, porcelain veneers delivered the solution. Front 6 teeth restored in just 7 days.",
    before: "https://experteethcare.com/wp-content/uploads/2025/12/zayn-1.webp",
    after: "https://experteethcare.com/wp-content/uploads/2025/12/zayn-2.webp",
  },
  {
    name: "Ritu Joshi",
    category: "smile",
    description:
      "Teeth discoloration caused by fluorosis corrected with front 6 porcelain veneers. Patient travelled from Bangalore for a 5-day smile transformation.",
    before: "https://experteethcare.com/wp-content/uploads/2025/12/zayn-1.webp",
    after: "https://experteethcare.com/wp-content/uploads/2025/12/zayn-2.webp",
  },
];

const tabs = [
  { id: "all", label: "All", icon: "⊞" },
  { id: "smile", label: "Smile Makeovers", icon: "◉" },
  { id: "whitening", label: "Teeth Whitening", icon: "★" },
  { id: "implants", label: "Implants & Crowns", icon: "♛" },
  { id: "kids", label: "Kids' Dentistry", icon: "♣" },
];

const SmileGallery = () => {
  const [activeTab, setActiveTab] = useState("all");
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  const filtered =
    activeTab === "all" ? cases : cases.filter((c) => c.category === activeTab);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 75%", once: true },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="smile-gallery" ref={sectionRef}>
      <h2 className="smile-gallery__heading" ref={headingRef}>
        <em>Smiles, reimagined.</em>
      </h2>

      {/* Filter Tabs */}
      <div className="smile-gallery__tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`smile-gallery__tab ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="smile-gallery__tab-icon">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="smile-gallery__grid">
        {filtered.map((item, index) => (
          <div className="smile-gallery__card" key={index}>
            <BeforeAfterSlider beforeImg={item.before} afterImg={item.after} />
            <div className="smile-gallery__card-info">
              <h4 className="smile-gallery__card-name">{item.name}</h4>
              <p className="smile-gallery__card-desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="smile-gallery__dots-static">
        <span className="smile-gallery__dot active"></span>
        <span className="smile-gallery__dot"></span>
        <span className="smile-gallery__dot"></span>
      </div>
    </section>
  );
};

export default SmileGallery;
