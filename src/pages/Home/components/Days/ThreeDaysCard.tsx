import React from 'react';
import s from './Days.module.css'

interface Props{
    day:any
}



function ThreeDaysCard(props:Props) {


    let createDaysPart = (time:any) =>{
        if (time['dt_txt'].slice(11) === '09:00:00'){
            return 'Morning'
        }
        if (time['dt_txt'].slice(11) === '15:00:00'){
            return 'Day'
        }
        if (time['dt_txt'].slice(11) === '18:00:00'){
            return 'Evening'
        }
        if (time['dt_txt'].slice(11) === '21:00:00'){
            return 'Night'
        }
    }

    let date = new Date(props.day[0]['dt_txt'])
    let currentDate = date.toString().slice(0,3)+',  ' + date.toString().slice(3,10)

    return(
        <div className={s.mainDay}>
            {currentDate}
            <div className={s.oneDay}>
                {props.day.map((el:any) => {
                    return(
                        <div className={s.daysPart}>{createDaysPart(el)}
                            <div className={s.icon_id}>
                                <img src={`http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`}
                                     alt="" height={70} width={70}/>
                            </div>
                            <div className={s.temp_day}>{Math.round(el.main.temp)}°C</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
    //
    // let date = new Date(props.day['dt_txt'])
    // let currentDate = date.toString().slice(0,3)+', ' + date.toString().slice(3,10)
    // return (
    //     <div className={s.card_three}>
    //         <div className={s.currentDay}>{currentDate}
    //             <div className={s.daysPart}>{createDaysPart()}
    //                 <div className={s.icon_id}>
    //                     <img src={`http://openweathermap.org/img/wn/${props.day.weather[0].icon}@2x.png`}
    //                          alt="" height={50} width={50}/>
    //                 </div>
    //                 <div className={s.temp}>{props.day.main.temp}</div>
    //             </div>
    //             <div className={s.daysPart}>{createDaysPart()}
    //                 <div className={s.icon_id}>
    //                     <img src={`http://openweathermap.org/img/wn/${props.day.weather[0].icon}@2x.png`}
    //                          alt="" height={50} width={50}/>
    //                 </div>
    //                 <div className={s.temp}>{props.day.main.temp}</div>
    //             </div>
    //             <div className={s.daysPart}>{createDaysPart()}
    //                 <div className={s.icon_id}>
    //                     <img src={`http://openweathermap.org/img/wn/${props.day.weather[0].icon}@2x.png`}
    //                          alt="" height={50} width={50}/>
    //                 </div>
    //                 <div className={s.temp}>{props.day.main.temp}</div>
    //             </div>
    //             <div className={s.daysPart}>{createDaysPart()}
    //                 <div className={s.icon_id}>
    //                     <img src={`http://openweathermap.org/img/wn/${props.day.weather[0].icon}@2x.png`}
    //                          alt="" height={50} width={50}/>
    //                 </div>
    //                 <div className={s.temp}>{props.day.main.temp}</div>
    //             </div>
    //
    //
    //         </div>
    //
    //     </div>
    //);
}

export default ThreeDaysCard;