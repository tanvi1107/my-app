import React from 'react';
import { motion } from 'framer-motion';
import {ReactTyped} from 'react-typed';
import './Home.css';
import ProfilePic from '../assets/Profile.jpeg';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.8 }}
    >
     
      <div className="home-content">
        <img src={ProfilePic} alt="Profile" className="Profile" />
        </div>
        <div className="text-container">
        <h1>Hi, I'm <span className="highlight">Tanvi Bhatt</span> 👋</h1>
        

        <ReactTyped
          strings={[
            'A passionate Full-Stack Web Developer 🚀',
            'I build interactive UI ✨',
            'I love creating modern websites ❤️'
          ]}
          typeSpeed={60}
          backSpeed={20}
          loop
          className="typed-text"
        />
      
      <div className="button-group">
        <button
        className="project-button"
        onClick={() => navigate("/projects")}
      >
        View Projects 🚀
      </button>

         <a
            href="https://drive.google.com/file/d/1KVvc9VADBTAk_-2F4pbbEO5gJm4PgQKy/view?usp=sharing" 

            target="_blank"
            rel="noopener noreferrer"
            className="resume-button"
            style={{ textDecoration: 'none' }}
          >
            Resume 📄
        </a>
    
        <button
          onClick={() => navigate("/contact")}
            className="connect-button"
          
          >
            Connect with me 📧
          </button>
        </div>  
      </div>
      
    </motion.div>
  )
};

export default Home;
