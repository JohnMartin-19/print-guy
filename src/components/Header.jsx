import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/printguy_logo.jpeg";
import { CiClock2 } from "react-icons/ci";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
     <div className="top-bar">
        <span>
          <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          Gaberone Plaza 6th Floor CS2
        </span>
        <a href="https://www.printguy.co.ke">
          <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          www.printguy.co.ke
        </a>
        <span>
        <CiClock2 className="icon" />
          Mon - Saturday, 8am - 8pm
        </span>
      </div>

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
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
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
    </>
   
  );
};

export default Header;