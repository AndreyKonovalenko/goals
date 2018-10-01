import React, { Component } from 'react';
import {connect} from 'react-redux';
//import {Redirect} from 'react-router-dom';

import GoalCard from '../../components/GoalCard/GoalCard';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';



class MyGoals extends Component {

    componentDidMount() {
        console.log(' My Goals component did mount');
        if (this.props.token !== null) {
            this.props.onFetchGoals(this.props.token, this.props.userId);
        }
    }
    
    componentDidUpdate(nextProps) {
        if(this.props.token !== nextProps.token && this.props.token !== null) {
            this.props.onFetchGoals(this.props.token, this.props.userId);
        }
    }
    
    redirectToGoalHandler = () => {
        this.props.history.push('/goalfield'); 
        //This is solution of redirection
    }

    combinedHandler = (elementId, selectedGoalId) => {
        this.props.onGoalSelect(elementId);
        console.log("first");
        this.redirectToGoalHandler();
        console.log("second");  
    } 

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
        
        let list = (
                <div>
                    {listOfGoalsArrey.map(element => {
                        console.log(typeof(element.id));
                        return <GoalCard 
                            title={element.value.title}
                            key={element.id}
                            clicked={() => this.combinedHandler(element.id, this.props.selectedGoalId)}
                        />;
                    })}
                </div>
        );
        
        if (this.props.loading) {
            console.log('shoul see Spinner');
            list = <Spinner />;
        };
        
        if (this.props.goalsList === null) {
            list = <h2>Here you will see list of your goals when login/singup</h2>
        } 

        return (
            <div>
                {list}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        userId: state.auth.userId,
        token: state.auth.token,
        goalsList: state.myGoals.goalsList,
        selectedGoalId: state.myGoals.selectedGoalId,
        loading: state.myGoals.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchGoals: (token, userId) => dispatch(actions.fetchGoals(token, userId)),
        onGoalSelect: (selectedGoalId) => dispatch(actions.selectGoalById(selectedGoalId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyGoals);