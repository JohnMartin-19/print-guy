import React from "react";
import { motion} from 'framer-motion';
import "./Home.css";
import Products  from "../components/Products";
import CustomerCarousel from "../components/Customers";
const Home = () => {
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

  return (
    <motion.section
      className="landing-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <motion.section className="hero" variants={containerVariants}>
        <motion.h1 variants={itemVariants}>Welcome to Printguy Limited</motion.h1>
        <motion.p variants={itemVariants}>
          Your One-Stop Advertising Solution!
        </motion.p>
        <motion.a
          href="/services"
          className="cta-button"
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
        </motion.a>
      </motion.section>

      {/* Section 1: Welcome */}
      <motion.section className="split-section">
      <motion.div
          className="image-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInRightVariants}
        >
          <img src="welcome-image.jpg" alt="Welcome to Printguy" />
        </motion.div>

        <motion.div
          className="text-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          <h2>Welcome to Printguy Limited</h2>
          <p>
            Your One-Stop Advertising Solution! At Printguy Limited, we bring your business to life
            with exceptional advertising solutions. As a leading advertising agency, we specialize
            in creating high-quality designs and customized branding materials to elevate your brand’s
            visibility and impact.
          </p>
        </motion.div>
        
      </motion.section>

      {/* Section 2: Our Story */}
      <motion.section className="split-section reverse">
        <motion.div
          className="image-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          <img src="our-story-image.jpg" alt="Our Story" />
        </motion.div>
        <motion.div
          className="text-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInRightVariants}
        >
          <h2>Our Story</h2>
          <p>
            When we first started 20yrs ago, we were intrigued by the amount of businesses
            that didn’t have proper presentation. From the very beginning, we believed in our
            customers’ potential to connect with their ideal audience. With our passion for
            creativity and the belief in Visual communication, we transformed the faces of
            brands. Marketing is more than just business, it’s community. At Printguy Limited
            we believe in lasting relationships. We bring more than just state of the art
            equipment; we bring an experienced team of professionals who are committed to
            making your brand a success.
          </p>
        </motion.div>
      </motion.section>

      {/* Section 3: Our Mission */}
      <motion.section className="split-section">
        <motion.div
          className="image-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInRightVariants}
        >
          <img src="mission-image.jpg" alt="Our Mission" />
        </motion.div>

        <motion.div
          className="text-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          <h2>Our Mission</h2>
          <p>
            Our mission is to become your trusted partner in the journey of success. We are
            committed to:
          </p>
          <ul>
            <li>Excellence: Ensuring every project meets the highest standards of quality.</li>
            <li>Creativity: Bringing fresh ideas and unique designs to the forefront of every campaign.</li>
            <li>Sustainability: Utilizing eco-friendly practices and materials wherever possible.</li>
            <li>Customer Success: Partnering with our clients to achieve their goals and exceed expectations.</li>
          </ul>
        </motion.div>
      </motion.section>

    {/* Products Section */}
    <Products />

    {/* Customer Carousel Section */}
    <CustomerCarousel />
    </motion.section>
  );
};

export default Home;
