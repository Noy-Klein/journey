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
                <h2 onClick={this.logout} className='hey'>Hey {this.props.store.username}!</h2>
                <h2><Link className="logoutlink" to='/'>LOG OUT</Link></h2>
                <Logo />
                <hr />
                <img src="https://cdn0.iconfinder.com/data/icons/pixon-1/24/arrow_right_left_back_next_forward_circle-512.png" height="25px" alt="arrow" className="back" onClick={this.click}/>
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