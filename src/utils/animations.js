import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ── Fade In Up Animation ──
export const fadeInUp = (element, options = {}) => {
  const defaults = {
    duration: 0.8,
    delay: 0,
    stagger: 0.1,
    ease: "power3.out",
    scrollTrigger: true,
  };
  const config = { ...defaults, ...options };

  const triggers = config.scrollTrigger
    ? {
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    : {};

  return gsap.fromTo(
    element,
    { opacity: 0, y: 60 },
    {
      opacity: 1,
      y: 0,
      duration: config.duration,
      delay: config.delay,
      stagger: config.stagger,
      ease: config.ease,
      ...triggers,
    },
  );
};

// ── Scale In Animation ──
export const scaleIn = (element, options = {}) => {
  const defaults = {
    duration: 0.8,
    delay: 0,
    stagger: 0.12,
    ease: "back.out",
  };
  const config = { ...defaults, ...options };

  return gsap.fromTo(
    element,
    { opacity: 0, scale: 0.9 },
    {
      opacity: 1,
      scale: 1,
      duration: config.duration,
      delay: config.delay,
      stagger: config.stagger,
      ease: config.ease,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    },
  );
};

// ── Slide In From Left ──
export const slideInLeft = (element, options = {}) => {
  const defaults = {
    duration: 0.8,
    delay: 0,
    ease: "power3.out",
  };
  const config = { ...defaults, ...options };

  return gsap.fromTo(
    element,
    { opacity: 0, x: -100 },
    {
      opacity: 1,
      x: 0,
      duration: config.duration,
      delay: config.delay,
      ease: config.ease,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    },
  );
};

// ── Slide In From Right ──
export const slideInRight = (element, options = {}) => {
  const defaults = {
    duration: 0.8,
    delay: 0,
    ease: "power3.out",
  };
  const config = { ...defaults, ...options };

  return gsap.fromTo(
    element,
    { opacity: 0, x: 100 },
    {
      opacity: 1,
      x: 0,
      duration: config.duration,
      delay: config.delay,
      ease: config.ease,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    },
  );
};

// ── Rotate In Animation ──
export const rotateIn = (element, options = {}) => {
  const defaults = {
    duration: 1,
    delay: 0,
    ease: "back.out",
  };
  const config = { ...defaults, ...options };

  return gsap.fromTo(
    element,
    { opacity: 0, rotation: -15 },
    {
      opacity: 1,
      rotation: 0,
      duration: config.duration,
      delay: config.delay,
      ease: config.ease,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    },
  );
};

// ── Number Counter Animation ──
export const countUp = (element, endValue, options = {}) => {
  const defaults = {
    duration: 2,
    delay: 0,
    ease: "power1.inOut",
  };
  const config = { ...defaults, ...options };

  const obj = { value: 0 };
  gsap.to(obj, {
    value: endValue,
    duration: config.duration,
    delay: config.delay,
    ease: config.ease,
    onUpdate: () => {
      element.textContent = Math.floor(obj.value).toLocaleString();
    },
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });
};

// ── Pulse Animation ──
export const pulse = (element, options = {}) => {
  const defaults = {
    duration: 0.6,
    repeatDelay: 0.4,
    scale: 1.05,
  };
  const config = { ...defaults, ...options };

  return gsap.to(element, {
    scale: config.scale,
    duration: config.duration,
    yoyo: true,
    repeat: -1,
    repeatDelay: config.repeatDelay,
    ease: "sine.inOut",
  });
};

// ── Stagger Animation ──
export const staggerElements = (elements, options = {}) => {
  const defaults = {
    duration: 0.6,
    stagger: 0.1,
    ease: "power3.out",
  };
  const config = { ...defaults, ...options };

  return gsap.fromTo(
    elements,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: config.duration,
      stagger: config.stagger,
      ease: config.ease,
      scrollTrigger: {
        trigger: elements[0]?.parentElement,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    },
  );
};

// ── Hover Glow Effect ──
export const addHoverGlow = (element, color = "rgba(88, 173, 213, 0.3)") => {
  element.addEventListener("mouseenter", () => {
    gsap.to(element, {
      boxShadow: `0 0 20px ${color}`,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  element.addEventListener("mouseleave", () => {
    gsap.to(element, {
      boxShadow: "0 0 0px rgba(0, 0, 0, 0)",
      duration: 0.3,
      ease: "power2.out",
    });
  });
};

// ── Parallax Animation ──
export const parallax = (element, speed = 0.5) => {
  gsap.to(element, {
    y: () => window.innerHeight * speed,
    scrollTrigger: {
      trigger: element,
      scrub: true,
      markers: false,
    },
  });
};

// ── Text Split Animation ──
export const textReveal = (element, options = {}) => {
  const defaults = {
    duration: 0.8,
    delay: 0,
    stagger: 0.05,
    ease: "power2.out",
  };
  const config = { ...defaults, ...options };

  const words = element.innerText.split(" ");
  element.innerText = "";
  words.forEach((word) => {
    const span = document.createElement("span");
    span.style.display = "inline-block";
    span.style.marginRight = "0.3em";
    span.innerText = word + " ";
    element.appendChild(span);
  });

  return gsap.fromTo(
    element.querySelectorAll("span"),
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: config.duration,
      delay: config.delay,
      stagger: config.stagger,
      ease: config.ease,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    },
  );
};
