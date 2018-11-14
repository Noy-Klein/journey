import { observable, action } from "mobx";
import axios from 'axios';

class TripStore {
    @observable trip = null;
    @observable showpopupaddtrip = false;

    getTrip = async () => {
        let trip = await axios.get('http://localhost:1000/trips')
        this.setTrip(trip.data)
    }

    @action setTrip = (trip) => {
        this.trip = trip;
    }

    @action changeshowpopupaddtrip = () => {
        if (this.showpopupaddtrip) {
            this.showpopupaddtrip = false;
        }
        else {
            this.showpopupaddtrip = true;
        }
    }

    addTrip = async (title, description, startDate, endDate, people, adress, pictures) => {
        let trip = await axios.post('http://localhost:1000/trips', {
            title: title,
            description: description,
            startDate: startDate,
            endDate: endDate,
            people: people,
            adress: adress,
            pictures: pictures
        })
        this.setTrip(trip)
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