import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { action, observable } from "mobx";
import '../../App.css';

@inject("store")
@observer
class Popupaddtrip extends Component {

  @observable title = ""
  @observable description = ""
  @observable startDate = ""
  @observable endDate = ""

  // componentDidMount=()=>{
  //   this.props.store.getIcon(this.title.split(' ')[0] + ' icon transparent')
  //   this.img = this.props.store.img
  // }

  @action closepopup = () => {
    this.props.store.changeshowpopupaddtrip();
  }

  @action inputChange = (e) => { this[e.target.name] = e.target.value }

  // @action icon = () => {
  //   this.props.store.getIcon(this.title.split(' ')[0] + ' icon transparent')
  //   this.img = this.props.store.img
  // }

  @action Addthetrip = () => {
    if ((this.title === "") || (this.description === "") || (this.startDate === "") || (this.endDate === "") ) {
      alert("Please fill out all the fields!")
    }// two folders cant have the same name!!
    else {
      // console.log(this.title.split(' ')[0])
      // this.img = this.props.store.img
      // console.log(this.img)
      let uppertitle=this.title.charAt(0).toUpperCase() + this.title.slice(1)
      let upperdescription=this.description.charAt(0).toUpperCase() + this.description.slice(1)
      //`https://maxcdn.icons8.com/iOS7/PNG/25/Maps/${uppertitle.split(' ')[0]}_map-25.png`
      this.props.store.Addtrip(uppertitle, upperdescription, this.startDate, this.endDate || `https://maxcdn.icons8.com/iOS7/PNG/25/City/city_filled-25.png`);  // picture of tikia
      this.closepopup()
      alert("Your trip saved!")
    }
  }

  render() {
    // this.icon()
    // console.log(this.img)
    return (<div className="popup">
      <input id="input1" name="title" onChange={this.inputChange} value={this.title} placeholder="Trip title" type="text" className="form-control inputpopup" aria-describedby="button-addon2" />
      <br />
      <input id="input2" name="description" onChange={this.inputChange} value={this.description} placeholder="Description" type="text" className="form-control inputpopup" aria-describedby="button-addon2" />
      <br />
      <input id="input3" name="startDate" onChange={this.inputChange} value={this.startDate} placeholder="Start Date" type="Date" className="form-control inputpopup" aria-describedby="button-addon2" />
      <br />
      <input id="input4" name="endDate" min={this.startDate} onChange={this.inputChange} value={this.endDate} placeholder="End Date" type="Date" className="form-control inputpopup" aria-describedby="button-addon2" />
      <br />
      <button className="btn btn-outline-secondary addtripbutton" onClick={this.Addthetrip} type="button" id="button-addon2">Create Trip</button>
      <button onClick={this.closepopup} className="btn btn-outline-secondary closepopupbutton" type="button">X</button>
    </div>
    );
  }
}

export default Popupaddtrip;
