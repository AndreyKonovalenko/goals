import React from 'react';
import cssObject from './Spinner.css';

const spinner = () => {
    console.log('hi', cssObject.Spinner);
    return (
        <div className={cssObject.Spinner}>
            <div className={cssObject.Spinner.Rect1}></div>
            <div className={cssObject.Spinner.Rect1}></div>
            <div className={cssObject.Spinner.Rect1}></div>
            <div className={cssObject.Spinner.Rect1}></div>
            <div className={cssObject.Spinner.Rect1}></div>
        </div>
    );
};

export default spinner;