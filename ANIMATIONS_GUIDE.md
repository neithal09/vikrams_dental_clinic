# GSAP Animations Implementation Guide

## Vikram's Dental Clinic Website

### Overview

This document outlines all GSAP animations implemented across the Vikram's Dental Clinic website for smooth, professional interactions and enhanced user engagement.

---

## Animation Components

### 1. **Hero Section** ⭐

- **Location**: `src/components/Hero/Hero.jsx`
- **Animations**:
  - CTA button: Scale & fade-in with elastic effect (1s, 0.5s delay)
  - Entry: Smooth appearance from bottom

---

### 2. **Doctor Section** 👨‍⚕️

- **Location**: `src/components/DoctorSection/DoctorSection.jsx`
- **Animations**:
  - Content children: Staggered fade-in from bottom (0.8s, 0.12s stagger)
  - Image panel: Slide-in from right (1s, 0.2s delay)
  - Triggered on scroll: 70% visibility

---

### 3. **Stats Bar** 📊

- **Location**: `src/components/StatsBar/StatsBar.jsx`
- **Animations**:
  - Number counters: Count-up animation (2.5s, power2.out easing)
  - Stat items: Staggered fade-in with slide-up (0.8s, 0.15s stagger)
  - Triggered on scroll: 80% visibility

---

### 4. **Services Section** 🏥

- **Location**: `src/components/ServicesSection/ServicesSection.jsx`
- **Animations**:
  - Header content: Staggered fade-in (1s, 0.13s stagger)
  - Service cards: Smooth transitions on filter changes
  - Triggered on scroll: 82% visibility

---

### 5. **Tagline Section** ✨

- **Location**: `src/components/TaglineSection/TaglineSection.jsx`
- **Animations** (Already Present):
  - Letter animation: Envelope opening/closing with letter slide
  - Left side text: Fade-in with stagger
  - Envelope animation: 6-second continuous loop

---

### 6. **Testimonials** 💬

- **Location**: `src/components/Testimonials/Testimonials.jsx`
- **Animations**:
  - Header: Fade-in from bottom (0.9s, 0.15s stagger)
  - Carousel: Swiper auto-play with smooth transitions
  - Cards: Slide in on pagination
  - Triggered on scroll: 78% visibility

---

### 7. **Smile Gallery** 📸

- **Location**: `src/components/SmileGallery/SmileGallery.jsx`
- **Animations**:
  - Heading: Fade-in from bottom (1s)
  - Filter tabs: Scale animation on click
  - Gallery cards: Staggered entry with fade-in
  - Triggered on scroll: 75% visibility

---

### 8. **FAQ Section** ❓

- **Location**: `src/components/FAQSection/FAQSection.jsx`
- **Animations**:
  - Header: Staggered fade-in (0.9s, 0.12s stagger)
  - Question panels: Slide-up on open
  - Answer panels: Fade-in with slide-down
  - Triggered on scroll: 80% visibility

---

### 9. **Location Section** 📍

- **Location**: `src/components/LocationSection/LocationSection.jsx`
- **Animations**:
  - Left content: Staggered fade-in (1s, 0.3s stagger)
  - Scribble arrow: SVG stroke animation (1.5s)
  - Text reveals: Sequential fade-in
  - Triggered on scroll: 60% visibility

---

### 10. **Contact Form** 📲

- **Location**: `src/components/ContactForm/ContactForm.jsx`
- **Animations**:
  - Form fields: Staggered fade-in with slide-up
  - Submit button: Hover effects with glow
  - Success message: Scale-in animation
  - Triggered on form interaction

---

### 11. **Book Appointment Page** 📅

- **Location**: `src/pages/BookAppointmentPage.jsx`
- **Animations**:
  - Hero text: Staggered fade-up (0.9s, 0.12s stagger)
  - Hero image: Scale-in effect (1.2s)
  - Steps section: Staggered slide-up (0.75s, 0.14s stagger)
  - Form section: Fade-in on scroll (0.85s)
  - Assurance banner: Fade-in (0.7s)

---

### 12. **Other Pages** (AboutPage, ServicesPage, AboutDoctorPage)

- Custom animations recommended for:
  - Page transitions: Fade-in from transparent
  - Content reveals: Staggered animations
  - Image galleries: Parallax effects
  - Interactive elements: Hover transforms

---

## Animation Library (`src/utils/animations.js`)

Pre-built, reusable animation functions:

```javascript
// Fade In Up
fadeInUp(element, { duration: 0.8, delay: 0, stagger: 0.1 });

// Scale In
scaleIn(element, { duration: 0.8, ease: "back.out" });

// Slide In From Left
slideInLeft(element, { duration: 0.8 });

// Slide In From Right
slideInRight(element, { duration: 0.8 });

// Rotate In
rotateIn(element, { duration: 1, ease: "back.out" });

// Count Up (Numbers)
countUp(element, 1000, { duration: 2 });

// Pulse Effect
pulse(element, { duration: 0.6, scale: 1.05 });

// Stagger Elements
staggerElements(elements, { stagger: 0.1 });

// Hover Glow
addHoverGlow(element, "rgba(88, 173, 213, 0.3)");

// Parallax
parallax(element, 0.5);

// Text Reveal
textReveal(element, { stagger: 0.05 });
```

---

## How to Add Animations to New Components

### Step 1: Import GSAP

```javascript
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
```

### Step 2: Create Refs for Elements

```javascript
const heroRef = useRef(null);
const contentRef = useRef(null);
```

### Step 3: Add useEffect with Animation

```javascript
useEffect(() => {
  const ctx = gsap.context(() => {
    // Your animations here
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );
  });

  return () => ctx.revert();
}, []);
```

### Step 4: Apply Refs to JSX Elements

```javascript
<div ref={contentRef} className="content">
  Content here
</div>
```

---

## Animation Best Practices

1. **Performance**:
   - Use `ScrollTrigger` for scroll-triggered animations
   - Limit simultaneous animations
   - Use `useLayoutEffect` for immediate DOM updates

2. **Timing**:
   - Keep animations under 1 second for UI elements
   - Use 0.1-0.2s stagger between sequential items
   - Avoid delays longer than 0.5s on page load

3. **Easing**:
   - `power3.out` - smooth, natural deceleration
   - `back.out` - elastic, playful effect
   - `sine.inOut` - gentle, smooth animation
   - `elastic.out` - bouncy, energetic feel

4. **Scroll Triggers**:
   - Set `start: 'top 80%'` to trigger when element is 80% visible
   - Use `toggleActions: 'play none none none'` to play once
   - Use `once: true` in ScrollTrigger config to optimize performance

---

## Testing Animations

1. Open browser DevTools (F12)
2. Slow down through: Settings → Performance → CPU throttling
3. Disable animations in Chrome: More tools → Rendering → Paint flashing
4. Test on mobile in DevTools device emulation

---

## Future Enhancement Opportunities

- [ ] Add parallax effects to images
- [ ] Create page transition animations
- [ ] Add loading state animations
- [ ] Implement interaction-based animations (hover, click)
- [ ] Add SVG path animations
- [ ] Create timeline animations for sequences
- [ ] Add gesture animations for mobile

---

## Resources

- GSAP Documentation: https://gsap.com/
- ScrollTrigger: https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- Easing Functions: https://gsap.com/docs/v3/Eases
- Animation Examples: https://codepen.io/collection/xnPqxo

---

**Last Updated**: April 22, 2026
