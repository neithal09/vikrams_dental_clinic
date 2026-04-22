import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AboutDoctorPage.css";
import { FaShieldAlt, FaTimes, FaChevronDown } from "react-icons/fa";

const AboutDoctorPage = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = (image) => {
    setLightboxImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImage(null);
  };

  return (
    <div className="adp">
      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section className="adp-hero">
        <div className="adp-hero__bg" aria-hidden="true" />
        <div className="adp-hero__overlay" aria-hidden="true" />

        <div className="adp-hero__content">
          <p className="adp-hero__eyebrow">
            Our Team · Expertise &amp; Excellence
          </p>

          <h1 className="adp-hero__h1">
            Meet Our
            <br />
            <em>Doctors</em>
          </h1>

          <p className="adp-hero__subtitle">
            25+ Years of Combined Dental Excellence
          </p>
        </div>

        <div className="adp-hero__scroll" aria-hidden="true">
          <FaChevronDown />
        </div>
      </section>

      {/* ── 2. STATS BAR ─────────────────────────────────────────── */}
      <div className="adp-stats">
        <div className="adp-stat">
          <span className="adp-stat__number">25+</span>
          <span className="adp-stat__label">Years Experience</span>
        </div>

        <div className="adp-stat__sep" aria-hidden="true" />

        <div className="adp-stat">
          <span className="adp-stat__number">2</span>
          <span className="adp-stat__label">Specialists</span>
        </div>

        <div className="adp-stat__sep" aria-hidden="true" />

        <div className="adp-stat">
          <span className="adp-stat__number">BDS + MDS</span>
          <span className="adp-stat__label">Qualifications</span>
        </div>

        <div className="adp-stat__sep" aria-hidden="true" />

        <div className="adp-stat">
          <span className="adp-stat__number">IDA</span>
          <span className="adp-stat__label">Memberships</span>
        </div>
      </div>

      {/* ── 3. SECTION INTRO ─────────────────────────────────────── */}
      <section className="adp-intro">
        <div className="adp-container">
          <p className="adp-intro__eyebrow">Our Doctors</p>
          <h2 className="adp-intro__h2">The Faces Behind Your Perfect Smile</h2>
          <p className="adp-intro__body">
            At Vikram's Dental Clinic, our doctors bring decades of combined
            expertise in prosthodontics, implantology, and comprehensive dental
            care. Their commitment to continuous learning and patient-centric
            practice ensures every smile receives world-class treatment.
          </p>
        </div>
      </section>

      {/* ── 4 · 5 · 6. PROFILE CARDS ─────────────────────────────── */}
      <section className="adp-profiles">
        <div className="adp-container">
          {/* ── Dr. Jay Vikram ─────────────────────────────────── */}
          <article className="adp-profile">
            {/* Image — LEFT */}
            <div className="adp-profile__img-wrap">
              <img
                src="/JAYVIKRAM.jpeg"
                alt="Dr. Jay Vikram"
                className="adp-profile__img"
              />
            </div>

            {/* Info — RIGHT */}
            <div className="adp-profile__info">
              <h3 className="adp-profile__name">Dr. Jay Vikram</h3>
              <span className="adp-profile__badge">
                Prosthodontist &amp; Implantologist
              </span>
              <div className="adp-profile__rule" />

              <ul className="adp-qual-list">
                <li className="adp-qual-row">
                  <span className="adp-qual-dot" aria-hidden="true" />
                  <span>
                    <strong>Experience:</strong> 25 years in these fields
                  </span>
                </li>
                <li className="adp-qual-row">
                  <span className="adp-qual-dot" aria-hidden="true" />
                  <span>
                    <strong>BDS:</strong> S.D.M College of Dental Sciences
                    (1998)
                  </span>
                </li>
                <li className="adp-qual-row">
                  <span className="adp-qual-dot" aria-hidden="true" />
                  <span>
                    <strong>MDS:</strong> S.D.M College of Dental Sciences
                    (2001)
                  </span>
                </li>
                <li className="adp-qual-row">
                  <span className="adp-qual-dot" aria-hidden="true" />
                  <span>
                    <strong>Current Role:</strong> Co-Owner of Vikram's Dental
                    Clinic South Extension 2, Delhi (practicing since 2004)
                  </span>
                </li>
                <li className="adp-qual-row">
                  <span className="adp-qual-dot" aria-hidden="true" />
                  <span>
                    <strong>Past Experience:</strong> Professor in School of
                    Dental Sciences Sharda University, Greater Noida till 2020
                  </span>
                </li>
                <li className="adp-qual-row">
                  <span className="adp-qual-dot" aria-hidden="true" />
                  <span>
                    <strong>Publications:</strong> Authored many National &amp;
                    International research publications
                  </span>
                </li>
                <li className="adp-qual-row">
                  <span className="adp-qual-dot" aria-hidden="true" />
                  <span>
                    <strong>Memberships:</strong> Member of Indian Dental
                    Association and Lifetime member of Indian Prosthodontic
                    Society
                  </span>
                </li>
              </ul>

              <div className="adp-shield">
                <FaShieldAlt aria-hidden="true" />
                <span>Registered &amp; Certified</span>
              </div>

              <div
                className="adp-cert"
                role="button"
                tabIndex={0}
                aria-label="View DDC Registration Certificate for Dr. Jay Vikram"
                onClick={() =>
                  openLightbox({
                    src: "/DDC Registration-Dr Jay Vikram-1.jpg",
                    title: "DDC Registration Certificate — Dr. Jay Vikram",
                    alt: "DDC Registration Certificate — Dr. Jay Vikram",
                  })
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ")
                    openLightbox({
                      src: "/DDC Registration-Dr Jay Vikram-1.jpg",
                      title: "DDC Registration Certificate — Dr. Jay Vikram",
                      alt: "DDC Registration Certificate — Dr. Jay Vikram",
                    });
                }}
              >
                <img
                  src="/DDC Registration-Dr Jay Vikram-1.jpg"
                  alt="DDC Registration Certificate thumbnail"
                  className="adp-cert__img"
                />
                <div className="adp-cert__label">View Certificate →</div>
              </div>
            </div>
          </article>

          {/* ── 5. DECORATIVE DIVIDER ──────────────────────────── */}
          <div className="adp-divider" aria-hidden="true">
            <div className="adp-divider__line" />
            <span className="adp-divider__ornament">✦</span>
            <div className="adp-divider__line" />
          </div>

          {/* ── Dr. Abhilasha Vikram ────────────────────────────── */}
          <article className="adp-profile adp-profile--reverse">
            {/* Info — LEFT (DOM first, rendered left via grid) */}
            <div className="adp-profile__info">
              <h3 className="adp-profile__name">Dr. Abhilasha Vikram</h3>
              <span className="adp-profile__badge">
                Implantologist &amp; Dental Surgeon
              </span>
              <div className="adp-profile__rule" />

              <ul className="adp-qual-list">
                <li className="adp-qual-row">
                  <span className="adp-qual-dot" aria-hidden="true" />
                  <span>
                    <strong>Experience:</strong> 25 years in these fields
                  </span>
                </li>
                <li className="adp-qual-row">
                  <span className="adp-qual-dot" aria-hidden="true" />
                  <span>
                    <strong>BDS:</strong> Budha Institute of Dental Sciences
                    &amp; Hospital (1999)
                  </span>
                </li>
                <li className="adp-qual-row">
                  <span className="adp-qual-dot" aria-hidden="true" />
                  <span>
                    <strong>P.G.C.C.A.O.I:</strong> Manipal Academy Of Higher
                    Education (2006)
                  </span>
                </li>
                <li className="adp-qual-row">
                  <span className="adp-qual-dot" aria-hidden="true" />
                  <span>
                    <strong>Experience:</strong> House Surgeon in Periodontology
                    Dept, Govt College of Dentistry Indore (2000–01), District
                    Hospital Katni (2002–03)
                  </span>
                </li>
                <li className="adp-qual-row">
                  <span className="adp-qual-dot" aria-hidden="true" />
                  <span>
                    <strong>Establishment:</strong> Established SMILE CARE
                    DENTAL CLINIC in Katni in 2003
                  </span>
                </li>
                <li className="adp-qual-row">
                  <span className="adp-qual-dot" aria-hidden="true" />
                  <span>
                    <strong>Current Role:</strong> Co-Owner of Vikram's Dental
                    Clinic South Extension 2, Delhi (practicing since 2004)
                  </span>
                </li>
                <li className="adp-qual-row">
                  <span className="adp-qual-dot" aria-hidden="true" />
                  <span>
                    <strong>Publications:</strong> Authored many National &amp;
                    International research publications
                  </span>
                </li>
                <li className="adp-qual-row">
                  <span className="adp-qual-dot" aria-hidden="true" />
                  <span>
                    <strong>Memberships:</strong> Member of Indian Dental
                    Association and Indian Academy Of Osseointegration
                  </span>
                </li>
              </ul>

              <div className="adp-shield">
                <FaShieldAlt aria-hidden="true" />
                <span>Registered &amp; Certified</span>
              </div>

              <div
                className="adp-cert"
                role="button"
                tabIndex={0}
                aria-label="View DDC Registration Certificate for Dr. Abhilasha Vikram"
                onClick={() =>
                  openLightbox({
                    src: "/DDC REGISTRATION- ABHILASHA-1.jpg",
                    title:
                      "DDC Registration Certificate — Dr. Abhilasha Vikram",
                    alt: "DDC Registration Certificate — Dr. Abhilasha Vikram",
                  })
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ")
                    openLightbox({
                      src: "/DDC REGISTRATION- ABHILASHA-1.jpg",
                      title:
                        "DDC Registration Certificate — Dr. Abhilasha Vikram",
                      alt: "DDC Registration Certificate — Dr. Abhilasha Vikram",
                    });
                }}
              >
                <img
                  src="/DDC REGISTRATION- ABHILASHA-1.jpg"
                  alt="DDC Registration Certificate thumbnail"
                  className="adp-cert__img"
                />
                <div className="adp-cert__label">View Certificate →</div>
              </div>
            </div>

            {/* Image — RIGHT */}
            <div className="adp-profile__img-wrap">
              <img
                src="/ABHILASHA.jpeg"
                alt="Dr. Abhilasha Vikram"
                className="adp-profile__img"
              />
            </div>
          </article>
        </div>
      </section>

      {/* ── 7. CTA SECTION ───────────────────────────────────────── */}
      <section className="adp-cta">
        <div className="adp-container adp-cta__inner">
          <p className="adp-cta__eyebrow">Ready to get started?</p>
          <h2 className="adp-cta__h2">Book a Consultation</h2>
          <p className="adp-cta__sub">
            Experience personalized dental care from our expert team
          </p>
          <Link to="/book-appointment" className="adp-cta__btn">
            Schedule Appointment
          </Link>
        </div>
      </section>

      {/* ── 8. LIGHTBOX ──────────────────────────────────────────── */}
      {lightboxOpen && (
        <div
          className="adp-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Certificate viewer"
          onClick={closeLightbox}
        >
          <div
            className="adp-lightbox__content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="adp-lightbox__close"
              onClick={closeLightbox}
              aria-label="Close certificate viewer"
            >
              <FaTimes />
            </button>

            <img
              src={lightboxImage?.src}
              alt={lightboxImage?.alt}
              className="adp-lightbox__img"
            />

            <p className="adp-lightbox__title">{lightboxImage?.title}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutDoctorPage;
