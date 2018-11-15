import React, { Component } from 'react';
import Logo from '../home/logo';
import { inject, observer } from 'mobx-react';
import '../../App.css';
import AddForm from './addForm'
// import AddButton from './addButton';
// import { observable } from 'mobx';
// import axios from 'axios';
import TripDetails from './tripDetails';
import MapContainer from './map'

@inject("store")
@observer
class CurrTrip extends Component {

    componentDidMount=()=>{
        this.props.store.setTrip(this.props.match.params._id)
    }

    render() {
        return (
            <div>
            <Logo />
                <AddForm id={this.props.match.params._id} />
                <TripDetails id={this.props.match.params._id} />
                <MapContainer  id={this.props.match.params._id} />
            </div>
        );
    }
}

export default CurrTrip;