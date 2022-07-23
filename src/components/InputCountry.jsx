import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import {useDispatch, useSelector} from "react-redux";
import {countryActions} from "./countrySlice.js";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import "../styles/InputCountry.css";

export default function InputCountry()
{   const [country, setCountry] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const mode = useSelector((state)=>state.country.mode)

    function handleChange(e)
    {
        const value = e.target.value;
        setCountry(value);
        dispatch(countryActions.setFilter(value))
    }
    function searchCountry()
    {
        const Url = `https://restcountries.com/v3.1/name/${country.toLowerCase()}?fullText=true`;
        fetchCountry(Url);
        console.log(Url);
        setCountry('');
        navigate(`/detail/${country}`);

    }


    function fetchCountry(url)
    {
        fetch(url)
        .then((response)=>response.json())
        .then((data)=>{console.log(data[0]); dispatch(countryActions.changeCountry(data[0]))});

    }

    return(
        <div className="input-country" >
            {/* search icon from material UI */}
            <SearchIcon onClick={searchCountry} className="search-btn"/>
            <input type="text" placeholder="Search for a country..." onChange={handleChange} value={country} style={mode}/>
        </div>
    )
}
