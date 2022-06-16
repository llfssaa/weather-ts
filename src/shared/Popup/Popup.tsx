import React from "react";
import s from './Popup.module.css'
import ThisDayItem from "../../pages/Home/components/ThisDayInfo/ThisDayItem";
import {GlobalSvgSelector} from "../../assets/images/icons/global/GlobalSvgSelector";
import {IndicatorSvgSelector} from "../../assets/images/icons/global/IndicatorSvgSelector";



interface Props{
}
interface Item {
    icon_id: string,
    name: string,
    value: string
}

const Popup = ({}:Props) =>{
    const items = [
        {
            icon_id:'temp',
            name: 'Temperature',
            value: '20° feels like 17°'
        },
        {
            icon_id:'pressure',
            name: 'Pressure',
            value: '765 mmHg - normal'
        },
        {
            icon_id:'precipitation',
            name: 'Precipitation',
            value: 'No precipitation'
        },
        {
            icon_id: 'wind',
            name: 'Wind',
            value: '3 m/s southwest - light breeze '
        }

    ]
    return(
        <>
        <div className={s.blur}></div>
        <div className={s.popup}>
            <div className={s.day}>
                <div style={{fontSize: '60px', color:'#2986cc', fontWeight:500, marginBottom:'12px'}}> 12°</div>
                <div style={{fontSize: '25px', color:'var(--title-text-color)', marginBottom:'12px'}}>Thursday</div>
                <div style={{width:'53px', height:'53px', marginBottom:'12px'}}><IndicatorSvgSelector  id='sun' /></div>
                <div style={{color:'var(--subtitle-text-color)', fontSize:'15px'}}>
                    <div>Time: <span>12:45</span></div>
                    <div>City: <span>Riga</span></div>
                </div>
            </div>
            <div className={s.thisDayInfo}>
                <div className={s.thisDayInfoItems}>
                    {items.map((item: Item) => (
                        <ThisDayItem key={item.icon_id} item={item}/>
                    ))}
                </div>
            </div>
            <div className={s.close}> <GlobalSvgSelector id='close'/> </div>
        </div>
        </>
    )
}

export default Popup