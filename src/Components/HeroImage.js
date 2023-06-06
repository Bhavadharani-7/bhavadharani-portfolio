import "./HeroImage.css";
import React from "react";
import intoBg from "../Assets/intro-bg.gif";
import Navbar from "./Navbar";
import resume from "../Assets/resume.pdf";


const HeroImage = () => {
  
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={intoBg} alt="newone"></img>
      </div>
      <div className="Nav-container">
        <Navbar />
        </div>
      <div className="content">
        <p>Hi, I'M Bhavadharani.</p>
        <h1>React Developer.</h1> 
        <div className="actions">
          <a  href={require('../Assets/resume.pdf')} className="btn" download="resume.pdf" target="_blank" rel="noreferrer">
            Download CV
          </a>
          <a href="#contact-section" className="btn-light">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
