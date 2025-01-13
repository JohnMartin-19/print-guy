import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-details">
          <div className="footer-row">
            <p>
              <span className="icon">&#x1F4CD; </span><h4><strong>Gaberone Plaza,</strong></h4>
              <h3><strong> Gaberone Road, 6th Floor. Suite C5</strong></h3>
            </p>
            <p>
              <span className="icon">&#x260E;</span> (+254) 0722333850 | (+254) 0722981403
            </p>
            <p>
              <span className="icon">&#x2709;</span> hello@printguy.co.ke | www.printguy.co.ke
            </p>
          </div>
        </div>
        <div className="footer-brand">
          <p>we <span className="heart">❤</span> brands</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
