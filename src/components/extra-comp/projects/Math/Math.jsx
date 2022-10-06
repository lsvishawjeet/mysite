import React, { useEffect, useState } from "react";
import { UAParser } from "ua-parser-js";
import Sidebar2 from "../../Sidebar2";
import { motion } from "framer-motion";
import Alert from 'react-bootstrap/Alert';
import l1 from "./levels/l1.svg";
import l2 from "./levels/l2.svg";
import l3 from "./levels/l3.png";
import l4 from "./levels/l4.png";
import l5 from "./levels/l5.svg";
import l6 from "./levels/l6.svg";
import l7 from "./levels/l7.svg";
import l8 from "./levels/l8.svg";
import l9 from "./levels/l9.svg";
import l10 from "./levels/l10.svg";
import l11 from "./levels/l11.svg";
import "./math.css";

const getlocaldatalevel = ()=>{
  const locallevel = localStorage.getItem('level');
  if(locallevel){
    return JSON.parse(localStorage.getItem('level'));
  }
  else{
  return 1;
  }
}


const Math = ()=>{
    const [value, setvalue] = useState(false);
    const [show, setShow] = useState(false);
    const [answer, setanswer] = useState("");
    const [level, setlevel] = useState(getlocaldatalevel());
    const levelimg =()=>{
      if(level == 1){
        return l1;
      }
      else if(level == 2){
        return l2;
      }
      else if(level == 3){
        return l3;
      }
      else if(level == 4){
        return l4;
      }
      else if(level == 5){
        return l5;
      }
      else if(level == 6){
        return l6;
      }
      else if(level == 7){
        return l7;
      }
      else if(level == 8){
        return l8;
      }
      else if(level == 9){
        return l9;
      }
      else if(level == 10){
        return l10;
      }
      else if(level == 11){
        return l11;
      }
    }
    const [img, setimg] = useState(levelimg());
    const [levell, setlevell] = useState("Level");
    const [displaynone, setdisplaynone] = useState({display:"none"});
    
    let a, b;

    useEffect(()=>{
      localStorage.setItem('level', JSON.stringify(level));
    },[level]);

    var parser = new UAParser();
    let os = parser.getDevice();
  
    const variants = {
      visible: { opacity: 1, transition: { duration: 2 } },
      hidden: { opacity: 0, transition: { duration: 2 } },
    }

    useEffect(()=>{
      document.title = `Level ${level}`
    })

    const buttonchange = ()=>{
        setvalue(!value);
        if (img === l1) {
          setanswer("");
          setlevel("1");
          if (answer == 6) {
            setimg(l2);
            setlevel(2);
          } else {
            setanswer("Wrong");
          }
        } else if (img === l2) {
          setanswer("");
          if (answer == 10) {
            setimg(l3);
            setlevel(3);
          } else {
            setanswer("Wrong");
          }
        } else if (img === l3) {
          setanswer("");
          if (answer == 14) {
            setimg(l4);
            setlevel(4);
          } else {
            setanswer("Wrong");
          }
        } else if (img === l4) {
          setanswer("");
          if (answer == 2) {
            setimg(l5);
            setlevel(5);
          } else {
            setanswer("Wrong");
          }
        } else if (img === l5) {
          setanswer("");
          if (answer == 8113) {
            setimg(l6);
            setlevel(6);
          } else {
            setanswer("Wrong");
          }
        } else if (img === l6) {
          setanswer("");
          if (answer == 5) {
            setimg(l7);
            setlevel(7);
          } else {
            setanswer("Wrong");
          }
        } else if (img === l7) {
          setanswer("");
          if (answer == 7831) {
            setimg(l8);
            setlevel(8);
          } else {
            setanswer("Wrong");
          }
        } else if (img === l8) {
          setanswer("");
          if (answer == 7) {
            setimg(l9);
            setlevel(9);
          } else {
            setanswer("Wrong");
          }
        } else if (img === l9) {
          setanswer("");
          if (answer == 49) {
            setimg(l10);
            setlevel(10);
          } else {
            setanswer("Wrong");
          }
        } else if (img === l10) {
          setanswer("");
          if (answer == 64) {
            setimg(l11);
            setlevel(11);
          } else {
            setanswer("Wrong");
          }
        } else if (img === l11) {
          setanswer("");
          if (answer == 10) {
            setimg("");
            setlevel("CoMpLeTeD :---)")
            setlevell("Levels")
            setShow(true);
          } else {
            setanswer("Wrong");
          }
        }
        // else if(img === l7){
        //   setanswer("")
        //   if(answer==8731){
        //       setimg(l7);
        //       setlevel("CoMpLeTeD :---)")
        //       setlevell("Levels")
        //   }
        //   else{
        //       setanswer("Wrong");
        //   }
        // }
        else {
          setanswer("Soon : )");
        }
    }
    const alertsoon = ()=>{
      if (show) {
        return (
          <Alert variant="" className="alertbackground" onClose={() => setShow(false)}>
            <Alert.Heading>Coming Soon!</Alert.Heading>
            <p>We are working on new levels
            </p>
          </Alert>
        );
      }
    }
    return(<>
    <div style={{ height: "100%", width: "100vw" }}>
        <div style={{ height: "100%", width: "85vw", float: "left", backgroundColor:"rgb(33,37,41)"}} className="sidebarresponsive1">
            <motion.div initial="hidden" animate="visible" variants={variants} >
            <div className="alignitems" style={{color:"white", zIndex:"100", marginBottom:"30px"}}>
              <h2 className="levelno">{levell} {level}</h2>
            </div>
        <img className="imageriddle" src={img} alt="" srcset="" />
        {alertsoon()}
        <div className="erroranswer" style={displaynone}><span className="errortext">Error</span></div>
        <br/><br/>
            <div className="alignitems" style={{color:"white"}}>
                <input className="input" type="text" value={answer} onChange={event => setanswer(event.target.value)}/>
                <input className="buttonmath" type="button" value="Submit" onClick={buttonchange} />
            </div>
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
    </>);
}
export default Math;