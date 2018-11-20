import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import '../../App.css';
import { Link } from 'react-router-dom';

@inject('store')
@observer
class TripBox extends Component {

    set = () => {
        this.props.store.setTrip(this.props.trip._id);
    }

    render() {
        return (
            <div style={{ display: 'inline-block', width: '15%' }}>
                <Link to={`/trips/${this.props.trip._id}`}><img onClick={this.set} alt='file' src="https://static.thenounproject.com/png/8841-200.png" height="80px" /></Link>
                <h2>{this.props.trip.title}</h2>
            </div>
        );
    }
}

export default TripBox