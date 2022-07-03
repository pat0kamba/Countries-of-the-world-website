import React from "react";
import { useNavigate } from "react-router-dom";
import {useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux"
import {countryActions} from "./countrySlice.js";
import "../styles/Country.css";



export default function Country({name,population,capital,region,flag})
{   //console.log("this is the country name",name);
    const navigate = useNavigate();
    const countryRef = useRef();
    const dispatch = useDispatch();
    const [data, setData] = useState([]);
    //const [countryName, setName] = useState('')
    
    let url = 'Fiji';
    let thename;
    const newName = useSelector((state)=>state.country.name);
    console.log(newName);
    

    function countryDetail(e)
    {
        
        
        thename = countryRef.current.querySelector('#country_name').textContent;
        const capital = countryRef.current.querySelector('#country_capital').textContent;
        navigate(`/detail/${thename}`);
        console.log(thename);
        thename = thename.toLowerCase();
        
        const Url = `https://restcountries.com/v3.1/name/${thename}?fullText=true`;
        
        dispatch(countryActions.setName(thename));
        dispatch(countryActions.setCapital(capital));
     
        FetchApi(Url)
        
        url = thename;
        console.log('this is the url1:', url);

    }

    function FetchApi(url)
    {
        fetch(url).then((response)=>response.json())
        .then((data)=>{
        setData(data[0]);
        dispatch(countryActions.changeCountry(data[0]));
        
    });
    console.log(data);
    }
  
    return ( 
     
        <div className="country" onClick={countryDetail} ref={countryRef}>
            
            <div className="flag">
                <img src={flag} alt="country-flag" id="flag" />
            </div>

            <div className="details">
            <h2 id='country_name'>{name}</h2>
            <p>Population:{population}</p>
            <p>Region:{region}</p>
            <p id="country_capital">Capital:{capital}</p>
           </div>
            
            
        </div>
        
    )
}