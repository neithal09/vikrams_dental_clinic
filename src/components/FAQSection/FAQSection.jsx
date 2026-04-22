import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./FAQSection.css";

gsap.registerPlugin(ScrollTrigger);

const faqData = [
  {
    question:
      "What's the best toothbrush and toothpaste for healthy teeth and gums?",
    answer:
      "For most people, a medium-bristled toothbrush and a fluoride toothpaste work best to protect enamel and prevent gum problems. If you've had a smile makeover, veneers, or whitening, we recommend specially formulated pastes that are gentle yet effective. At Dr. Vikram's Dental Clinic, we guide every patient on the right products so your smile stays brighter for longer.",
    tag: "Oral Hygiene",
  },
  {
    question: "Is instant teeth whitening safe and how does it work?",
    answer:
      "Yes — when done by a dental professional, instant teeth whitening is both safe and effective. At Dr. Vikram's Dental Clinic, we use advanced systems that gently break down stains in just one session, leaving your teeth visibly brighter without harming the enamel. Unlike DIY kits, our treatment is designed to give fast results while keeping your smile healthy.",
    tag: "Whitening",
  },
  {
    question: "Can a smile makeover really be done in just 7 days?",
    answer:
      "Absolutely. Thanks to modern techniques like veneers, crowns, bonding, and digital smile design, we can transform your smile in as little as a week. At Dr. Vikram's Dental Clinic, every case is customised — from closing gaps to perfecting alignment and whitening — so you walk out with a confident, natural-looking smile in just 7 days.",
    tag: "Smile Makeover",
  },
  {
    question: "How much does a smile makeover cost in Delhi?",
    answer:
      "The cost of a smile makeover depends on what your smile needs — from whitening and veneers to full corrections. Instead of a one-size-fits-all package, we create a personalised plan that balances your goals, time, and budget. The best way to know your smile makeover cost in Delhi is through a detailed consultation at Dr. Vikram's Dental Clinic.",
    tag: "Pricing",
  },
  {
    question:
      "Why choose Dr. Vikram's Dental Clinic for cosmetic dentistry in South Extension?",
    answer:
      "Dr. Vikram's Dental Clinic is a luxury dental studio in South Extension, Delhi, led by Dr. Vikram, known for advanced cosmetic dentistry and natural-looking results. From instant whitening to complete smile makeovers in just 7 days, we combine world-class technology with personalised care in a five-star setting. Here, every smile is crafted to perfection.",
    tag: "About Us",
  },
];

/* Animated answer panel — re-mounts on key change to trigger CSS animation */
const AnswerPanel = ({ item, index, total }) => (
  <div className="faq__panel-inner" key={index}>
    <span className="faq__panel-tag">{item.tag}</span>
    <div className="faq__panel-quote">&ldquo;</div>
    <p className="faq__panel-answer">{item.answer}</p>
    <div className="faq__panel-footer">
      <span className="faq__panel-counter">
        {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </span>
      <a href="#contact" className="faq__cta">
        Book a Free Consultation
        <span className="faq__cta-arrow">→</span>
      </a>
    </div>
  </div>
);

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const questionsRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Header fade-in */
      gsap.fromTo(
        headerRef.current.children,
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            once: true,
          },
        },
      );

      /* Question list stagger from left */
      const btns = questionsRef.current?.querySelectorAll(".faq__q-btn");
      if (btns) {
        gsap.fromTo(
          btns,
          { opacity: 0, x: -24 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.09,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 74%",
              once: true,
            },
          },
        );
      }

      /* Answer panel slide-in */
      gsap.fromTo(
        panelRef.current,
        { opacity: 0, x: 32 },
        {
          opacity: 1,
          x: 0,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            once: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="faq" className="faq" ref={sectionRef}>
      {/* ── HEADER ── */}
      <div className="faq__header" ref={headerRef}>
        <p className="faq__eyebrow">Frequently Asked</p>
        <h2 className="faq__heading">
          Got <em>Questions?</em>
          <br />
          We&rsquo;ve got answers.
        </h2>
        <p className="faq__sub">
          Everything you need to know about our treatments, process, and what to
          expect at your visit.
        </p>
      </div>

      {/* ── BODY ── */}
      <div className="faq__body">
        {/* Left — question selector */}
        <div className="faq__questions" ref={questionsRef}>
          {faqData.map((item, i) => {
            const isActive = activeIndex === i;
            return (
              <button
                key={i}
                className={`faq__q-btn${isActive ? " faq__q-btn--active" : ""}`}
                onClick={() => setActiveIndex(i)}
                aria-pressed={isActive}
              >
                <span className="faq__q-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="faq__q-text">{item.question}</span>
                <span className="faq__q-chevron">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </span>
              </button>
            );
          })}

          {/* Mobile accordion — only visible on small screens */}
          <div className="faq__mobile">
            {faqData.map((item, i) => {
              const isOpen = activeIndex === i;
              return (
                <div
                  key={i}
                  className={`faq__m-item${isOpen ? " faq__m-item--open" : ""}`}
                >
                  <button
                    className="faq__m-btn"
                    onClick={() => setActiveIndex(isOpen ? -1 : i)}
                  >
                    <span className="faq__m-num">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="faq__m-text">{item.question}</span>
                    <span className="faq__m-icon">{isOpen ? "−" : "+"}</span>
                  </button>
                  <div
                    className="faq__m-body"
                    style={{ maxHeight: isOpen ? "400px" : "0px" }}
                  >
                    <p className="faq__m-answer">{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right — live answer panel */}
        <div className="faq__panel" ref={panelRef}>
          <AnswerPanel
            key={activeIndex}
            item={faqData[activeIndex] || faqData[0]}
            index={activeIndex >= 0 ? activeIndex : 0}
            total={faqData.length}
          />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
