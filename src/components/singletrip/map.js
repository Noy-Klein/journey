import { Map, Marker, GoogleApiWrapper, Polygon } from 'google-maps-react';
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import '../../App.css'
import { observable } from 'mobx';


@inject("store")
@observer
class MapContainer extends Component {
    @observable marker = {}

   click =(marker, e) => {
       this.props.togglePopupCheckPoint();
       this.marker = marker;
    //    this.props.store.setMarker(this.marker)
    this.props.store.setCheckPoint(this.marker.id)
   }
    render() {
        return (
                <Map className="map" style={{ width: '50%', height: '50%' }} initialCenter={this.props.store.trip.checkpoints[0].coordinant} google={this.props.google} zoom={14}>
                    <Polygon
                        paths={
                            this.props.store.trip.checkpoints.map(c => { return c.coordinant })
                        }
                        strokeColor="#0000FF" />
                   
                    {this.props.store.trip.checkpoints.map(c => { return <Marker id={c._id} onClick={this.click} name={c.title} position={c.coordinant} /> })}
                </Map>


        );
    }
}

// export default MapContainer
export default GoogleApiWrapper({
    apiKey: ('AIzaSyA-NDun_On5Bx3TerMVbAaC8jfU7jotv8M'),
    MapContainer: MapContainer
})(MapContainer)