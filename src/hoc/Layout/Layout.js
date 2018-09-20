import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

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
                <Toolbar isAuth={this.props.isAuthenticated}/>
                <main className={cssObject.Content}>
                    {this.props.children}
                </main>
            </Auxiliary>
        );
    }
}
 
const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default withRouter(connect(mapStateToProps)(Layout));