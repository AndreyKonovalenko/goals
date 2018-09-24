import React, { Component } from 'react';
import {connect} from 'react-redux';

//import GoalCard from '../../components/GoalCard/GoalCard';
import * as actions from '../../store/actions/index'



class MyGoals extends Component {


    componentDidMount() {
        this.props.onFetchGoals(this.props.token, this.props.userId);
    }
   


    // fetchGoals = () => {
    //     // const queryParams = '?auth=' + '&orderBy="userId"&equalTo="' + userId + '"';
    //     //     // orderBy - sintax provided by Firebase
    //     axios.get('/goals.json')
    //         .then(response => {
    //             console.log(response.data);
    //                 // const fetchOrders = [];
    //                 // for (let key in response.data){
    //                 //     fetchOrders.push({
    //                 //         ...response.data[key],
    //                 //         id: key
    //                 //     });
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // };
    

    render() {
        console.log(this.props.userId);
        let goals = 'here should be list of user goals';
        return (
            <div>
                {goals}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        userId: state.auth.userId,
        token: state.auth.token,
        goalsList: state.myGoals.goalsList
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchGoals: (token, userId) => dispatch(actions.fetchGoals(token, userId))
    }
}
 

export default connect(mapStateToProps, mapDispatchToProps)(MyGoals);