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
                <option value="africa">Africa</option>
                <option value="americas">Americas</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
                <option value="all">All</option>
            </select>
        </form>
        </div>

    )
}
