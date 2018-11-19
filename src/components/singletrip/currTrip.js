import React, { Component } from 'react';
import Logo from '../home/logo';
import { inject, observer } from 'mobx-react';
import '../../App.css';
import AddForm from './addForm'
import { observable } from 'mobx';
import ShowCheckPoint from './showcheckpoint'
import TripDetails from './tripDetails';
import MapContainer from './map';
import { Redirect } from 'react-router-dom';

@inject("store")
@observer
class CurrTrip extends Component {
    @observable showPopup = false;

    togglePopupCheckPoint = () => {
        this.showPopup = !this.showPopup
    }
    close = () => {
        this.showPopup = false
    }


    componentDidMount = () => {
        this.props.store.setTrip(this.props.match.params.id)
    }

    render() {
        return (
            <div>
                <Logo />
                <hr />
                <AddForm />
                <TripDetails id={this.props.match.params.id} />
                <MapContainer id={this.props.match.params.id} togglePopupCheckPoint={this.togglePopupCheckPoint} />
                <div>
                    {this.showPopup ?
                        <ShowCheckPoint marker={this.props.store.marker}
                            closeCheckPoint={this.close}

                        />
                        : null}
                </div>
                {!this.props.store.logged ? <Redirect to='/'/> : null}
            </div>
        );
    }
}

export default CurrTrip;