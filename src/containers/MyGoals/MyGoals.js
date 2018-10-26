import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Motion, spring} from 'react-motion';
//import {Redirect} from 'react-router-dom';

import GoalCard from '../../components/GoalCard/GoalCard';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './MyGoals.css'


class MyGoals extends Component {

    componentDidMount() {
        console.log(' My Goals component did mount111');
        console.log(typeof this.props.location.pathname);
        this.props.getLocation(this.props.location.pathname);
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
        
        let list = <Spinner />;
        if (!this.props.loading && this.props.goalsList === null) {
            list = <h2>Here you will see list of your goals when login/singup</h2>;
        } else if (!this.props.loading && this.props.goalsList !== null){
            list = (
                <div>
                    {listOfGoalsArrey.map(element => {
                        return (
                            <Motion style={{x: spring(this.props.editMode ? 200 : 100)}}  key={element.id} >
                                { ({x}) => {
                                    console.log('motion fiered')
                                    return (
                                    <div className={classes.AnimationConteniner}> 
                                        <div className={classes.AnimatedComponent} style={{
                                            WebkitTransform: `translate3d(${x}px, 0, 0)`,
                                            transform: `translate3d(${x}px, 0, 0)`,                                                
                                        }}
                                        >
                                            <GoalCard 
                                                title={element.value.title}
                                                clicked={!this.props.editMode ? () => this.combinedHandler(element.id, this.props.selectedGoalId): null}
                                                delete={() => this.props.onDeleteGoal(this.props.token, this.props.userId, element.id)}
                                                mode={this.props.editMode}
                                            />
                                        </div>
                                    </div>);
                                   }
                                }
                            </Motion>
                        );
                    })}
                </div>
            );
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
        editMode: state.myGoals.editMode,
        userId: state.auth.userId,
        token: state.auth.token,
        goalsList: state.myGoals.goalsList,
        selectedGoalId: state.myGoals.selectedGoalId,
        loading: state.myGoals.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getLocation: (userLocation) => dispatch(actions.changeLocation(userLocation)),
        onFetchGoals: (token, userId) => dispatch(actions.fetchGoals(token, userId)),
        onGoalSelect: (selectedGoalId) => dispatch(actions.selectGoalById(selectedGoalId)),
        onDeleteGoal: (token, userId, goalId) => dispatch(actions.deleteGoal(token, userId, goalId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyGoals);