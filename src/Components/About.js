import React from "react";
import "./About.css";
import Typography from '@mui/material/Typography';


function About() {

  return (
    <section id="about-section" className="about-section" >
      <div className="about-card">
      <div><h1 className="about-me">About me</h1></div>
          <Typography className="about-p">Hey! I'm a passionate front-end developer with a strong focus on
        creating engaging and interactive user experiences. With a deep
        understanding of modern web technologies and a specialization in
        React.js, I strive to build seamless, scalable, and visually appealing
        applications.</Typography>
      </div> 
      <p  className="about-p">
        
      </p>
      
    </section>
  );
}

export default About;
