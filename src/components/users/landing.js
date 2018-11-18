import React, { Component } from 'react';
// import TripBox from './tripBox';
import '../../App.css';
import { inject, observer } from 'mobx-react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class Landing extends Component{
    render(){
        return(
            <div>
                <h1>WELCOME</h1>
                <Link to='/signup'>SIGN UP</Link><br/>
                <Link to='/login'>LOGIN</Link>
            </div>
        );
    }
}

export default Landing