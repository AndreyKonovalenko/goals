import React from 'react';
import { NavLink } from 'react-router-dom';

import cssObject from './NavItem.css'

const navItem  = (props) => (
    <li className={cssObject.NavItem}>
        <NavLink 
            to="/goalfield"
            exact={props.exact} // for useg only in whe exact props passed from outside not for all navigation Items
            activeClassName={cssObject.active}>{props.children}</NavLink>
    </li>
);

export default navItem;
