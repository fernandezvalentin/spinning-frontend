import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.jpg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-bg-primary/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* 1. LOGO */}
          <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
            <img src={logo} alt="Marina Beccaglia" className="w-10 h-10 rounded-full object-cover border border-white/20" />
            <div className="flex flex-col uppercase tracking-wider font-bold">
              <span className="text-white text-sm leading-none">Marina</span>
              <span className="text-accent-warm text-sm leading-none">Beccaglia</span>
            </div>
          </Link>

          {/* HAMBURGER TOGGLE (Mobile) */}
          <button 
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none" 
            onClick={toggleMenu}
          >
            <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
            <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}`}></span>
          </button>

          {/* 2. ENLACES (Desktop) */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/#clases" className="text-sm font-semibold text-text-muted hover:text-white transition-colors tracking-wide">
              SPINNING
            </a>
            <a href="/#funcional" className="text-sm font-semibold text-text-muted hover:text-white transition-colors tracking-wide">
              FUNCIONAL
            </a>
            <a href="/#sobre-mi" className="text-sm font-semibold text-text-muted hover:text-white transition-colors tracking-wide">
              SOBRE MÍ
            </a>
            <a href="/#contacto" className="text-sm font-semibold text-text-muted hover:text-white transition-colors tracking-wide">
              CONTACTO
            </a>

            <a 
              href="https://sitiodeentrenamiento.fiit.la/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-accent hover:bg-accent-strong text-white px-6 py-2.5 rounded-full font-medium transition-colors shadow-lg shadow-accent/20 text-sm"
            >
              EMPEZÁ HOY
            </a>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-20 left-0 w-full bg-bg-elevated border-b border-border"
          >
            <div className="px-6 py-6 flex flex-col gap-6">
              <a href="/#clases" className="text-lg font-semibold text-white tracking-wide" onClick={closeMenu}>
                SPINNING
              </a>
              <a href="/#funcional" className="text-lg font-semibold text-white tracking-wide" onClick={closeMenu}>
                FUNCIONAL
              </a>
              <a href="/#sobre-mi" className="text-lg font-semibold text-white tracking-wide" onClick={closeMenu}>
                SOBRE MÍ
              </a>
              <a href="/#contacto" className="text-lg font-semibold text-white tracking-wide" onClick={closeMenu}>
                CONTACTO
              </a>

              <a 
                href="https://sitiodeentrenamiento.fiit.la/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-accent text-center text-white px-6 py-3 rounded-full font-medium mt-4"
                onClick={closeMenu}
              >
                EMPEZÁ HOY
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
