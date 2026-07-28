import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
} from "react-icons/hi";

const quickLinks = [
  { name: "Home", href: "#" },
  { name: "About us", href: "#about" },
  { name: "Admissions", href: "#" },
  { name: "Gallery", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Contact us", href: "#contact" },
];

const academicLinks = [
  { name: "Pre Primary School", href: "#academics" },
  { name: "Primary School", href: "#academics" },
  { name: "Middle School", href: "#academics" },
  { name: "Daycare", href: "#academics" },
];

const socialLinks = [
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
];

const Footer = ({ id }) => {
  return (
    <footer id={id} className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* About + Social */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">
              Excellence International
            </h3>

            <p className="font-body text-sm text-white/80 leading-relaxed mb-6">
              Excellence International School is one of the leading schools in
              Aligarh, Uttar Pradesh, committed to nurturing young minds through
              academic excellence, modern learning methods, and holistic
              development. Located at Ramghat Road, Aligarh 202001, Uttar
              Pradesh, India.
            </p>

            <p className="font-body text-sm font-semibold mb-3">Follow Us:</p>

            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-accent hover:scale-110"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-4">Our Links</h4>

            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-white/80 transition-colors duration-300 ease-in-out hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-4">
              Our Academics
            </h4>

            <ul className="space-y-2.5">
              {academicLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-white/80 transition-colors duration-300 ease-in-out hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-4">Contact Us</h4>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <HiOutlineLocationMarker
                  size={18}
                  className="mt-0.5 text-white/70 shrink-0"
                />

                <span className="font-body text-sm text-white/80 leading-relaxed">
                  Excellence International School, Ramghat Road, Aligarh 202001,
                  Uttar Pradesh, India
                </span>
              </li>

              <li className="flex items-start gap-3">
                <HiOutlinePhone
                  size={18}
                  className="mt-0.5 text-white/70 shrink-0"
                />

                <a
                  href="tel:+917055582117"
                  className="font-body text-sm text-white/80 transition-colors duration-300 ease-in-out hover:text-white"
                >
                  +91 70555 82117
                </a>
              </li>

              <li className="flex items-start gap-3">
                <HiOutlineMail
                  size={18}
                  className="mt-0.5 text-white/70 shrink-0"
                />

                <div className="flex flex-col gap-1">
                  <a
                    href="mailto:rahulexcellence85@gmail.com"
                    className="font-body text-sm text-white/80 transition-colors duration-300 ease-in-out hover:text-white"
                  >
                    rahulexcellence85@gmail.com
                  </a>

                  <a
                    href="mailto:info@excellenceinternationalschool.com"
                    className="font-body text-sm text-white/80 transition-colors duration-300 ease-in-out hover:text-white"
                  >
                    info@excellenceinternationalschool.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <p className="font-body text-xs sm:text-sm text-white/70 text-center">
            © Copyright 2026 Excellence International School | All Rights
            Reserved | Redesigned by Prabal Dwivedi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;