import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section className="services">
      <h2>Our Services</h2>
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
    </section>
  );
};

export default Services;
