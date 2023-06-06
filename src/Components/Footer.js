import "./Footer.css";
import React from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaHome,
  FaLinkedin, 
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div id="contact-section" className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{  marginRight: "2rem" }} className="icon" />
            <div>
              <p className="para">Chennai, India</p>
            </div>
          </div>
          <div className="phone">
            <p className="para">
              <FaPhone
                size={20}
                style={{  marginRight: "2rem" }}
                className="icon"
              />
              8834768890
            </p>
          </div>
          <div className="email">
            <FaMailBulk
              size={20}
              style={{  marginRight: "2rem" }}
              className="icon"
            />
            <p className="para" >Bhavadharani705@gmail.com</p>
          </div>
        </div>
        <div className="right">
          <div className="social">
            <Link to='https://github.com/Bhavadharani-7/bhavadharani-portfolio' target="_blank">
              <FaGithub
              size={30}
              style={{  marginRight: "1rem" }}
              className="icon"
            /></Link>
          
            <Link to="https://www.linkedin.com/in/bhavadharani-p-660830201/" target="_blank">
              <FaLinkedin
              size={30}
              style={{  marginRight: "1rem" }}
              className="icon"
            /></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
