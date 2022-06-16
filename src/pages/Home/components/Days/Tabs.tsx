import React from 'react'
import s from './Days.module.css'



interface Props{

}


 const Tabs = (props:any) =>{
    const tabs = [
        {value: 'Today'},
        {value:'For 3 days'},
        {value:'For 5 days'},

    ]



    return(
        <div className={s.tabs}>
            <div className={s.tabs_wrapper}>
                {tabs.map((tab)=>(
                    <div key={tab.value} className={s.tab} onClick={()=>{
                        props.tabChanges(tab.value)
                    }}>
                        {tab.value }
                    </div>
                    ))}
            </div>
        </div>
    )}


export default Tabs