import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Motion, spring} from 'react-motion';
//import {Redirect} from 'react-router-dom';

import GoalCard from '../../components/GoalCard/GoalCard';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';



class MyGoals extends Component {
    state = {
        open: false
    }
    componentDidMount() {
        console.log(' My Goals component did mount', this.state.open);
        if (this.props.token !== null) {
            this.props.onFetchGoals(this.props.token, this.props.userId);
        }
    }
    
    componentDidUpdate(nextProps) {
        if(this.props.token !== nextProps.token && this.props.token !== null) {
            this.props.onFetchGoals(this.props.token, this.props.userId);
        }
    }
    
    
    handleMouseDown = () => {
        this.setState({open: !this.state.open});
    };

    handleTouchStart = (e) => {
        e.preventDefault();
        this.handleMouseDown();
    };
    
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
                        console.log(element.id);
                        return (
                            <Motion style={{x: spring(this.state.open ? 200 : 0)}}  key={element.id} >
                                { ({x}) => {
                                    console.log('motion fiered')
                                    return (
                                    <div style={{
                                        position:'relative', 
                                        width: '80%', 
                                        border: '1px solid #dedede',
                                        
                                    }}> 
                                        <div style={{
                                                border: '1px solid #dedede',
                                                width: '50%',
                                                positon:'absolut',
                                                WebkitTransform: `translate3d(${x}px, 0, 0)`,
                                                transform: `translate3d(${x}px, 0, 0)`,
                                                webkitTransition:"all 0.02s linear",
                                                Transition:"all 0.02s linear",
                                        }}
                                        >
                                            <GoalCard 
                                                title={element.value.title}
                                                clicked={() => this.combinedHandler(element.id, this.props.selectedGoalId)}
                                                delete={() => this.props.onDeleteGoal(this.props.token, this.props.userId, element.id)}
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
                <button
                    onMouseDown={this.handleMouseDown}
                    onTouchStart={this.handleTouchStart}>
                    Toggle
                </button>
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
        onDeleteGoal: (token, userId, goalId) => dispatch(actions.deleteGoal(token, userId, goalId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyGoals);