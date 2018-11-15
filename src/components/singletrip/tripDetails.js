import React, { Component } from 'react';
// import Logo from '../home/logo';
import { inject, observer } from 'mobx-react';
import '../../App.css';

@inject("store")
@observer
class TripDetails extends Component {

    componentDidMount = () => {
        this.props.store.setTrip(this.props.id)
    }

    fixDate = (time) => {
        time = time.split('-');
        let year = time[0];
        let month = time[1];
        let day = time[2][0] + '' + time[2][1];
        return (day + '/' + month + '/' + year);
    }

    render() {
        let trip = this.props.store.trip;
        if (trip) {
            return (
                <div>
                    <div>{trip.title}</div>
                    <p>{trip.description}</p>
                    <div>{this.fixDate(trip.startDate)} - {this.fixDate(trip.endDate)}</div>
                </div>
            );
        }
        else {
            return null
        }

    }
}

export default TripDetails;