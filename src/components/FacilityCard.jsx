import React from "react";
import {
  HiOutlineLightBulb,
  HiOutlineHeart,
  HiOutlineSparkles,
  HiOutlineBeaker,
  HiOutlineMusicalNote,
  HiOutlineTrophy,
} from "react-icons/hi2";

const facilities = [
  {
    id: "skill-based",
    icon: HiOutlineLightBulb,
    title: "Skill Based Learning",
    paragraphs: [
      "Skill-based learning helps students think creatively and logically. It encourages them to apply their knowledge practically and develop innovative ideas.",
      "Students gain skills that support academic success and real-life problem solving.",
    ],
  },
  {
    id: "community-service",
    icon: HiOutlineHeart,
    title: "Community Service",
    paragraphs: [
      "Community service activities help students understand social responsibility and empathy.",
      "By interacting with different communities, students develop awareness, compassion, and interpersonal skills.",
    ],
  },
  {
    id: "experiential-learning",
    icon: HiOutlineSparkles,
    title: "Experiential Learning",
    paragraphs: [
      "Experiential learning connects classroom knowledge with real-life experiences.",
      "This method encourages active participation, practical understanding, and deeper engagement with learning.",
    ],
  },
  {
    id: "stream-education",
    icon: HiOutlineBeaker,
    title: "STREAM Education",
    paragraphs: [
      "STREAM education integrates science, technology, reading, engineering, arts, and mathematics to build strong analytical and creative thinking abilities.",
      "Students learn to solve problems, think critically, and innovate.",
    ],
  },
  {
    id: "visual-performing-arts",
    icon: HiOutlineMusicalNote,
    title: "Visual & Performing Arts",
    paragraphs: [
      "Artistic activities such as music, dance, drawing, drama, and creative expression help develop imagination and emotional intelligence.",
      "These activities improve communication, creativity, and overall personality development.",
    ],
  },
  {
    id: "physical-development",
    icon: HiOutlineTrophy,
    title: "Physical Development Programs",
    paragraphs: ["Physical programs and sports activities help build:"],
    points: [
      "Physical strength",
      "Leadership skills",
      "Strategic thinking",
      "Healthy lifestyle habits",
    ],
    footer: "Students learn the importance of fitness and teamwork.",
  },
];

const FacilityCard = ({ facility }) => {
  const Icon = facility.icon;

  return (
    <div
      className="group bg-white border border-border rounded-2xl p-6 md:p-7
        transition-all duration-300 ease-in-out cursor-pointer
        hover:bg-primary hover:border-primary hover:-translate-y-1 hover:shadow-xl"
    >
      <div
        className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5
          transition-colors duration-300 ease-in-out
          group-hover:bg-white/15"
      >
        <Icon
          size={26}
          className="text-primary transition-colors duration-300 ease-in-out group-hover:text-white"
        />
      </div>

      <h3
        className="font-heading text-lg md:text-xl font-extrabold text-primary mb-3
          transition-colors duration-300 ease-in-out group-hover:text-white"
      >
        {facility.title}
      </h3>

      {facility.paragraphs.map((para, i) => (
        <p
          key={i}
          className="font-body text-text-muted text-sm leading-relaxed mb-2 last:mb-0
            transition-colors duration-300 ease-in-out group-hover:text-white/90"
        >
          {para}
        </p>
      ))}

      {facility.points && (
        <ul className="space-y-1.5 my-3">
          {facility.points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-2 text-sm font-body text-text-muted
                transition-colors duration-300 ease-in-out group-hover:text-white/90"
            >
              <span className="text-accent group-hover:text-white transition-colors duration-300 ease-in-out mt-1">
                ●
              </span>
              <span className="font-semibold">{point}</span>
            </li>
          ))}
        </ul>
      )}

      {facility.footer && (
        <p
          className="font-body text-text-muted text-sm leading-relaxed italic
            transition-colors duration-300 ease-in-out group-hover:text-white/90"
        >
          {facility.footer}
        </p>
      )}
    </div>
  );
};

const FacilitiesGrid = ({ id }) => {
  return (
    <section id={id} className="bg-bg py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="font-heading text-primary text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug mb-5">
            Modern Infrastructure for Effective Learning
          </h2>
          <p className="font-body text-text text-base md:text-lg font-bold leading-relaxed">
            A well-planned campus environment enhances the learning experience.
            Excellence International School provides modern facilities that
            support both academic and extracurricular development.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {facilities.map((facility) => (
            <FacilityCard key={facility.id} facility={facility} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesGrid;