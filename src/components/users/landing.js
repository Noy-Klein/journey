import React, { Component } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

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