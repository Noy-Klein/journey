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
                  <button className="btn btn-outline-secondary addcheckpointbtn" onClick={this.togglePopup} value="button">Add checkpoint</button>
                <div>
                    {this.showPopup ?<AddButton id={this.props.id} closePopup={this.togglePopup}/>: null}
                </div>
            </div>
        )
    }
}
export default AddForm;