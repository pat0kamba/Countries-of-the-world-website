import React from "react";
import Navbar from "./Navbar";
import DetailBody from "./DetailBody";
import {useSelector} from "react-redux";
import "../styles/Detail.css"

export default function Detail()
{   const countryData = useSelector((state)=>state.country.data);
    const mode = useSelector((state)=>state.country.mode);
   console.log(countryData);
    return(
        <div style={mode} className="big-detail-body">
            <Navbar />
            <DetailBody 
           
            currencies={countryData.currencies}
            language={countryData.languages}
            Name={countryData.name}
            region={countryData.region}
            population={countryData.population}
            sub_region={countryData.subregion}
            flag={countryData.flags}
            borders={countryData.borders}

            />
    
        </div>
    )
} 