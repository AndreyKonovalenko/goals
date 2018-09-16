import React, { Component } from 'react';
import GoalCard from '../../components/GoalCard/GoalCard';


class MyGoals extends Component {


    componentDidMount() {
        this.props.onFetchOrders(this.props.token, this.props.userId);
    }
   


    xport const fetchOrders = (token, userId) => {
        return dispatch  => {
            dispatch(fetchOrdersStart());
            const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
            // orderBy - sintax provided by Firebase
            axios.get('/orders.json' + queryParams)
                .then(response => {
                    const fetchOrders = [];
                    for (let key in response.data){
                        fetchOrders.push({
                            ...response.data[key],
                            id: key
                        });
                    }
                    dispatch(fetchOrdersSuccess(fetchOrders));
                })
                .catch(error => {
                    dispatch(fetchOrdersFail(error));
                });
        };
    };

    
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