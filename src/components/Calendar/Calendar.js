import React from 'react';

import StausBoard from './StatusBoard/StatusBoard';
import Header from './Header/Header';
import WeekDays from './WeekDays/WeekDays';
import Days from './Days/Days';

import cssObject from './Calendar.css';


const calendar = (props) => {
    return (
        <div className={cssObject.Calendar}>
            <StausBoard
                title={props.title}
                start={props.start}
                limitation={props.limitation}
            />
            <Header 
                currentMonth={props.currentMonth}
                nextMonth={props.nextMonthHandler}
                prevMonth={props.prevMonthHandler}/>
            <WeekDays
                currentMonth={props.currentMonth}
                screenSize={props.screenSize}
            />
            <Days
                currentMonth={props.currentMonth}
                checkDayHandler={props.checkDayHandler}
            />
        </div>
    );
};

export default calendar;