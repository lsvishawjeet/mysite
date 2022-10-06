import React, { useState } from "react";
import { UAParser } from "ua-parser-js";
import Sidebar2 from "../../../Sidebar2";
import { motion } from "framer-motion";
import Const1 from "./Const1"

let time = new Date().toLocaleTimeString();

const Weather = () => {
  let a, b;

  var parser = new UAParser();
  let os = parser.getDevice();
  console.log(parser.getDevice());

  const variants = { 
    visible: { opacity: 1, transition: { duration: 2 } },
    hidden: { opacity: 0, transition: { duration: 2 } },
  }
  return (
    <>
      {/* project start  */}
      <div style={{ height: "100%", width: "100vw" }}>
        <motion.div initial="hidden"
  animate="visible"
  variants={variants}
          style={{ height: "100%", width: "85vw", float: "left", backgroundColor:"rgb(33,37,41)"}}
          className="sidebarresponsive1">
            <Const1/>
        </motion.div> 
        <div
          className="sidebarresponsive2"
          style={{
            height: "100vh",
            width: "15vw",
            float: "left",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Sidebar2 />
        </div>
      </div>
    </>
  );
};
export default Weather;
