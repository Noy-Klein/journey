import { Map, InfoWindow, Marker, GoogleApiWrapper, Polyline, Polygon } from 'google-maps-react';
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
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
        return (
            <Map style={{ width: '50%', height: '50%' }} initialCenter={'the first coordinant'} google={this.props.google} zoom={14}>

                <Polygon
                    paths={'all of the coordinants - axios request and populate'}
                    strokeColor="#0000FF"
                    strokeOpacity={0.8}
                    strokeWeight={2} />
                {/* map through the checkpoint and for each add a marker with name and position, and the paths get only the coordinants */}
                <Marker onClick={this.onMarkerClick}
                    name={'checkpoint name'} />
                <Marker onClick={this.onMarkerClick}
                    position={'checkpoint coordinants'}
                    name={'p'} />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyA-NDun_On5Bx3TerMVbAaC8jfU7jotv8M')
})(MapContainer)