import React, {useEffect, useState } from "react";
import Navibar from "../../../Navibar";
import { UAParser } from "ua-parser-js";
import Sidebar2 from "../../Sidebar2";
import Comp2 from "./components/Comp2";
import { Margin } from "@mui/icons-material";
import { motion } from "framer-motion";

let time = new Date().toLocaleTimeString();
console.log(time);

const Covid = () => {
  let a, b;

  var parser = new UAParser();
  let os = parser.getDevice();
  console.log(parser.getDevice());

  const variants = {
    visible: { opacity: 1, transition: { duration: 2 } },
    hidden: { opacity: 0, transition: { duration: 2 } },
  }
  useEffect(()=>{
    document.title = `Covid Data`
  })
  return (
    <>
      {/* project start  */}
      <div style={{ height: "100%", width: "100vw" }}>
        <div
          style={{ height: "100%", width: "85vw", float: "left", backgroundColor:"rgb(33,37,41)"}}
          className="sidebarresponsive1">
            <motion.div initial="hidden"
  animate="visible"
  variants={variants} className="coviddata">
              <Comp2 />
          </motion.div>
        </div>
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
export default Covid;
