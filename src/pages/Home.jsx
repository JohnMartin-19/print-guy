import React from "react";
import { motion } from "framer-motion";
import "./Home.css";
import Products from "../components/Products";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

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
        <div className="hero-content">
          <div className="text-content">
            <motion.h1 variants={itemVariants}>
              <span className="welcome-text">Welcome to Print Guy</span>
              <br />
              <span className="subtitle-text"><h1>Your One-Stop Advertising Solution!</h1></span>
            </motion.h1>
            <motion.div variants={itemVariants}>
              <Link to="/services" className="cta-button">
                Discover More
              </Link>
            </motion.div>
          </div>
          <div className="image-container">
            <img src={props.heroImage} alt="Hero" className="hero-image" />
          </div>
         
        </div>
        
      </motion.section>

          {/* About Our Company Section */}
         <h1 className="section-title" style={{'fontSize':'80px'}}>About Our Company</h1>
           {/* About Our Company Section */}
           <motion.section className="about-section" variants={containerVariants}>
           <div className="years-container">
            <p className="years-number">20</p>
            <p className="years-label">Years</p>
          </div>
        <div className="split-content">
        <motion className="div">
          
        </motion>
          <motion.div
            className="text-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
          >
            <p className="about-p" style={{'color':'#002060'}}>
              When we first started 20 years ago, we were intrigued by the number of
              businesses that didn’t have proper presentation.
              <br />
              <br />
               From the very beginning, we
              believed in our customers’ potential to connect with their ideal audience. With
              our passion for creativity and belief in visual communication, we transformed
              the faces of brands.
              <br />
              <br /> Marketing is more than just business; it’s community. At
              Printguy Limited, we believe in lasting relationships.
              <br />
               We bring more than just
              state-of-the-art equipment; we bring an experienced team of professionals
              committed to making your brand a success.
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
          {/* Left Column - 70% (Text Content) */}
          <motion.div
            className="text-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
          >
            <h1 className="header-why"><span>Why Choose </span>
              <br />
              Printguy
            </h1>
            <p>
              At Printguy Limited, our objective is to deliver services that exceed customer
              expectations.
              <br />
              To continuously improve our processes and adopt the latest
              technologies to stay ahead in the advertising industry. <br /><br />
              We are committed to
              leading the market by setting new standards of excellence, while maintaining
              sustainability through eco-friendly practices.
              <br />Our goal is to serve an even
              broader client base while maintaining superior service quality.
            </p>
          </motion.div>

          {/* Right Column - 30% (Image) */}
          <div className="image-container">
            <img src={props.workerImage} alt="Worker" className="worker-image" />
          </div>
        </div>
      </motion.section>
     </div>

      {/* Check out our latest projects Section */}
      <motion.section className="split-section projects-section" variants={containerVariants}>
        <motion.div
          className="text-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          <h2>Check out our latest projects</h2>
        </motion.div>
        <div className="projects-grid">
          <img src={props.project1} alt="Project 1" className="project-image" />
          <img src={props.project2} alt="Project 2" className="project-image" />
          <img src={props.project3} alt="Project 3" className="project-image" />
          <img src={props.project4} alt="Project 4" className="project-image" />
          <img src={props.project5} alt="Project 5" className="project-image" />
          <img src={props.project6} alt="Project 6" className="project-image" />
        </div>
      </motion.section>

      {/* Products Section */}
      <Products />

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