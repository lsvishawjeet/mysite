import React from "react";

function Comp1() {
  //  alert(1);
    const hello =async ()=>{
    const res=await fetch("https://data.covid19india.org/data.json");
    const acdata = await res.json(); 
    console.log(acdata);
  } 
  hello();
}

export default Comp1; 