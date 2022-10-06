import React, { useEffect } from "react";
import Navibar from "./Navibar";
import { UAParser } from 'ua-parser-js'
import Sidebar from "./extra-comp/Sidebar";


const Projects = ()=>{
    let a, b;

  var parser = new UAParser();
  let os = parser.getDevice();
  console.log(parser.getDevice());

  useEffect(()=>{
    document.title = 'Projects'
  })

    return(
        <>
    {/* project start  */}
        <div  style={{height:"100%", width:"100vw"}}>
            <div style={{height:"100%", width:"85vw", float:"left"}} className="sidebarresponsive1">
                <div className="background">
                <div   className="projectcenter">
                     Welcome to <span className="firstletter2">P</span>roject <span className="firstletter2">P</span>age<br/>
                     <span className="projectcenterdis1"> Explore one page projects...</span>
                </div>
                <div style={{display:"none"}} className="projectcenter2">
                     Welcome <br/>To<br/> <span className="firstletter2">P</span>roject <span className="firstletter2">P</span>age<br/><br/>
                     <span className="projectcenterdis"> Explore one page Projects...</span>
                </div>
                </div> 
            </div>
            <div className="sidebarresponsive2" style={{height:"100vh", width:"15vw", float:"left", display:"flex", alignItems:"center"}}>
                
            <Sidebar/>
            </div>
        </div>
        </>        
    )
}
export default Projects;