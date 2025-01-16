import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        setStatus("Failed to send message. Try again later.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("An error occurred. Please try again.");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 20,
        staggerChildren: 0.2,
      },
    },
  };

  const formItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      className="contact"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h2>Contact Us</h2>
      <p>Let’s Bring Your Vision to Life</p>
      <p>Partner with Printguy Limited for advertising solutions that make an impact.
      Whether you’re launching a new product, rebranding, or amplifying your market
      presence, we’re here to help.
      Contact Us Today
      .</p>
      <p>Ready to elevate your brand? Get in touch with Printguy Limited and let’s create
      something extraordinary together</p>
      <motion.form
        className="contact-form"
        onSubmit={handleSubmit}
        variants={containerVariants}
      >
        <motion.input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          variants={formItemVariants}
        />
        <motion.input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          variants={formItemVariants}
        />
        <motion.textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          variants={formItemVariants}
        ></motion.textarea>
        <motion.button type="submit" variants={formItemVariants}>
          Send
        </motion.button>
      </motion.form>
      <p className="status">{status}</p>
    </motion.section>
  );
};

export default Contact;
