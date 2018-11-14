import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
// import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

@inject('store')
@observer
class TripBox extends Component {

    set = () => {
        this.props.store.setTrip(this.props.trip._id);
    }

    render() {
        //in the props it get a trip
        // console.log(this.props.store.trips)
        // this.props.store.setTrip(this.props.trip._id);
        // console.log(this.props.store.trip)
        return (
            <Router>
                <span>
                    <Link to={`/currTrip/${this.props.trip._id}`}>{this.props.trip.title}</Link>
                </span>
            </Router>
        );
    }
}

export default TripBox