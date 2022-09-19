import React from 'react';
import cssObject from './Button.css';

const button = (props) => {
    return (
        <button
            className={[cssObject.Button, cssObject[props.buttonType]].join(' ')}
            style={props.style} 
            onClick={props.clicked} 
            disabled={props.disabled}>{props.children}
        </button>
        );
}

export default button; 