import React from "react";
import Loading from "./loading.svg";

const Loader = ()=>{
    return(
        <>
        <div style={{background:"none", display:"flex", alignItems:"center", justifyContent:"center"}}>
            <img style={{height:"100px", width:"100px"}} src={Loading} alt="" srcset="" />
        </div>
        </>
    )
}
export default Loader;