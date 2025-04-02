import React from "react";
import Navbar from "./Navbar";
import "./Projects.css"; // Importing the CSS file for styling
import { Desk } from "../Desk";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";


function AnimatedModel() {
  const ModelRef = useRef();

  return (
    <Desk ref={ModelRef} scale={0.24} rotation-x={Math.PI/23} rotation-y={Math.PI} position={[-0.1,0,1]} />
    );
}

export default function Projects() {
    return (
        <div style={{ height: "60%", width: "100%" }}>
            <Navbar />
            <Canvas camera={{ position: [0, 0, 3], fov: 75 }}>
                <ambientLight intensity={3} />
                <directionalLight position={[0, 1, 0]} />
                <AnimatedModel />
            </Canvas>
            <div className="title">Projects</div>
            <div className="card-container">
                <div className="card">
                    <img src="/assets/KnowAR.jpg" alt="Project 1" />
                    <h2>KnowAR</h2>
                    <p>An AR application which helps students learn better through 3D visuals in AR environemnt</p>
                    <a href="https://github.com/Chinmayeep58" target="_blank" rel="noopener noreferrer">In progress..</a>
                </div>
                <div className="card">
                    <img src="/assets/ArPortfolio.jpg" alt="Project 2" />
                    <h2>AR Portfolio</h2>
                    <p>An interesting take on portfolio. On scanning the target image, my card, the AR app displays my portfolio is AR environment.</p>
                    <a href="https://github.com/Chinmayeep58/Portfolio_AR" target="_blank" rel="noopener noreferrer">Link</a>
                </div>
                <div className="card">
                    <img src="/assets/vr.jpg" alt="Project 2" />
                    <h2>ZenZone</h2>
                    <p>A Virtual Reality application for performing rehabilation exercises.</p>
                    <a href="https://github.com/Chinmayeep58/ThreeJS_galaxy/tree/master" target="_blank" rel="noopener noreferrer">Link</a>
                </div>
                <div className="card">
                    <img src="/assets/galaxy.jpg" alt="Project 2" />
                    <h2>Galaxy</h2>
                    <p>A 3D galaxy made from scratch using three js.</p>
                    <a href="https://github.com/Chinmayeep58" target="_blank" rel="noopener noreferrer">In progress</a>
                </div>
            </div>
            <div className="skills-section">
                <h2>Skills</h2>
                <div className="skills-container">
                <div className="skill">HTML</div>
                <div className="skill">CSS</div>
                <div className="skill">JavaScript</div>
                <div className="skill">React</div>
                <div className="skill">Three.js</div>
                <div className="skill">AR Development</div>
                <div className="skill">VR Development</div>
                <div className="skill">Unity</div>
                <div className="skill">MySQL</div>
                <div className="skill">Python</div>
                </div>
            </div>
        </div>
    );
}
