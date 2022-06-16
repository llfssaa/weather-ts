import React from 'react'
import {Item} from "./ThisDayInfo";
import s from './ThisDayInfo.module.css'
import {IndicatorSvgSelector} from "../../../../assets/images/icons/global/IndicatorSvgSelector";

interface Props{
    item:Item
}

const ThisDayItem = ({item}:Props) =>{
    const {icon_id, name, value} = item;
    return(
        <div className={s.item}>
            <div className={s.id}>
                <IndicatorSvgSelector id={icon_id} />
            </div>
            <div className={s.id_name}>{name}</div>
            <div className={s.id_value}>{value}</div>
        </div>
    )
}

export default ThisDayItem