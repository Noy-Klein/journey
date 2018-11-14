import { Map, InfoWindow, Marker, GoogleApiWrapper, Polyline, Polygon } from 'google-maps-react';
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject("store")
@observer
class MapContainer extends Component {
    render() {
        // console.log(this.props.store.trip)
        return (
            <Map style={{ width: '50%', height: '50%' }} initialCenter={{ lat: 48.859489, lng: 2.320582 }} google={this.props.google} zoom={14}>

                <Polygon
                    paths={
                        [
                            { lat: 43.70724, lng: 7.2617893 },
                            { lat: 48.859489, lng: 2.320582 }
                        ]
                    }
                    strokeColor="#0000FF"
                    strokeOpacity={0.8}
                    strokeWeight={2} />

                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
                <Marker onClick={this.onMarkerClick}
                    position={{ lat: 43.70724, lng: 7.2617893 }}
                    name={'p'} />
            </Map>
        );
    }
}

// export default MapContainer
export default GoogleApiWrapper({
    apiKey: ('AIzaSyA-NDun_On5Bx3TerMVbAaC8jfU7jotv8M'),
    MapContainer: MapContainer
})(MapContainer)