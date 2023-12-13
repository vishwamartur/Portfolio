// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

export default function App() {
  return (
    <main style={{backgroundImage: "url(/image.jpg)", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}
