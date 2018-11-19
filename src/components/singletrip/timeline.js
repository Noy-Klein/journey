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
        console.log(this.props.id)
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
        this.click = !this.click;
        // console.log(e.target.innerText)
        this.props.store.changeCurrCP(e.target.innerText)
    }

    render() {
        let trip = this.props.store.trip

        console.log(trip)
        if (trip) {
            trip.checkpoints.splice().sort(function (a, b) {
                if (new Date(a.startDate) > new Date(b.startDate)) {
                    return 1
                }
                if (new Date(a.startDate) < new Date(b.startDate)) {
                    return -1
                }
                // return new Date(b.startDate) - new Date(a.startDate);
            })
            let currentObjCP = trip.checkpoints.find(c => c.title === this.props.store.currentCP)
            console.log(trip.checkpoints)
            return (
                <div className='wrapper'>
                    {trip.checkpoints.map(c => {
                        return (
                            <div>
                                <div className="timeline" >
                                    <h5 onClick={this.clickTitle}> {c.title}</h5>
                                    <br />
                                </div>
                            </div>
                        )
                    })}
                    {this.props.store.currentCP && this.click ?
                        <div className="popupTitle">
                            <p>Description: {currentObjCP.description}</p>
                            <div>Date: {this.fixDate(currentObjCP.startDate)}</div>
                            <div>People: {currentObjCP.people.map(p => {
                                return <span>{p}</span>
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