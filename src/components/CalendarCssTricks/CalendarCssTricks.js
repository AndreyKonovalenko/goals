import React, {Component} from 'react';
import dateFns from 'date-fns';

import cssObject from './CalendarCssTricks.css';

class CalendarCssTricks extends Component {
    state = {
        currentMonth: new Date(),
        selectedDate: new Date(),
        screenSize: true
    };
    
 

    componentDidMount () {
        window.addEventListener("resize", this.matchQueryHandler);       
    }
    
    matchQueryHandler = () => {
        const sizeMatched = window.matchMedia('(max-width: 800px)').matches;
        console.log(sizeMatched);
        this.setState({screenSize: sizeMatched});
        
    }

    renderDays = (screenSize) => {   
        const days = [];
        let dateFormat = "dd";
        let startDate = dateFns.startOfWeek(this.state.currentMonth, {weekStartsOn:1});

        if(!screenSize) {
            dateFormat = "ddd";
        } else {
            dateFormat = "dd";
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

    render() {

        return (
            <div className={cssObject.Calendar}>
                <header>
                    <h1>November 2017</h1>
                </header>           
                {this.renderDays(this.state.screenSize)}
                
                <ul className={cssObject.DayGrid}>
                    <li className="month=prev">30</li>
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
                    <li className="month-next">3</li>
                </ul>
              
            </div>        
            
        );

    }
    
}

export default CalendarCssTricks;