import React from 'react';
import NavItem from './NavItem/NavItem';
import cssObject from './NavItems.css'


//should add dynemic adding path based on goal's tittle for each user
const navItems = (props) => (
    <ul className={cssObject.NavItems}>
        <NavItem link="/" exact>MyGoals</NavItem>
        { props.isAuthenticated ? <NavItem link="/builder">Add Goal</NavItem>: null}
        { !props.isAuthenticated 
            ? <NavItem link="/auth">Authenticate</NavItem>
            :<NavItem link="/logout">Logout</NavItem>}
    </ul>
);

export default navItems;