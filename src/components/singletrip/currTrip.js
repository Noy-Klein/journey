import React, { Component } from 'react';
import Logo from '../home/logo';
import { inject, observer } from 'mobx-react';
import '../../App.css';
import AddForm from './addForm'
import { observable } from 'mobx';
import Header from '../home/header';
import ShowCheckPoint from './showcheckpoint'
import TripDetails from './tripDetails';
import MapContainer from './map';
import { Redirect } from 'react-router-dom';
import TimeLine from './timeline'
import { Link } from 'react-router-dom';

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

    click = () => {
        this.props.store.goBack()
    }

    componentDidMount = () => {
        this.props.store.setTrip(this.props.match.params.id)
    }

    render() {
        return (
            <div>
                <Header />
                <Logo />
                <hr />
                <img src="https://cdn2.iconfinder.com/data/icons/arrows-and-universal-actions-icon-set/256/arrow_left_circle-512.png" height="25px" alt="arrow" className="back" onClick={this.click}/>
                <AddForm />
                <TripDetails id={this.props.match.params.id} />
                <MapContainer id={this.props.match.params.id} togglePopupCheckPoint={this.togglePopupCheckPoint} />
                <TimeLine id={this.props.match.params.id} />
                <div>
                    {this.showPopup ?
                        <ShowCheckPoint marker={this.props.store.marker}
                            closeCheckPoint={this.close}

                        />
                        : null}
                </div>

                {!this.props.store.logged ? <Redirect to='/' /> : null}
                {this.props.store.back ?<Redirect to='/trips' /> : null}
            </div>
        );
    }
}

export default CurrTrip;