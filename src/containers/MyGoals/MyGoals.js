import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';


import GoalCard from '../../components/GoalCard/GoalCard';
import * as actions from '../../store/actions/index';



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
        
        let listOfGoalsArrey = [];
        for (let key in this.props.goalsList) {
            let listElement = {
                value: this.props.goalsList[key],
                id: key
            };
            listOfGoalsArrey.push(listElement);
        }
        // Do not forget add spinner for loading later
        let list  = (
            <div>
            {listOfGoalsArrey.map(element => (
                <GoalCard 
                    title={element.value.title}
                    key={element.id}
                    selectGoalById={this.props.onGoalSelect}
                />
            
            ))}
            </div>
            
        );
        
        
        let redirect = null;
        
        if (this.props.selectedGoalId) {
            redirect = <Redirect to="/goal-field" />;
        }
        
        return (
            <div>
                {list}
                {redirect}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        userId: state.auth.userId,
        token: state.auth.token,
        goalsList: state.myGoals.goalsList,
        selectedGoalId: state.myGoals.selectedGoalId
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchGoals: (token, userId) => dispatch(actions.fetchGoals(token, userId)),
        onGoalSelect: (selectedGoalId) => dispatch(actions.selectGoalById(selectedGoalId))
    }
}
 

export default connect(mapStateToProps, mapDispatchToProps)(MyGoals);