import React from 'react';
import s from "./Days.module.css";

interface Props{
    day:any
}

const firstLetterUpper = (str: string):string => str[0].toUpperCase() + str.slice(1);

function Today(props:Props) {

    return(
        <div className={s.card_today}>
            <div className={s.time}>{props.day['dt_txt'].slice(10,16)}</div>
            <div className={s.icon}>
                <div className={s.temp_main}>{Math.round(props.day.main.temp_max)}°C</div>
                <img src={`http://openweathermap.org/img/wn/${props.day.weather[0].icon}@2x.png`}
                     alt="" height={60} width={60}/>
            </div>
            <div className={s.info_ty}>{firstLetterUpper(props.day.weather[0].description)}</div>


        </div>
    )
}

export default Today;