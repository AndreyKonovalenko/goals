import React from 'react';
import Button from '../UI/Button/Button';
import {NavLink} from 'react-router-dom';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';

import cssObject from './GoalCard.css';

const goalCard = (props) => {

    return (
        <Auxiliary>
            <NavLink to="/goal_field">
                    <div className={cssObject.GoalCard}>
                        <h3>{props.title}</h3>
                    </div>
            </NavLink>
            <Button buttonType="Danger" clicked={() => console.log("Soon deleting functionality will be added")}>Delete</Button>
        </Auxiliary>
    );
    
};
export default goalCard;