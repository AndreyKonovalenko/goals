import React from 'react';
import {Motion, spring} from 'react-motion';

import classes from './Animation.css'

const animation = (props) => {
    return (
        <Motion style={{x: spring(props.editMode ? 200 : 100)}}>
            { ({x}) => {
                return (
                    <div className={classes.AnimationConteniner}> 
                        <div className={classes.AnimatedComponent} 
                            style={{
                                WebkitTransform: `translate3d(${x}px, 0, 0)`,
                                transform: `translate3d(${x}px, 0, 0)`
                            }}>
                            {props.children}
                        </div>
                    </div>);
                }
            }
        </Motion>
    );
};
export default animation;