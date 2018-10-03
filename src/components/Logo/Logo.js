import React from 'react';
import goalsLogo from '../../assets/images/logo_draft2.png';
import cssObject from './Logo.css'

//style property we don't use it, it's here to show differnt way to adjasting logo height
// for use style we should add hieght property to every component where we are using it

const logo = (props) => (
    <div className={cssObject.Logo} style={{height:props.height}}>
        <img src={goalsLogo} alt="MyBurger"/>
    </div>
);

export default logo;