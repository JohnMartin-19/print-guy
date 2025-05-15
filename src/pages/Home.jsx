import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Home.css";
import { FaWhatsapp } from "react-icons/fa";
import homeImage from '../assets/image.jpg';
import fao from '../assets/fao.jpg';
import logo from "../assets/printguy_logo.jpeg";
import { CiClock2 } from "react-icons/ci";
import squareapple from '../assets/squarepple.jpg';
import bike from '../assets/bike.jpg';
import bull from '../assets/bull.jpg';
import chai from '../assets/chai.jpg';
import kabati from '../assets/kabati.jpg';
import law from '../assets/law.jpg';
import liv from '../assets/livonia.jpg';
import perfect from '../assets/perfect.jpg';
import pgman from '../assets/Printguy man.png'
import { FaAngleDown } from "react-icons/fa6";
import years from "../assets/Elements-01.png"
import largePrint from '../assets/Elements-04.png'
import smallPrint from '../assets/Elements-03.png'
import threeD from '../assets/Elements-05.png'
import cloth from '../assets/Elements-06.png'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaTiktok } from "react-icons/fa";


const loadBootstrap = () => {
  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js";
  script.async = true;
  document.body.appendChild(script);
};

const Home = (props) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [flippedCards, setFlippedCards] = useState([false, false, false, false]);

  // track mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  
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

  //  flip state for a specific card
  const toggleFlip = (index) => {
    setFlippedCards((prev) =>
      prev.map((flipped, i) => (i === index ? !flipped : flipped))
    );
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
      <span className="gab">
          <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          Gaberone Plaza 6th Floor CS2
        </span>
        <a href="https://www.printguy.co.ke" className="gab-1">
          <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          www.printguy.co.ke
        </a>
        <span className="gab-2">
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
              |
            </div>
            
            <button className="hamburger" onClick={toggleMenu}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>
          <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
            <button className="close-btn" onClick={toggleMenu}>✕</button>
            <ul className="nav-links">
              <li><a href="#hero-section" onClick={() => scrollToSection("hero-section")}>Home</a></li>
              <li><a href="#about-section" onClick={() => scrollToSection("about-section")}>About Us<FaAngleDown /></a></li>
              <li><a href="#services-section" onClick={() => scrollToSection("services-section")}>Services</a></li>
              <li><a href="#projects-section" onClick={() => scrollToSection("projects-section")}>Products<FaAngleDown /></a></li>
              <li><a href="#contact-section" onClick={() => scrollToSection("footer")}>Contact</a></li> |
            </ul>
          </nav>
        </div>
      </header>

      {/* Mouse Tracker Element */}
      <div
        className="mouse-tracker"
        style={{
          left: mousePosition.x - 15,
          top: mousePosition.y - 15,
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
              min-height: 80vh;
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
              flex-direction: row;
              align-items: center;
              padding: 0rem;
              height: 100%;
            }

            .text-content {
              flex: 0 0 50%;
              max-width:200px
              text-align: left;
              padding-right: 1rem;
            }

            .welcome-text {
              color: #f7941d;
              font-size: 1.5rem;
              font-weight: 100;
            }

            .header-text {
              color: white;
              font-size:4rem;
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
              flex: 0 0 100%;
              height: 100%;
              min-height:60vh;
              border-radius:0px;
            }

            .hero-image {
              max-height: 80vh;
              object-fit: cover;
            }

            @media (max-width: 768px) {
              .hero-content {
                flex-direction: column;
              }
              .text-content {
                flex: 1;
                text-align: center;
                padding-right: 0;
                margin-bottom: 1rem;
              }
              .image-container {
                flex: 1;
                width: 100%;
              }
              .subtitle-text {
                font-size: 4rem;
              }
            }
          `}
        </style>
        <div className="hero-content" id="hero-section">
          <div className="text-content">
            <motion variants={itemVariants}>
              <h4 className="welcome-text">Welcome to Print Guy</h4>
              <br />
              <span className="subtitle-text">
                <h1 className="subtitle-text" id='header-text' >Your One-Stop 
                  <br />
                  Advertising Solution!</h1>
              </span>
            </motion>
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
      <h2 className="section-title" style={{ marginTop:'10px' }}>
        About Our Company
      </h2>
      <motion.section className="about-section" variants={containerVariants} id="about-section">
        <div className="years-container">
          <img src={years} alt="" className="years-img" />
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
              From the very beginning, we believed in our customers’ potential to connect
              with their ideal audience. With our passion for creativity and belief in visual
              communication, we transformed the faces of brands.
              Marketing is more than just business; it’s community. At Printguy
              Limited, we believe in lasting relationships.
              We bring more than just state-of-the-art equipment; we bring an experienced
              team of professionals committed to making your brand a success.
            </p>
            <div className="signature-container">
              <span className="signature-bullet">•</span>
              <span className="signature-text">A. N Other, CEO & Founder</span>
            </div>
            <div className="image-container">
              <img src={pgman} alt="CEO" className="ceo-image" />
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
              <h2 className="header-why" style={{marginBottom:'10px',fontSize:'4rem' }}>
                <span style={{color:'#e07b0e'}}>Why Choose </span>
                <br />
                Printguy
              </h2>
              <br />
              <p>
                At Printguy Limited, our objective is to deliver services that exceed
                customer expectations.
                <br />
                To continuously improve our processes and adopt the latest technologies to
                stay ahead in the advertising industry.
                <br />
                We are committed to leading the market by setting new standards of
                excellence, while maintaining sustainability through eco-friendly
                practices.
                <br />
                Our goal is to serve an even broader client base while maintaining
                superior service quality.
              </p>
            </motion.div>
            <div className="image-container">
              <img src={pgman} alt="Worker" className="worker-image" />
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
          <h2 className="services-title" style={{ color: "#002060" }}>
            Services We Provide
          </h2>
          <div className="services-grid">
            <div className="cards-container">
              <div className="cards-row">
                <div
                  className={`service-card ${flippedCards[0] ? 'flipped' : ''}`}
                  id="digiprint"
                  style={{ color: "black", backgroundColor: "hwb(48 0% 0%)", height:'300px',width:'300px' }}
                  onClick={() => toggleFlip(0)}
                >
                  <div className="card-inner">
                    <div className="card-front">
                      <img src={smallPrint} alt="" className="card-icon" />
                      <h4>Digital Printing</h4>
                    </div>
                    <div className="card-back">
                      <p>Fast, high-quality, and customizable printing for all your needs.</p>
                    </div>
                  </div>
                </div>
                <div
                  className={`service-card ${flippedCards[1] ? 'flipped' : ''}`}
                  style={{ color: "white", backgroundColor: "#002060" ,height:'300px',width:'300px'}}
                  onClick={() => toggleFlip(1)}
                >
                  <div className="card-inner">
                    <div className="card-front">
                      <img src={threeD} alt="" className="card-icon" />
                      <h4 style={{ color: "white" }}>3D Signage</h4>
                    </div>
                    <div className="card-back">
                      <p style={{ color: "white" }}>
                      Our talented graphic designers transform your concepts into visually stunning
                      designs.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cards-row">
                <div
                  className={`service-card ${flippedCards[2] ? 'flipped' : ''}`}
                  style={{ color: "white", backgroundColor: "#e07b0e",height:'300px',width:'300px' }}
                  onClick={() => toggleFlip(2)}
                >
                  <div className="card-inner">
                    <div className="card-front">
                      <img src={largePrint} alt="" className="card-icon" />
                      <h4>Large Format Printing</h4>
                    </div>
                    <div className="card-back">
                      <p>Eye-catching banners, posters, and more to amplify your
                      brand’s presence.</p>
                    </div>
                  </div>
                </div>
                <div
                  className={`service-card ${flippedCards[3] ? 'flipped' : ''}`}
                  style={{ color: "white", backgroundColor: "skyblue",height:'300px',width:'300px' }}
                  onClick={() => toggleFlip(3)}
                >
                  <div className="card-inner">
                    <div className="card-front">
                      <img src={cloth} alt="" className="card-icon" />
                      <h4 style={{ color: "white" }}>Clothing & Apparel</h4>
                    </div>
                    <div className="card-back">
                      <p style={{ color: "white" }}>From merchandise to interior décor, we’ve got you covered.</p>
                    </div>
                  </div>
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

      <h2 className="projects-title">Our Latest Projects</h2>
      <div className="projects">
        <motion.section
          className="projects-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          id="projects-section"
        >
          
          <div id="demo" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
              <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
              <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
              <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
              <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
              <button type="button" data-bs-target="#demo" data-bs-slide-to="5"></button>
              <button type="button" data-bs-target="#demo" data-bs-slide-to="6"></button>
              <button type="button" data-bs-target="#demo" data-bs-slide-to="7"></button>
            </div>

            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={squareapple} alt="Los Angeles" className="d-block w-100" id="c-image" />
                <div className="carousel-caption">
                  <h3>SQUARE APPLE</h3>
                </div>
              </div>
              <div className="carousel-item">
                <img src={perfect} alt="Chicago" className="d-block w-100" id="c-image" />
                <div className="carousel-caption">
                  <h3>Perfect Care Collection</h3>
                </div>
              </div>
              <div className="carousel-item">
                <img src={chai} alt="Chicago" className="d-block w-100" id="c-image" />
                <div className="carousel-caption">
                  <h3>Baraka Chai</h3>
                </div>
              </div>
              <div className="carousel-item">
                <img src={liv} alt="Chicago" className="d-block w-100" id="c-image" />
                <div className="carousel-caption">
                  <h3>Livonia Wines</h3>
                </div>
              </div>
              <div className="carousel-item">
                <img src={bike} alt="Chicago" className="d-block w-100" id="c-image" />
                <div className="carousel-caption">
                  <h3>'Minnesotta' Bike Printing</h3>
                </div>
              </div>
              <div className="carousel-item">
                <img src={bull} alt="Chicago" className="d-block w-100" id="c-image" />
                <div className="carousel-caption">
                  <h3>The Bull</h3>
                </div>
              </div>
              <div className="carousel-item">
                <img src={law} alt="Chicago" className="d-block w-100" id="c-image" />
                <div className="carousel-caption">
                  <h3>Law Firm</h3>
                </div>
              </div>
              <div className="carousel-item">
                <img src={kabati} alt="Chicago" className="d-block w-100" id="c-image" />
                <div className="carousel-caption">
                  <h3>Kabati</h3>
                </div>
              </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
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
        <h2 className="testimonials-title" id="testimonials-title" style={{ color: "#f7941d"}}>
          What our Clients <br />
          Say about us
        </h2>
        <div className="testimonials-container">
          <div className="testimonial-card">
            <div className="speech-bubble"></div>
            <div className="av">
            <img src={pgman} alt="CEO" className="ceo-image" />
            </div>
            <p className="testimonial-text">A. N Other<br /><span style={{ color: "#002060" }}>CEO & Founder</span></p>
          </div>
          <div className="testimonial-card">
            <div className="speech-bubble"></div>
            <div className="av">
            <img src={pgman} alt="CEO" className="ceo-image" />
            </div>
            <p className="testimonial-text">A. N Other<br /><span style={{ color: "#002060" }}>CEO & Founder</span></p>
          </div>
          <div className="testimonial-card">
            <div className="speech-bubble"></div>
            <div className="av">
            <img src={pgman} alt="CEO" className="ceo-image" />
            </div>
            <p className="testimonial-text">A. N Other<br /><span style={{ color: "#002060" }}>CEO & Founder</span></p>
          </div>
          <div className="testimonial-card">
            <div className="speech-bubble"></div>
            <div className="av">
            <img src={pgman} alt="CEO" className="ceo-image" />
            </div>
            <p className="testimonial-text">A. N Other<br /><span style={{ color: "#002060" }}>CEO & Founder</span></p>
          </div>
        </div>
      </motion.section>

       <footer className="footer" id="footer">
            <div className="footer-container" id="footer-container">
              <motion.div
                className="footer-details"
                id="footer-details"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="footer-row">
                  <div>
                    <h3>  Location</h3>
                    <p>
                      Gaberone Plaza,
                      <br/>
                      Nairobi, Kenya.
                    </p>
                  </div>
                  <div>
                    <h3>Contacts</h3>
                    <p>
                       (+254) 0722333850 
                       <br />
                        (+254) 0722981403
                    </p>
                  </div>
                  <div>
                    <h3>Email</h3>
                    <p>
                      <a href="mailto:hello@printguy.co.ke">hello@printguy.co.ke</a> 
                      <br />
                       www.printguy.co.ke
                    </p>
      
                  </div>
                  <motion.div
                    className="social-links"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <h3 style={{marginBottom:"10px"}}>Follow Us</h3>
                    <div className="icons">
                      <a href="https://facebook.com" target="_blank" rel="noreferrer">
                        <FaFacebookF />
                      </a>
                      <a href="https://instagram.com" target="_blank" rel="noreferrer">
                        <FaInstagram />
                        </a>
                        <a href="https://tiktok.com" target="_blank" rel="noreferrer">
                        <FaTiktok />
                      
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noreferrer">
                        <FaTwitter />
                      </a>
                      <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                        <FaLinkedinIn />
                      </a>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
      
              <motion.div
                className="footer-line"
                id="footer-line"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
                
              ></motion.div>
      
              <motion.div
                className="footer-brand"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <strong>
                <p style={{color:"white"}}>
                   we <span className="heart">❤</span> brands
                </p>
                </strong>
                <p>
                  <h6>&copy; {new Date().getFullYear()} Printguy. All rights reserved.</h6>
                </p>
                <p>
                  <h6><a href="mailto:johnnkonge2020@gmail.com">Contact Developer?</a></h6>
                </p>
              </motion.div>
            </div>
          </footer>

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