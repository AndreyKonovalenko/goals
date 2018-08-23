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
                    value={element}
                />
            ); 
    });
    const fillColendar = () => {
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
    
    fillColendar();
    
    // let currentYear = 0;
    
    // const getCurrentYear = () => {
    //     currentYear = new Date().getFullYear();
    //     return currentYear;
    // };
    // getCurrentYear();
    // console.log(currentYear);
    
    return (
        <Auxiliary>
            <p>{props.title}</p>
            <div className={cssObject.Calendar}>
                <div>
                    <p className={cssObject.CalendarNav}>{new Date().getFullYear()}</p>
                </div>
                <div className={cssObject.Weekdays}>
                    {weekdays}
                </div>
                <div className={cssObject.Daysfield}>
                    {days}
                </div>
            </div>
        </Auxiliary>
    );
};

export default calendar;