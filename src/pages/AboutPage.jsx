import React, { useState } from "react";
import "./AboutPage.css";
import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaTooth,
  FaHeartbeat,
  FaShieldAlt,
  FaTimes,
  FaChevronDown,
  FaArrowDown,
} from "react-icons/fa";

const AboutPage = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [activeTab, setActiveTab] = useState("implants");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);

  const benefits = [
    "Highly skilled dental surgeons spread across all fields of dentistry.",
    "All dental procedures under one roof.",
    "Ultra-hygienic and strict standards of sterilizations are maintained.",
    "The most advanced techniques are performed using the latest equipment and materials.",
    "Highly competitive priced fee structure.",
  ];

  const implantAdvantages = [
    "Implants the only tooth replacement that maintains bone",
    "Implants – the best choice for replacing natural teeth both with function & esthetics",
    "Implants preserve healthy adjacent teeth",
    "Implants proven long-term success",
    "High Patient satisfaction",
  ];

  const treatmentOptions = [
    { name: "Removable Prosthesis", desc: "Temporary replacement solution" },
    { name: "Complete Dentures", desc: "Full mouth replacement" },
    { name: "Removable Partial Dentures", desc: "Partial tooth replacement" },
    {
      name: "Fixed Prosthesis/Conventional 'Bridge'",
      desc: "The patient has healthy beautiful teeth. To restore the missing tooth, the healthy tooth structure of the adjacent teeth are cut away and a three-unit bridge provided",
    },
    {
      name: "Dental Implants",
      desc: "Where we preserve those two healthy teeth, by placing a single implant and provide a restoration that looks feels and functions like a natural tooth. Implants are as close to natural teeth as possible, Dental implants preserve bone and healthy vital tooth structure",
    },
  ];

  const satisfactionReasons = [
    "Improved chewing function",
    "Maintained facial structure",
    "Enhanced self esteem",
  ];

  const missingTeethFacts = [
    "At age 17, more than 7% of the population is missing at least one permanent tooth",
    "By age 50 the average Indian is missing 15 teeth, including 3rd molars",
  ];

  const galleryImages = [
    { id: 1, title: "Entrance", alt: "Clinic Entrance", src: "/ENTRANCE.jpg" },
    {
      id: 2,
      title: "Reception",
      alt: "Clinic Reception",
      src: "/RECEPTION.jpg",
    },
    {
      id: 3,
      title: "Waiting Area",
      alt: "Comfortable Waiting Area",
      src: "/WAITING AREA.jpg",
    },
    {
      id: 4,
      title: "Waiting Area 2",
      alt: "Waiting Area",
      src: "/Waiting Area (2).jpg",
    },
    {
      id: 5,
      title: "Consultation Room",
      alt: "Consultation Room",
      src: "/CONSULTATION ROOM.jpg",
    },
    {
      id: 6,
      title: "Operating Area 1",
      alt: "Operating Area",
      src: "/OPERATING AREA-1.jpg",
    },
    {
      id: 7,
      title: "Operating Area 2",
      alt: "Operating Area",
      src: "/OPERATING AREA-2.jpg",
    },
  ];

  const openLightbox = (image) => {
    setLightboxImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImage(null);
  };

  return (
    <div className="ap">
      {/* ── 1. HERO ──────────────────────────────────────────── */}
      <section className="ap-hero">
        <div className="ap-hero__bg" />
        <div className="ap-hero__overlay" />

        <div className="ap-hero__content">
          <span className="ap-hero__eyebrow">
            Est. 2004 &nbsp;·&nbsp; South Extension, New Delhi
          </span>
          <h1 className="ap-hero__title">
            Vikram's
            <br />
            <em>Dental Clinic</em>
          </h1>
          <p className="ap-hero__subtitle">
            State of the Art &nbsp;·&nbsp; Professionally Managed &nbsp;·&nbsp;
            Multi-Specialty
          </p>
        </div>

        <div className="ap-hero__scroll">
          <FaArrowDown />
        </div>
      </section>

      {/* ── 2. STATS BAR ─────────────────────────────────────── */}
      <div className="ap-stats">
        <div className="ap-stat">
          <span className="ap-stat__num">25+</span>
          <span className="ap-stat__label">Years Experience</span>
        </div>
        <div className="ap-stats__sep" />
        <div className="ap-stat">
          <span className="ap-stat__num">2</span>
          <span className="ap-stat__label">Specialist Doctors</span>
        </div>
        <div className="ap-stats__sep" />
        <div className="ap-stat">
          <span className="ap-stat__num">10,000+</span>
          <span className="ap-stat__label">Patients Treated</span>
        </div>
        <div className="ap-stats__sep" />
        <div className="ap-stat">
          <span className="ap-stat__num">20+</span>
          <span className="ap-stat__label">Years in Practice</span>
        </div>
      </div>

      {/* ── 3. WELCOME ───────────────────────────────────────── */}
      <section className="ap-welcome ap-section">
        <div className="ap-container">
          <div className="ap-welcome__grid">
            <div className="ap-welcome__left">
              <div className="ap-section__header">
                <span className="ap-eyebrow">Our Story</span>
                <h2 className="ap-h2">
                  Welcome to
                  <br />
                  <em>Vikram's Dental Clinic</em>
                </h2>
              </div>
              <p className="ap-welcome__lead">
                State of the art, professionally managed and multi-speciality,
                Vikram's dental clinic is located in the prime location of south
                extension in the hub of New Delhi, India.
              </p>
              <p className="ap-welcome__text">
                Our dental clinic was established with the sole intent of
                providing ideal &amp; comfortable dental care for all our
                clients. With our highly skilled and reputed panel of specialist
                dental surgeons spanning across fields of dentistry, we provide
                an array of procedures — right from one sitting root canals to
                an advanced smile make over, dental implants and full mouth
                rehabilitations — all performed under one roof maintaining ultra
                hygienic and strict standards of sterilizations.
              </p>
            </div>

            <div className="ap-welcome__right">
              <div className="ap-welcome__divider" />
              <ul className="ap-welcome__benefits">
                {benefits.map((benefit, index) => (
                  <li key={index} className="ap-welcome__benefit-item">
                    <FaCheckCircle className="ap-welcome__benefit-icon" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. GALLERY ───────────────────────────────────────── */}
      <section className="ap-gallery ap-section">
        <div className="ap-container">
          <div className="ap-section__header">
            <span className="ap-eyebrow">Step Inside</span>
            <h2 className="ap-h2">
              Our Clinic <em>Facilities</em>
            </h2>
          </div>

          <div className="ap-gallery__grid">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="ap-gallery__item"
                onClick={() => openLightbox(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="ap-gallery__img"
                />
                <div className="ap-gallery__overlay">
                  <span className="ap-gallery__overlay-title">
                    {image.title}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="ap-gallery__note">
            ↑ &nbsp;Click any image to view full screen
          </p>
        </div>
      </section>

      {/* ── 5. WHY CHOOSE US ─────────────────────────────────── */}
      <section className="ap-benefits ap-section">
        <div className="ap-container">
          <div className="ap-section__header">
            <span className="ap-eyebrow">Our Strengths</span>
            <h2 className="ap-h2">
              Why <em>Choose Us</em>
            </h2>
          </div>

          <div className="ap-benefits__grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="ap-benefit-card">
                <div className="ap-benefit-card__icon">
                  <FaCheckCircle />
                </div>
                <p className="ap-benefit-card__text">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. DENTAL SOLUTIONS TABS ─────────────────────────── */}
      <section className="ap-tabs ap-section">
        <div className="ap-container">
          <div className="ap-section__header">
            <span className="ap-eyebrow">Treatments &amp; Information</span>
            <h2 className="ap-h2">
              Dental <em>Solutions</em>
            </h2>
          </div>

          <div className="ap-tabs__bar">
            <button
              className={`ap-tab-btn${activeTab === "implants" ? " active" : ""}`}
              onClick={() => setActiveTab("implants")}
            >
              About Dental Implants
            </button>
            <button
              className={`ap-tab-btn${activeTab === "facts" ? " active" : ""}`}
              onClick={() => setActiveTab("facts")}
            >
              Missing Teeth Facts
            </button>
            <button
              className={`ap-tab-btn${activeTab === "treatments" ? " active" : ""}`}
              onClick={() => setActiveTab("treatments")}
            >
              Treatment Options
            </button>
            <button
              className={`ap-tab-btn${activeTab === "advantages" ? " active" : ""}`}
              onClick={() => setActiveTab("advantages")}
            >
              Why Implants?
            </button>
          </div>

          <div className="ap-tab-pane">
            {/* Implants */}
            {activeTab === "implants" && (
              <div className="ap-tab-pane__inner">
                <h3 className="ap-tab-pane__title">
                  What is a Dental Implant?
                </h3>
                <p className="ap-tab-pane__highlight">
                  A Dental Implant is an artificial root that replaces the
                  natural tooth root.
                </p>
                <p className="ap-tab-pane__body">
                  Dental implants are sophisticated restorations that provide a
                  long-term solution for missing teeth. They preserve bone
                  structure and maintain facial contours, offering both
                  functional and aesthetic benefits.
                </p>
              </div>
            )}

            {/* Facts */}
            {activeTab === "facts" && (
              <div className="ap-tab-pane__inner">
                <h3 className="ap-tab-pane__title">
                  Facts About Missing Teeth
                </h3>
                <div className="ap-facts-grid">
                  {missingTeethFacts.map((fact, index) => (
                    <div key={index} className="ap-fact-card">
                      <div className="ap-fact-card__num">{index + 1}</div>
                      <p className="ap-fact-card__text">{fact}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Treatments */}
            {activeTab === "treatments" && (
              <div className="ap-tab-pane__inner">
                <h3 className="ap-tab-pane__title">
                  Treatment Options for Missing Teeth
                </h3>
                <div className="ap-treatments">
                  {treatmentOptions.map((treatment, index) => (
                    <div
                      key={index}
                      className={`ap-treatment-item${
                        treatment.name === "Dental Implants"
                          ? " ap-treatment-item--highlight"
                          : ""
                      }`}
                    >
                      <div className="ap-treatment-item__header">
                        <span className="ap-treatment-item__badge">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h4 className="ap-treatment-item__name">
                          {treatment.name}
                        </h4>
                      </div>
                      <p className="ap-treatment-item__desc">
                        {treatment.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Advantages */}
            {activeTab === "advantages" && (
              <div className="ap-tab-pane__inner">
                <h3 className="ap-tab-pane__title">
                  Advantages of Implant Treatment
                </h3>
                <p className="ap-tab-pane__body">
                  As teeth are lost, bone begins to dissolve away in the
                  edentulous (empty) space. Only when there is a tooth root or
                  implant to provide "scaffolding" can bone be maintained.
                </p>
                <ul className="ap-advantages">
                  {implantAdvantages.map((advantage, index) => (
                    <li key={index} className="ap-advantages__item">
                      <span className="ap-advantages__check">&#10003;</span>
                      <span>{advantage}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── 7. KEY INFORMATION ACCORDION ─────────────────────── */}
      <section className="ap-accordion ap-section">
        <div className="ap-container">
          <div className="ap-section__header">
            <span className="ap-eyebrow">Learn More</span>
            <h2 className="ap-h2">
              Key <em>Information</em>
            </h2>
          </div>

          {/* Comparison */}
          <div className="ap-acc-item">
            <button
              className="ap-acc-trigger"
              onClick={() =>
                setExpandedSection(
                  expandedSection === "comparison" ? null : "comparison",
                )
              }
            >
              <h3>Implants vs Other Restorative Treatments</h3>
              <span
                className={`ap-acc-icon${
                  expandedSection === "comparison" ? " open" : ""
                }`}
              >
                <FaChevronDown />
              </span>
            </button>
            {expandedSection === "comparison" && (
              <div className="ap-acc-body">
                <div className="ap-comparison">
                  <div className="ap-comparison__row ap-comparison__row--header">
                    <div className="ap-comparison__cell">Treatment Type</div>
                    <div className="ap-comparison__cell">Bone Preservation</div>
                    <div className="ap-comparison__cell">
                      Healthy Teeth Impact
                    </div>
                  </div>
                  <div className="ap-comparison__row">
                    <div className="ap-comparison__cell">
                      Removable Dentures
                    </div>
                    <div className="ap-comparison__cell">
                      Increases bone loss (4–5mm in first year)
                    </div>
                    <div className="ap-comparison__cell">
                      No impact on healthy teeth
                    </div>
                  </div>
                  <div className="ap-comparison__row">
                    <div className="ap-comparison__cell">Fixed Bridge</div>
                    <div className="ap-comparison__cell">
                      Does not maintain bone
                    </div>
                    <div className="ap-comparison__cell">
                      Requires grinding of adjacent teeth
                    </div>
                  </div>
                  <div className="ap-comparison__row ap-comparison__row--highlight">
                    <div className="ap-comparison__cell">Dental Implants</div>
                    <div className="ap-comparison__cell">
                      <strong>Maintains bone</strong>
                    </div>
                    <div className="ap-comparison__cell">
                      <strong>Preserves healthy teeth</strong>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Patient Satisfaction */}
          <div className="ap-acc-item">
            <button
              className="ap-acc-trigger"
              onClick={() =>
                setExpandedSection(
                  expandedSection === "satisfaction" ? null : "satisfaction",
                )
              }
            >
              <h3>Why Patient Satisfaction is So High?</h3>
              <span
                className={`ap-acc-icon${
                  expandedSection === "satisfaction" ? " open" : ""
                }`}
              >
                <FaChevronDown />
              </span>
            </button>
            {expandedSection === "satisfaction" && (
              <div className="ap-acc-body">
                <div className="ap-satisfaction">
                  {satisfactionReasons.map((reason, index) => (
                    <div key={index} className="ap-satisfaction__card">
                      <div className="ap-satisfaction__icon">
                        {index === 0 && <FaTooth />}
                        {index === 1 && <FaHeartbeat />}
                        {index === 2 && <FaShieldAlt />}
                      </div>
                      <p>{reason}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Eligibility */}
          <div className="ap-acc-item">
            <button
              className="ap-acc-trigger"
              onClick={() =>
                setExpandedSection(
                  expandedSection === "eligibility" ? null : "eligibility",
                )
              }
            >
              <h3>Who Can Have Implants?</h3>
              <span
                className={`ap-acc-icon${
                  expandedSection === "eligibility" ? " open" : ""
                }`}
              >
                <FaChevronDown />
              </span>
            </button>
            {expandedSection === "eligibility" && (
              <div className="ap-acc-body">
                <p className="ap-acc-body__text">
                  All patients who are healthy and who have one or more missing
                  teeth can have implant restorations. Patients without any
                  teeth can also be restored with implant restorations.
                </p>
                <p className="ap-acc-body__subtitle">Requirements:</p>
                <ul className="ap-acc-body__list">
                  <li>Good quality and quantity of jaw bone</li>
                  <li>Overall good health status</li>
                </ul>
                <p className="ap-acc-body__subtitle">Assessment Methods:</p>
                <ul className="ap-acc-body__list">
                  <li>O.P.G X-Ray</li>
                  <li>C.T Scan of the jaw bones</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── 8. CLOSING CTA ───────────────────────────────────── */}
      <section className="ap-cta">
        <div className="ap-cta__glow" />
        <div className="ap-cta__content">
          <span className="ap-eyebrow">Ready to Begin?</span>
          <h2 className="ap-cta__h2">
            Transform Your <em>Smile Today</em>
          </h2>
          <p className="ap-cta__text">
            Dental Implants are instrumental in not only improving but also
            simplifying the procedures of replacing missing teeth with near
            natural like prosthetic appliances. Thus, enhancing the patient's
            ability to function and imparting confidence by boosting Self
            Esteem.
          </p>
          <Link to="/book-appointment" className="ap-cta__btn">
            Book Your Consultation
          </Link>
        </div>
      </section>

      {/* ── 9. LIGHTBOX ──────────────────────────────────────── */}
      {lightboxOpen && (
        <div className="ap-lightbox" onClick={closeLightbox}>
          <div
            className="ap-lightbox__content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="ap-lightbox__close" onClick={closeLightbox}>
              <FaTimes />
            </button>
            <img
              src={lightboxImage?.src}
              alt={lightboxImage?.alt}
              className="ap-lightbox__img"
            />
            <p className="ap-lightbox__title">{lightboxImage?.title}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutPage;
