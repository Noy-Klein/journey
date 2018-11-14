import { observable, action } from "mobx";
import axios from 'axios';

class TripStore {

    @observable trip = null;
    @observable trips = [this.getTrips()]
    @observable showpopupaddtrip = false;

    @action getTrips = async () => {
        let trips = await axios.get('http://localhost:1000/trips')
        this.setTripsValue(trips.data)
    }

    @action setTripsValue = (trips) => {
        this.trips = trips
    }

    @action setTrip = async (id) => {
        // let tripsDemo = await axios.get('http://localhost:1000/trips')
        await this.getTrips();
        // tripsDemo = tripsDemo.data
        let theTrip = this.trips.find(t => t._id === id)
        this.trip = theTrip
    }

    @action changeshowpopupaddtrip = () => {
        this.showpopupaddtrip= !this.showpopupaddtrip
    }


    addNewCheckpoint = async (title, description, startDate, people, adress, pictures) => {
        let trip = await axios.post('http://localhost:1000/checkpoints', {
            title: title,
            description: description,
            startDate: startDate,
            people: people,
            adress: adress,
            pictures: pictures
        })
        //this.setCheckPoint(trip)
    }
    Addtrip = async (title, description, startDate, endDate) => {
        let newtrip = await axios.post('http://localhost:1000/trips', {title:title, description:description, startDate:startDate, endDate:endDate })
        this.setTrip(newtrip)
    }

    @action addCheckPoint = async (newCheckPoint) =>{ //send the trips id
        let data = await axios.post('https://maps.googleapis.com/maps/api/geocode/json?address=' + newCheckPoint.adress + '&key=AIzaSyA-NDun_On5Bx3TerMVbAaC8jfU7jotv8M')
        let checkpoint = await axios.post('http://localhost:1000/checkpoints', newCheckPoint);
        // console.log(data.data.results[0].geometry.location)
        // console.log(checkpoint.data.checkpoint)
        checkpoint.data.coordinant = data.data.results[0].geometry.location; //returns a bigger object whith key data?
        this.trip.checkpoints.push(checkpoint.data._id)
        // console.log(this.trip)
        // let coorCP = await axios.get('http://localhost:1000/checkpoints');
        // let cp = coorCP.data.find(c => c._id === checkpoint.data._id);
        // console.log(cp.coordinant)
    }
}

const Store = new TripStore();

export default Store;