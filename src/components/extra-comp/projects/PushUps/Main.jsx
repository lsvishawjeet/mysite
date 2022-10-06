import React from "react";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useState } from "react";
import { Button } from 'react-bootstrap';
import { useEffect } from "react";
import './PushUp.css'


const Main=()=>{

    const [value, ovalue] = useState(0);
    useEffect(()=>{
        document.title = `A new title ${value}`;
    });
    const increase=()=>{
       ovalue(value+1)
    }
    const reset=()=>{
        ovalue(0)
    }
    useEffect(()=>{
        document.title = `PushUp`
      })

    return(
        <>
        <div className="box">
            <div className="container">
                <div className="anothercon">
        <div className="up" onClick={increase}>{value}</div><br/>
        <div className="button">
        <Button variant="danger" onClick={reset}>Reset</Button>{''}
        {/* <button className="button" onClick={reset}></button> */}
        </div>
        </div>
        </div>
        </div>
        </>
    )
}
export default Main 