import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import  {Container} from 'react-bootstrap';
import { UAParser } from 'ua-parser-js'
import { NavLink} from "react-router-dom";
import img from "../logos/logo4.png"
import { logDOM } from "@testing-library/react";
import { motion } from "framer-motion";
   
const Navibar=()=>{ 
  let a, b

    var parser = new UAParser();
    let os = parser.getDevice();

  if (os.model == "iPhone") {
        a = 'idesign';
    }  
    else{
       a = 'navibar2'
    }
    const variants = {
      visible: { opacity: 1, transition: { duration: 2 } },
      hidden: { opacity: 0.5, transition: { duration: 2 } },
    }
  
    return(
        <>
        <div className="navibar">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="kaala fontnav">
  <Container>
  <Navbar.Brand href="https://lsvishawjeet.github.io/mysite"><motion.span initial="hidden"
  animate="visible"
  variants={variants}><img style={{height:"35px"}} src={img}  /></motion.span></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav ">
    <Nav className="m-auto d-flex justify-content-around fs-4 ">
      <Nav.Link><NavLink style={{textDecoration:"none", color:"white"}} activeClassName="activeline2 " className="mx-5 activeline" to="/mysite/home">Home</NavLink></Nav.Link>
      <Nav.Link><NavLink style={{textDecoration:"none", color:"white"}} activeClassName="activeline2 " className="mx-5 activeline" to="/mysite/projects">Projects <span style={{color:"white", fontSize:"13px"}}>(Beta)</span></NavLink></Nav.Link>
      <Nav.Link><NavLink style={{textDecoration:"none", color:"white"}} activeClassName="activeline2 " className="mx-5 activeline" to="/mysite/about">About</NavLink></Nav.Link>
      <Nav.Link><NavLink style={{textDecoration:"none", color:"white"}} activeClassName="activeline2 " className="mx-5 activeline" to="/mysite/contact">Contact</NavLink></Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</div>

<div  className={a}>
<Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
        <Nav.Link className="navitems1"><NavLink style={{textDecoration:"none"}} activeClassName="activeline2" className="activeline" to="/home">Home</NavLink></Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link className="navitems1"><NavLink style={{textDecoration:"none"}} activeClassName="activeline2" className="activeline" to="/projects">Projects</NavLink></Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link className="navitems1"><NavLink style={{textDecoration:"none"}} activeClassName="activeline2" className="activeline" to="/about">About</NavLink></Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link className="navitems1"><NavLink style={{textDecoration:"none"}} activeClassName="activeline2" className="activeline" to="/contact">Contact</NavLink></Nav.Link>
        </Nav.Item>
      </Nav>
</div>
        </>
    )
}
export default Navibar;