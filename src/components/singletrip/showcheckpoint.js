import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import '../../App.css';

@inject("store")
@observer
class ShowCheckPoint extends Component {

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

    render() {
        let cp = this.props.store.currCheckpoint
        console.log(cp)
        if (cp) {
            return (
                <div className="popup-checkpoint">
                    <input className="btn btn-outline-secondary closepopupbutton" type="button" value="X" onClick={this.closeButtonCheckPoint} />
                    <div>{cp.title}</div>
                    <p>{cp.description}</p>
                    <div>{this.fixDate(cp.startDate)}</div>
                    <div>with: {cp.people.map(p => {return <span> {p}</span>})}</div>
                </div>
            )
        }
        else {
            return (
                <div className="popup-checkpoint">
                    <input className="btn btn-outline-secondary closepopupbutton" type="button" value="X" onClick={this.closeButtonCheckPoint} />
                </div>
            )
        }
    }
}

export default ShowCheckPoint;