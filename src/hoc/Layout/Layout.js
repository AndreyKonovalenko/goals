import React, { Component } from 'react';

import Auxiliary from '../Auxiliary/Auxiliary';
import cssObject from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

class Layout extends Component {
    // state = { 
    //     showSideDrawer: false 
    // }
    
    // sideDrawerClosedHandler = () => {
    //     this.setState({showSideDrawer: false});
    // }

    // sideDrawerToggleHandler = () => {
    //     this.setState((prevState) => {
    //         return  {showSideDrawer: !prevState.showSideDrawer };
    //     });
    // }

    render () {
        return(
            <Auxiliary>
                <Toolbar/>
                <main className={cssObject.Content}>
                    {this.props.children}
                </main>
            </Auxiliary>
        );
    }
}
 



export default Layout;