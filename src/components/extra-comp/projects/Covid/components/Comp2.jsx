import { compose } from "@mui/system";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "../Covid.css"
import Loader from "../../../../../logos/Loader"

const Comp2 = () => {

    const [State, Ostate] = useState([]);
    const [Loading , setLoading] = useState(false);

  useEffect(() => {  
    corona();
  });

  let a = <Loader/>

  const corona = async () => {
    try {
      await axios.get("https://data.covid19india.org/data.json")
     .then(res =>{
      const acdata =  res.data;
      Ostate(acdata.statewise)
    });
    setLoading(true);
    } catch (error) {
      console.log(123456789);
    }
  };


  return (
    <>
    
      {Loading ? (<div className="center"><div className="tablediv">
      <table>
        <tr className="tr">
          <th>State</th>
          <th>Active</th>
          <th>Confirmed</th>
          <th>Deaths</th>
          <th>Recovered</th>
        </tr>
        {State.map((data) => {
          return (
            <>
              <tr>
                <td className="state">{data.state}</td>
                <td>{data.active}</td>
                <td>{data.confirmed}</td>
                <td>{data.deaths}</td>
                <td>{data.recovered}</td>
              </tr>
            </>
          );
        })}
      </table>
      </div> </div>) : (a)}
        
      
    </>
  );
};
export default Comp2;
