import React, { useState } from "react";
import { HiOutlineDotsVertical, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Academics", href: "#academics" },
  { name: "Admissions", href: "#admissions" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-bg/50 backdrop-blur-xl border-b border-border transition-colors duration-300 relative">
      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 h-[72px] md:h-20 flex items-center justify-between">
        {/* Logo */}
        
        <a  href="#"
          className="font-heading text-primary text-xl md:text-2xl font-medium transition-opacity duration-300 hover:opacity-80"
        >
          Excellence International
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            
           <a  href={link.href}
              key={link.name}
              className="relative font-body text-sm font-medium text-text-muted transition-colors duration-300 hover:text-primary
              after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[1.5px] after:bg-primary
              flex justify-center items-center text-md
              after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          
          <a href="#contact"
            className="hidden sm:inline-block bg-accent text-white font-body text-sm font-medium px-6 py-2.5 rounded-lg
            transition-all duration-300 ease-out hover:opacity-90 hover:scale-[1.03] active:scale-[0.97]"
          >
            Contact us
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-text p-2 transition-transform duration-300 active:scale-90"
            aria-label="Toggle menu"
          >
            <span
              className={`inline-block transition-transform duration-300 ${
                menuOpen ? "rotate-90" : "rotate-0"
              }`}
            >
              {menuOpen ? (
                <HiX size={24} />
              ) : (
                <HiOutlineDotsVertical size={24} />
              )}
            </span>
          </button>
        </div>
      </div>

      <nav
        className={`lg:hidden bg-bg border-t border-border px-4 flex flex-col gap-4 overflow-hidden
        transition-all duration-300 ease-in-out
        ${menuOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"}`}
      >
        {navLinks.map((link) => (
          
        <a href={link.href}
            key={link.name}
            onClick={() => setMenuOpen(false)}
            className="font-body text-sm font-medium flex justify-center items-center text-text-muted transition-colors duration-300 hover:text-primary"
          >
            {link.name}
          </a>
        ))}

        
        <a href="#contact"
          onClick={() => setMenuOpen(false)}
          className="sm:hidden bg-accent text-white text-center font-body text-sm font-medium px-6 py-2.5 rounded-lg"
        >
          Contact us
        </a>
      </nav>
    </header>
  );
};

export default Header;