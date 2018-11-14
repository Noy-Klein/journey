import React, { Component } from 'react';
import Logo from '../home/logo';
import { inject } from 'mobx-react';
import '../../App.css';
import AddForm from './addForm'
import AddButton from './addButton'

@inject("store")
class CurrTrip extends Component {
    render() {
        return (
            <div>
                {/* <AddForm /> */}
                {/* <AddButton /> */}
            <Logo />
                {/* add addForm, map, addbutton */}
            </div>
        );
    }
}

export default CurrTrip;