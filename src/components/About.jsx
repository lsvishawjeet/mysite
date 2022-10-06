import React, { useEffect } from "react";
import Navibar from "./Navibar";
import { UAParser } from "ua-parser-js";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import background from ".././logos/bgcoding.jpg";
import vishaw from ".././logos/vishaw.jpg";
import { motion } from "framer-motion";
import { transform } from "framer-motion";

const About = () => {
  let a, b;

  var parser = new UAParser();
  let os = parser.getDevice();
  console.log(parser.getDevice());

  if (os.model == "iPhone") {
    a = "navup idesign";
    b = "idesign";
  } else {
    a = "fix navdown";
    b = "fix navdown";
  }
  useEffect(()=>{
    document.title = 'About'
  })
  return (
    <>
      <div className={a}>
        <Navibar className={b} />
      </div>

      {/* <div className="aboutstart">
         <Parallax pages={4}>
          <ParallaxLayer factor={3} style={{backgroundImage: `url(${background})`, backgroundSize:"cover"}}>
            
          </ParallaxLayer>
          <ParallaxLayer speed={1} >
            <h1>Welcome to my site</h1>
          </ParallaxLayer>

          <ParallaxLayer factor={2} offset={1} speed={0.5}>
              <h1>This is second heading</h1>
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={2}>
              <h1>This is third heading</h1>
          </ParallaxLayer>
         </Parallax>
      </div> */}
      {/* <div className="skills">
        <h1 style={{color:"limegreen"}}>-Skills-</h1>
        <h1><div><span style={{color:"limegree"}}>-</span>HTML</div><div>-CSS</div><div>-Javascript</div><div>-ES6</div><div>-React</div></h1>
      </div> */}

      <div className="aboutstart">
        <div className="mainabout">
          <motion.div animate={{ x: [-100, 0, 0] }} className="image">
            <img className="vishaw" src={vishaw} alt="" srcset="" />
          </motion.div>
          <motion.div animate={{ x: [100, 0, 0] }} className="text">
            <div className="heading"><h1>About ME</h1></div>
            <div className="parah">
            “Diligent and ambitious software developer with 2+ years of experience in web development as a freelancer. I have built many innovative web applications for many companies in the past that significantly increased clients’ satisfaction. I am an enthusiastic, self-motivated, reliable, responsible and hard working person. I am a mature team worker and adaptable to all challenging situations. I am able to work well both in a team environment as well as using own initiative.”
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};
export default About;
