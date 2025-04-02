// import { Canvas } from "@react-three/fiber";
// import { Experience } from "./components/Experience";
// import { Bloom, EffectComposer } from "@react-three/postprocessing";
// import { Suspense } from "react";
// import { UI } from "./components/UI";


// function App() {
//   return (
//     <>
//     <Canvas shadows camera={{ position: [0,0,8], fov: 42 }}>
//       <color attach="background" args={["#171720"]} />
//       <fog attach={"fog"} args={["#171720",10,30]}/>
//       <Suspense>
//         <Experience />
//       </Suspense>
//       <EffectComposer>
//         <Bloom mipmapBlur intensity={1.2} />
//       </EffectComposer>
//     </Canvas>
//     <UI/>
//     </>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Suspense } from "react";
import { UI } from "./components/UI";
import Home from "./components/pages/Home"; // Ensure this is the correct path
import ContactUs from "./components/pages/ContactUs";
import Projects from "./components/pages/Projects";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Canvas Page with UI */}
        <Route
          path="/"
          element={
            <>
              <Canvas shadows camera={{ position: [0, 0, 8], fov: 42 }}>
                <color attach="background" args={["#171720"]} />
                <fog attach="fog" args={["#171720", 10, 30]} />
                <Suspense>
                  <Experience />
                </Suspense>
                <EffectComposer>
                  <Bloom mipmapBlur intensity={1.2} />
                </EffectComposer>
              </Canvas>
  
              
            </>
          }
        />

        {/* Home Page */}
        <Route path="/home" element={<Home />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
