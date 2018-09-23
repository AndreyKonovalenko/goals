import React from 'react';
import Button from '../UI/Button/Button';

import cssObject from './GoalCard.css';

const goalCard = (props) => {

    return (
        <div className={cssObject.GoalCard} onClick={props.redirectHandler}>
            <h3>{props.goalConfig.title.value}</h3>
            <Button buttonType="Danger" clicked={props.delete}>Delete</Button>
        </div>
        
    );
    
};
export default goalCard;