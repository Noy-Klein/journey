import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { observable } from "mobx";
import AddButton from '../singletrip/addButton';

@inject("store")
@observer
class AddForm extends Component {

    @observable showPopup = false;

    togglePopup = () => {
        this.showPopup = !this.showPopup
    }

    render() {
        return (
            <div className="addForm">
                  <img src="https://www.pngarts.com/files/3/Plus-Symbol-PNG-Image-with-Transparent-Background.png" height="40px" alt="error" onClick={this.togglePopup} value="button"/>
                {/* <input className="add" type="button" value="+" onClick={this.togglePopup} /> */}
                <div>
                    {this.showPopup ?<AddButton id={this.props.id} closePopup={this.togglePopup}/>: null}
                </div>
            </div>
        )
    }
}
export default AddForm;