import React from 'react';
import NavItem from './NavItem/NavItem';
import cssObject from './NavItems.css'

import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';


//should add dynemic adding path based on goal's tittle for each user
const navItems = (props) => {
    const loginSigup = (
            <Auxiliary>
                <NavItem link="/auth/signup">Sign Up</NavItem>
                <NavItem link="/auth/login">Log In</NavItem>
            </Auxiliary>
        );
    return (
        <ul className={cssObject.NavItems}>
        <NavItem link="/" exact>MyGoals</NavItem>
        { props.isAuthenticated ? <NavItem link="/builder">Add Goal</NavItem>: null}
        { !props.isAuthenticated ? loginSigup : <NavItem link="/logout">Logout</NavItem>}
        </ul>
    );
}

export default navItems;