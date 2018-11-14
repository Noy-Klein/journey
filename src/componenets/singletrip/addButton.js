import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { observable, action } from "mobx";

@inject("store")
@observer
class AddButton extends Component {
    @observable trip = {
        title: "",
        description: "",
        startDate: "",
        endDate: "",
        people: "",
        adress: "",
        pictures: ""
    };

    closeButton = () => {
        this.props.closePopup(null)
    }

    @action inputChange = (t) => {
        this.trip[t.target.name] = t.target.value;
      }

      

    addTrip = () => { 
        this.props.store.addTrip(this.trip.title, this.trip.description, this.trip.startDate, this.trip.endDate, this.trip.people, this.trip.adress, this.trip.pictures)
    }

    render() {
        return (
            <div className="add-button">
                <div className="popUp">
                <input className="inputTitle" type="text" name="title" placeholder="title" value={this.title} onChange={this.inputChange}/>
                <br></br><br></br>
                <input className="inputDescription" type="text" name="description" placeholder="description" value={this.description} onChange={this.inputChange}/>
                <br></br><br></br>
                <input className="inputStartDate" type="text" name="startDate" placeholder="startDate" value={this.startDate} onChange={this.inputChange}/>
                <br></br><br></br>
                <input className="inputEndDate" type="text" name="endDate" placeholder="endDate" value={this.endDate} onChange={this.inputChange}/>
                <br></br><br></br>
                <input className="inputPeople" type="text" name="people" placeholder="people" value={this.people} onChange={this.inputChange}/>
                <br></br><br></br>
                <input className="inputAdress" type="text" name="adress" placeholder="adress" value={this.adress} onChange={this.inputChange}/>
                <br></br><br></br>
                <input className="inputPictures" type="text" name="pictures" placeholder="pictures" value={this.pictures} onChange={this.inputChange}/>
                </div>
            </div>
        )
    }
}

export default AddButton;
