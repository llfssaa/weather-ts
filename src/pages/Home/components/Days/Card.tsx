import React from 'react'
import s from './Days.module.css'

interface Props{
    day:any
}

const firstLetterUpper = (str: string):string => str[0].toUpperCase() + str.slice(1);

const Card = (props:Props) =>{
    let date = new Date(props.day['dt_txt'])

    return(
        <div className={s.card}>
            <div className={s.day}>{date.toString().slice(0,3)}</div>
            <div className={s.day_info}>{date.toString().slice(3,10)}</div>
            <div className={s.icon_id}>
                <img src={`http://openweathermap.org/img/wn/${props.day.weather[0].icon}@2x.png`}
                     alt="" height={50} width={50}/>
            </div>
            <div className={s.temp_day}>{Math.round(props.day.main.temp_max)}°C</div>
            <div className={s.temp_night}>{Math.round(props.day.main.temp_min)}°C</div>
            <div className={s.info}>{firstLetterUpper(props.day.weather[0].description)}</div>
        </div>
    )
}

export default Card