import React, { useEffect, useRef, useState } from "react";

import prePrimaryImg from "../assets/Pre-Primary-School.png.webp";
import primaryImg from "../assets/Primary-School.png.webp";
import middleImg from "../assets/Middle.png.webp";
import daycareImg from "../assets/day-care.png.webp";

const stages = [
  {
    id: "pre-primary",
    title: "Pre-Primary School",
    image: prePrimaryImg,
    description:
      "Early childhood education focuses on nurturing curiosity, creativity, and basic learning abilities in a joyful environment.",
    points: [
      "Play-based learning",
      "Language development",
      "Basic numeracy skills",
      "Social interaction",
      "Creative exploration",
    ],
    footer:
      "Children learn through activities, storytelling, games, and interactive sessions that make learning enjoyable and engaging.",
  },
  {
    id: "primary",
    title: "Primary School",
    image: primaryImg,
    description:
      "Primary education is designed to strengthen core academic skills while encouraging curiosity and independent learning.",
    points: [
      "Reading and writing skills",
      "Fundamental mathematics",
      "Basic science concepts",
      "Moral values and good habits",
      "Classroom discipline and responsibility",
    ],
    footer:
      "Students gradually develop critical thinking, problem-solving abilities, and better understanding of academic subjects.",
  },
  {
    id: "middle",
    title: "Middle School",
    image: middleImg,
    description:
      "Middle school prepares students for advanced academic learning while developing analytical thinking and responsibility.",
    points: [
      "Advanced reading and writing skills",
      "Concept-based mathematics",
      "Science exploration and practical understanding",
      "Social studies and general awareness",
      "Communication and presentation skills",
    ],
    footer:
      "Students are encouraged to ask questions, explore ideas, and participate actively in classroom discussions.",
  },
  {
    id: "daycare",
    title: "Daycare",
    image: daycareImg,
    description:
      "The Daycare facility at Excellence International School provides a safe, caring, and supportive environment for young children while their parents are at work.",
    points: [
      "Safe and supervised environment",
      "Play and activity-based engagement",
      "Rest and relaxation time",
      "Interactive learning activities",
      "Social interaction with peers",
    ],
    footer:
      "Children receive proper care, attention, and engaging activities that support their emotional, social, and cognitive development throughout the day.",
  },
];

// Small reusable hook: fades an element up into view once when it enters the viewport
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

const StageRow = ({ stage, index }) => {
  const [ref, visible] = useRevealOnScroll();
  const isReversed = index % 2 !== 0; // odd index -> image on right

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center py-12 md:py-16
        transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
    >
      {/* Image */}
      <div
        className={`flex justify-center ${
          isReversed ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <img
          src={stage.image}
          alt={stage.title}
          className="w-full max-w-[480px] h-auto object-cover rounded-3xl shadow-xl"
        />
      </div>

      {/* Text */}
      <div
        className={`max-w-xl mx-auto lg:mx-0 ${
          isReversed ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <h3 className="font-heading text-primary text-2xl md:text-3xl font-medium mb-4">
          {stage.title}
        </h3>

        <p className="font-body text-text-muted text-sm md:text-base leading-relaxed mb-5">
          {stage.description}
        </p>

        <p className="font-body text-text text-sm md:text-base font-medium mb-3">
          Key focus areas include:
        </p>

        <ul className="space-y-2 mb-5">
          {stage.points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-2 font-body text-text-muted text-sm md:text-base"
            >
              <span className="text-accent mt-1">●</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <p className="font-body text-text-muted text-sm md:text-base leading-relaxed italic">
          {stage.footer}
        </p>
      </div>
    </div>
  );
};

const AcademicStages = ({ id }) => {
  return (
    <section id={id} className="bg-bg py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
          <p className="font-body text-sm md:text-base uppercase tracking-wide text-accent font-medium mb-3">
            Academic Stages
          </p>
          <h2 className="font-heading text-primary text-2xl sm:text-3xl md:text-4xl font-medium leading-snug mb-6">
            From Early Years to Confident Leaders
          </h2>
          <p className="font-body text-text-muted text-sm md:text-base leading-relaxed">
            At Excellence International School, the academic journey is
            structured to support students at every stage of their development.
            Each stage focuses on age-appropriate learning methods that help
            children build strong academic skills, confidence, and personal
            growth.
          </p>
        </div>

        {/* Alternating rows */}
        <div className="divide-y divide-border">
          {stages.map((stage, index) => (
            <StageRow key={stage.id} stage={stage} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicStages;