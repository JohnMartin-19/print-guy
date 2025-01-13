import React from "react";
import { motion } from "framer-motion";
import "./Customer.css";

const customerLogos = [
  "safaricom-logo.png",
  "airtel-logo.png",
  "cocacola-logo.png",
  "microsoft-logo.png",
  "oracle-logo.png",
  "google-logo.png",
  "uon-logo.png",
  "absa-logo.png",
  "deloitte-logo.png",
  "pizzainn-logo.png",
];

const CustomerCarousel = () => {
  return (
    <div className="carousel-container">
      <motion.div
        className="carousel"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {customerLogos.map((logo, index) => (
          <div key={index} className="carousel-item">
            <img src={`./assets/${logo}`} alt={`Customer ${index + 1}`} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default CustomerCarousel;
