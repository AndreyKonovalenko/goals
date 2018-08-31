import React from 'react';
import NavItem from './NavItem/NavItem';
import cssObject from './NavItems.css'


//should add dynemic adding path based on goal's tittle for each user
const navItems = (props) => (
    <ul className={cssObject.NavItems}>
        <NavItem link="/" exact>Main{}</NavItem>
        <NavItem link="/goals">My Goals</NavItem>
        <NavItem link="/goal-constractor">Constractor</NavItem>
        <NavItem link="/auth">Log In</NavItem>
    </ul>
);

export default navItems;