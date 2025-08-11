import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Tanvi Bhatt. All rights reserved.</p>
      <div className="social-links">
        <a href="https://linkedin.com/in/tanvi-bhatt-120b53321" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin size={16} />
        </a>
        <a href="https://github.com/tanvi1107" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub size={16} />
        </a>
        <a href="mailto:tanvi19062005@gmail.com" aria-label="Email">
          <FaEnvelope size={16} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
