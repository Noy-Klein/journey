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
                <h2><Link className="logoutlink" to='/'>LOG OUT<img height='21px' width='21px' alt='logout' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Signout_font_awesome.svg/2000px-Signout_font_awesome.svg.png'/></Link></h2>
                <h2 className="back" onClick={this.click}>Back</h2>
                <Logo />
                <hr />
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