import React from 'react';
import NavItem from './NavItem/NavItem';
import cssObject from './NavItems.css'


//should add dynemic adding path based on goal's tittle for each user
const navItems = (props) => (
    <ul className={cssObject.NavItems}>
        <NavItem link="/" exact>Main</NavItem>
        { props.isAuthenticated ? <NavItem link="/goals">My Goals</NavItem> : null}
        { props.isAuthenticated ? <NavItem link="/builder">Add_Goal</NavItem>: null}     
    </ul>
);

export default navItems;