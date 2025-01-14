import React from "react";
import { motion } from "framer-motion";
import "./Customer.css";
import Oracle from '../assets/Oracle logo PNG.jpeg'


const customerLogos = [
  Oracle,
 
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
            <img src={`../assets/${logo}`} alt={`Customer ${index + 1}`} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default CustomerCarousel;
