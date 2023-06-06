import React from "react";
import "./Skills.css";
import html from "../Assets/html.png";
import css from '../Assets/css.png';
import javascript from '../Assets/javascript.png';
import images5 from '../Assets/images5.png';
import images6 from '../Assets/images6.png';
import python from '../Assets/python.jpg';



function Skills() {
  return (
    <section className="skills-section">
      <div>
        <h1 className="skill-header">SKILLS</h1>
        <div className="skills-wrapper">
          <div className="container">
            <img className="skills" src={html} />
            <div className="backdrop-bg">
              <div className="skill-content">HTML</div>
            </div>
          </div>
          <div className="container">
            <img  src={css} className="skills" />
            <div className="backdrop-bg">
            <div className="skill-content">CSS</div>
            </div>
            
          </div>
          <div className="container">
            <img src={javascript} className="skills" />
            <div className="backdrop-bg">
            <div className="skill-content">JAVASCRIPT</div>
            </div>
            
          </div>
          <div className="container">
            <img src={images5} className="skills" />  
            <div className="backdrop-bg">
            <div className="skill-content">REACT</div>
            </div>
            
          </div>
          <div className="container">
            <img src={images6} className="skills" />
            <div className="backdrop-bg">
            <div className="skill-content">TYPESCRIPT</div>
            </div>
            
          </div>
          <div className="container">
            <img src={python} className="skills" />
            <div className="backdrop-bg">
            <div className="skill-content">PYTHON</div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
