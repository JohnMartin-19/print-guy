import React from "react";
import "./About.css";
import { motion } from "framer-motion";
import pg1 from "../assets/pg1.jpg";
import pg2 from "../assets/pg2.jpg";
import pg3 from "../assets/pg3.jpg";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const slideIn = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  const zoomIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 1 } },
  };

  return (
    <section className="about">
      {/* Section 1: Welcome Message */}
      <motion.div
        className="about-section"
        initial="hidden"
        animate="visible"
        variants={zoomIn}
      >
       
        <div className="about-content">
          <h2>Welcome to Printguy Limited – Your One-Stop Advertising Solution!</h2>
          <p>
            At Printguy Limited, we specialize in bringing brands to life through exceptional advertising 
            and creative solutions. As a leading advertising agency with over two decades of experience, 
            we have helped businesses elevate their visibility and connect with their ideal audiences 
            through high-quality designs, customized branding materials, and innovative strategies.
          </p>
        </div>

        <img
          src={pg1}
          alt="Welcome to Printguy Limited"
          className="about-image"
        />
      </motion.div>

      {/* Section 2: Why Choose Us */}
      <motion.div
        className="about-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={zoomIn}
      >
        <img
          src={pg2}
          alt="Why Choose Us"
          className="about-image"
        />
        <div className="about-content">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Expertise: Decades of experience in the advertising industry.</li>
            <li>Quality: Premium materials and state-of-the-art technology.</li>
            <li>Customization: Tailored solutions designed to meet your unique needs.</li>
            <li>Customer Focus: A commitment to outstanding service and client satisfaction.</li>
          </ul>
        </div>
      </motion.div>

      {/* Section 3: Our Promise */}
      <motion.div
        className="about-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={zoomIn}
      >
       
        <div className="about-content">
          <h2>Our Promise</h2>
          <p>
            At Printguy Limited, we don’t just deliver services – we create lasting impressions and 
            build connections that drive success. Partner with us, and together, we’ll bring your vision to life.
          </p>
        </div>

        <img
          src={pg3}
          alt="Our Promise"
          className="about-image"
        />
      </motion.div>
    </section>
  );
};

export default About;
