import { observable, action } from "mobx";
import axios from 'axios';

class TripStore {

    @observable trip = null;
    @observable trips = [];
    @observable tripstosearch = [];
    @observable showpopupaddtrip = false;
    @observable marker = {}
    @observable currCheckpoint = null
    @observable ifexists = false
    @observable initialCenter = null

    @action setMarker = (marker) => {
        this.marker = marker
    }

    @action getTrips = async (username) => {
        let trips = await axios.get('http://localhost:1000/' + username + '/trips')
        this.setTripsValue(trips.data.trips)
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

    @action setSignUp = async (username) => {
        let trips = await axios.get('http://localhost:1000/' + username)
        this.trips= trips.data
    }

    @action setLogin = async (username, password) => {
        let trips = await axios.get('http://localhost:1000/' + username + '/' + password)
        // this.trips = trips.data
        if(trips.data.username){
            this.ifexists = true
        }
    }

    AddUser = async (newUser) => {
        let newuser = await axios.post('http://localhost:1000/users', newUser)
        // this.trips = []
        console.log(newuser.data.username)
        this.setSignUp(newuser.data.username)
    }
    

    Addtrip = async (title, description, startDate, endDate, imageurl, username) => {
        await axios.post('http://localhost:1000/' + username + '/trips', {title:title, description:description, startDate:startDate, endDate:endDate, imageurl:imageurl })
        // console.log(newtrip)
        // this.trips.push(newtrip.data);
        this.getTrips(username)
    }

    @action addCheckPoint = async (newCheckPoint) => {
        try {
            let data = await axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + newCheckPoint.data.adress + '&key=AIzaSyA-NDun_On5Bx3TerMVbAaC8jfU7jotv8M')
            let checkpoint = await axios.post('http://localhost:1000/checkpoints', { object: newCheckPoint, coo: data.data.results[0].geometry.location });
            let updatedTrip = await axios.get('http://localhost:1000/trips/' + newCheckPoint.id)
            console.log(updatedTrip.data)
            this.trip = updatedTrip.data 
            // this.trip.push(checkpoint.data)
            // this.setTrip(updatedTrip.data._id)
            // console.log(this.trip);
        }
        catch (err) {
            console.error(err)
        }
    }

    @action addInitialCenter = async (adress) => {
        let data = await axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + adress + '&key=AIzaSyA-NDun_On5Bx3TerMVbAaC8jfU7jotv8M')
        this.initialCenter = data.data.results[0].geometry.location
    }

    @action searchtrip = (searchword) => {
        if (this.searchword !== "") {
            let filterdarr = this.trips.filter((trip) => {
                return trip.title.toString().toLowerCase().includes(searchword.toLowerCase())
            })
            this.tripstosearch = filterdarr
        }
    }
}

const Store = new TripStore();

export default Store;