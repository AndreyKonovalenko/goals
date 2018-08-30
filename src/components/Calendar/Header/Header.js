import React from 'react';

import dateFns from 'date-fns';
import cssObject from './Header.css';

const header = (props) => {

    const dateFormat = "MMMM YYYY";
    return (
        <div className={cssObject.Header}>
            <div className={cssObject.ChevronLeft} onClick={props.prevMonth}></div>
            <div className={cssObject.HeadarTitle}>
                <span>
                    {dateFns.format(props.currentMonth, dateFormat)}
                </span>
            </div>
            <div className={cssObject.ChevronRight} onClick={props.nextMonth}></div>
        </div>
    ); 
};
      
export default header;