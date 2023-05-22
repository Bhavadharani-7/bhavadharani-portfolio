import React from "react";
import Navbar from "../Components/Navbar";
import HeroImage from "../Components/HeroImage";
import Footer from "../Components/Footer";
import About from "../Components/About";
import Skills from "../Components/Skills";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImage />
      <About />
      <Skills />
      <Footer />
    </div>
  );
};

export default Home;
