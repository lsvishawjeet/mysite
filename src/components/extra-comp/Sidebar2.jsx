import React from "react";
import { Navbar } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavLink} from "react-router-dom";
import { TbLayoutNavbar } from "react-icons/tb";
import { useState } from "react";
import { UAParser } from 'ua-parser-js'

const Sidebar2 = () => {

  let a;
  if(window.innerWidth <= 990){
    a = false;
  }
  else{
    a = true;
  }

  
  const [show, setShow] = useState(a);
  
  let z;


  var parser = new UAParser();
  let os = parser.getDevice();
  // console.log(parser.getDevice());
  // console.log(parser.getUA());
  console.log(window.innerWidth)

  if (os.model == "iPhone") {
    a = "button2";
  } else {
    a = " button1";
  }
  return (
    <>
    {show?
      <div className="sidebarmain2">
        <dl className="float">
          <dt >Clock</dt>
          <dd ><NavLink style={{textDecoration:"none", color:"white"}} activeClassName="activeline2"  to="/projects/digitalclock">- Digital Clock</NavLink></dd>
          <dd>- Angular Clock</dd>
        </dl>
        <dl className="float">
          <dt >Games</dt>
          <dd><NavLink style={{textDecoration:"none", color:"white"}} activeClassName="activeline2"  to="/projects/math">- Math riddles</NavLink></dd>
          <dd><NavLink style={{textDecoration:"none", color:"white"}} activeClassName="activeline2"  to="/projects/pushups">- PushUp Counter</NavLink></dd>
          <dd>- Finger Speed battle</dd>
          <dd>- Quiz game</dd>
        </dl>
        <dl className="float">
          <dt >Weather</dt>
          <dd><NavLink style={{textDecoration:"none", color:"white"}} activeClassName="activeline2"  to="/projects/weather">- Local Weather</NavLink></dd>
        </dl>
        <dl className="float">
          <dt >More Apps</dt>
          <dd>- Notes</dd>
          <dd><NavLink style={{textDecoration:"none", color:"white"}} activeClassName="activeline2"  to="/projects/covid">- Covid Data</NavLink></dd>
        </dl>
      </div>:null}
      <button className={a} onClick={()=>setShow(!show)}>Projects</button>
    </>
  );
};
export default Sidebar2;