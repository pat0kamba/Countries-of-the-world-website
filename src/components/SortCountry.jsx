import React from "react";
import "../styles/SortCountry.css";
import {useState} from "react";
import {useSelector} from "react-redux";
export default function SortCountry({handleRegion})
{  const [value, setValue]=useState("");
    const mode = useSelector((state)=>state.country.mode);
    function handleChange(e)
    {
        setValue(e.target.value);
        console.log(e.target.value)
        handleRegion(e.target.value);
    }
    return( 
        <div>
        <form action="#" >
            <select className="form-filter" id="filter" value={value} onChange={handleChange} style={mode}>
                <option value="Filter by Region">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
                <option value="all">All</option>
            </select>
        </form>
        </div>

    )
}