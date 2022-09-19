import React from 'react';
import Button from '../../UI/Button/Button';
import cssObject from './Controls.css';

import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';

const controls = (props) => {

    const controls = (
        <Auxiliary>
            <Button 
                clicked={props.onAddGoal} 
                style={ props.userLocation !== '/'? {borderRight: '1px solid #dedede'} : null}>ADD</Button>
            { props.userLocation === '/' ? <Button 
                clicked={props.onEditClick} 
                style={{borderRight: '1px solid #dedede'}}>
                {!props.mode ? 'EDIT' : 'DONE'}
            </Button>: null}
        </Auxiliary>
    );
    
    return (
        <ul className={cssObject.Controls}>
            {props.isAuthenticated ? controls : null}
        </ul>
    );
};

export default controls;

