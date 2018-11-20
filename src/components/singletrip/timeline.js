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
        this.props.store.changeCurrCP(e.target.innerText)
    }

    clickClose = () => {
        this.click = false;
    }

    render() {
        let trip = this.props.store.trip

        // console.log(trip)
        if (trip) {
            trip.checkpoints.splice().sort(function (a, b) {
                if (new Date(a.startDate) > new Date(b.startDate)) {
                    return 1
                }
                if (new Date(a.startDate) < new Date(b.startDate)) {
                    return -1
                }
                return 0
            })
            let currentObjCP = trip.checkpoints.find(c => c.title === this.props.store.currentCP)
            // console.log(trip.checkpoints)
            return (
                <div className='wrapper'>
                    {trip.checkpoints.map(c => {
                        return (
                            <div key={c._id}>
                                <div className="timeline" >
                                {c.title === this.props.store.currentCP ?
                                    <h6 style={{border: 'black solid 1px'}} onClick={this.clickTitle}> {c.title}</h6>
                                    :
                                    <h6 onClick={this.clickTitle}> {c.title}</h6>
                                }
                                    <br />
                                </div>
                            </div>
                        )
                    })}
                    {this.props.store.currentCP && this.click ?
                        <div className="popupTitle">
                            <button className="btn btn-outline-secondary closebutton" type="button" value="X" onClick={this.clickClose}>X</button>
                            <p>{currentObjCP.description}</p>
                            <div>On: {this.fixDate(currentObjCP.startDate)}</div>
                            <div>With {currentObjCP.people.map(p => {
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