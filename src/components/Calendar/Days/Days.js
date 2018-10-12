import React, { Component }  from 'react';
import { connect } from 'react-redux';

import dateFns from 'date-fns';
import cssObject from './Days.css';
import { isDayInDayArray } from '../../../shared/utility';

class  Days extends Component  {
     render() {
        const monthStart = dateFns.startOfMonth(this.props.currentMonth);
        const monthEnd = dateFns.endOfMonth(monthStart);
        const startDate = dateFns.startOfWeek(monthStart, {weekStartsOn:1});
        const endDate = dateFns.endOfWeek(monthEnd,{weekStartsOn:1});
        const days = [];
        
        const daysRange = dateFns.differenceInDays(endDate, startDate);
        
        if (this.props.styleRules) {
            for (let i = 0 ; i <= daysRange; i++) {
                let currentDay = dateFns.addDays(startDate, i);
                let inLineStyle = {};
                
                let isInGoalRange = isDayInDayArray(dateFns.format(currentDay, "DD.MM.YYYY"), this.props.goalConfig.daysArray);
                
                // style for day out of goal gange
                // if (isInGoalRange === null) {
                //     // offMonth day styling
                //     if (currentDay < monthStart || currentDay > monthEnd) {
                //         inLineStyle = {...inLineStyle = { backgroundColor: '#fff' }};
                //     }
                //     //Current day styling
                //     if (dateFns.isToday(currentDay)) {
                //         inLineStyle = {...inLineStyle = { fontWeight: 'bold', border: "1px solid #2b2929" }};
                //     }
                // } 
                
                if (isInGoalRange !== null && isInGoalRange.touched === false) {
                    //Current day styling
                    if (dateFns.isToday(currentDay)) {
                        inLineStyle = {...{ fontWeight: 'bold', border: "1px solid #2b2929" , backgroundColor: '#fff', cursor: 'pointer' }};
                    } else {
                        inLineStyle = {...{ backgroundColor: '#fff', cursor: 'pointer'  }};
                    }
                    
                } 
                
                if (isInGoalRange !== null && isInGoalRange.touched === true) {
                     if (isInGoalRange.success === true) {
                        inLineStyle = {...{ backgroundColor: 'green', cursor: 'pointer' }};
                    }
                    
                    if (isInGoalRange.success === false) {
                        inLineStyle = {...{ backgroundColor: 'red', cursor: 'pointer' }};
                    }
                }
                days.push(
                    <li 
                        key={currentDay} 
                        style={inLineStyle}
                        onClick={(isInGoalRange !== null && currentDay <= new Date()) ? this.props.checkDayHandler: null}
                        aria-label={dateFns.format(currentDay, "DD.MM.YYYY")}
                    >
                        {dateFns.format(currentDay, "D")}
                    </li> 
                );
            }
        } else {
            for (let i = 0 ; i <= daysRange; i++) {
                let currentDay = dateFns.addDays(startDate, i);
                let inLineStyle = {};
                // offMonth day styling
                if (currentDay < monthStart || currentDay > monthEnd) {
                    inLineStyle = {...{ backgroundColor: '#fff' }};
                }
                //Current day styling
                if (dateFns.isToday(currentDay)) {
                    inLineStyle = {...{ fontWeight: 'bold', border: "1px solid #2b2929" }};
                }
                days.push(
                    <li 
                        key={currentDay} 
                        style={inLineStyle}
                        onClick={this.props.checkDayHandler}
                        aria-label={dateFns.format(currentDay, "DD.MM.YYYY")}
                    >
                        {dateFns.format(currentDay, "D")}
                    </li> 
                );
            }            
        }
        
        return (
            <ul className={cssObject.DayGrid}>  
                {days}
            </ul>
        );
    }
};


const mapStateToProps = state => {
    return {
        goalConfig: state.goalFieldR.goalConfig
    }
}

export default connect(mapStateToProps)(Days);
