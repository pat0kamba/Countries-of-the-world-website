import React from "react";
import Navbar from "./components/Navbar";
import Country from "./components/Country";
import SortCountry from "./components/SortCountry";
import InputCountry from "./components/InputCountry";
import {useSelector} from "react-redux";

import {useState, useEffect} from "react";
import "./App.css";


export default function App()
{
  const [state, setState] = useState([]);
  const [place, setPlace] = useState('all');

  const mode = useSelector((state)=>state.country.mode);
  function handleregion(region){
    setPlace(region);
    
    console.log("this is the new region", region);
    
  };
  console.log("this is the new region", place);
 
  
 
 useEffect(()=>{
 
        let url;
        if(place === 'all')
        {
           url = "https://restcountries.com/v2/all";
        }else{
          url = `https://restcountries.com/v3.1/region/${place}`;
        }
        
        fetch(url).then(response=>response.json()).then(data=>{setState((prev)=>{return [data]})});
        console.log(url);
        console.log('inside the use fecth hook');
       
        
   },[place]);

    //console.log(state)
    //console.log(url);
  return(
    
    <div style={mode}>
      <Navbar />
      <div className="country-filter">
      <InputCountry />
      <SortCountry handleRegion={handleregion}/>
      </div>
      <div className = "country-container">
      
        {state.map((item,id)=>{
       //console.log(item); 
        return item.map((thecountry, id)=>{
         console.log(thecountry)
          return <Country 
          name={thecountry.name}
          population={thecountry.population}
          capital={thecountry.capital}
          region={thecountry.region}
          flag={thecountry.flags.png}
          key={id}
        />
        }) 
        
        
      })}
      </div>
      
    </div>
   
   
    
  )
}
