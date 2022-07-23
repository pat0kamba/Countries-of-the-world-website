import React from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "../styles/Detail.css";

export default function DetailBody({Name,currencies,language,region,sub_region,population,flag, borders})
{
    const navigate = useNavigate();
    //TODO receive Data from the country component
    const lan = [];
    console.log(language);
    for (let item in language)
    {
        lan.push(language[item]);
    };

    const curr = [];

    console.log(currencies);
    for (let currency in currencies)
    {
        curr.push(currencies[currency]);
    };

    const theflag = [];
    for (let Flag in flag)
    {
        theflag.push(flag[Flag]);
    }

    const names = [];

    for (let name in Name)
    {
        names.push(Name[name]);
    }
    console.log(names)

    console.log(curr);

    // console.log(cap)

    const capital = useSelector((state)=>state.country.capital);


    function goBack()
    {
        navigate(-1);
    }

    function showDetail()
    {
        navigate('/detail');

    }
    return (
        <div className="big-container ">
        <Button variant="contained"  startIcon={<ArrowBackIcon />} onClick={goBack}>Back</Button>
        <div className="details-b">
            <div className="detail-flag">
                <img alt="country-detail-flag" src={theflag[0]} className="detail-flag" />
            </div>
            <div className="country-detail">
                <h2>{names[0]}</h2>
                <div className="more-detail">
                <div>
                <p>Native Name:{names[1]}</p>
                <p>Population:{population}</p>
                <p>Region:{region}</p>
                <p>Sub Region:{sub_region}</p>
                <p>{capital}</p>

                </div>
                <div>
                <p>Currencies:
                {
                    curr.map((item, id)=>{
                        return (<span key={id}> {item.name} : {item.symbol} </span>)
                    })
                }
                </p>
                <span>Languages: </span>
                {
                    lan.map((item, id)=>{
                        return(
                            <span key={id}>{item} | </span>
                        )
                    })
                }
                </div>
                </div>
                <br />
               { borders && <span>Border Countries: </span> }
                {borders && borders.map((item, id)=>{return (<Button variant="outlined" color="secondary" sx={{m:"5px"}} onClick={showDetail} key={id}> {item}</Button>)})}
            </div>
        </div>
        </div>
    )
}
