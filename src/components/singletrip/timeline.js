import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import '../../App.css';
import { observable } from 'mobx';

@inject("store")
@observer
class TimeLine extends Component {
    @observable click = false;
    @observable currentCP = null

    componentDidMount = () => {
        // console.log(this.props.id)
        this.props.store.setTrip(this.props.id)

    }

    fixDate = (time) => {
        time = time.split('-')
        let year = time[0]
        let month = time[1]
        let day = time[2][0] + '' + time[2][1]
        return (day + '/' + month + '/' + year)
    }

    clickTitle = (e) => {
        this.click = true;
        // console.log(e.target.innerText)
        this.props.store.changeCurrCP(e.target.id)
        console.log(e.target.id)
    }

    clickClose = () => {
        this.click = false;
        this.props.store.changeCurrCP('')
    }

    render() {
        let trip = this.props.store.trip

        // console.log(trip)
        if (trip && trip.checkpoints && trip.checkpoints.length) {
            // trip.checkpoints.splice().sort(function (a, b) {
            //     // if (new Date(a.startDate).getTime() > new Date(b.startDate).getTime()) {
            //     //     return 1
            //     // }
            //     // if (new Date(a.startDate).getTime() < new Date(b.startDate).getTime()) {
            //     //     return -1
            //     // }
            //     return new Date(a.startDate) - new Date(b.startDate)
            // })
            let currentObjCP = trip.checkpoints.find(c => c.title === this.props.store.currentCP)
            // console.log(trip.checkpoints)
            return (
                <div className='wrapper'>
                <h4 className="titletimeline">Places You've Been</h4>
                    {trip.checkpoints.map(c => {
                        return (
                            <div key={c._id}>
                                <div className="timeline" >
                                    {c.title === this.props.store.currentCP ?
                                        <h6 style={{ backgroundColor: 'rgba(175, 175, 175, 0.493)' }} onClick={this.clickTitle}> {c.title} </h6>
                                        :
                                        <span> <h6 className='timeline-title' onClick={this.clickTitle} id={c.title}>{this.fixDate(c.startDate)} - {c.title}</h6></span>
                                    }
                                </div>
                                    <hr className="hr1"></hr>
                            </div>
                        )
                    })}
                    {this.props.store.currentCP && this.click ?
                        <div className="popupTitle">
                            <button className="btn btn-outline-secondary closebutton" type="button" value="X" onClick={this.clickClose}>X</button>
                            <p>{currentObjCP.description}</p>
                            <div><span className="spanTitle">On: </span>{this.fixDate(currentObjCP.startDate)}</div>
                            <div><span className="spanTitle">With</span> {currentObjCP.people.map(p => {
                                return <span key={p}>{p}</span>
                            })}</div>
                            <hr className="hr1"></hr>

                        </div>
                        : null
                    }
                </div>

            )
        }
        else {
            return (<div className="timeline"></div>)
        }


    }
}


export default TimeLine;