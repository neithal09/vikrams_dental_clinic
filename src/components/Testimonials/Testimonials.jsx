import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Testimonials.css";
import testimonialImg1 from "../../../public/2.jpeg";
import testimonialImg2 from "../../../public/3.jpeg";
import testimonialImg3 from "../../../public/4.jpeg";
import testimonialImg4 from "../../../public/kidsmile.jpg";

gsap.registerPlugin(ScrollTrigger);

const testimonialImages = [
  testimonialImg1,
  testimonialImg2,
  testimonialImg3,
  testimonialImg4,
  testimonialImg1,
  testimonialImg2,
  testimonialImg3,
];
const testimonials = [
  {
    name: "Guneet",
    treatment: "Porcelain Veneers (Smile Designing)",
    review:
      "I wanted a natural-looking smile makeover, and the porcelain veneers turned out better than I expected. They look seamless, not fake, and match my face perfectly.",
    stars: 5,
    img: testimonialImages[0],
  },
  {
    name: "Pratiksha Malu",
    treatment: "Gaps Closed with Veneers",
    review:
      "I had small gaps in my front teeth that always bothered me in photos. Veneers closed them perfectly without making my teeth look bulky. The colour match is spot-on.",
    stars: 5,
    img: testimonialImages[1],
  },
  {
    name: "Dr. Sachin",
    treatment: "Gaps Closed with Veneers",
    review:
      "As a doctor, I'm very particular about aesthetics. My spacing issues were corrected beautifully with veneers. The finish is extremely natural and precise. Truly appreciate the attention to detail.",
    stars: 5,
    img: testimonialImages[2],
  },
  {
    name: "Priya Banerjee",
    treatment: "Regular Cleaning & Polishing",
    review:
      "I come every six months for my cleaning because it genuinely keeps my teeth stain-free and fresh. The appointments are gentle, thorough, and never rushed.",
    stars: 5,
    img: testimonialImages[0],
  },
  {
    name: "Sobia",
    treatment: "Teeth Whitening",
    review:
      "Got my teeth whitening done after putting it off for months, and I'm so glad I finally did. The shade difference was instant and the whole session was super comfortable.",
    stars: 5,
    img: testimonialImages[1],
  },
  {
    name: "Ruhanika",
    treatment: "Aligners",
    review:
      "I've been on aligners for a few months and can already see a clear difference. They're comfortable, invisible, and easy to manage. The team guides me at every step.",
    stars: 5,
    img: testimonialImages[2],
  },
  {
    name: "Nitibha Kaul",
    treatment: "Whitening & Cleaning",
    review:
      "I regularly visit for whitening and cleaning because the results are always consistent. With my hectic schedule, this keeps my smile bright without any hassle.",
    stars: 5,
    img: testimonialImages[3],
  },
];

const Stars = ({ count }) => (
  <div className="tc-stars">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} className="tc-star" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const TestimonialCard = ({ name, treatment, review, stars, img }) => {
  const photo = img;
  return (
    <div className="tc">
      {/* Photo fills the card */}
      <div className="tc-photo">
        <img src={photo} alt={name} />
      </div>

      {/* Permanent bottom gradient with name */}
      <div className="tc-base">
        <Stars count={stars} />
        <h3 className="tc-name">{name}</h3>
        <p className="tc-treatment">{treatment}</p>
      </div>

      {/* Slide-up review overlay */}
      <div className="tc-overlay">
        <div className="tc-quote">&ldquo;</div>
        <p className="tc-review">{review}</p>
        <div className="tc-divider" />
        <div className="tc-author">
          <img className="tc-author-img" src={photo} alt={name} />
          <div className="tc-author-info">
            <span className="tc-author-name">{name}</span>
            <span className="tc-author-treat">{treatment}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [headingRef.current, subRef.current],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 78%", once: true },
        },
      );
    }, section);
    return () => ctx.revert();
  }, []);

  return (
    <section className="testimonials" ref={sectionRef}>
      <div className="testimonials__header">
        <p className="testimonials__eyebrow" ref={subRef}>
          Patient Stories
        </p>
        <h2 className="testimonials__heading" ref={headingRef}>
          Smiles That Speak Confidence
        </h2>
      </div>

      <div className="testimonials__carousel">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            prevEl: ".testimonials__nav--prev",
            nextEl: ".testimonials__nav--next",
          }}
          pagination={{ el: ".testimonials__dots", clickable: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          speed={700}
          breakpoints={{
            480: { slidesPerView: 1.4 },
            640: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className="testimonials__nav testimonials__nav--prev"
          aria-label="Previous"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          className="testimonials__nav testimonials__nav--next"
          aria-label="Next"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
        <div className="testimonials__dots" />
      </div>
    </section>
  );
};

export default Testimonials;
