import React, { useEffect } from "react";
import Navibar from "./Navibar";
import { UAParser } from "ua-parser-js";
import { positions } from "@mui/system";
import Projects from "./projects";

const Home = () => {
  let a, b;

  var parser = new UAParser();
  let os = parser.getDevice();
  console.log(parser.getDevice());

  if (os.model == "iPhone") {
    a = "fix navup idesign";
    b = "idesign";
  } else {
    a = "fix2 navdown";
  }

  useEffect(()=>{
    document.title = 'Home';
  })
  return (
    <>
      <div className={a}>
        <Navibar  className={b} />
      </div>
      <div class="textbodymain">
        <div class="textarea1">
          Looking for a creative Web Developer?
          <br />
        </div>
        <div class="textarea2">Hire Me.. : )</div>
      </div>

      <div class="textbody2">
        <div class="textareab1">
          Looking <br /> For a<br /> <span className="creative">Creative</span>{" "}
          <br /> <span className="firstletter">W</span>eb{" "}
          <span className="firstletter">D</span>eveloper?
          <br /> <br />
          <div className="hireme"> Hire&nbsp;Me..&nbsp;: )</div>
        </div>
      </div> 
    </>
  );
};
export default Home;
