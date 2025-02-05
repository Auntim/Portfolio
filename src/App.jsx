import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import SocialLinks from "./components/SocialLinks";
import ProjectDetails from "./components/ProjectDetails"; // New detailed project page

function App() {
  return (
    <Router>
      {/* Navbar is always visible */}
      <Navbar />
      
      <Routes>
        {/* Main one-page site */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Portfolio />
              <Experience />
              <Contact />
              <SocialLinks />
            </>
          }
        />
        
        {/* Detailed project page */}
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
