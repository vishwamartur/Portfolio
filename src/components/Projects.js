// src/components/Projects.js
import React from "react";

export default function Projects() {
  // You can store your projects data in an array of objects
  const projects = [
    {
      title: "E-commerce Website",
      description: "A full-stack e-commerce website built with React, Node, Express, and MongoDB. It features user authentication, product listing, shopping cart, checkout, payment, and order history.",
      image: "/ecommerce.jpg", // You will need to save your project images in the public folder and use the relative path
      link: "https://ecommerce.com", // You can use the link to your live demo or GitHub repository
    },
    {
      title: "Social Media App",
      description: "A full-stack social media app built with React, Node, Express, and MongoDB. It features user authentication, profile creation, post creation, likes, comments, and followers.",
      image: "/social.jpg",
      link: "https://social.com",
    },
    {
      title: "Cuberto-Clone",
      description: "Website Clone and made with js Gsap cdn and locomotive js",
      image: "/cuberto-copy.png",
      link: "https://cuberto-copy.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="container py-5">
      <h2 className="text-primary">Projects</h2>
      <p className="lead">
        Here are some of the projects I have made using various web technologies. You can click on
        the project title to view the live demo or the source code.
      </p>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-lg-4 col-md-6 mb-4" key={index}>
            <div className="card h-100">
              <img src={project.image} alt={project.title} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">
                  <a href={project.link} target="_blank" rel="noreferrer">
                    {project.title}
                  </a>
                </h5>
                <p className="card-text">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
