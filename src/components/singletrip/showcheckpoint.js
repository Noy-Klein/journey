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
                    <br/>
                    <h1>{cp.title}</h1>
                    <div style={{maxHeight: '150px', maxWidth: '300'}}><img alt='checkpoint' src={cp.pictures[0]} /></div>
                    {/* <h2>Description: {cp.description}</h2>
                    <h2>Date: {this.fixDate(cp.startDate)}</h2>
                    <h2>with: {cp.people.map(p => {return <span> {p}</span>})}</h2> */}
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