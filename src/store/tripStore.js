import { observable, action } from "mobx";
import axios from 'axios';

class TripStore {

    @observable trip = null;
    @observable trips = [];
    @observable showpopupaddtrip = false;

    @action getTrips = async () => {
        let trips = await axios.get('http://localhost:1000/trips')
        this.setTripsValue(trips.data)
    }

    @action setTripsValue = (trips) => {
        this.trips = trips
    }

    @action setTrip = async (id) => {
        await this.getTrips();
        let theTrip = this.trips.find(t => t._id === id)
        this.trip = theTrip
    }

    @action changeshowpopupaddtrip = () => {
        this.showpopupaddtrip = !this.showpopupaddtrip
    }

    Addtrip = async (trip) => {
        let newtrip = await axios.post('http://localhost:1000/trips', { trip })
        this.setTrip(newtrip)
    }

    @action addCheckPoint = async (newCheckPoint) => {

        try {
            let data = await axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + newCheckPoint.data.adress + '&key=AIzaSyA-NDun_On5Bx3TerMVbAaC8jfU7jotv8M')
            let checkpoint = await axios.post('http://localhost:1000/checkpoints', { object: newCheckPoint, coo: data.data.results[0].geometry.location });
            this.trips = checkpoint.data
            console.log(this.trip);
        }
        catch (err) {
            console.error(err)
        }
    }
}

const Store = new TripStore();

export default Store;