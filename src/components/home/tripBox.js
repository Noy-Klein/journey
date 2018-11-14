import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
// import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

@inject('store')
@observer
class TripBox extends Component {

    set = () => {
        this.props.store.setTrip(this.props.trip._id);
    }

    render() {
        return (
            <Router>
                <span>
                    <img alt='file' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Closed_Book_Icon.svg/2000px-Closed_Book_Icon.svg.png" height="30px"/>
                    <Link to={`/currTrip/${this.props.trip._id}`}>{this.props.trip.title}</Link>
                </span>
            </Router>
        );
    }
}

export default TripBox