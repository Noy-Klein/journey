import { Map, Marker, GoogleApiWrapper, Polygon } from 'google-maps-react';
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import '../../App.css'

@inject("store")
@observer
class MapContainer extends Component {
    render() {
        // console.log(this.props.store.trip._id)
        // this.props.store.addCheckPoint({data:{
        //     title: 'Champ De Mars',
        //     description: 'THE park',
        //     startDate: new Date(2, 2, 2018),
        //     people: ['dani', 'may'],
        //     adress: 'Champ De Mars',
        //     pictures: ['https://www.toureiffel.paris/themes/custom/tour_eiffel/img/poster-tour-eiffel-jour-nuit.jpg'],
        //     coordinant: null
        // }, id: this.props.store.trip._id})
        // this.props.store.addCheckPoint({data:{
        //     title: 'Eiffel Tower',
        //     description: 'THE tower',
        //     startDate: new Date(2, 2, 2018),
        //     people: ['dani', 'may'],
        //     adress: 'Eiffel Tower',
        //     pictures: ['https://www.toureiffel.paris/themes/custom/tour_eiffel/img/poster-tour-eiffel-jour-nuit.jpg'],
        //     coordinant: null
        // }, id: this.props.store.trip._id})
        // console.log(this.props.store.trip.checkpoints)
        return (
            <Map className="map" style={{ width: '50%', height: '50%' }} initialCenter={this.props.store.trip.checkpoints[0].coordinant} google={this.props.google} zoom={14}>
                <Polygon
                    paths={
                        this.props.store.trip.checkpoints.map(c => {return c.coordinant})
                    }
                    strokeColor="#0000FF" />
                    {/* // strokeOpacity={0.8}
                    // strokeWeight={2} /> */}

                {this.props.store.trip.checkpoints.map(c => {return <Marker name={c.title} position={c.coordinant} />})}
                {/* <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
                <Marker onClick={this.onMarkerClick}
                    position={{ lat: 43.70724, lng: 7.2617893 }}
                    name={'p'} /> */}
            </Map>
        );
    }
}

// export default MapContainer
export default GoogleApiWrapper({
    apiKey: ('AIzaSyA-NDun_On5Bx3TerMVbAaC8jfU7jotv8M'),
    MapContainer: MapContainer
})(MapContainer)