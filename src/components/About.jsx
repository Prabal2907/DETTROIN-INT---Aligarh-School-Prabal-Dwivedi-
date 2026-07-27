import React from "react";
import aboutImage from "../assets/Vision-Mission.png.webp";

const missionPoints = [
  "Deliver high-quality education",
  "Encourage curiosity and creativity",
  "Develop strong academic foundations",
  "Promote discipline and ethical values",
  "Prepare students for future opportunities",
];

const About = ({ id }) => {
  return (
    <section id={id} className="bg-bg py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-accent font-bold uppercase tracking-[0.25em] text-sm mb-3">
            About Us
          </p>

          <h2 className="font-heading text-primary text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            About Excellence International School
          </h2>

          <p className="mt-6 text-text-muted text-base md:text-lg leading-8">
            Excellence International School, Aligarh is dedicated to providing
            modern education with a balanced approach to academics,
            co-curricular activities, and character development.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,420px)_1fr] gap-14 lg:gap-16 items-start">
          {/* Left column: image + supporting card, NOT stretched */}
          <div className="flex flex-col items-center lg:items-start lg:sticky lg:top-28">
            <img
              src={aboutImage}
              alt="About Excellence International School"
              className="w-full max-w-[420px] h-auto object-cover rounded-3xl shadow-2xl"
            />

            {/* Quote card moved here to balance the shorter image */}
            <div className="group w-full max-w-[420px] bg-primary/5 border-l-4 border-red-500 rounded-2xl p-6 mt-6 transition-all duration-500 ease-in-out hover:bg-red-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer">
              <p className="text-primary font-extrabold text-lg leading-8 transition-colors duration-500 group-hover:text-white">
                Every learner receives personalized attention and encouragement
                to achieve their goals.
              </p>
            </div>
          </div>

          {/* Right column: all text content */}
          <div className="max-w-xl mx-auto lg:mx-0">
            <h3 className="text-3xl font-extrabold text-primary mb-6">
              Building Bright Futures
            </h3>

            <p className="text-text-muted text-base md:text-lg leading-8 mb-5">
              The school believes that education should nurture academic
              excellence while developing critical thinking, creativity,
              discipline, and essential life skills.
            </p>

            <p className="text-text-muted text-base md:text-lg leading-8 mb-8">
              Through experienced educators and a student-focused learning
              environment, every child receives the guidance, confidence, and
              encouragement needed to become a responsible, future-ready
              individual.
            </p>

            {/* Vision */}
            <div className="mb-8">
              <h4 className="text-xl md:text-2xl font-extrabold text-primary mb-3">
                Our Vision
              </h4>

              <p className="text-text-muted text-base leading-8">
                To create confident, responsible, and innovative individuals who
                contribute positively to society and inspire meaningful change.
              </p>
            </div>

            {/* Mission */}
            <div>
              <h4 className="text-xl md:text-2xl font-extrabold text-primary mb-4">
                Our Mission
              </h4>

              <ul className="space-y-4">
                {missionPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="text-red-500 font-bold text-lg mt-1">
                      ✓
                    </span>

                    <span className="text-text-muted text-base leading-7">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;