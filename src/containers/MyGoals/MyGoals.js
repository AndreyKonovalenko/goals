import React, { Component } from 'react';
//import GoalCard from '../../components/GoalCard/GoalCard';
import axios from '../../axios-db';


class MyGoals extends Component {


    componentDidMount() {
        this.fetchGoals();
    }
   


    fetchGoals = () => {
        // const queryParams = '?auth=' + '&orderBy="userId"&equalTo="' + userId + '"';
        //     // orderBy - sintax provided by Firebase
        axios.get('/goals.json')
            .then(response => {
                console.log(response.data);
                    // const fetchOrders = [];
                    // for (let key in response.data){
                    //     fetchOrders.push({
                    //         ...response.data[key],
                    //         id: key
                    //     });
            })
            .catch(error => {
                console.log(error);
            });
    };
    

    render() {
        let goals = 'here should be list of user goals';
        return (
            <div>
                {goals}
            </div>
        );
    }
}

export default MyGoals;