import React from 'react';

import Day from './Day/Day';
import cssObject from './Calendar.css';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';



const calendar = (props) => {
    
    const days = [];
    const weekdays =  ['mon', 'tue', 'wen', 'thu', 'fri', 'sat', 'sun'].map((element) => {
        return (
                <Day 
                    key={element}
                    value={element.toUpperCase()}
                />
            ); 
    });
    const fillCalendar = () => {
        for (let i = 0; i < 35; i++) {
            days.push(
                <Day
                    key={i}
                    value={i}
                />
            );
        }
        return days;
    };
    
   
    

    return (
        <Auxiliary>
            <p>{props.title}</p>
            <div className={cssObject.Calendar}>
                <div className={cssObject.NavField}>
                    <button>{new Date().getMonth() + ' ' + new Date().getFullYear()}</button>
                </div>
                <div className={cssObject.CalendarField}>
                    <div className={cssObject.WeekDays}>{weekdays}</div>
                    <div className={cssObject.DaysField}>{fillCalendar()}</div>
                </div>
            </div>
        </Auxiliary>
    );
};

export default calendar;