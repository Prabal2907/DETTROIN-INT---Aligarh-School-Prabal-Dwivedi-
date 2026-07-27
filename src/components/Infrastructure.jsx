import React, { useEffect, useRef, useState } from "react";

import strongAcademicImg from "../assets/Strong-Academic-System1.png";
import conceptBasedImg from "../assets/Concept-Based-Learning.png.webp";
import facultyImg from "../assets/Experienced-and-Dedicated-Faculty-1.png.webp";
import safeCampusImg from "../assets/Safe-and-Secure-Campus.png.webp";

const reasons = [
  {
    id: "academic-system",
    title: "Strong Academic System",
    image: strongAcademicImg,
    description:
      "Excellence International School follows a structured and well-planned academic approach to ensure effective learning.",
    listLabel: "The academic framework includes:",
    points: [
      "Well-planned daily lessons",
      "Concept-focused teaching",
      "Regular revision sessions",
      "Periodic assessments",
      "Doubt-clearing sessions",
      "Continuous performance monitoring",
    ],
    footer:
      "Teachers guide students individually to help them improve academically and build confidence in learning.",
  },
  {
    id: "concept-based-learning",
    title: "Concept-Based Learning",
    image: conceptBasedImg,
    description:
      "Education at Excellence International School focuses on understanding concepts rather than memorizing information.",
    listLabel: "Students develop:",
    points: [
      "Analytical thinking",
      "Problem-solving abilities",
      "Logical reasoning",
      "Practical knowledge",
    ],
    footer:
      "This approach prepares students for higher studies and future career paths.",
  },
  {
    id: "faculty",
    title: "Experienced and Dedicated Faculty",
    image: facultyImg,
    description:
      "Teachers play a crucial role in shaping students' future. The faculty at Excellence International School is qualified, experienced, and committed to providing quality education.",
    listLabel: "Teaching methods include:",
    points: [
      "Interactive classroom discussions",
      "Activity-based learning",
      "Real-life examples",
      "Student participation",
      "Technology-supported learning",
    ],
    footer:
      "Teachers regularly monitor student progress and provide guidance whenever needed.",
  },
  {
    id: "safe-campus",
    title: "Safe and Secure Campus",
    image: safeCampusImg,
    description:
      "A secure learning environment helps students focus on their education and development.",
    listLabel: "The school ensures safety through:",
    points: [
      "CCTV monitoring",
      "Supervised campus areas",
      "Structured discipline policies",
      "Responsible staff supervision",
      "Safe entry and exit systems",
    ],
    footer: "Students can learn and grow in a safe and supportive environment.",
  },
];

const useRevealOnScroll = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
};

const ReasonRow = ({ reason, index }) => {
  const [ref, visible] = useRevealOnScroll();
  const isReversed = index % 2 !== 0;

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center py-12 md:py-16
        transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
    >
      <div
        className={`flex justify-center ${
          isReversed ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <img
          src={reason.image}
          alt={reason.title}
          className="w-full max-w-[480px] h-auto object-cover rounded-3xl shadow-xl"
        />
      </div>

      <div
        className={`max-w-xl mx-auto lg:mx-0 ${
          isReversed ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <h3 className="font-heading text-primary text-2xl md:text-3xl font-extrabold mb-4">
          {reason.title}
        </h3>

        <p className="font-body text-text-muted text-sm md:text-base leading-relaxed mb-5">
          {reason.description}
        </p>

        <p className="font-body text-text text-sm md:text-base font-bold mb-3">
          {reason.listLabel}
        </p>

        <ul className="space-y-2 mb-5">
          {reason.points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-2 font-body text-text-muted text-sm md:text-base"
            >
              <span className="text-accent font-extrabold mt-1">●</span>
              <span className="font-semibold text-text">{point}</span>
            </li>
          ))}
        </ul>

        <p className="font-body text-text-muted text-sm md:text-base leading-relaxed italic">
          {reason.footer}
        </p>
      </div>
    </div>
  );
};

const Infrastructure = ({ id }) => {
  return (
    <section id={id} className="bg-bg py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
          <p className="font-body text-sm md:text-base uppercase tracking-wide text-accent font-extrabold mb-3">
            Why Choose Us
          </p>
          <h2 className="font-heading text-primary text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug">
            Why Excellence International School is the{" "}
            <span className="text-accent">Best School in Aligarh</span>
          </h2>
        </div>

        <div className="divide-y divide-border">
          {reasons.map((reason, index) => (
            <ReasonRow key={reason.id} reason={reason} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;