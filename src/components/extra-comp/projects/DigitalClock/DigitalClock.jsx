import React, {useEffect, useState} from "react";
import Navibar from "../../../Navibar";
import { UAParser } from 'ua-parser-js'
import Sidebar2 from '../../Sidebar2'
import { motion } from "framer-motion"


let time=new Date().toLocaleTimeString() ;

const DigitalClock = ()=>{
    let a, b;

  var parser = new UAParser();
  let os = parser.getDevice();
  const [ct,ut]=useState(time);
  const rf =()=>{
      time=new Date().toLocaleTimeString([], { hour12: true}) ;
      ut(time);
  }
  const variants = {
    visible: { opacity: 1, transition: { duration: 2 } },
    hidden: { opacity: 0, transition: { duration: 2 } },
  }
  setInterval(rf,1000);
  useEffect(()=>{
    document.title = `${ct}`
  })

  let date = new Date();
  let treek = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
    return(
        <>

    {/* project start  */}
        <div style={{height:"100%", width:"100vw"}}>
            <div style={{height:"100%", width:"85vw", float:"left"}} className="sidebarresponsive1">
                <div className="background">

                <motion.div initial="hidden"
  animate="visible"
  variants={variants} className="mainstop">
                    <span style={{textTransform:"uppercase"}}>{ct}</span><br/>
                    {/* <span className="date">{treek} / {month} / {year}</span> */}
                </motion.div>
                 
                </div>
            </div>
            <div className="sidebarresponsive2" style={{height:"100vh", width:"15vw", float:"left", display:"flex", alignItems:"center"}}>
            <Sidebar2/>
            </div>
        </div>
        </>        
    )
}
export default DigitalClock;