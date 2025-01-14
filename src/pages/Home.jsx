import React from "react";
import { motion} from 'framer-motion';
import "./Home.css";
import Products  from "../components/Products";
import CustomerCarousel from "../components/Customers";
import CountUpCard from "../components/CountCrd";
import Oracle from "../assets/Oracle logo PNG.jpeg"
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

    <motion.section initial="hidden"
    animate="visible"
    variants={containerVariants}>
    {/* Hero Section */}
    <motion.section className="hero" variants={containerVariants}>
      <motion.h1 variants={itemVariants}>Welcome to Printguy Limited</motion.h1>
      <motion.p variants={itemVariants}>
        Your One-Stop Advertising Solution!
      </motion.p>
     
      <motion.h2 variants={itemVariants}>
      At Printguy Limited, we bring your business to life with exceptional advertising solutions.
      </motion.h2>
      <motion.a
        href="/services"
        className="cta-button"
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Learn More
      </motion.a>
      <motion.p
          className="content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInRightVariants}
        >
      <div className="row">
        <div className="column">
          <h2>20+</h2>
          <p>
            Years of Experience
          </p>
        </div>
        <div className="column">
          <h2>1000+</h2>
          <p>
            Completed Projects
          </p>
        </div>
        <div className="column">
          <h2>100%</h2>
          <p>
            Quality Service.
          </p>
        </div>
      </div>

      </motion.p>
    </motion.section>

    <motion.section
      className="landing-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      
      {/* Section 1: Welcome */}
      {/* <motion.section className="split-section">
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
        
      </motion.section> */}

      {/* Section 2: Our Story */}
      <motion.section className="split-section">
        <motion.div
          className="text-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
           <h2 style={{  lineHeight: "2", textAlign: "center" }}>Our Story</h2>
              <p>
                When we first started 20 years ago, we were intrigued by the number of businesses
                that didn’t have proper presentation. From the very beginning, we believed in our
                customers’ potential to connect with their ideal audience. With our passion for
                creativity and belief in visual communication, we transformed the faces of brands. 
                Marketing is more than just business; it’s community. At Printguy Limited, we believe 
                in lasting relationships. We bring more than just state-of-the-art equipment; we bring
                an experienced team of professionals committed to making your brand a success.
              </p>  
         
        </motion.div>
      </motion.section>


     
      {/* Section 3: Our Mission */}
      <motion.section className="split-section">
        <motion.div
          className="text-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInRightVariants}
          
        > 
        <h2>Our Vision</h2>
        <p>
        To set you up for greater success by providing innovative, high quality and
        impactful solutions.Our vision is to shape the future of advertising by consistently exceeding
        expectations and driving success for our clients. We aspire to:
        </p>
        <ul>
          <li>Set new benchmarks in design and branding excellence.</li>
          <li>Foster long-lasting relationships with our clients based on trust and results.</li>
          <li>Embrace cutting-edge technology to deliver superior products and services.</li>
          <li>Inspire creativity and innovation in every project we undertake.</li>
        </ul>
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

      

      {/* Section 4: Our Objectives */}
      <motion.section className="split-section">
        
      <motion.div
          className="image-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInRightVariants}
        >
          <img src="objective-image.jpg" alt="Our Objective" />
        </motion.div>

        <motion.div
          className="text-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          <h2>Our Objective</h2>
          <p>
          At Printguy Limited, our objective is to deliver services that exceed customer
          expectations. To continuously improve our processes and adopt the latest
          technologies to stay ahead in the advertising industry. We are committed to leading
          the market by setting new standards of excellence, while maintaining sustainability
          through eco-friendly practices. Our goal is to serve an even broader client base
          while maintaining superior service quality.
          </p>
          
        </motion.div>

        

      </motion.section>

    {/* Products Section */}
    <Products />

    {/* Customer Carousel Section */}
    <CustomerCarousel />
    </motion.section>
    </motion.section>
  );
};

export default Home;
