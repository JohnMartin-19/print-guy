import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Card Component with Count-up animation
const CountUpCard = () => {
  const [count, setCount] = useState(0);

  // Count up effect
  useEffect(() => {
    const timer = setInterval(() => {
      if (count < 20) {
        setCount(prevCount => prevCount + 1);
      }
    }, 100); // Adjust the speed of the count-up with the interval time
    return () => clearInterval(timer);
  }, [count]);

  return (
    <motion.div
  className="count-up-card"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  }}
  style={{
    backgroundColor:" #354d7d",
    fontSize: '1.5rem',
    width: "700px",
    color: 'white', // Optional: Ensures text is readable on a blue background
    padding: '20px', // Optional: Adds some spacing inside the card
    borderRadius: '10px', // Optional: Gives the card rounded corners
    textAlign: 'center', // Optional: Centers text inside the card
  }}
>
  <div className="card-content">
    <span className="count">{count}+</span>
    <p style={{color:"white"}}>Years of Industry Experience</p>
  </div>
</motion.div>

  );
};

export default CountUpCard;
