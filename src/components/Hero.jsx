import React, { useEffect, useState } from "react";

import img1 from "../assets/Home-Banner-02.jpg.jpeg.webp";
import img2 from "../assets/Home-Banner-002.png";
import img3 from "../assets/Home-Banner-003-scaled.png.webp";
import img4 from "../assets/Home-Banner-4-1.png.webp";
import img5 from "../assets/Home-Banner-5-1-scaled.png.webp";

const slides = [
  { image: img1 },
  { image: img2 },
  { image: img3 },
  { image: img4 },
  { image: img5 },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const goTo = (index) => setCurrent(index);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-[220px] sm:h-[300px] md:h-[420px] lg:h-[520px] xl:h-[620px] 2xl:h-[720px] overflow-hidden">
        {/* Slides */}
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === current ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}

          <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 z-30 flex items-end pb-5 sm:pb-8 md:pb-10">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
            <a
              href="#about"
              className="inline-block bg-red-500 text-white font-semibold text-xs sm:text-sm md:text-base px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-lg transition-all duration-300 hover:bg-red-600 hover:scale-105 active:scale-95"
            >
              Book a Visit
            </a>
          </div>
        </div>

        {/* Previous */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-black/40 text-white text-xl sm:text-2xl transition-all duration-300 hover:bg-black/70"
        >
          &#10094;
        </button>

        {/* Next */}
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-black/40 text-white text-xl sm:text-2xl transition-all duration-300 hover:bg-black/70"
        >
          &#10095;
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 sm:bottom-5 md:bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              aria-label={`Go to Slide ${index + 1}`}
              className={`rounded-full transition-all duration-300 ${
                current === index
                  ? "w-6 h-2 bg-white"
                  : "w-2 h-2 bg-white/50 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="bg-bg py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-body text-sm md:text-base uppercase tracking-wide text-accent font-extrabold mb-3">
            Best School in Aligarh, Uttar Pradesh
          </p>

          <h2 className="font-heading text-primary text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mb-6">
            Excellence International School – Shaping Future Leaders Through
            Quality Education
          </h2>

          <div className="font-body font-bold  text-text-muted text-sm md:text-base leading-relaxed space-y-4 text-left md:text-center">
            <p>
              Excellence International School is one of the{" "}
              <span className="text-text font-extrabold">
                best schools in Aligarh
              </span>
              , Uttar Pradesh, known for quality learning, discipline, and
              holistic development. Recognized as a top school in Aligarh, the
              institution is dedicated to nurturing young minds with knowledge,
              confidence, creativity, and strong ethical values for a bright
              future.
            </p>

            <p>
              The school focuses on building a strong academic foundation while
              encouraging innovation, leadership, and personal growth. Every
              student is guided to explore their potential and develop the
              skills needed to succeed in life.
            </p>

            <p>
              Education at Excellence International School is not limited to
              textbooks. It aims to create responsible individuals who are
              prepared for academic success as well as real-world challenges.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;