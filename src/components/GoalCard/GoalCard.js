import React from 'react';
import Button from '../UI/Button/Button';
//import Auxiliary from '../../hoc/Auxiliary/Auxiliary';

import cssObject from './GoalCard.css';

const goalCard = (props) => {

    return (
        <div className={cssObject.GoalCardFlex}>
            <Button buttonType="Danger" clicked={props.delete}>Delete</Button>
            <div className={cssObject.GoalCard} onClick={props.clicked}>
                <h3>{props.title}</h3>
            </div>
        </div>
    );
    
};
export default goalCard;