import { CameraControls, Environment, OrbitControls, RenderTexture, useFont } from "@react-three/drei";
import { Text } from "@react-three/drei";
import { Camping } from "./Camping";
import { degToRad } from "three/src/math/MathUtils.js";
import { useEffect, useRef } from "react";
import { MeshReflectorMaterial } from "@react-three/drei";
import { Float } from "@react-three/drei";
import { Bloom } from "@react-three/postprocessing";
import { Color } from "three";
import { useAtom } from "jotai";
import { currentPageAtom } from "./UI";
import { Computer } from "./Computer";
import { useNavigate } from "react-router-dom";
import { Html } from "@react-three/drei";


// const bloomColor=new Color("#fff");
// bloomColor.multiplyScalar(1.5);

const bloomColor = new Color("#fff");
bloomColor.multiplyScalar(window.innerWidth < 768 ? 1.6 : 1.5); // Reduce intensity for mobile


export const Experience = () => {
  const controls=useRef();
  const meshFitCameraHome=useRef();
  const meshFitCameraStore=useRef();
  const textMaterial=useRef();
  const [currentPage,setCurrentPage]=useAtom(currentPageAtom)

  const intro=async()=>{
    controls.current.dolly(-22);
    controls.current.smoothTime=1.5;
    setTimeout(()=>{
      setCurrentPage("home")
    },1200)
    fitCamera()
  }

  // const fitCamera=async()=>{
  //   if(currentPage==="store"){
  //     controls.current.smoothTime=0.8;
  //     controls.current.fitToBox(meshFitCameraStore.current,true)
  //   }
  //   else{
  //     controls.current.smoothTime=1.5;
  //     controls.current.fitToBox(meshFitCameraHome.current,true)
  //   }
  // }

  const fitCamera = async () => {
    if (!controls.current) return;
    
    const isMobile = window.innerWidth < 768;
  
    if (currentPage === "store") {
      controls.current.smoothTime = isMobile ? 1 : 0.8;
      controls.current.fitToBox(meshFitCameraStore.current, true);
      if (isMobile) controls.current.zoomTo(0.5, true); // Zoom out on small screens
    } else {
      controls.current.smoothTime = isMobile ? 1.2 : 1.5;
      controls.current.fitToBox(meshFitCameraHome.current, true);
      if (isMobile) controls.current.zoomTo(0.7, true);
    }
  };
  
  

  useEffect(()=>{
    intro();
  },[])

  useEffect(()=>{
    fitCamera()
    window.addEventListener("resize",fitCamera)
    return ()=> window.removeEventListener("resize",fitCamera)
  },[currentPage])

  const navigate = useNavigate();

  return (
    <>
      <Html position={[0, -3, 0]} transform>
      <button
        style={{
          padding: "8px 10px",
          backgroundColor: "#f97316", // Orange-400
          color: "white",
          fontWeight: "bold",
          borderRadius: "20px",
          cursor: "pointer",
          border: "none",
          fontSize: "5px",
          transition: "background-color 0.3s, transform 0.2s",
          boxShadow: "2px 4px 8px rgba(0, 0, 0, 0.2)",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#ea580c")} // Orange-600 on hover
        onMouseOut={(e) => (e.target.style.backgroundColor = "#f97316")} // Back to Orange-400
        onMouseDown={(e) => (e.target.style.transform = "scale(0.95)")} // Click effect
        onMouseUp={(e) => (e.target.style.transform = "scale(1)")} 
        onClick={() => navigate("/home")}
      >
          HOME
        </button>
      </Html>
      <CameraControls ref={controls}/>
      <mesh ref={meshFitCameraHome} position-z={0.5} visible={false}>
        <boxGeometry args={[10,2,2]}/>
        <meshBasicMaterial color={"orange"} transparent opacity={0.5}/>
      </mesh>
      <Text 
      font={"fonts/Poppins-Black.ttf"} 
      position-x={-1.3} 
      position-y={-0.5} 
      position-z={1} 
      lineHeight={0.8} 
      textAlign="center"
      rotation-y={degToRad(30)}
      anchorY={"bottom"}>
        Chinmayee {"\n"} P
        <meshBasicMaterial color={bloomColor} toneMapped={false} ref={textMaterial}>
          <RenderTexture attach={"map"}>
            <color attach={"background"} args={["#fff"]}/>
            <Environment preset="sunset"/>
            <Float floatIntensity={4} rotationIntensity={5}>
              <Camping 
              scale={1.6}
              rotation-y={-degToRad(25)}
              rotation-x={degToRad(40)}
              position-y={-0.5} />
            </Float>
          </RenderTexture>
        </meshBasicMaterial>
      </Text>
      <group rotation-y={degToRad(-25)} position-x={3}>
        <Computer scale={0.007} position={[0.4,-0.5,2]}/>
        <mesh ref={meshFitCameraStore} visible={false}>
          <boxGeometry args={[6, 4, 6]} />
          <meshBasicMaterial color="red" transparent opacity={0.5} />
        </mesh>
      </group>
      <mesh position-y={-0.48} rotation-x={-Math.PI/2}>
        <planeGeometry args={[100,100]}/>
        <MeshReflectorMaterial 
        blur={[100, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={10}
          roughness={1}
          depthScale={1}
          opacity={0.5}
          transparent
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#333"
          metalness={0.5}
        />
      </mesh>

      
      <Environment preset="sunset"/>
    </>
  );
};

useFont.preload("fonts/Poppins-Bleck.ttf")