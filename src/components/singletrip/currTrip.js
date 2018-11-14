import React, { Component } from 'react';
import Logo from '../home/logo';
import { inject } from 'mobx-react';
import '../../App.css';

@inject("store")
class CurrTrip extends Component {
    render() {
        return (
            <div>
                {/* add addForm, map, addbutton */}
            </div>
        );
    }
}

export default CurrTrip;