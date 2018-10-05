import React from 'react';
import cssObject from './Button.css';

const button = (props) => {
    console.log("button clicked!");
    return (
        <button
            className={[cssObject.Button, cssObject[props.buttonType]].join(' ')} 
            onClick={props.clicked} 
            disabled={props.disabled}>{props.children}
        </button>
        );
}

export default button; 