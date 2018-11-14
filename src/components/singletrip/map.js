import { Map, InfoWindow, Marker, GoogleApiWrapper, Polyline, Polygon } from 'google-maps-react';
import React, { Component } from 'react';

export class MapContainer extends Component {
    onMarkerClick = () => {
        alert('here')
    }


    render() {

        const triangleCoords = [
            { lat: 25.774, lng: -80.190 },
            { lat: 18.466, lng: -66.118 },
            { lat: 32.321, lng: -64.757 },
            { lat: 25.774, lng: -80.190 }
        ];
        //[2.320582, 48.859489]
        //[48.859489, 2.320582]
        // const center = {lat: 48.859489, lng: 2.320582}
        // const center = [48.859489, 2.320582]
        // console.log(this.props.google)
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

                {/* <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                        <h1>Israel</h1>
                    </div>
                </InfoWindow> */}
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyA-NDun_On5Bx3TerMVbAaC8jfU7jotv8M')
})(MapContainer)