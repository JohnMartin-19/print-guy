import React from "react";
import "./About.css";
import { motion } from "framer-motion";

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
        className="welcome-section"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h2>Welcome to Printguy Limited – Your One-Stop Advertising Solution!</h2>
        <p>
          At Printguy Limited, we specialize in bringing brands to life through exceptional advertising 
          and creative solutions. As a leading advertising agency with over two decades of experience, 
          we have helped businesses elevate their visibility and connect with their ideal audiences 
          through high-quality designs, customized branding materials, and innovative strategies.
        </p>
        <img
          src="path/to/your/image1.jpg" // Replace with the actual image path
          alt="Welcome to Printguy Limited"
          className="about-image"
        />
      </motion.div>

      {/* Section 2: Why Choose Us */}
      <motion.div
        className="why-choose-us-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideIn}
      >
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Expertise: Decades of experience in the advertising industry.</li>
          <li>Quality: Premium materials and state-of-the-art technology.</li>
          <li>Customization: Tailored solutions designed to meet your unique needs.</li>
          <li>Customer Focus: A commitment to outstanding service and client satisfaction.</li>
        </ul>
        <img
          src="path/to/your/image2.jpg" // Replace with the actual image path
          alt="Why Choose Us"
          className="about-image"
        />
      </motion.div>

      {/* Section 3: Our Promise */}
      <motion.div
        className="our-promise-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={zoomIn}
      >
        <h2>Our Promise</h2>
        <p>
          At Printguy Limited, we don’t just deliver services – we create lasting impressions and 
          build connections that drive success. Partner with us, and together, we’ll bring your vision to life.
        </p>
        <img
          src="path/to/your/image3.jpg" // Replace with the actual image path
          alt="Our Promise"
          className="about-image"
        />
      </motion.div>
    </section>
  );
};

export default About;
