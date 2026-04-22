import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const navLinks = [
  { href: "/", label: "Home", isInternal: true },
  { href: "/about", label: "About Vikram's Dental Clinic", isInternal: true },
  { href: "/about-doctor", label: "About Dr. Vikram", isInternal: true },
  { href: "/services", label: "Services", isInternal: true },
  { href: "/book-appointment", label: "Book an Appointment", isInternal: true },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleLinkClick = (href, isInternal) => {
    setActiveLink(href);
    setMenuOpen(false);
    if (!isInternal) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* ── NAV BAR ── */}
      <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <div className="navbar__container">
          <Link to="/" className="navbar__logo">
            <span className="navbar__logo-text">Vikram's Dental Clinic</span>
          </Link>

          <div className="navbar__right">
            <Link
              to="/book-appointment"
              className="navbar__book-btn"
              onClick={() => handleLinkClick("/book-appointment", true)}
            >
              Book an Appointment
            </Link>

            <button
              className={`navbar__hamburger ${menuOpen ? "active" : ""}`}
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* ── FULL-SCREEN OVERLAY ──
          Rendered as a SIBLING of <nav>, NOT inside it.
          This ensures backdrop-filter on .navbar--scrolled never creates a
          stacking context that confines the overlay's z-index: 9999,
          which would prevent the hamburger from receiving click events. */}
      <div
        className={`navbar__overlay ${menuOpen ? "navbar__overlay--open" : ""}`}
        aria-hidden={!menuOpen}
      >
        {/* Decorative beige arc */}
        <div className="navbar__overlay-arc" />

        {/* Close button */}
        <button
          className="navbar__overlay-close"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          ×
        </button>

        {/* Navigation links */}
        <div className="navbar__overlay-nav">
          {navLinks.map((link) =>
            link.isInternal ? (
              <Link
                key={link.href}
                to={link.href}
                className={activeLink === link.href ? "active" : ""}
                onClick={() => handleLinkClick(link.href, true)}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className={activeLink === link.href ? "active" : ""}
                onClick={() => handleLinkClick(link.href, false)}
              >
                {link.label}
              </a>
            ),
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
