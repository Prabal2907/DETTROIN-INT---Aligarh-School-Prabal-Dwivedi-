import React from "react";
import Header from "./components/Header";
import Infrastructure from "./components/Infrastructure";
import Hero from "./components/Hero";
import AcademicStages from "./components/AcademicStages";
import Footer from "./components/Footer";
import About from "./components/About";
import Cards from "./components/FacilityCard";

const App = ()=>{
  return (
    <div>
      <Header />
      <Hero/>
      <About id="about" />
      <AcademicStages id="academics" />
      <Infrastructure />
      <Cards/>
      <Footer id="contact" />
    </div>
  );
}

export default App;