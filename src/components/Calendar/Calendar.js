import React, { Component } from 'react';
import dateFns from 'date-fns';

import Header from './Header/Header';
import WeekDays from './WeekDays/WeekDays';
import Days from './Days/Days';

import cssObject from './Calendar.css';

class Calendar extends Component {
    
    state = {
        currentMonth: new Date(),
        screenSize: window.matchMedia('(max-width: 800px)').matches,
    }
    
    componentDidMount () {
        window.addEventListener("resize", this.screenSizeChandgeHandler);
    }
    
    componentWillUnmount () {
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
    
    render() {
        return (
            <div className={cssObject.Calendar}>
                <Header 
                    currentMonth={this.state.currentMonth}
                    nextMonth={this.nextMonth}
                    prevMonth={this.prevMonth}/>
                <WeekDays
                    currentMonth={this.state.currentMonth}
                    screenSize={this.state.screenSize}
                />
                <Days
                    currentMonth={this.state.currentMonth}
                    checkDayHandler={this.props.onDayClick}
                    styleRules={this.props.addStyleRules}
                />
            </div>
        );
    }
};

export default Calendar;