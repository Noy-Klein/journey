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
                <div style={{display: 'inline-block', width: '15%'}}>
                    <Link to={`/currTrip/${this.props.trip._id}`}><img alt='file' src="http://icons.iconarchive.com/icons/dtafalonso/yosemite-flat/256/Folder-icon.png" height="100px"/></Link>
                    <h2>{this.props.trip.title}</h2>
                </div>
        );
    }
}

export default TripBox