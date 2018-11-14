import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
// import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

@inject('store')
@observer
class TripBox extends Component{
    render(){
        //in the props it get a trip
        return(
            <span>
                <Link to={`/currTrip/${this.props.trip._id}`}>{this.props.trip.title}</Link>
            </span>
        );
    }
}

export default TripBox