import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import '../../App.css';
import { observable, action } from "mobx";

@inject("store")
@observer
class ShowCheckPoint extends Component {

    @observable to=""
    @observable Emailadress=""

    closeButtonCheckPoint = () => {
        this.props.closeCheckPoint()
    }

    componentWillMount = () => {
        this.props.store.setCheckPoint()
    }

    fixDate=(time)=>{
        time = time.split('-')
        let year = time[0]
        let month = time[1]
        let day = time[2][0] + '' + time[2][1]
        return (day + '/' + month + '/' + year)
    }

    @action checkfields = () => {
        if ((this.to==="")||(this.Emailadress==="")){
            alert ("Please fill out all the fields!")
        }
        else{
            {this.send()}
            {this.closeButtonCheckPoint()}
            alert ("Email sent successfully!")
        }
    }

    @action send = () => {
        let cp = this.props.store.currCheckpoint
        let from= this.props.store.username
        let body= `${cp.title}\n${this.fixDate(cp.startDate)}\n ${cp.description} `
        this.props.store.sendmail(from, this.to, this.Emailadress, body)
    }

    @action inputChange = (t) => {
        this[t.target.name] = t.target.value;
    }

    render() {
        let cp = this.props.store.currCheckpoint

        if (cp) {
            return (
                <div className="popup-checkpoint">
                    <input className="btn btn-outline-secondary closepopupbutton" type="button" value="X" onClick={this.closeButtonCheckPoint} />
                    <br/>
                    <h1>{cp.title}</h1>
                    <h2>Description: {cp.description}</h2>
                    <h2>Date: {this.fixDate(cp.startDate)}</h2>
                    <h2>with: {cp.people.map(p => {return <span> {p}</span>})}</h2>

                    <input className="form-control inputpopup" id="inputmail2" type="text" name="Emailadress" placeholder="Email adress" value={this.Emailadress} onChange={this.inputChange}/>   
                    <br></br><br></br>
                    <input className="form-control inputpopup" id="inputmail1" type="text" name="to" placeholder="To" value={this.to} onChange={this.inputChange}/>
                    <button type="button" className="btn btn-outline-secondary btnsendmail" onClick={this.checkfields}>Send mail</button>                
                </div>
            )
        }
        else {
            return (
                <div className="popup-checkpoint">
                    <button className="btn btn-outline-secondary closepopupbutton" type="button" onClick={this.closeButtonCheckPoint}>X</button>
                </div>
            )
        }
    }
}

export default ShowCheckPoint;