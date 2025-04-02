// import { Phone } from "../Phone";
// import { Canvas } from "@react-three/fiber";
// import React, { useRef } from "react";
// import { useFrame } from "@react-three/fiber";
// import Navbar from "./Navbar";
// import './ContactUs.css';

// function AnimatedModel() {
//   const ModelRef = useRef();
//   useFrame(() => {
//     if (ModelRef.current) {
//       ModelRef.current.rotation.y += 0.01;
//     }
//   });

//   return <Phone ref={ModelRef} scale={0.04} rotation-x={Math.PI /4} rotation-y={Math.PI} position={[0,0,0]} />;
// }

// function ContactUs() {
//   return (
//     <div className="contact-page" style={{ height: "60%", width: "100%" }}>
//       <Navbar />
//       <Canvas camera={{ position: [0, 0, 3], fov: 75 }}>
//         <ambientLight intensity={1} />
//         <directionalLight position={[0, 10, 0]} />
//         <AnimatedModel />
//       </Canvas>
//       <div className="title" >
//         <h4>Thank you for visiting!</h4>
//       </div>

//       {/* Socials Section */}
//       <div className="socials-container">
//         <h2>Connect with Me</h2>
//         <ul className="socials-list">
//           <li><a href="https://www.linkedin.com/in/chinmayee-p-6a87a6229/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
//           <li><a href="https://github.com/Chinmayeep58" target="_blank" rel="noopener noreferrer">Github</a></li>
//           <li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=chinmayee05rao@gmail.com" target="_blank">Email Me</a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default ContactUs;


import { Phone } from "../Phone";
import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import Navbar from "./Navbar";
import './ContactUs.css';
import { Phone2 } from "../Phone2";


function AnimatedModel() {
  const ModelRef = useRef();
  useFrame(() => {
    if (ModelRef.current) {
      ModelRef.current.rotation.y += 0.01;
    }
  });

  return <Phone ref={ModelRef} scale={0.04} rotation-x={Math.PI / 4} rotation-y={Math.PI} position={[0, 0, 0]} />;
}

function ContactUs() {
  return (
    <div className="contact-page">
      <Navbar />
      
      {/* 3D Model Canvas */}
      <div className="canvas-container">
        <Canvas camera={{ position: [0, 0, 3], fov: 75 }} gl={{preserveDrawingBuffer:true}}>
          <ambientLight intensity={1} />
          <directionalLight position={[0, 10, 0]} />
          <AnimatedModel />
        </Canvas>
      </div>

      {/* Title */}
      <div className="title">
        <h4>Thank you for visiting!</h4>
      </div>

      {/* Socials Section */}
      <div className="socials-container">
        <h2>Connect with Me</h2>
        <ul className="socials-list">
          <li><a href="https://www.linkedin.com/in/chinmayee-p-6a87a6229/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://github.com/Chinmayeep58" target="_blank" rel="noopener noreferrer">Github</a></li>
          <li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=chinmayee05rao@gmail.com" target="_blank" rel="noopener noreferrer">Email Me</a></li>
        </ul>
      </div>
    </div>
  );
}

export default ContactUs;
