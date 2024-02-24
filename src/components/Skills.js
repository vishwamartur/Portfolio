// src/components/Skills.js
import React from "react";

export default function Skills() {
  // You can store your skills data in an array of objects
  const skills = [
    {
      name: "React",
      icon: "fab fa-react", // You can use Font Awesome icons to display your skills
      level: "Expert", // You can use any scale you want to measure your skill level
    },
    {
      name: "Node",
      icon: "fab fa-node-js",
      level: "Advanced",
    },
    {
      name: "MongoDB",
      icon: "fas fa-database",
      level: "Intermediate",
    },
    {
      name: "Bootstrap",
      icon: "fab fa-bootstrap",
      level: "Expert",
    },
    {
      name: "HTML",
      icon: "fab fa-html5",
      level: "Expert",
    },
    {
      name: "CSS",
      icon: "fab fa-css3-alt",
      level: "Expert",
    },
    {
      name: "JavaScript",
      icon: "fab fa-js-square",
      level: "Advanced",
    },
  ];

  return (
    <section id="skills" className="container py-5">
      <h2 className="text-primary">Skills</h2>
      <p className="lead text-black">
        Here are some of the skills I have used in making my projects. You can
        see the icons, names, and levels of my skills below.
      </p>
      <div className="row">
        {skills.map((skill, index) => (
          <div className="col-lg-4 col-md-6 mb-4" key={index}>
            <div className="card h-100">
              <div className="card-body text-center">
                <i
                  className={skill.icon}
                  style={{ fontSize: "5rem", color: "#007bff" }}
                ></i>
                <h5 className="card-title">{skill.name}</h5>
                <p className="card-text">{skill.level}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
