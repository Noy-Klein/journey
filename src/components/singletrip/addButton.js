import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { observable, action } from "mobx";
import Images from './Images';
import '../../App.css';

@inject("store")
@observer
class AddButton extends Component {
    @observable trip = {
        title: "",
        description: "",
        startDate: "",
        people: "",
        adress: "",
        pictures: []
    };

    closeButton = () => {
        this.props.closePopup(null)
    }

    @action inputChange = (t) => {
        this.trip[t.target.name] = t.target.value;
      }

      addNewCheckpoint = () => { 
          if((this.trip.title==="")||(this.trip.description==="")||(this.trip.startDate==="")||(this.trip.people==="")||(this.trip.adress==="")){
            alert ("Please fill out all the fields!")
        }
        // this.props.store.addTrip(this.trip.title, this.trip.description, this.trip.startDate, this.trip.endDate, this.trip.people, this.trip.adress, this.trip.pictures)
        else{
        this.props.store.addCheckPoint({data:{title:this.trip.title, description:this.trip.description, startDate:this.trip.startDate, people:this.trip.people, adress:this.trip.adress, pictures:this.trip.pictures}, id:this.props.store.tripId})
        this.closeButton()
        // alert ("Your checkpoint saved!")
        }
    }

    render() {
        let trip = this.props.store.trip;
        return (
            <div className="add-button">
                <div className="popupcurr">
                <input className="form-control inputpopup" id="inputCurr" type="text" name="title" placeholder="Title" value={this.title} onChange={this.inputChange}/>
                <br></br><br></br>
                <input className="form-control inputpopup" id="inputCurr1" type="text" name="description" placeholder="Description" value={this.description} onChange={this.inputChange}/>
                <br></br><br></br>
                <input className="form-control inputpopup" id="inputCurr2" min={trip.startDate} max={trip.endDate} type="Date" name="startDate" placeholder="StartDate" value={this.startDate} onChange={this.inputChange}/>
                <br></br><br></br>
                <input className="form-control inputpopup" id="inputCurr3" type="text" name="people" placeholder="People" value={this.people} onChange={this.inputChange}/>
                <br></br><br></br>
                <input className="form-control inputpopup" id="inputCurr4" type="text" name="adress" placeholder="Adress" value={this.adress} onChange={this.inputChange}/>
                <br></br><br></br>
                <input className="form-control inputpopup" id="inputCurr5" type="text" name="pictures" placeholder="Pictures" value={this.pictures} onChange={this.inputChange}/>
                <br></br><br></br>
                {/* <Images /> */}
                <button className="btn btn-outline-secondary addtripbuttoncurr" type="button" value="Add Checkpoint" onClick={this.addNewCheckpoint}>Add Checkpoint</button>
                <button className="btn btn-outline-secondary closepopupbutton" type="button" value="X" onClick={this.closeButton}>X</button>
               
                </div>
            </div>
        )
    }
}

export default AddButton;