// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import AnimatedCursor from "react-animated-cursor";

export default function App() {
  return (
    <main
      style={{
        backgroundImage: "url(/image.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "white",
      }}
    >
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="255, 165, 0"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}
