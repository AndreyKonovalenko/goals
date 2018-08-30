import React from 'react';

import cssObject from './Toolbar.css';


const toolbar = (props) => (
    <header className={cssObject.Toolbar}>
        <div className={cssObject.Logo}>
           Logo 
        </div>
        <nav className={null}>
            <ul>
                <li>Add New</li>
                <li>My Goals</li>
            </ul>
        </nav>
    </header>
);

export default toolbar;


