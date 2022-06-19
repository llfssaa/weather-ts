import React, { useEffect, useState} from 'react'
import s from './Days.module.css'
import Tabs from "./Tabs";
import Card from "./Card";
import axios from "axios";
import Preloader from "../Preloader";
import ThreeDaysCard from "./ThreeDaysCard";
import Today from "./Today";


const parseFiveDays = (list: Array<any>) => {
    let newList: Array<any> = [];
    if (Number(list[0]['dt_txt'].slice(11,13))>15){
        newList.push(list[0]);
    }
    list.forEach((el) => {
        if (el['dt_txt'].slice(11) === '15:00:00'){
            newList.push(el);
        }
    })
    return newList;
};
const parseThreeDays = (list: Array<any>) => {
    let currentData = new Date
    let currentDayData = Number(currentData.getDate())+3
    let newDay: Array<any> = [];
    let newList: Array<Array<any>> = [];

    list.forEach((el) => {
         if (Number(el['dt_txt'].slice(8,10)) <= currentDayData){
             if (el['dt_txt'].slice(11) === '09:00:00') newDay.push(el);
             if (el['dt_txt'].slice(11) === '15:00:00') newDay.push(el);
             if (el['dt_txt'].slice(11) === '18:00:00') newDay.push(el);
             if (el['dt_txt'].slice(11) === '21:00:00'){
                 newDay.push(el);
                 newList.push(newDay)
                 newDay = []
             }
         }

    })
    newList.shift();
    console.log(newList);
    return newList;
};
const parseToday = (list:Array<any>) => {
    let newList:Array<any> = []
    list.map((el,i)=>{
        if (i<6){
            newList.push(el)
        }
    })
    return newList
    
}




const Days = (props:any): any =>{

    const [tabs, setTabs] = useState('Today');
    const [days, setDays] = useState<any>([]);
    const [threeDays, setThreeDays] = useState<any>([])
    const [today, setToday] = useState<any>([])


    useEffect(()=>{
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&units=metric&cnt=40&appid=ae46222a84de4f84cfb83ce6f6f311fb`)
            .then((res)=>{
                //setTabs(JSON.stringify(res.data))
                setToday(parseToday(res.data.list))
                setDays(parseFiveDays(res.data.list))
                setThreeDays(parseThreeDays(res.data.list))


            })
    }, [props.city])

    console.log(today)

    const tabChanges = (value:string)=>{
        setTabs(value);
    }

    switch(tabs){
        case "Today":{
            return (
                <div >
                    <Tabs tabChanges={tabChanges}/>
                    <div className={s.days}>
                        {
                            (today.length !== 0) ? today.map((day:any, i:number)=>(
                                <Today key={day.dt + i} day={day}/>
                            )) : <Preloader/>
                        }
                    </div>
                </div>
            )
        }

        case "For 3 days":{
            return(
                <div>
                    <Tabs tabChanges={tabChanges}/>
                    <div className={s.days}>
                        {
                            (threeDays.length !== 0) ? threeDays.map((day:Array<any>, i:number)=>(
                                <ThreeDaysCard key={i} day={day}/>
                            )) : <Preloader/>
                        }
                    </div>
                </div>
            )
        }
        case "For 5 days":{
            return (
                <div>
                    <Tabs tabChanges={tabChanges}/>
                    <div className={s.days}>
                        {
                            (days.length !== 0) ? days.map((day:any, i:number)=>(
                                <Card key={day.dt} day={day}/>
                            )) : <Preloader/>
                        }
                    </div>
                </div>
            )
        }


        default: return null
    }
}
export default Days