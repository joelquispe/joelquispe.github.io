import { useRef, useState } from "react";

import "./App.css";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { IoMenu } from "react-icons/io5";

function App() {
  const refDrawer = useRef(null);
  const onDrawer = ()=>{

  }
  return (
    <div className="min-h-screen w-screen  bg-background">
      <div ref={refDrawer} className="absolute min-h-screen w-52 left-0 bg-white">
        <h1>Mi titulo</h1>
      </div>
      <div className="absolute text-2xl top-3 left-3">
        <div className="text-white"><IoMenu onClick={onDrawer}/></div>
      
      </div>
      {/* <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "Joel Alexander Sosaya Quispe - Desarrollador Full Stack",
        ]}
        wrapper="span"
        speed={50}
        className="text-white "
        style={{ fontSize: "2em", display: "inline-block" }}
        cursor={false}
        repeat={Infinity}
      /> */}
      
    </div>
  );
}

export default App;
