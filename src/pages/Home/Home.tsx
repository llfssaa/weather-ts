import {Autocomplete, Box,  TextField} from "@mui/material";
import React, {useEffect, useRef, useState} from "react";
import {GlobalSvgSelector} from "../../assets/images/icons/global/GlobalSvgSelector";
import s from "./Home.module.css";
import ThisDay from "./components/ThisDay/ThisDay";
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
import {useTheme} from "../../hooks/useTheme";

import ThisDayInfo from "./components/ThisDayInfo/ThisDayInfo";
import Days from "./components/Days/Days";
import Preloader from "./components/Preloader";
import axios from "axios";
import useDebounce from "../../hooks/useDebounce";

const options = {
    method: 'GET',
    url: 'https://spott.p.rapidapi.com/places/autocomplete',
    params: {type: 'CITY', skip: '0', limit:'100', q: ''},
    headers: {
        'X-RapidAPI-Key': '6f26a48f89msh032cca04e6535dcp1e9466jsna84876d225d8',
        'X-RapidAPI-Host': 'spott.p.rapidapi.com'
    }
};

const setOptions = (cityName: string):any => {
    return {
        method: 'GET',
        url: 'https://spott.p.rapidapi.com/places/autocomplete',
        params: {type: 'CITY', skip: '0', limit:'100', q: cityName},
        headers: {
            'X-RapidAPI-Key': '6f26a48f89msh032cca04e6535dcp1e9466jsna84876d225d8',
            'X-RapidAPI-Host': 'spott.p.rapidapi.com'
        }
    }

}


interface Props{
    data: string,
    setCity: (city:any) => void,
    city:string,
}


function Home(props:Props) {
    const city:Array<any> = [];
    const [cities, setCities] = useState([])
    const [value, setValue] = useState('')
    const searchValue = useDebounce(value, 600);
    useEffect(()=>{
        axios.request(setOptions(searchValue)).then(function (res) {
            setCities(res.data.map((el:any)=>{
                return el.name
            }));
        })
    },[searchValue])

     cities.forEach((el:any)=>{
        //city.push({['label'] : el })
         city.push({label: el});
    })

    console.log(city);

    const {theme, setTheme} = useTheme();
    let handleTheme = () => {
        (theme === "light") ? setTheme("dark") : setTheme("light");
    }
    let wt = props.data && JSON.parse(props.data);



    console.log(value)

    return(
        (wt) ?
        <div className={s.home}>
            <header className={s.header}>
                <div className={s.headerGroup}>
                    <div><GlobalSvgSelector id='header-logo'/></div>
                    <div style={{lineHeight: '30px',fontSize:25, marginLeft:15,
                        color:'#4793FF', fontWeight:'bold'}}>Weather</div>
                </div>
                
                <div className={s.headerGroup}>

                    <Box sx={{ width:250, marginLeft:1.5,}}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={city}
                            sx={{ width: 300,
                                borderRadius:'6px',
                                backgroundColor:'var(--background-color-item)',
                            }}
                            onInputChange={(e, value,reason) => {
                                if (reason === 'input') setValue(value)}
                            }
                            onChange={(e, value) => {props.setCity(value)}}
                            renderInput={(params) => {
                                return <TextField {...params}

                                label='Select city' /> }}
                        />
                    </Box>
                    <Box sx={{marginLeft:10}} onClick={handleTheme}>
                        {theme === 'dark' ?   <LightModeIcon sx={{color:
                                                'var(--theme-button-color)'}}/>
                                                : <NightlightIcon sx={{color:
                                                'var(--theme-button-color)'}}/>}
                    </Box>
                </div>

            </header>
            <div className={s.dayInfoWrapper}>
                <ThisDay temp = {wt.main.temp} cityName={wt.name} weatherState={wt.weather[0]}/>
                <ThisDayInfo info={wt.main} wind = {wt.wind.speed} precipitation = {wt.weather[0]}/>
            </div>
            <Days city={props.city}/>

        </div>
            :
        <Preloader/>
    );

}



export default Home;