import React, {Component} from 'react';
import dateFns from 'date-fns';

import cssObject from './CalendarCssTricks.css';

class CalendarCssTricks extends Component {
    state = {
        currentMonth: new Date(),
        selectedDate: new Date(),
        screenSize: window.matchMedia('(max-width: 800px)').matches
    };
    
    componentDidMount () {
        window.addEventListener("resize", this.screenSizeChandgeHandler);       
    }
    
    screenSizeChandgeHandler = () => {
        const sizeMatched = window.matchMedia('(max-width: 800px)').matches;
    //    console.log(sizeMatched);
        this.setState({screenSize: sizeMatched});
        
    }

    nextMonth = () => {
        this.setState({
          currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
        });
      };
    
      prevMonth = () => {
        this.setState({
          currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
        });
      };
    
    renderHeader() {
        const dateFormat = "MMMM YYYY";
        return (
            <div className={cssObject.Header}>
                <div className={cssObject.ChevronLeft} onClick={this.prevMonth}></div>
                <div className={cssObject.HeadarTitle}>
                    <span>
                        {dateFns.format(this.state.currentMonth, dateFormat)}
                    </span>
                </div>
                <div className={cssObject.ChevronRight} onClick={this.nextMonth}></div>
          </div>
        );
      }


    renderWeekDays(screenSize) {   
        const days = [];
        let dateFormat = "dd";
        let startDate = dateFns.startOfWeek(this.state.currentMonth, {weekStartsOn:1});

        if(screenSize) {
            dateFormat = "dd";
        } else {
            dateFormat = "ddd";
        }

        for (let i = 0; i < 7; i++) {
            days.push(
                <li className={cssObject.center} key={i}>
                    {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
                </li>
            );
        }
    
        return <ul className={cssObject.Weekdays}>{days}</ul>;
    }
   
    renderMonthDays() {
        const monthStart = dateFns.startOfMonth(this.state.currentMonth);
        const monthEnd = dateFns.endOfMonth(monthStart);
        const startDate = dateFns.startOfWeek(monthStart, {weekStartsOn:1});
        const endDate = dateFns.endOfWeek(monthEnd,{weekStartsOn:1});
        const days = [];
        const daysRange = dateFns.differenceInDays(endDate, startDate);
        for (let i = 0 ; i <= daysRange; i++) {
            let currentDay = dateFns.addDays(startDate, i);
            days.push(
                <li key={currentDay}>{dateFns.format(currentDay, "D")}</li>
                );
        }
        
        return (
            <ul className={cssObject.DayGrid}>  
                {days}
            </ul>
        );
    }  
    

    render() {
        return (
            <div className={cssObject.Calendar}>
                {this.renderHeader()}          
                {this.renderWeekDays(this.state.screenSize)}
                {this.renderMonthDays()}
            </div>        
            
        );

    }
    
}

export default CalendarCssTricks;