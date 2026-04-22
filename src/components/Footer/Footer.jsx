import React from "react";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer__container">
        {/* Left Column */}
        <div className="footer__col footer__col--left">
          <h2 className="footer__heading">Get in Touch</h2>

          <div className="footer__socials">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="Instagram"
            >
              <FaInstagram className="footer__social-icon" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="footer__social-icon" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="Facebook"
            >
              <FaFacebookF className="footer__social-icon" />
            </a>
          </div>

          {/* Decorative tooth icon */}
          <svg
            className="footer__tooth-icon"
            width="36"
            height="36"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 2C12.5 2 10 3.5 8.5 5.5C7 7.5 6.5 10 7 12.5C7.5 15 8 17 8.5 19.5C9 22 9.5 24.5 10.5 27C11 28.5 12 30 13.5 30C15 30 15.5 28 15.8 26C16 24.5 16 24.5 16.2 26C16.5 28 17 30 18.5 30C20 30 21 28.5 21.5 27C22.5 24.5 23 22 23.5 19.5C24 17 24.5 15 25 12.5C25.5 10 25 7.5 23.5 5.5C22 3.5 19.5 2 16 2Z"
              fill="white"
              opacity="0.25"
            />
          </svg>
        </div>

        {/* Middle Column */}
        <div className="footer__col footer__col--middle">
          <nav className="footer__nav">
            <a href="#hero" className="footer__nav-link">
              Home
            </a>
            <a href="#contact" className="footer__nav-link">
              Book an Appointment
            </a>
          </nav>
        </div>

        {/* Right Column */}
        <div className="footer__col footer__col--right">
          <div className="footer__hours">
            <span className="footer__hours-time">10am – 8pm</span>
            <span className="footer__hours-days">Monday – Saturday</span>
          </div>

          <address className="footer__info">
            <p className="footer__clinic-name">
              Dr. Vikram’s Dental Clinic
            </p>
            <p className="footer__address">
              South Extension Part 2,
              <br />
              New Delhi – 110049
            </p>

            <div className="footer__contact-lines">
              <a href="tel:+919820020221" className="footer__phone">
                +91 98200 20221
              </a>

              <a
                href="mailto:info@drvikramsdental.com"
                className="footer__email"
              >
                info@drvikramsdental.com
              </a>
            </div>
          </address>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <p className="footer__copyright">
          © {new Date().getFullYear()} Dr. Vikram’s Dental Clinic.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
