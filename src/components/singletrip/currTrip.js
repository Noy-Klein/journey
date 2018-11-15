import React, { Component } from 'react';
import Logo from '../home/logo';
import { inject, observer } from 'mobx-react';
import '../../App.css';
import Map from './map'
import AddForm from './addForm'
import { observable } from 'mobx';
import ShowCheckPoint from './showcheckpoint'

@inject("store")
@observer
class CurrTrip extends Component {
    @observable showPopup = false;

    togglePopupCheckPoint = () => {
        this.showPopup = !this.showPopup
    }
    close=()=>{
        this.showPopup = false
    }


    render() {
        this.props.store.setTrip(this.props.match.params._id);
        return (
            <div>
            <Logo />
                <AddForm />
                {/* add addForm, map, addbutton */}
                <Map togglePopupCheckPoint={this.togglePopupCheckPoint}/>
                <div>
                        {this.showPopup ?
                            <ShowCheckPoint marker={this.props.store.marker}
                            closeCheckPoint={this.close}
                            
                            />
                            : null}
                    </div>

            </div>
        );
    }
}

export default CurrTrip;