import React, { Component } from 'react';
import {connect} from 'react-redux';
//import {Redirect} from 'react-router-dom';


import GoalCard from '../../components/GoalCard/GoalCard';
import * as actions from '../../store/actions/index';



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
    
    // componentWillUmount(){
    //     this.props.onFetchGoals(this.props.token, this.props.userId)
    // }
    redirectToGoalHandler = () => {
        console.log(this.props.location);
        this.props.history.push('/goalfield'); 
        //This is solution of redirecton
    }

    combinedHandler = (elementId, selectedGoalId) => {
        this.props.onGoalSelect(elementId);
        console.log("first");
        if (selectedGoalId.length> 0) {
            this.redirectToGoalHandler();
            console.log("second");  
        }
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
        
        let list = <h1>Here you will see your list of goals when login or silgup</h1>;
        
        if (this.props.goalsList !== null) {
            list = (
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
        }
        // let redirect = null;
        
        // if (this.props.selectedGoalId.length > 0 && !this.props.redirected) {
        //     redirect = <Redirect to="/goalfield" />;
        //     this.props.onRedirect();
        // }
        // console.log(redirect);
        return (
            <div>
                {/* {redirect} */}
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
        redirected: state.myGoals.redirected 
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchGoals: (token, userId) => dispatch(actions.fetchGoals(token, userId)),
        onGoalSelect: (selectedGoalId) => dispatch(actions.selectGoalById(selectedGoalId)),
        // onRedirect: () => dispatch(actions.redirectToGoal())
    }
}
 

export default connect(mapStateToProps, mapDispatchToProps)(MyGoals);