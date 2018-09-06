import React from 'react';

import cssObject from './Input.css'


const input = (props) => {
    let inputElement = null;
    const inputCssClasses = [cssObject.InputElement];
    
    if (props.invalid && props.shouldValidate && props.touched) {
        inputCssClasses.push(cssObject.Invalid);
    }
    switch (props.elementType) {
        case ('input'): 
            inputElement = <input 
                className={inputCssClasses.join(' ')} 
                {...props.elementConfig}
                value = {props.value}
                onChange = {props.changed}
                onClick={props.unhide}/>;
            break;
        default:
            inputElement = <input 
                className={inputCssClasses.join(' ')} 
                {...props.elementConfig}
                value = {props.value}
                onChange = {props.changed}
                onClick={props.unhide}/>
    }
    return (
        <div className={cssObject.Input}>
            <label className={cssObject.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
    
}


export default input;  