// src/components/About.js
import React from "react";

export default function About() {
  return (
    <section id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <img src="/profile.jpg" alt="Profile" className="img-fluid rounded-circle mb-3" />
        </div>
        <div className="col-lg-6 col-md-12">
          <h2 className="text-primary">About Me</h2>
          <p className="lead">
            Hi, Vishwanath M, a Product developer based in Bengaluru, India. I love creating
            beautiful and functional websites using modern technologies like React, Node, MongoDB,
            etc. I have over 2 years of experience in web development and have worked on various
            projects ranging from e-commerce, social media, education, and more.
          </p>
          <p className="lead">
            I'm passionate about learning new skills and exploring new challenges. I'm always open
            to new opportunities and collaborations. If you have a project that you want to get
            started, or you need some help with your existing project, feel free to contact me. I
            would love to hear from you and work with you.
          </p>
          <a href="/resume.pdf" className="btn btn-primary mr-3" target="_blank" rel="noreferrer">
            Download Resume
          </a>
          <a href="#contact" className="btn btn-outline-primary">
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
}
