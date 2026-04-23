import React, { useState, useRef, useCallback, useEffect } from "react";

const BeforeAfterSlider = ({ beforeImg, afterImg }) => {
  const containerRef = useRef(null);
  const [sliderPos, setSliderPos] = useState(50);
  const isDraggingRef = useRef(false);

  const getSwiper = useCallback(() => {
    const el = containerRef.current?.closest(".swiper");
    return el?.swiper;
  }, []);

  const updatePosition = useCallback((clientX) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    let pos = ((clientX - rect.left) / rect.width) * 100;
    pos = Math.max(2, Math.min(98, pos));
    setSliderPos(pos);
  }, []);

  const startDrag = useCallback(
    (clientX) => {
      isDraggingRef.current = true;
      const swiper = getSwiper();
      if (swiper) swiper.allowTouchMove = false;
      updatePosition(clientX);
    },
    [getSwiper, updatePosition],
  );

  const moveDrag = useCallback(
    (clientX) => {
      if (!isDraggingRef.current) return;
      updatePosition(clientX);
    },
    [updatePosition],
  );

  const endDrag = useCallback(() => {
    isDraggingRef.current = false;
    const swiper = getSwiper();
    if (swiper) swiper.allowTouchMove = true;
  }, [getSwiper]);

  useEffect(() => {
    const onMouseMove = (e) => moveDrag(e.clientX);
    const onTouchMove = (e) => {
      if (!isDraggingRef.current) return;
      e.preventDefault();
      updatePosition(e.touches[0].clientX);
    };
    const onEnd = () => endDrag();

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onEnd);
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onEnd);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onEnd);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onEnd);
    };
  }, [moveDrag, endDrag]);

  return (
    <div className="ba-slider" ref={containerRef}>
      {/* After image (full background) */}
      <img
        src={afterImg}
        alt="After"
        className="ba-slider__img ba-slider__img--after"
        draggable="false"
      />

      {/* Before image (clipped from left) */}
      <div
        className="ba-slider__before-wrapper"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <img
          src={beforeImg}
          alt="Before"
          className="ba-slider__img ba-slider__img--before"
          draggable="false"
        />
      </div>

      {/* Vertical slider line */}
      <div className="ba-slider__line" style={{ left: `${sliderPos}%` }}>
        {/* Draggable handle */}
        <div
          className="ba-slider__handle"
          onMouseDown={(e) => {
            e.preventDefault();
            e.stopPropagation();
            startDrag(e.clientX);
          }}
          onTouchStart={(e) => {
            e.stopPropagation();
            startDrag(e.touches[0].clientX);
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 18l-6-6 6-6"
              stroke="#333"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 18l6-6-6-6"
              stroke="#333"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
