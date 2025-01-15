import React from "react";
import "./Services.css";
import { motion } from "framer-motion";

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

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="services" style={{ height: "75vh" }}>
      <motion.div
        className="services-container"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <h2 className="services-title">Our Services</h2>
        <div className="services-grid">
          {/* Graphic Design Card */}
          <motion.div className="service-card" variants={itemVariants}>
            <h3>Graphic Design</h3>
            <p>
              Our talented graphic designers transform your concepts into visually stunning
              designs. From logos to marketing materials, we ensure your brand stands out with
              creativity and professionalism.
            </p>
          </motion.div>

          {/* Printing Solutions Card */}
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

          {/* Signage Card */}
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

          {/* Branding Card */}
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
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
