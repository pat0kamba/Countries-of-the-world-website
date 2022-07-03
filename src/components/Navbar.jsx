import React from "react";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NightlightIcon from '@mui/icons-material/Nightlight';
import {countryActions} from './countrySlice.js';
import {useDispatch} from 'react-redux';
import {useState} from "react";

import "../styles/Navbar.css";
export default function Navbar(){
    const dispatch = useDispatch();

    // change Mode into a global state with Redux
    const [Mode, setMode] = useState(true);
    const switchMode = document.getElementById('change-mode');
    function changeMode()
    {
        if(switchMode.checked){
            console.log('dark mode on');
            dispatch(countryActions.changeBgColor({
                bg:"#fff",
                color:"#333"
            }))
            setMode(true)
           

        }else{
            console.log('dark mode off');
            dispatch(countryActions.changeBgColor({
                bg:"#212c37",
                color:"#fff"
            }))
            setMode(false);
        }
        
        
    }
   
    return(
        <div className="navbar">
        <div className="nav-title">
        <h1>where in the world?</h1>
        </div>
        <div className="mode">
        <input id="change-mode" type="checkbox" style={{display:"none"}} />
        <label htmlFor="change-mode" className="modeIcon" onClick={changeMode}>  {Mode?<DarkModeOutlinedIcon/> : <NightlightIcon />}</label>
        {Mode?<p>Dark Mode </p>: <p>Light Mode</p>}
        </div>
        </div>
    )
}