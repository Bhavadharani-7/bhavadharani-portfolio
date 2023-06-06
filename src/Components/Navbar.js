import "./Navbar.css";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {
  
  return (
    
    <header className="header">
      <Link to="/">
        <h1> </h1>
      </Link>
      <ul className= "Nav-menu">
        <li>
          <a href="#about-section">About</a>
        </li>
        <li>
          <a href="#skills-section">Skills</a>
        </li>
        <li>
          <a href="#contact-section">Contact</a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
