import React from 'react';
import Button from '../UI/Button/Button';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';

import cssObject from './GoalCard.css';

const goalCard = (props) => {

    return (
        <Auxiliary>
            <div className={cssObject.GoalCard} onClick={props.selectGoalById}>
                <h3>{props.title}</h3>
            </div>

            <Button buttonType="Danger" clicked={() => console.log("Soon deleting functionality will be added")}>Delete</Button>
        </Auxiliary>
    );
    
};
export default goalCard;