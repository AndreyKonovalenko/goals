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
        console.log(sizeMatched);
        this.setState({screenSize: sizeMatched});
        
    }

    renderDays(screenSize) {   
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
            //return <div className={cssObject.rows}>{rows}</div>;
    }  
    
    

    render() {
        this.renderCells();
        return (
            <div className={cssObject.Calendar}>
                <header>
                    <h1>November 2017</h1>
                </header>           
                {this.renderDays(this.state.screenSize)}
                
                <ul className={cssObject.DayGrid}>
                    
                    {/* <li className="month=prev">30</li>
                    <li className="month=prev">31</li>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li>10</li>
                    <li>11</li>
                    <li>12</li>
                    <li>13</li>
                    <li>14</li>
                    <li>15</li>
                    <li>16</li>
                    <li>17</li>
                    <li>18</li>
                    <li>19</li>
                    <li>20</li>
                    <li>21</li>
                    <li>22</li>
                    <li>23</li>
                    <li>24</li>
                    <li>25</li>
                    <li>26</li>
                    <li>27</li>
                    <li>28</li>
                    <li>29</li>
                    <li>30</li>
                    <li className="month-next">1</li>
                    <li className="month-next">2</li>
                    <li className="month-next">3</li> */}
                </ul>
              
            </div>        
            
        );

    }
    
}

export default CalendarCssTricks;