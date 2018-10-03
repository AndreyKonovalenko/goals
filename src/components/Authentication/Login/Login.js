import React from 'react';

import cssObject from './Login.css';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';

const login = (props) => {
    const formElementArray = [];
    for (let key in props.controls) {
        formElementArray.push({
            id: key,
            config: props.controls[key]
        });
    }
        
    let form = formElementArray.map(element => (
        <Input 
            key={element.id}
            elementType={element.config.elementType}
            elementConfig={element.config.elementConfig}
            value={element.config.value}
            changed={(event) => props.inputChangedHandler(event, element.id)}
            invalid={!element.config.valid}
            shouldValidate={element.config.validation}
            touched={element.config.touched} 
        />
    ));
    let errorMessage = null;
    if (props.error) {
        errorMessage = (
            <p>{props.error.message}</p>    
        );
    }
    console.log(props.error);
    return (
        <div className={cssObject.Login}>
            <form  onSubmit={props.submitHandler}>
                {form}
                {errorMessage}
                <Button buttonType="Success">LOGIN</Button>
            </form>
        </div>
        
    );
}

export default login;