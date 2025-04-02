// Home.jsx
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { HomeModel } from "../HomeModel";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import './Home.css'

function AnimatedHomeModel() {
  const homeModelRef = useRef();
  useFrame(() => {
    if (homeModelRef.current) {
      homeModelRef.current.rotation.y += 0.01;
    }
  });

  return <HomeModel ref={homeModelRef} scale={4.5} rotation-x={Math.PI / 3} rotation-y={Math.PI} position={[0, 1, 0]} />;
}

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ height: "50%", width: "100vw" }}>
      <Navbar/>
      <Canvas camera={{ position: [0, 0, 3], fov: 75 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[0, 10, 0]} />
        <AnimatedHomeModel />
      </Canvas>
      <div className="container">
        <div className="text-container">
          <h1>Welcome to my website</h1>
          <p>Hey there! <br/>I'm Chinmayee, a passionate developer and innovator who loves building immersive experiences in VR, AR, and web technologies. From crafting interactive 3D applications to designing intelligent systems, I enjoy solving problems that blend creativity with technology. Always exploring new ideas, contributing to open source, and pushing boundaries—one project at a time!</p>
        </div>

        <div className="picture-container">
        <img src="/assets/ChinmayeeP.jpg"></img>
        </div>
      </div>
    </div>
  );
}

export default Home;
