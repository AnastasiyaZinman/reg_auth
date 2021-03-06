import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import '../App.css';
import axios from 'axios'
@inject("store")
@observer
class Navbar extends Component {  
    render() {
        // const loggedIn = this.props.loggedIn;
        //Conditional render of nav bar
        return (
            <header>
                {!this.props.store.loggedIn ? (
                        <div>
                            {/* <Link to="/" className="btn btn-link text-secondary">
                                <span className="text-secondary">home</span>
                            </Link>
                            &nbsp;|&nbsp; */}
                            <Link to="/login" className="btn btn-link text-secondary">
                                <span className="text-white">login</span>
                            </Link>
                            &nbsp;|&nbsp;
                            <Link to="/signup" className="btn btn-link text-secondary">
                                <span className="text-white">signup</span>
                            </Link>
                        </div>)
                    
                :null}
             </header>
        );

    }
}

export default Navbar