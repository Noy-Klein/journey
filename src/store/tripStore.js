import { observable, action } from "mobx";
import axios from 'axios';

class TripStore {

    @observable trip = null;
    @observable trips = [];
    @observable tripstosearch = [];
    @observable showpopupaddtrip = false;
    @observable marker = {}
    @observable currCheckpoint = null

    @action setMarker = (marker) => {
        this.marker = marker
    }

    @action getTrips = async () => {
        let trips = await axios.get('http://localhost:1000/trips')
        this.setTripsValue(trips.data)
        this.tripstosearch = [...this.trips];
    }

    @action setTripsValue = (trips) => {
        this.trips = trips
    }

    @action setCheckPoint = async (id) => {
        let checkpoint = await axios.get('http://localhost:1000/checkpoints/' + id)
        this.currCheckpoint = checkpoint.data
    }


    @action setTrip = async (id) => {
        let data = await axios.get('http://localhost:1000/trips/' +id);
        this.trip = data.data
    }

    @action changeshowpopupaddtrip = () => {
        this.showpopupaddtrip = !this.showpopupaddtrip
    }


    addNewCheckpoint = async (title, description, startDate, people, adress, pictures) => { //useless
        let trip = await axios.post('http://localhost:1000/checkpoints', {
            title: title,
            description: description,
            startDate: startDate,
            people: people,
            adress: adress,
            pictures: pictures
        })
        this.trip = trip.data;
    }
    
    Addtrip = async (title, description, startDate, endDate) => {
        let newtrip = await axios.post('http://localhost:1000/trips', {title:title, description:description, startDate:startDate, endDate:endDate })
       this.trip = newtrip;
    }

    @action addCheckPoint = async (newCheckPoint) => {

        try {
            let data = await axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + newCheckPoint.data.adress + '&key=AIzaSyA-NDun_On5Bx3TerMVbAaC8jfU7jotv8M')
            let checkpoint = await axios.post('http://localhost:1000/checkpoints', { object: newCheckPoint, coo: data.data.results[0].geometry.location });
            let updatedTrip = await axios.get('http://localhost:1000/trips/' + newCheckPoint.id)
            this.trip = updatedTrip.data 
            console.log(this.trip);
        }
        catch (err) {
            console.error(err)
        }
    }

    @action searchtrip = (searchword) => {
        if (this.searchword != "") {
            let filterdarr = this.trips.filter((trip) => {
                return trip.title.toString().toLowerCase().includes(searchword.toLowerCase())
            })
            this.tripstosearch = filterdarr
        }
    }
}


const Store = new TripStore();

export default Store;