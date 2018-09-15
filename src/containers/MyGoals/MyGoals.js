import React, { Component } from 'react';
import GoalCard from '../../components/GoalCard/GoalCard';


class MyGoals extends Component {


    componentDidMount() {
        this.props.onFetchOrders(this.props.token, this.props.userId);
    }
   
    
    render() {
        let goals = <GoalCard/>
        return (
            <div>
                {goals}
            </div>
        );
    }
}

export default MyGoals;