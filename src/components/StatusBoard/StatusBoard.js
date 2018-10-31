import React from 'react';

import classes from './StatusBoard.css';

const statusBoard = (props) => {
    return (
        <div className={classes.StatusBoard}>
            <h2>{props.title}</h2>
            <h4>started on {props.start}</h4>
            <p>all period is: {props.limitation} days</p>
            <p>days left: {props.left} </p>
            <div className={classes.Succeeded}></div>
            <p>dyas succeeded: {props.succeeded}</p>
            <p>dyas failed:{props.failed}  </p>
        </div>
    );
}

export default statusBoard;
