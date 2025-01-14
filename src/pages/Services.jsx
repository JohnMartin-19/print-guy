import React from "react";
import "./Services.css";
import { motion} from 'framer-motion';
import { Button, Modal} from "flowbite-react";
import { useState } from "react";

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

  const fadeInRightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const [openModal, setOpenModal] = useState(true);
  const [modalPlacement, setModalPlacement] = useState('center')


  return (
    
    <section className="services">

      


      <motion.section className="split-section">
        <motion.div
          className="text-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
           <h2 style={{  lineHeight: "2", textAlign: "center" }}>Our Services</h2>
           <div className="service-cards">
        <div className="card">
          <h3>3D Printing</h3>
          <p>High-quality 3D printing for all your needs.</p>
        </div>
        <div className="card">
          <h3>2D Printing</h3>
          <p>Business cards, flyers, and banners.</p>
        </div>
        <div className="card">
          <h3>Vehicle Wraps</h3>
          <p>Custom vehicle wraps to advertise your business.</p>
        </div>
      </div>

      <div className="service-cards">
        <div className="card">
          <h3>3D Printing</h3>
          <p>High-quality 3D printing for all your needs.</p>
          <Button>Toggle modal</Button>
        </div>
        <div className="card">
          <h3>2D Printing</h3>
          <p>Business cards, flyers, and banners.</p>
        </div>
        {/* <div className="card">
          <h3>Vehicle Wraps</h3>
          <p>Custom vehicle wraps to advertise your business.</p>
        </div> */}
      </div>


     
         
        </motion.div>
      </motion.section>
  
    </section> 
  );
};

export default Services;
