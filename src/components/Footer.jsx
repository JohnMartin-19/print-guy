import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-details">
          <div className="footer-row">
            <p>
              <h3>Location</h3>
               Gaberone Plaza,
              <br />
              Gaberone Road, 6th Floor. Suite C5
              {/* <span className="icon">&#x1F4CD; </span><h4><strong></strong></h4> */}
              <br />
              Nairobi,Kenya.
            </p>
            <p>
              <h3>Contacts</h3>
              <span className="icon">&#x260E;</span> (+254) 0722333850 | (+254) 0722981403
              
            </p>
            <p>
              <h3>Email</h3>
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
