import React from 'react';
import Button from '../../UI/Button/Button';
import cssObject from './Controls.css';

import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';

const controls = (props) => {
    const controls =(
        <Auxiliary>
            <Button clicked={props.onAddGoal}>ADD</Button>
            <Button style={{borderRight: "1px solid #dedede"}}>EDIT/DONE</Button>
        </Auxiliary>
    );
    
    return (
        <ul className={cssObject.Controls}>
            {props.isAuthenticated ? controls : null}
        </ul>
    );
};

export default controls;

