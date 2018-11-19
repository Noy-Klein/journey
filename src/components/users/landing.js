import React, { Component } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';


class Landing extends Component{
    render(){
        return(
            <div>
                <h5>Welcome to MY JOURNEY</h5>
                <br/>
                <h6>How many times did you get to fly abroad and after a few years you were upset that you did not record every minute of your journey?</h6>
                <h6>On your journey after army? On a trip to Poland? Roots trip? It probably happened a few times...</h6>
                <h6>So we're here to solve the problem,</h6>
                <h6>with our website you can record every moment of your trip on points on the map, add photos, and send to friends!</h6>
                <h6>So What are you waiting for? sign in and start recording!</h6>
                <Link to='/signup'><button type="button" className="btn btn-outline-secondary signupbtn">SIGN UP</button></Link>
                <Link to='/login'><button type="button" className="btn btn-outline-secondary loginbtn">LOGIN</button></Link>
            </div>
        );
    }
}

export default Landing;