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
                <div style={{display: 'inline-block', width: '20%'}}>
                    <img alt='file' src="http://icons.iconarchive.com/icons/dtafalonso/yosemite-flat/256/Folder-icon.png" height="30px"/>
                    <Link to={`/currTrip/${this.props.trip._id}`}>{this.props.trip.title}</Link>
                </div>
        );
    }
}

export default TripBox