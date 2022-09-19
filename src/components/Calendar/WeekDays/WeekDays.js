import React from 'react';

import dateFns from 'date-fns';
import cssObject from './WeekDays.css';

const weekDays = (props) => {   
    const days = [];
    let dateFormat = "dd";
    let startDate = dateFns.startOfWeek(props.currentMonth, {weekStartsOn:1});

    if(props.screenSize) {
        dateFormat = "dd";
    } else {
        dateFormat = "ddd";
    }
    for (let i = 0; i < 7; i++) {
        days.push(
            <li key={i}>
                {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
            </li>
        );
    }
    return <ul className={cssObject.Weekdays}>{days}</ul>;
};

export default weekDays;