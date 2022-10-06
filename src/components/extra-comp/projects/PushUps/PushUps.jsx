import React, { useState } from "react";
import Navibar from "../../../Navibar";
import { UAParser } from "ua-parser-js";
import Sidebar2 from "../../Sidebar2";
import Comp2 from "./Main";
import { motion } from "framer-motion";

let time = new Date().toLocaleTimeString();
const PushUps = () => {
  let a, b;

  // alert("Touch your nose with screen while doing PushUps.");

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
            <Comp2/>
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
export default PushUps;
