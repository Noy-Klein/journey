import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';
import {action, observable} from "mobx";
import '../../App.css';
 
@inject ("store")
@observer
class Popupaddtrip extends Component {

  @observable trip={
   title: "",
   description: "",
   startDate: "",
   endDate: "",
  }

  @action closepopup = () => {
    this.props.store.changeshowpopupaddtrip();
  }

  @action inputChange = (e) => {this.trip[e.target.name] = e.target.value}

  @action Addthetrip = () => {
    this.props.store.Addtrip(this.trip);
  }

  render() {
    return (<div className="popup">
    <button onClick={this.closepopup} type="button">X</button>
    <div className="input-group  mb-3">
      <input name="title" onChange={this.inputChange} value={this.title} placeholder="Trip title" type="text" className="form-control" aria-describedby="button-addon2" />
      </div>
      <div className="input-group  mb-3">
      <input name="description" onChange={this.inputChange} value={this.description} placeholder="Description" type="text" className="form-control" aria-describedby="button-addon2" />
      </div>
      <div className="input-group  mb-3">
      <input name="startDate" onChange={this.inputChange} value={this.startDate} placeholder="Start Date" type="Date" className="form-control" aria-describedby="button-addon2" />
      </div>
      <div className="input-group  mb-3">
      <input name="endDate" min={this.trip.startDate} onChange={this.inputChange} value={this.endDate} placeholder="End Date" type="Date" className="form-control" aria-describedby="button-addon2" />
      <br/>
      <div className="input-group-append">
      <button className="btn btn-outline-secondary" onClick={this.Addthettrip} type="button" id="button-addon2">Create Trip</button>
      </div>
      </div>
      </div>
    );
  }
}

export default Popupaddtrip;
