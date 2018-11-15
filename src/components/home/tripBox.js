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
                <div style={{display: 'inline-block', width: '20%'}}>
                    <img alt='file' src="http://icons.iconarchive.com/icons/dtafalonso/yosemite-flat/256/Folder-icon.png" height="30px"/>
                    <Link to={`/currTrip/${this.props.trip._id}`}><span onClick={this.set}>{this.props.trip.title}</span></Link>
                </div>
        );
    }
}

export default TripBox