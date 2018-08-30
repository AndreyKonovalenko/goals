import React, { Component } from 'react'
import dateFns from 'date-fns';

import Calendar from '../components/Calendar/Calendar';


class GoalField extends Component {
    state = {
        currentMonth: new Date(),
        screenSize: window.matchMedia('(max-width: 800px)').matches,
        goalConfig: {
            title: "budget 50%",
            limitation: 10,
            start: new Date(2018, 7, 25)
        }
    }
    
    componentDidMount () {
        window.addEventListener("resize", this.screenSizeChandgeHandler);
        console.log("screenSize");
    }
    
    screenSizeChandgeHandler = () => {
        const sizeMatched = window.matchMedia('(max-width: 800px)').matches;
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
    
    checkDayHandler = (event) => {
        event.target.setAttribute("style", "background-color: green");
       // console.log("clicked", event.target.className, event.target.classList); 
    }
    
    render () {
        return (
    //        <Editor/>
            <Calendar
                title={this.state.goalConfig.title}
                limitation={this.state.goalConfig.limitation}
                start={this.state.goalConfig.start}
                nextMonthHandler={this.nextMonth}
                prevMonthHandler={this.prevMonth}
                currentMonth={this.state.currentMonth}
                screenSize={this.state.screenSize}
                checkDayHandler={(event) => this.checkDayHandler(event)}
            />    
        );
    }
}

export default GoalField;