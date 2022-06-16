import React from 'react'
import s from './ThisDay.module.css'


interface Props {
    temp: number,
    cityName?: string,
    weatherState: any
}

const ThisDay = (props:Props) => {
    const currentTime = new Date();
    return (
        <div className={s.thisDay}>
            <div className={s.wrapper}>
                <div>
                    <div style={{
                        fontSize: '96px',
                        lineHeight: '100px',
                        color: '#2986cc',
                        fontWeight: 500
                    }}> {Math.round(props.temp)}°
                    </div>
                    <div style={{fontSize: '40px', lineHeight: '45px', color: 'var(--title-text-color)'}}>Today</div>
                </div>
                <div style={{width: '150px', height: '150px', textAlign: 'center'}}>
                    <img width={150} height={150} src={`http://openweathermap.org/img/wn/${props.weatherState.icon}@2x.png`} alt=""/>
                </div>
            </div>
            <div style={{color: 'var(--subtitle-text-color)', fontSize: '20px', lineHeight: '25px', marginTop: 25}}>
                <div>Time: <span>{currentTime.getHours()}:{currentTime.getMinutes()}</span></div>
                <div>City: <span>{props.cityName}</span></div>
            </div>
        </div>
    );
}

export default ThisDay;