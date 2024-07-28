// src/components/About.js
import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import profileImage from "./profile.jpg"; // Update path if needed

function ImageModel({ imageUrl }) {
  const ref = useRef();
  const texture = useLoader(THREE.TextureLoader, imageUrl);

  useFrame(() => (ref.current.rotation.y += 0.0005));

  return (
    <mesh ref={ref}>
      <planeGeometry args={[5, 5]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}

export default function About() {
  return (
    <section id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.1} />
            <spotLight position={[5, 5, 5]} angle={0.001} penumbra={1} />
            <ImageModel imageUrl={profileImage} />
          </Canvas>
        </div>

        <div className="col-lg-6 col-md-12">
          <h2 className="text-black">About Me</h2>
          <p className="lead text-black">
            Hi, <b>Vishwanath M,</b> a Product Engineer based in Bengaluru,
            India. I love creating beautiful and functional websites using
            modern technologies like React, Node, MongoDB, etc. I have over 2
            years of experience in web development and have worked on various
            projects ranging from e-commerce, social media, infrastructure-used
            websites, and more.
          </p>
          <p className="lead text-black">
            I'm passionate about learning new skills and exploring new
            challenges. I'm always open to new opportunities and collaborations.
            If you have a project that you want to get started or need some help
            with your existing project, feel free to contact me. I would love to
            hear from you and work with you.
          </p>
          <a
            href="/resume.pdf"
            className="btn btn-primary mr-3"
            target="_blank"
            rel="noreferrer"
          >
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
