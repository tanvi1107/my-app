import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Load dark mode preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedTheme);
    document.body.classList.toggle("dark-theme", savedTheme);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.body.classList.toggle("dark-theme", newMode);
    localStorage.setItem("darkMode", newMode);
  };

  return (
    <>
      {/* Hamburger Menu Button */}
      <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>☰</button>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setIsOpen(false)}>✖</button>
        
        <nav>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/education" onClick={() => setIsOpen(false)}>Education</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>

        </nav>

        {/* Dark Mode Toggle */}
        <div className="dark-mode-toggle">
          <button className={`dark-btn ${darkMode ? "active" : ""}`} onClick={toggleDarkMode}>
            🌙
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
