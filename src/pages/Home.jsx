import React from "react";
import { motion } from "framer-motion";
import "./Home.css";
import { IoPrintSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { BsFillBadge3dFill } from "react-icons/bs";
import homeImage from '../assets/image.jpg';
import fao from '../assets/fao.jpg'
import img1 from '../assets/printer.jpeg'


const Home = (props) => {
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
        <div className="hero-content">
          <div className="text-content">
            <motion.h1 variants={itemVariants}>
              <span className="welcome-text">Welcome to Print Guy</span>
              <br />
              <span className="subtitle-text">
                <h1 className="subtitle-text">Your One-Stop Advertising Solution!</h1>
              </span>
            </motion.h1>
            <motion.div variants={itemVariants}>
              <Link to="/services" className="cta-button">
                Discover More
              </Link>
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
      <motion.section className="about-section" variants={containerVariants}>
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
              </div>
              <div class="carousel-item">
                <img src="chicago.jpg" alt="Chicago" class="d-block w-100" />
              </div>
              <div class="carousel-item">
                <img src="ny.jpg" alt="New York" class="d-block w-100" />
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