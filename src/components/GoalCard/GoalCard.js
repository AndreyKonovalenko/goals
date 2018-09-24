import React from 'react';
import Button from '../UI/Button/Button';

import cssObject from './GoalCard.css';

const goalCard = (props) => {

    return (
        <div className={cssObject.GoalCard}>
            <h3>{props.title}</h3>
            <Button buttonType="Danger" clicked={null}>Delete</Button>
        </div>
        
    );
    
};
export default goalCard;