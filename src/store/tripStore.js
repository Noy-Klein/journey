import { observable, action } from "mobx";
import axios from 'axios';

class TripStore {

    @observable trip = null;
    @observable trips = [this.getTrips()]
    @observable showpopupaddtrip = false;

    @action getCheckPoint = async () => {
        let trips = await axios.get('http://localhost:1000/trips')
        this.setCheckPoint(trips.data)
    }

    @action setCheckPoint = (trips) => {
        this.trips = trips;
    }

    @action changeshowpopupaddtrip = () => {
        if (this.showpopupaddtrip) {
            this.showpopupaddtrip = false;
        }
        else {
            this.showpopupaddtrip = true;
        }
    }

    addNewCheckpoint = async (title, description, startDate, people, adress, pictures) => {
        let trip = await axios.post('http://localhost:1000/trips', {
            title: title,
            description: description,
            startDate: startDate,
            people: people,
            adress: adress,
            pictures: pictures
        })
        this.setCheckPoint(trip)
    }

    @action addCheckPoint = async (newCheckPoint) =>{
        let data = await axios.post('https://maps.googleapis.com/maps/api/geocode/json?address=' + newCheckPoint.adress + '&key=AIzaSyA-NDun_On5Bx3TerMVbAaC8jfU7jotv8M')
        let checkpoint = await axios.post('http://localhost:1000/checkpoints', newCheckPoint);
        checkpoint.data.coordinant = data.results[0].geometry.location; //returns a bigger object whith key data?
        this.trip.checkpoints.push(checkpoint._id)
    }
}

const Store = new TripStore();

export default Store;