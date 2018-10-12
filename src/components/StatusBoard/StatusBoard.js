import React from 'react';

import cssObject from './StatusBoard.css';

const statusBoard = (props) => {
    return (
        <div className={cssObject.StatusBoard}>
            <h2>{props.title}</h2>
            <h4>started on {props.start}</h4>
            <p>all period is: {props.limitation} days</p>
            <p>days left:  dyas complete: </p>
        </div>
    );
}

export default statusBoard;
