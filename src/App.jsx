import React from "react";
import Header from "./components/Header";
import Infrastructure from "./components/Infrastructure";
import Hero from "./components/Hero";
import AcademicStages from "./components/AcademicStages";
import Footer from "./components/Footer";
import About from "./components/About";

const App = ()=>{
  return (
    <div>
      <Header />
      <Hero/>
      <About id="about" />
      <AcademicStages id="academics" />
      <Infrastructure />
      <Footer id="contact" />
    </div>
  );
}

export default App;