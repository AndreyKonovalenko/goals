import React from 'react';

import dateFns from 'date-fns';
import cssObject from './Days.css'

const days = (props) => {
    const monthStart = dateFns.startOfMonth(props.currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart, {weekStartsOn:1});
    const endDate = dateFns.endOfWeek(monthEnd,{weekStartsOn:1});
    const days = [];
    const daysRange = dateFns.differenceInDays(endDate, startDate);
        
    for (let i = 0 ; i <= daysRange; i++) {
        let currentDay = dateFns.addDays(startDate, i);
        let offMonthDayStyle = {};
        
        if (currentDay < monthStart || currentDay > monthEnd) {
            offMonthDayStyle = {...offMonthDayStyle = { backgroundColor: '#fff' }};
        }
        
        if (dateFns.isToday(currentDay)) {
            offMonthDayStyle = {...offMonthDayStyle = { fontWeight: 'bold', border: "1px solid #2b2929"}};
        }
            
        days.push(
            <li 
                key={currentDay} 
                style={offMonthDayStyle}
                onClick={props.checkDayHandler}
                aria-label={dateFns.format(currentDay, "DD-MM-YYYY")}
            >
                {dateFns.format(currentDay, "D")}
            </li> 
        );
    }
    return (
        <ul className={cssObject.DayGrid}>  
            {days}
        </ul>
    );
};

export default days;