import './App.css';
import Home from "./pages/Home/Home";
import {useEffect, useState} from "react";
import axios from "axios";



interface Props{}


function App(props:Props) {
    const [weather, setWeather] = useState("");
    const [city, setCity] = useState('Kyiv');

    const setCityCallback = (city: any) => {
        if (city) setCity(city.label)
    }

    useEffect(()=>{
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ae46222a84de4f84cfb83ce6f6f311fb`)
            .then((res)=>{
                setWeather(JSON.stringify(res.data));

            })
    }, [city])

    return (
           <div className='globalContainer'>
               <div className="container">
                   <Home data={weather} setCity={setCityCallback} city={city}/>
               </div>
           </div>
        );
    }

    export default App;
