import React from "react";
import Home from "./Home";
import Projects from "./projects";
import About from "./About";
import Contact from "./Contact";
import Navibar from "./Navibar";
import "./Everything.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Everything = ()=>{
    return(
        <>
        {/* <Parallax pages={4}>
          <ParallaxLayer factor={1}>
          <Home></Home>
          </ParallaxLayer>

          <ParallaxLayer factor={1} offset={1} speed={10} >
          <Projects></Projects>
          </ParallaxLayer>
        
          <ParallaxLayer factor={1} offset={2} speed={10}>
          <About></About>
          </ParallaxLayer>

          <ParallaxLayer factor={1} offset={3} speed={10}>
          <Contact></Contact>
          </ParallaxLayer>
         </Parallax> */}
        <section className="everyhome">
          <Home></Home>
        </section>
        <section className="everyproject">
        <Projects></Projects>
        </section>
        <section className="everyabout">
          <About></About>
        </section>
        <section className="everycontact">
          <Contact></Contact>
        </section>
        </>
    )
}
export default Everything