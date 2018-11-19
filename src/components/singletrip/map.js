import { Map, Marker, GoogleApiWrapper, Polyline } from 'google-maps-react';
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import '../../App.css'
import { observable } from 'mobx';

@inject("store")
@observer
class MapContainer extends Component {
    componentDidMount = () => {
        this.props.store.setTrip(this.props.id)
        this.props.store.addInitialCenter(this.props.store.trip.title.split(' ')[0])
    }
    @observable marker = {}

    click = (marker, e) => {
        this.props.togglePopupCheckPoint();
        this.marker = marker;
        this.props.store.setCheckPoint(this.marker.id)
    }

    // timeline = () => {
    //     this.props.store.setCheckPoint();
    // }

    render() {
        let trip = this.props.store.trip;
        let initialCenter = this.props.store.initialCenter;
        if (trip && trip.checkpoints.length) {
            return (
                <div className="mapDiv">
                    <Map className="map" style={{ width: '50%', height: '50%' }} center={trip.checkpoints[0].coordinant} initialCenter={trip.checkpoints[0].coordinant} google={this.props.google} zoom={14}>
                        <Polyline
                            path={
                                trip.checkpoints.map(c => { return c.coordinant })
                            }
                            strokeColor="green"
                            strokeWeight={2}
                            strokeStyle='dotted'
                            strokeOpacity={0.3}
                        />

                        {trip.checkpoints.map(c => { return <Marker key={c._id} id={c._id} onClick={this.click} name={c.title} position={c.coordinant} /> })}
                    </Map>
                </div>

            );
        }
        else if (trip && initialCenter) {
            console.log(initialCenter)
            return (
                <Map className="map" style={{ width: '50%', height: '50%' }} center={initialCenter} initialCenter={initialCenter} google={this.props.google} zoom={7}>
                    <Polyline
                        path={
                            [initialCenter]
                        }
                        strokeColor="green"
                        strokeWeight={2}
                        strokeStyle='dotted'
                        strokeOpacity={0.3} />
                    <Marker id='1' onClick={this.click} name={trip.title} position={initialCenter} />
                </Map>
            );
        }
        else{
            return(
                <Map className='map' style={{ width: '50%', height: '50%' }} google={this.props.google} zoom={7}></Map>
            )
        }
    }
}

// export default MapContainer
export default GoogleApiWrapper({
    apiKey: ('AIzaSyA-NDun_On5Bx3TerMVbAaC8jfU7jotv8M'),
    MapContainer
})(MapContainer)