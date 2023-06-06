import React from "react";
import HeroImage from "../Components/HeroImage";
import Footer from "../Components/Footer";
import About from "../Components/About";
import Skills from "../Components/Skills";
import "./Home.css"

const Home = () => {
  return (
    <div>
      <section className="intro-section-wrapper" >
        <HeroImage />
      <Skills />
      <About />
      <Footer />
      </section>
    </div>
  );
};

export default Home;
