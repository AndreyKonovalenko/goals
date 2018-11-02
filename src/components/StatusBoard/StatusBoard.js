import React from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import classes from './StatusBoard.css';

const statusBoard = (props) => {
    return (
        <Auxiliary>
            <div className={classes.StatusBoard}>
                    
                <h2>{props.title}</h2>
                <div className={classes.ParameterContainer}>
                    <div className={classes.Start}><p>Start</p></div>
                    <div className={classes.Data}><p>{props.start}</p></div>
                </div>
            </div>
            <div className={classes.StatusBoard}>
                
                <div className={classes.ParameterContainer}>
                    <div className={classes.Limitation}><p>ALL</p></div>
                    <div className={classes.Data}><p>{props.limitation}</p></div>
                </div>
                <div className={classes.ParameterContainer}>
                    <div className={classes.Left}><p>Left</p></div>
                    <div className={classes.Data}><p>{props.left}</p></div>
                </div>
                <div className={classes.ParameterContainer}>
                    <div className={classes.Succeeded}></div>
                    <div className={classes.Data}><p>{props.succeeded}</p></div>
                </div>
                <div className={classes.ParameterContainer}>
                    <div className={classes.Failed}></div>
                    <div className={classes.Data}><p>{props.failed}</p></div>
                </div>
            </div>
        </Auxiliary>
    );
}

export default statusBoard;
