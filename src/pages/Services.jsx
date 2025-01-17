import React from "react";
import "./Services.css";
import { motion } from "framer-motion";
import pg1 from "../assets/pg1.jpg";
import pg2 from "../assets/pg2.jpg";
import pg3 from "../assets/pg3.jpg";
import pg4 from "../assets/printg.jpg";

const Services = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const workItems = [
    { id: 1, title: "Corporate Rebranding", image: pg1 },
    { id: 2, title: "Event Campaigns", image: pg2 },
    { id: 3, title: "Vehicle Branding", image: pg3 },
    { id: 4, title: "Custom Signage", image: pg4 },
    { id: 5, title: "Wall Graphics", image: "/path/to/image5.jpg" },
    { id: 6, title: "LED Displays", image: "/path/to/image6.jpg" },
  ];

  return (
    <div style={{minHeight:"100%"}}>
      <section className="services" >
        <motion.div
          className="services-container"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <h2 className="services-title" style={{color:"#002060"}}>Our Services</h2>
          <div className="services-grid">
            {/* Service Cards */}
            <motion.div className="service-card" variants={itemVariants}>
              <h3>Graphic Design</h3>
              <p>
                Our talented graphic designers transform your concepts into visually stunning
                designs. From logos to marketing materials, we ensure your brand stands out with
                creativity and professionalism.
              </p>
            </motion.div>
            <motion.div className="service-card" variants={itemVariants}>
              <h3>Printing Solutions</h3>
              <p>
                <strong>Digital Printing:</strong> Fast, high-quality, and customizable printing for all your needs.
                <br />
                <strong>Offset Printing:</strong> Cost-effective solutions for large-volume print jobs with precise detail.
                <br />
                <strong>Large Format Printing:</strong> Eye-catching banners, posters, and more to amplify your
                brand’s presence.
                <br />
                <strong>Wide Format Printing:</strong> Perfect for large-scale projects like murals, building wraps,
                and oversized signage to make a bold statement.
              </p>
            </motion.div>
            <motion.div className="service-card" variants={itemVariants}>
              <h3>Signage</h3>
              <p>
                We craft captivating signage to make your business impossible to ignore:
                <br />
                <strong>Aluminum Chanellium 3D Signs:</strong> Durable, elegant, and attention-grabbing 3D signs.
                <br />
                <strong>LED Light Box Signs:</strong> Bright and vibrant signage that lights up your message.
              </p>
            </motion.div>
            <motion.div className="service-card" variants={itemVariants}>
              <h3>Branding</h3>
              <p>
                Turn your business into a visual powerhouse with our custom branding services:
                <br />
                <strong>Vehicle Branding:</strong> Transform your fleet into mobile billboards.
                <br />
                <strong>Wall Branding:</strong> Make your spaces reflect your brand’s identity.
                <br />
                <strong>Custom Branding:</strong> From merchandise to interior décor, we’ve got you covered.
              </p>
            </motion.div>
            <motion.div className="service-card" variants={itemVariants}>
              <h3>3D Designs</h3>
              <p>
                Our talented graphic designers transform your concepts into visually stunning
                designs. From logos to marketing materials, we ensure your brand stands out with
                creativity and professionalism.
              </p>
            </motion.div>
            <motion.div className="service-card" variants={itemVariants}>
              <h3>2D Designs</h3>
              <p>
                Our talented graphic designers transform your concepts into visually stunning
                designs. From logos to marketing materials, we ensure your brand stands out with
                creativity and professionalism.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Our Work Section */}
      
      <section className="our-work">
      <motion.div
        className="work-container"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <h2 className="work-title" style={{color:"#002060"}}>Our Work</h2>
        <p>At Printguy Limited, we take pride in the exceptional results we deliver for our
        clients. Here are some highlights of our recent projects:</p>
        <br />
        <br />
        <div className="work-gallery">
          {workItems.map((item) => (
            <motion.div
              key={item.id}
              className="work-card"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
            >
              <img src={item.image} alt={item.title} className="work-image" />
              <div className="overlay">
                <h3 className="work-title">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
      
    </div>
  );
};

export default Services;
