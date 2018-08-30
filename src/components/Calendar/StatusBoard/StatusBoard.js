import React from 'react';
import dateFns from 'date-fns';

import cssObject from './StatusBoard.css';

const statusBoard = (props) => {
    const now = new Date();
    const lastDay = dateFns.addDays(props.start, props.limitation);
    const daysLeft = dateFns.differenceInDays(lastDay, now)

    return (
        <div className={cssObject.StatusBoard}>
            <h2>{props.title}</h2>
            <p>all period is: {props.limitation} days</p>
            <p>days left: {daysLeft} dyas complete: </p>
        </div>
    );
}

export default statusBoard;
