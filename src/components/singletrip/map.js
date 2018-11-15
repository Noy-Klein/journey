import { Map, Marker, GoogleApiWrapper, Polyline } from 'google-maps-react';
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import '../../App.css'
import { observable } from 'mobx';

@inject("store")
@observer 
class MapContainer extends Component {
componentDidMount=()=>{
        this.props.store.setTrip(this.props.id)
    }
    @observable marker = {}

   click =(marker, e) => {
       this.props.togglePopupCheckPoint();
       this.marker = marker;
    //    this.props.store.setMarker(this.marker)
    this.props.store.setCheckPoint(this.marker.id)
   }
    render() {
      let trip = this.props.store.trip ;
      if (trip && trip.checkpoints.length) {
        return (
                <Map className="map" style={{ width: '50%', height: '50%' }} initialCenter={trip.checkpoints[0].coordinant} google={this.props.google} zoom={14}>
                    <Polyline
                        path={
                           trip.checkpoints.map(c => { return c.coordinant })
                        }
                        strokeColor="#0000FF" />
                   
                   {trip.checkpoints.map(c => { return <Marker id={c._id} onClick={this.click} name={c.title} position={c.coordinant} /> })}
                </Map>


        );
      }
      else{
          return (
                    <Map className="map" style={{ width: '50%', height: '50%' }} google={this.props.google} zoom={14}></Map>
                );
      }
    }
}

// export default MapContainer
export default GoogleApiWrapper({
    apiKey: ('AIzaSyA-NDun_On5Bx3TerMVbAaC8jfU7jotv8M'),
    MapContainer
})(MapContainer)