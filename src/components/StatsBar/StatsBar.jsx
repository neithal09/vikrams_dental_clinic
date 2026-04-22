import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './StatsBar.css';

gsap.registerPlugin(ScrollTrigger);

const StatsBar = () => {
  const sectionRef = useRef(null);
  const countRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Animate number counters
    const counters = [
      { ref: countRefs.current[0], target: 2500, suffix: '+', decimals: 0, useComma: true },
      { ref: countRefs.current[1], target: 10, suffix: '+', decimals: 0, useComma: false },
      { ref: countRefs.current[2], target: 4.5, suffix: '', decimals: 1, useComma: false },
    ];

    counters.forEach(({ ref, target, suffix, decimals, useComma }) => {
      if (!ref) return;
      const obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration: 2.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          once: true,
        },
        onUpdate: () => {
          let display = decimals > 0
            ? obj.val.toFixed(decimals)
            : Math.floor(obj.val);
          if (useComma) {
            display = Math.floor(obj.val).toLocaleString();
          }
          ref.textContent = display + suffix;
        },
      });
    });

    // Fade in all stat items
    gsap.fromTo(
      section.querySelectorAll('.stats-bar__item'),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          once: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const setCountRef = (index) => (el) => {
    countRefs.current[index] = el;
  };

  return (
    <section className="stats-bar" ref={sectionRef}>
      <div className="stats-bar__container">
        <div className="stats-bar__item">
          <span className="stats-bar__number" ref={setCountRef(0)}>0</span>
          <span className="stats-bar__label">Patients<br />Catered To</span>
        </div>

        <div className="stats-bar__item">
          <span className="stats-bar__number" ref={setCountRef(1)}>0</span>
          <span className="stats-bar__label">Years of<br />Experience</span>
        </div>

        <div className="stats-bar__item">
          <div className="stats-bar__rating-wrapper">
            <span className="stats-bar__number" ref={setCountRef(2)}>0</span>
            <div className="stats-bar__stars">
              {[1, 2, 3, 4].map((star) => (
                <svg key={star} className="stats-bar__star stats-bar__star--filled" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
              <svg className="stats-bar__star stats-bar__star--half" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="halfGrad">
                    <stop offset="50%" stopColor="#8a9cc5" />
                    <stop offset="50%" stopColor="#d0d5e0" />
                  </linearGradient>
                </defs>
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="url(#halfGrad)"/>
              </svg>
            </div>
          </div>
          <span className="stats-bar__label">Rating on<br />Google</span>
        </div>

        <div className="stats-bar__item stats-bar__item--text">
          <span className="stats-bar__tagline">
            Trusted<br />Care For<br />Confident<br />Smiles
          </span>
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
