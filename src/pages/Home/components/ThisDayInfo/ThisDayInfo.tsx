import React from 'react'
import {GlobalSvgSelector} from "../../../../assets/images/icons/global/GlobalSvgSelector";
import s from './ThisDayInfo.module.css'
import cloud from '../../../../assets/images/image 1.png'
import ThisDayItem from "./ThisDayItem";

interface Props {
    info: any,
    wind:number
    precipitation: any

}
export interface Item {
    icon_id: string,
    name: string,
    value: string
}

const ThisDayInfo = (props:Props) => {
    const items = [
        {
            icon_id:'temp',
            name: 'Temperature',
            value: Math.round(props.info.temp)+'° feels like '+Math.round(props.info.feels_like)+'°'
        },
        {
            icon_id:'pressure',
            name: 'Pressure',
            value: props.info.pressure+' mmHg'

        },
        {
            icon_id:'precipitation',
            name: 'Precipitation',
            value:props.precipitation.main === 'Rain' ?
                'Precipitation expected - ' :
                'No precipitation - '
                 + props.precipitation.description
        },
        {
            icon_id: 'wind',
            name: 'Wind',
            value: 'Speed: ' + Math.round(props.wind) + ' m/s'
        }

    ]
    return(
        <div className={s.thisDayInfo}>
           <div className={s.thisDayInfoItems}>
               {items.map((item: Item) => (
                   <ThisDayItem key={item.icon_id} item={item}/>
               ))}
           </div>
            <img className={s.cloud} src={cloud} alt="cloud"/>
        </div>
    )
}

export default ThisDayInfo;