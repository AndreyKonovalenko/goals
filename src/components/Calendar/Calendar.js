import React from 'react';

import cssObject from './Calendar.css'

const calendar = (props) => {
    return (
        <div className={cssObject.Calendar}>
            <p>{props.title}</p>
        </div>
    );
};

export default calendar;