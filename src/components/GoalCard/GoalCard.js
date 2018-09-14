import React from 'react';

import cssObject from './GoalCard.css';

const goalCard = (props) => {

    return (
        <div className={cssObject.GoalCard}>
            <h3>{props.goalConfig.title.value}</h3>
        </div>
        
    );
    
};
export default goalCard;