import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/printguy_logo.jpeg";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar-header">
          <Link to="/" className="logo">
            <img src={logo} alt="Print Guy Logo" className="logo-image" />
          </Link>
          <button className="hamburger" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
        <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
            <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
            <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;