import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";

import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />

    

    </Router>
  );
};

export default App;
