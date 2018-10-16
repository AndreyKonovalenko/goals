import React from 'react';

import cssObject from './Signup.css';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';

const signup = (props) => {
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
        <div className={cssObject.Signup}>
            <form  onSubmit={props.submitHandler}>
                {form}
                {errorMessage}
                <p>Already have an account, use button Log in?</p>
                <Button buttonType="Success">SIGNUP</Button>
            </form>
        </div>
        
    );
}

export default signup;