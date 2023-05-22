import "./HeroImage.css";
import React from "react";
import programmer from "../Assets/programmer.jpg";

const HeroImage = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={programmer} alt="images1"></img>
      </div>
      <div className="content">
        <p>Hi, I'M Bhavadharani.</p>
        <h1>React Developer.</h1>
        <div>
          <a href="#skills-section" className="btn">
            Skills
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
