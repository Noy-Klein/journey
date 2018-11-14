import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { observable } from "mobx";
import AddButton from './addButton';

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
                <input className="add" type="button" value="+" onClick={this.togglePopup} />
                <div>
                    {this.showPopup ?
                        <AddButton
                            closePopup={this.togglePopup}
                        />
                        : null}
                </div>
            </div>
        )
    }
}
export default AddForm;