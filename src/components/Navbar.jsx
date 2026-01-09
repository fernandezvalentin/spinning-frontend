import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
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
    <nav className="navbar">
      {/* 1. LOGO */}
      <Link to="/" className="nav-logo" onClick={closeMenu}>
        <img src={logo} alt="Marina Beccaglia" className="logo-img" />
        <div className="logo-text">
          <span className="logo-first">Marina</span>
          <span className="logo-last">Beccaglia</span>
        </div>
      </Link>

      {/* HAMBURGER TOGGLE */}
      <button className={`nav-toggle ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* 2. ENLACES */}
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="/#clases" className="nav-link" onClick={closeMenu}>
          SPINNING
        </a>
        <a href="/#funcional" className="nav-link" onClick={closeMenu}>
          FUNCIONAL
        </a>
        <a href="/#sobre-mi" className="nav-link" onClick={closeMenu}>
          SOBRE MÍ
        </a>
        <a href="/#contacto" className="nav-link" onClick={closeMenu}>
          CONTACTO
        </a>

        <a 
          href="https://sitiodeentrenamiento.fiit.la/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="nav-btn"
          onClick={closeMenu}
        >
          EMPEZÁ HOY
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
