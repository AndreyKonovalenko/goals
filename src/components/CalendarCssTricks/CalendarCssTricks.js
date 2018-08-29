import React, {Component} from 'react';
import dateFns from 'date-fns';

import cssObject from './CalendarCssTricks.css';

class CalendarCssTricks extends Component {
    state = {
        currentMonth: new Date(),
        screenSize: window.matchMedia('(max-width: 800px)').matches,
        goalConfig: {
            title: "budget 50%",
            limitation: 10,
            start: new Date(2018, 7, 25),
      //      daysArray: this.daysArrayInit(this.start, this.limitation)
        }
    };
    
    componentDidMount () {
        window.addEventListener("resize", this.screenSizeChandgeHandler);
        console.log(this.state.goalConfig.daysArray);


    }
    
    screenSizeChandgeHandler = () => {
        const sizeMatched = window.matchMedia('(max-width: 800px)').matches;
        this.setState({screenSize: sizeMatched});
    }
    
    daysArrayInit = (start, limitation) => {
        let days = [];
        for (let i = 0; i < limitation; i ++) {
            days.push({
                id: dateFns.addDays(start, i),
                success: false,
                touched: false
            });   
        }
        return days;
    }
    
    // daysArrayStateInit = () => {
    //     const initArray = this.daysArrayInit(this.state.goalConfig.start, this.state.goalConfig.limitation);
    //     if (this.state.goalConfig.daysArray.length === 0) {
    //         this.setState({daysArray: [...initArray]});
    //     }
        
    // }
    
    // filldaysArray = (satart, limitation) => {
    //         let days =[];
    //         days.push()
    //         return days;
    //     }
        
    
    // goalCunstructor = (start, limitation, title) => {
     
    //     let  goalConfig = {
    //             title: title,
    //             start: start,
    //             limitation: limitation,
    //             daysArray: []
    //     };
    //     return goalConfig;
    // }
    
    

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



    renderGoalStatus = (title, limitation, start) => {
        const now = new Date();
        const lastDay = dateFns.addDays(start, limitation);
        const daysLeft = dateFns.differenceInDays(lastDay, now)

        return (
            <div className={cssObject.GoalStatus}>
                <h2>{title}</h2>
                <p>all period is: {limitation} days</p>
                <p>days left: {daysLeft} dyas complete: </p>
            </div>
        );
    }
    
    renderHeader = () => {
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


    renderWeekDays = (screenSize) => {   
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
   
   
  checkDayHandler = (event) => {
    event.target.setAttribute("style", "background-color: green")
    console.log("clicked", event.target.className, event.target.classList);
  }
   
    renderMonthDays = () => {
        
        const monthStart = dateFns.startOfMonth(this.state.currentMonth);
        const monthEnd = dateFns.endOfMonth(monthStart);
        const startDate = dateFns.startOfWeek(monthStart, {weekStartsOn:1});
        const endDate = dateFns.endOfWeek(monthEnd,{weekStartsOn:1});
        const days = [];
        const daysRange = dateFns.differenceInDays(endDate, startDate);
        
        // Add specialstile for not this month dayas
        // by usling inlinestile

        for (let i = 0 ; i <= daysRange; i++) {
            let currentDay = dateFns.addDays(startDate, i);
            let offMonthDayStyle = {};
            
            if (currentDay < monthStart || currentDay > monthEnd) {
                offMonthDayStyle = {...offMonthDayStyle = { backgroundColor: '#fff' }};
            }
            
            if (dateFns.isToday(currentDay)) {
                offMonthDayStyle = {...offMonthDayStyle = { fontWeight: 'bold', border: "1px solid #2b2929"}};
            }
            
            // if (this.daySuccess!== null && this.daySuccess === true) {
            //     offMonthDayStyle = {...offMonthDayStyle = { backgroundColor: 'geen'}};
            // }
            
            // if (this.daySuccess!== null && this.daySuccess === false) {
            //     offMonthDayStyle = {...offMonthDayStyle = { backgroundColor: 'salmon'}};
            // }
            
            
            days.push(
                <li 
                    key={currentDay} 
                    style={offMonthDayStyle}
                    onClick={this.checkDayHandler}
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
    }  
    

    render() {
        return (
            <div className={cssObject.Calendar}>
                {this.renderGoalStatus(
                    this.state.goalConfig.title, 
                    this.state.goalConfig.limitation,
                    this.state.goalConfig.start)
                }
                {this.renderHeader()}       
                {this.renderWeekDays(this.state.screenSize)}
                {this.renderMonthDays()}
            </div>        
           
        );

    }
    
}

export default CalendarCssTricks;