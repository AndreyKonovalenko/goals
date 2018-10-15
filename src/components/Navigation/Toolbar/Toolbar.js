import React from 'react';


import NavItems from '../NavItems/NavItems';
import Controls from '../Controls/Controls';
import cssObject from './Toolbar.css';
import Logo from '../../Logo/Logo';


const toolbar = (props) => (
    <header className={cssObject.Toolbar}>
        <div className={cssObject.Logo}>
           <Logo /> 
        </div>
        <div>
            <Controls 
                isAuthenticated={props.isAuth} 
                onAddGoal={props.onAddGoalClick}
            />
        </div>
        <nav>
            <NavItems isAuthenticated={props.isAuth}/>
        </nav>
    </header>
);

export default toolbar;


