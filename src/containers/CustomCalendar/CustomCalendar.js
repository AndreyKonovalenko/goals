import React, { Component } from 'react';
import dateFns from 'date-fns';

import cssObject from './CustomCalendar.css'



class CustomCalendar extends Component  {
    state = {
        currentMonth: new Date(),
        selectedDate: new Date()
    };

    renderHeader() {
        const dateFormat = "MMMM YYYY";
        return (
            <div className={cssObject.middle}>
                <div className={cssObject.start}>
                    <div className={cssObject.icon} onClick={this.prevMonth}>
                        chevron_left
                    </div>
                </div>
                <div className={cssObject.center}>
                    <span>{dateFns.format(this.state.currentMonth, dateFormat)}</span>
                </div>
                <div className={cssObject.end} onClick={this.nextMonth}>
                    <div className={cssObject.icon}>chevron_right</div>
                </div>
            </div>
        );
      }
    
      renderDays() {
        const dateFormat = "dddd";
        const days = [];
    
        let startDate = dateFns.startOfWeek(this.state.currentMonth);
    
        for (let i = 0; i < 7; i++) {
            days.push(
                <div className={cssObject.center} key={i}>
                    {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
                </div>
            );
        }
    
        return <div className={cssObject.days}>{days}</div>;
      }
    
    renderCells() {
        const { currentMonth, selectedDate } = this.state;
        const monthStart = dateFns.startOfMonth(currentMonth);
        const monthEnd = dateFns.endOfMonth(monthStart);
        const startDate = dateFns.startOfWeek(monthStart);
        const endDate = dateFns.endOfWeek(monthEnd);
    
        const dateFormat = "D";
        const rows = [];
    
        let days = [];
        let day = startDate;
        let formattedDate = "";
    
        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                formattedDate = dateFns.format(day, dateFormat);
                const cloneDay = day;
                days.push(
                    <div
                        className={`col cell ${
                        !dateFns.isSameMonth(day, monthStart)
                        ? "disabled"
                        : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
                        }`}
                        key={day}
                        onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
                    >
                        <span className="number">{formattedDate}</span>
                        <span className="bg">{formattedDate}</span>
                    </div>
                );
                day = dateFns.addDays(day, 1);
            }
            rows.push(
                <div className={cssObject.rows} key={day}>
                    {days}
                </div>
            );
            days = [];
        }
            console.log(rows);
            return <div className={cssObject.rows}>{rows}</div>;
        }
    
        onDateClick = day => {
                this.setState({
                selectedDate: day
            });
        };
    
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

    
    render () {

        return (
            <div className={cssObject.calendar}>
                {this.renderHeader()}
                {this.renderDays()}
                {this.renderCells()}
            </div>
        );
    }
}


export default CustomCalendar;

