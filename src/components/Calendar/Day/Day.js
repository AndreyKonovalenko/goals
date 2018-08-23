import React from 'react';

import cssObject from './Day.css'

const day = (props) => {
    return (
        <button className={cssObject.Day}>
           {props.value}
        </button>
    );
};

export default day;