import React, { Component } from 'react';
import Logo from '../home/logo';
import { inject, observer } from 'mobx-react';
import '../../App.css';
import Map from './map'
import AddForm from './addForm'
import AddButton from './addButton'

@inject("store")
@observer
class CurrTrip extends Component {

    render() {
        this.props.store.setTrip(this.props.match.params._id);
        return (
            <div>
            <Logo />
                <AddForm />
                {/* add addForm, map, addbutton */}
                <Map />
            </div>
        );
    }
}

export default CurrTrip;