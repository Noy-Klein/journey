import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import '../../App.css';
import { Link } from 'react-router-dom';

@inject('store')
@observer
class TripBox extends Component {

    set = () => {
        this.props.store.setTrip(this.props.trip._id);
        console.log('tripbox')
    }



    render() {
        return (
                <div style={{display: 'inline-block', width: '15%'}}>
                <Link to={`/users/${this.props.username}/currTrip/${this.props.trip._id}`}><img alt='file' src={this.props.trip.imageurl} height="100px"/></Link>
                    <h2 onClick={this.set}>{this.props.trip.title}</h2>
                </div>
        );
    }
}

export default TripBox