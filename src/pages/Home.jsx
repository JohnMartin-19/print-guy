import React from "react";
import { motion } from "framer-motion";
import "./Home.css";
import { IoPrintSharp } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { BsFillBadge3dFill } from "react-icons/bs";
import homeImage from '../assets/image.jpg';
import fao from '../assets/fao.jpg'
import img1 from '../assets/printer.jpeg'
import { useState,useEffect } from "react";
import logo from "../assets/printguy_logo.jpeg";
import { CiClock2 } from "react-icons/ci";



// Load Bootstrap JS
const loadBootstrap = () => {
  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js";
  script.async = true;
  document.body.appendChild(script);
};


const Home = (props) => {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Load Bootstrap JS when the component mounts
  useEffect(() => {
    loadBootstrap();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close menu after clicking
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const fadeInVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="landing-page"
    >

      {/* Top Bar */}
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

      {/* Navbar */}
      <header className="navbar">
        <div className="container">
          <div className="navbar-header">
            <div className="logo" onClick={() => scrollToSection("hero-section")}>
              <img src={logo} alt="Print Guy Logo" className="logo-image" />
            </div>
            <button className="hamburger" onClick={toggleMenu}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>
          <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
            <ul className="nav-links">
              <li><a href="#hero-section" onClick={() => scrollToSection("hero-section")}>Home</a></li>
              <li><a href="#services-section" onClick={() => scrollToSection("services-section")}>Services</a></li>
              <li><a href="#about-section" onClick={() => scrollToSection("about-section")}>About Us</a></li>
              <li><a href="#contact-section" onClick={() => scrollToSection("contact-section")}>Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

       {/* Mouse Tracker Element */}
       <div
        className="mouse-tracker"
        style={{
          left: mousePosition.x - 15, // Adjust for half the width of the tracker
          top: mousePosition.y - 15,  // Adjust for half the height of the tracker
        }}
      ></div>
      {/* Hero Section */}
      <motion.section
        className="hero"
        variants={containerVariants}
        style={{ backgroundImage: `url(${props.heroBackground})` }}
      >
        <style>
          {`
            .hero {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              width: 100%;
              min-height: 60vh;
              background-color: #002060;
              background-size: cover;
              background-position: center;
              color: white;
              position: relative;
              margin-top: 0;
              padding-top: 0;
              overflow-x: hidden;
            }

            .hero-content {
              width: 90%;
              max-width: 100%;
              display: flex;
              flex-direction: row; /* Side-by-side layout */
              align-items: center;
              padding: 0rem;
              height: 100%;
            }

            .text-content {
              flex: 0 0 50%; /* Left 50% for text */
              max-width:200px
              text-align: left; /* Align text to the left */
              padding-right: 1rem; /* Add some spacing between text and image */
            }

            .welcome-text {
              color: #f7941d;
              font-size: 2rem;
              font-weight: 100;
            }

            .subtitle-text {
              color: white;
              font-size: 7rem;
              font-weight: 700;
            }

            .cta-button {
              background-color: #f7941d;
              color: white;
              text-decoration: none;
              padding: 0.8rem 2rem;
              font-size: 1.2rem;
              font-weight: 500;
              transition: background-color 0.3s ease, color 0.3s ease;
              display: inline-block;
              margin-top: 1rem;
            }

            .cta-button:hover {
              background-color: #e07b0e;
              color: white;
            }

            .image-container {
              flex: 0 0 100%; /* Right 50% for image */
              height: 100%;
            }

            .hero-image {
              max-height: 60vh;
              height:700px;
              width:700px;
              object-fit: cover; /* Ensure image covers the container */
              min-height: 50vh; /* Match the hero section's min-height */
              
            }

            @media (max-width: 768px) {
              .hero-content {
                flex-direction: column; /* Stack on mobile */
              }
              .text-content {
                flex: 1;
                text-align: center; /* Center text on mobile */
                padding-right: 0;
                margin-bottom: 1rem;
              }
              .image-container {
                flex: 1;
                width: 100%;
              }
              .subtitle-text {
                font-size: 4rem; /* Adjust font size for mobile */
              }
            }
          `}
        </style>
        <div className="hero-content"  id="hero-section">
          <div className="text-content">
            <motion.h1 variants={itemVariants}>
              <span className="welcome-text">Welcome to Print Guy</span>
              <br />
              <span className="subtitle-text">
                <h1 className="subtitle-text">Your One-Stop Advertising Solution!</h1>
              </span>
            </motion.h1>
            <motion.div variants={itemVariants}>
              <a href="#services-section" onClick={() => scrollToSection("services-section")} className="cta-button"> 
                Discover More
              </a>
            </motion.div>
          </div>
          <div className="image-container">
            <img src={homeImage} alt="Hero" className="hero-image" />
          </div>
        </div>
      </motion.section>

      {/* About Our Company Section */}
      <h1 className="section-title" style={{ fontSize: "80px", marginTop:'10px' }}>
        About Our Company
      </h1>
      <motion.section className="about-section" variants={containerVariants}  id="about-section">
        <div className="years-container">
          <p className="years-number">20</p>
          <p className="years-label">Years</p>
        </div>
        <div className="split-content">
          <motion.div className="div"></motion.div>
          <motion.div
            className="text-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
          >
            <p className="about-p" style={{ color: "#002060" }}>
              When we first started 20 years ago, we were intrigued by the number of
              businesses that didn’t have proper presentation.
              <br />
              <br />
              From the very beginning, we believed in our customers’ potential to connect
              with their ideal audience. With our passion for creativity and belief in visual
              communication, we transformed the faces of brands.
              <br />
              <br /> Marketing is more than just business; it’s community. At Printguy
              Limited, we believe in lasting relationships.
              <br />
              <br />
              We bring more than just state-of-the-art equipment; we bring an experienced
              team of professionals committed to making your brand a success.
            </p>
            <div className="signature-container">
              <span className="signature-bullet">•</span>
              <span className="signature-text">A. N Other, CEO & Founder</span>
            </div>
            <div className="image-container">
              <img src={props.ceoImage} alt="CEO" className="ceo-image" />
            </div>
          </motion.div>
        </div>
      </motion.section>

      <div className="why">
        {/* Why Choose Printguy Section */}
        <motion.section
          className="why-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid-container">
            <motion.div
              className="text-content"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariants}
            >
              <h1 className="header-why" style={{marginBottom:'20px' }}>
                <span>Why Choose </span>
                <br />
                Printguy
              </h1>
              <br />
              <p>
                At Printguy Limited, our objective is to deliver services that exceed
                customer expectations.
                <br />
                To continuously improve our processes and adopt the latest technologies to
                stay ahead in the advertising industry.
                <br />
                <br />
                We are committed to leading the market by setting new standards of
                excellence, while maintaining sustainability through eco-friendly
                practices.
                <br />Our goal is to serve an even broader client base while maintaining
                superior service quality.
              </p>
            </motion.div>
            <div className="image-container">
              <img src={props.workerImage} alt="Worker" className="worker-image" />
            </div>
          </div>
        </motion.section>
      </div>

      <div>
        {/* Services We Provide Section */}
        <motion.section
          className="services-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          id='services-section'
        >
          <h2 className="services-title" style={{ fontSize: "5rem", color: "#002060" }}>
            Services We Provide
          </h2>
          <div className="services-grid">
            <div className="cards-container">
              <div className="cards-row">
                <div
                  className="service-card"
                  id="digiprint"
                  style={{ color: "black", backgroundColor: "yellow" }}
                >
                  <IoPrintSharp className="card-icon" />
                  <h4>Digital Printing</h4>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div
                  className="service-card"
                  style={{ color: "white", backgroundColor: "#002060" }}
                >
                  <BsFillBadge3dFill className="card-icon" />
                  <h4 style={{ color: "white" }}>3D Signage</h4>
                  <p style={{ color: "white" }}>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
              <div className="cards-row">
                <div className="service-card">
                  <h4>Large Format Printing</h4>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div
                  className="service-card"
                  style={{ color: "white", backgroundColor: "skyblue" }}
                >
                  <GiClothes className="card-icon" />
                  <h4 style={{ color: "white" }}>Clothing & Apparel</h4>
                  <p style={{ color: "white" }}>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
            <div className="service-image">
              <img
                src={fao}
                alt="Printing Machine"
              />
            </div>
          </div>
        </motion.section>
      </div>

      <div className="projects">
        <motion.section
          className="projects-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="projects-title">Our Latest Projects</h2>
          <div id="demo" class="carousel slide" data-bs-ride="carousel" >

          
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
              <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
              <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
            </div>

          
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={img1} alt="Los Angeles" class="d-block w-100" id="c-image" />
                <div class="carousel-caption">
                  <h3>Los Angeles</h3>
                  <p>We had such a great time in LA!</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src={img1} alt="Chicago" class="d-block w-100" id="c-image"  />
                <div class="carousel-caption">
                  <h3>Los Angeles</h3>
                  <p>We had such a great time in LA!</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src={img1} alt="Chicago" class="d-block w-100" id="c-image"  />
                <div class="carousel-caption">
                  <h3>Los Angeles</h3>
                  <p>We had such a great time in LA!</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src={img1} alt="Chicago" class="d-block w-100" id="c-image"  />
                <div class="carousel-caption">
                  <h3>Los Angeles</h3>
                  <p>We had such a great time in LA!</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src={img1} alt="Chicago" class="d-block w-100" id="c-image"  />
                <div class="carousel-caption">
                  <h3>Los Angeles</h3>
                  <p>We had such a great time in LA!</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src={img1} alt="Chicago" class="d-block w-100" id="c-image"  />
                <div class="carousel-caption">
                  <h3>Los Angeles</h3>
                  <p>We had such a great time in LA!</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src={img1} alt="Chicago" class="d-block w-100" id="c-image"  />
                <div class="carousel-caption">
                  <h3>Los Angeles</h3>
                  <p>We had such a great time in LA!</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src={img1} alt="Chicago" class="d-block w-100" id="c-image"  />
                <div class="carousel-caption">
                  <h3>Los Angeles</h3>
                  <p>We had such a great time in LA!</p>
                </div>
              </div>
            </div>

          
            <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
              <span class="carousel-control-next-icon"></span>
            </button>
          </div>
        </motion.section>
      </div>

      {/* Testimonials Section */}
      <motion.section
        className="testimonials-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="testimonials-title" style={{ color: "#f7941d", fontSize: "3rem", textAlign: "center" }}>
          What our Clients
          <br />
           Say about us
        </h2>
        <div className="testimonials-container">
          <div className="testimonial-card">
            <div className="speech-bubble"></div>
            <div className="avatar"></div>
            <p className="testimonial-text">A. N Other<br /><span style={{ color: "#002060" }}>CEO & Founder</span></p>
          </div>
          <div className="testimonial-card">
            <div className="speech-bubble"></div>
            <div className="avatar"></div>
            <p className="testimonial-text">A. N Other<br /><span style={{ color: "#002060" }}>CEO & Founder</span></p>
          </div>
          <div className="testimonial-card">
            <div className="speech-bubble"></div>
            <div className="avatar"></div>
            <p className="testimonial-text">A. N Other<br /><span style={{ color: "#002060" }}>CEO & Founder</span></p>
          </div>
          <div className="testimonial-card">
            <div className="speech-bubble"></div>
            <div className="avatar"></div>
            <p className="testimonial-text">A. N Other<br /><span style={{ color: "#002060" }}>CEO & Founder</span></p>
          </div>
          <div className="testimonial-card">
            <div className="speech-bubble"></div>
            <div className="avatar"></div>
            <p className="testimonial-text">A. N Other<br /><span style={{ color: "#002060" }}>CEO & Founder</span></p>
          </div>
        </div>
      </motion.section>

      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/254722981403"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="whatsapp-icon" />
      </a>
    </motion.section>
  );
};

export default Home;