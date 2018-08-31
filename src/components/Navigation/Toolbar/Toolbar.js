import React from 'react';


import NavItems from '../NavItems/NavItems';
import cssObject from './Toolbar.css';


const toolbar = (props) => (
    <header className={cssObject.Toolbar}>
        <div className={cssObject.Logo}>
           Logo 
        </div>
        <nav>
            <NavItems />
        </nav>
    </header>
);

export default toolbar;


