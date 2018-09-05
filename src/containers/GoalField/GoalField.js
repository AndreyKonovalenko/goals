import React, { Component } from 'react'

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import StatusBoard from '../../components/StatusBoard/StatusBoard';
import Calendar from '../../components/Calendar/Calendar';


class GoalField extends Component {
    state = {
        goalConfig: {
            title: "budget 50%",
            limitation: 10,
            start: new Date(2018, 7, 25)
        }
    }
    
    checkDayHandler = (event) => {
        event.target.setAttribute("style", "background-color: green");
       console.log("clicked", event.target.className, event.target.classList); 
    }
    
    render () {
        return (
    //       <Editor/>
            <Auxiliary>
                <StatusBoard
                    title={this.state.goalConfig.title}
                    limitation={this.state.goalConfig.limitation}
                    start={this.state.goalConfig.start}
                />
                <Calendar 
                    onDayClick={this.checkDayHandler}/>
            </Auxiliary>
        );
    }
}

export default GoalField;