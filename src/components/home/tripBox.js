import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import '../../App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

@inject('store')
@observer
class TripBox extends Component {

    set = () => {
        this.props.store.setTrip(this.props.trip._id);
    }

    render() {
        return (
                <span>
                    <img alt='file' src="https://www.clipartmax.com/png/middle/253-2530688_airplane-take-off-comments-airplane-icon-png-free.png" height="30px"/>
                    <Link to={`/currTrip/${this.props.trip._id}`}>{this.props.trip.title}</Link>
                </span>
        );
    }
}

export default TripBox