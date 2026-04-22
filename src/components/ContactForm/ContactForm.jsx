import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ContactForm.css';

gsap.registerPlugin(ScrollTrigger);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    treatment: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 75%', once: true },
        }
      );

      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 75%', once: true },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (submitted) {
      setErrors((prev) => {
        const next = { ...prev };
        if (value.trim()) delete next[name];
        else next[name] = 'Please fill out this field.';
        return next;
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Please fill out this field.';
    if (!formData.phone.trim()) newErrors.phone = 'Please fill out this field.';
    if (!formData.email.trim()) newErrors.email = 'Please fill out this field.';
    if (!formData.city.trim()) newErrors.city = 'Please fill out this field.';
    if (!formData.treatment.trim()) newErrors.treatment = 'Please fill out this field.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      setFormData({ fullName: '', phone: '', email: '', city: '', treatment: '' });
      setErrors({});
      setSubmitted(false);
    }
  };

  const hasErrors = Object.keys(errors).length > 0;

  return (
    <section className="contact-section" id="contact" ref={sectionRef}>
      <div className="contact-container">
        <div className="contact-left" ref={headingRef}>
          <h2 className="contact-heading">
            Need advice on<br />your oral health?
          </h2>
        </div>

        <div className="contact-right" ref={cardRef}>
          <div className="contact-card">
            <h3 className="contact-card__title">Book Your Consultation</h3>

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="contact-form__grid">
                <div className="contact-form__field">
                  <input
                    type="text"
                    name="fullName"
                    className="contact-form__input"
                    placeholder="YOUR FULL NAME"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                  {errors.fullName && (
                    <span className="contact-form__error">{errors.fullName}</span>
                  )}
                </div>

                <div className="contact-form__field">
                  <input
                    type="tel"
                    name="phone"
                    className="contact-form__input"
                    placeholder="YOUR PHONE NUMBER"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && (
                    <span className="contact-form__error">{errors.phone}</span>
                  )}
                </div>

                <div className="contact-form__field">
                  <input
                    type="email"
                    name="email"
                    className="contact-form__input"
                    placeholder="YOUR EMAIL ID"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <span className="contact-form__error">{errors.email}</span>
                  )}
                </div>

                <div className="contact-form__field">
                  <input
                    type="text"
                    name="city"
                    className="contact-form__input"
                    placeholder="CITY"
                    value={formData.city}
                    onChange={handleChange}
                  />
                  {errors.city && (
                    <span className="contact-form__error">{errors.city}</span>
                  )}
                </div>

                <div className="contact-form__field contact-form__field--full">
                  <textarea
                    name="treatment"
                    className="contact-form__input contact-form__textarea"
                    placeholder="TREATMENT INTERESTED IN"
                    value={formData.treatment}
                    onChange={handleChange}
                  />
                  {errors.treatment && (
                    <span className="contact-form__error">{errors.treatment}</span>
                  )}
                </div>
              </div>

              <button type="submit" className="contact-form__submit">
                Send
              </button>

              {hasErrors && (
                <div className="contact-form__banner">
                  One or more fields have an error. Please check and try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
