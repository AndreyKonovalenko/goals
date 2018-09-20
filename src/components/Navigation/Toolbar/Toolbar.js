import React from 'react';


import NavItems from '../NavItems/NavItems';
import cssObject from './Toolbar.css';


const toolbar = (props) => (
    <header className={cssObject.Toolbar}>
        <div className={cssObject.Logo}>
           Logo 
        </div>
        <nav>
            <NavItems isAuthenticated={props.isAuth}/>
        </nav>
    </header>
);

export default toolbar;


