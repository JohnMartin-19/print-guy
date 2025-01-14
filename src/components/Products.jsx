import React from "react";
import { motion } from "framer-motion";
import "./Products.css";
import Oracle from "../assets/Oracle logo PNG.jpeg"



const productsData = [
  {
    title: "Business Cards",
    description: "Create a lasting impression with custom-designed cards.",
    image: Oracle,
  },
  {
    title: "Brochures & Flyers",
    description: "High-quality materials to showcase your products and services.",
    image: "brochures.jpg",
  },
  {
    title: "Posters",
    description: "Bold and vibrant designs to grab attention.",
    image: "posters.jpg",
  },
  {
    title: "3D Aluminum Chanellium Signs",
    description: "Elegant and durable 3D signage for any business.",
    image: "chanellium-signs.jpg",
  },
  {
    title: "Vehicle Wraps",
    description: "Turn your vehicles into mobile advertisements.",
    image: "vehicle-wraps.jpg",
  },
  {
    title: "Promotional Items",
    description: "Branded mugs, pens, t-shirts, and more.",
    image: "promotional-items.jpg",
  },
];

const Products = () => {
  return (
    <section className="products-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Products
      </motion.h2>
      <p className="section-description">
        At Printguy Limited, we offer a wide range of high-quality products tailored to meet your advertising and branding needs:
      </p>
      <div className="products-grid">
        {productsData.map((product, index) => (
          <motion.div
            className="product-card"
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="card-image">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="card-overlay">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Products;
