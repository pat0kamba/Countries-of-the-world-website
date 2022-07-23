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
  const Filter = useSelector((state)=>state.country.Filter);

  function handleregion(region){
    setPlace(region);

    console.log("this is the new region", region);

  };
  console.log("this is the new region", place);



 useEffect(()=>{

        let url;
        console.log(place);
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
        console.log(item);

        return item.filter((value)=>{
          // console.log("Inside the filter function ",value.name)
          if(Filter === '')
          {
            return value;
          }else if((value.name.common || value.name).toLowerCase().includes(Filter.toLowerCase()))
          {
            return value;
          }
        }).map((thecountry, id)=>{
         console.log(thecountry)
         let countryName = thecountry.name;
         console.log(countryName);
          return <Country
          name={countryName.common || countryName}
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

// (value.name.common).toLowerCase().includes(Filter.toLowerCase())) ||
