import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <motion.div
          className="footer-details"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="footer-row">
            <div>
              <h3>Location</h3>
              <p>
                Gaberone Plaza,
                <br />
                Gaberone Road, 6th Floor, Suite C5
                <br />
                Nairobi, Kenya.
              </p>
            </div>
            <div>
              <h3>Contacts</h3>
              <p>
                <span className="icon">&#x260E;</span> (+254) 0722333850 | (+254) 0722981403
              </p>
            </div>
            <div>
              <h3>Email</h3>
              <p>
                <span className="icon">&#x2709;</span> hello@printguy.co.ke | www.printguy.co.ke
              </p>
            </div>
            <motion.div
              className="social-links"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3>Follow Us</h3>
              <div className="icons">
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <FaFacebookF />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  <FaInstagram />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <FaTwitter />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <FaLinkedinIn />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="footer-line"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.div>

        <motion.div
          className="footer-brand"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <strong>
          <p>
             we <span className="heart">❤</span> brands
          </p>
          </strong>
          <p>
            <h6>&copy; {new Date().getFullYear()} Printguy. All rights reserved.</h6>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
