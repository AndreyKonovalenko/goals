import React, { Component }  from 'react';
import {connect} from 'react-redux';

import dateFns from 'date-fns';
import cssObject from './Days.css'

class  Days extends Component  {
     render() {
        const monthStart = dateFns.startOfMonth(this.props.currentMonth);
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
                    onClick={this.props.checkDayHandler}
                    aria-label={dateFns.format(currentDay, "DD.MM.YYYY")}
                >
                    {dateFns.format(currentDay, "D")}
                </li> 
            );
        }
        console.log(this.props);
        return (
            <ul className={cssObject.DayGrid}>  
                {days}
            </ul>
        );
    }
};


const mapStateToProps = state => {
    return {
        goalConfig: state.goalField.goalConfig
    }
}

export default connect(mapStateToProps)(Days);
