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
    @observable userId = localStorage.getItem('userId')
    @observable username = null;
    @observable tripId = localStorage.getItem('tripId')
    @observable logged = true;
    @observable img = ''
    @observable allCheckpoint = null;
    @observable currentCP = null;
    @observable user = null;
    @observable usernameexist = "";
    @observable back = '';

    @action goBack = () => {
        this.back = '!'
    }

    @action Wentback = () => {
        this.back = '';
    }

    @action setUser = (user) => {
        this.user = user;
    }

    @action setUserById = async (id) => {
        let name = await axios.get('/users/' + id)
        this.user = name.data
    }

    @action changeCurrCP = (cp) => {
        this.currentCP = cp;
    }

    @action setId = (id) => {
        localStorage.setItem('userId', id)
    }

    @action login = () => {
        this.logged = true
    }

    @action logout = () => {
        this.userId = '';
        localStorage.setItem('userId', '');
        this.trips = [];
        this.trip = null;
        this.tripstosearch = [];
        this.logged = false
    }

    @action setTripId = (id) => {
        localStorage.setItem('tripId', id)
    }

    @action setMarker = (marker) => {
        this.marker = marker
    }

    @action getTripsInLogin = async (id) => {
        let trips = await axios.get('/' + id + '/trips')
        this.setTripsValue(trips.data.trips)
        console.log(this.trips)
        this.tripstosearch = [...this.trips];
        this.logged = true
    }

    @action checkusernameexist = async (username) => {
        let check = await axios.get('/findusers/' + username)
        // console.log(check)
        if (check.data==="doesntexist"){
            this.usernameexist=false;
        }
        else{
            this.usernameexist=true;
        }
    }

    @action getTrips = async () => {
        // if (id === '') {
        let trips = await axios.get('/' + this.userId + '/trips')
        this.setTripsValue(trips.data.trips)
        this.tripstosearch = [...this.trips];
        // }
        // else {
        //     let trips = await axios.get('http://localhost:1000/' + id + '/trips')
        //     this.setTripsValue(trips.data.trips)
        //     this.tripstosearch = [...this.trips];
        // }
    }

    @action setTripsValue = (trips) => {
        this.trips = trips
    }

    @action checkIf = async (username) => {
        let ifE = await axios.get('/users/' + username);
        this.ifExist = ifE.data
    }

    @action setCheckPoint = async (id) => {
        let checkpoint = await axios.get('/checkpoints/' + id)
        this.currCheckpoint = checkpoint.data
        this.allCheckpoint = checkpoint.data
    } //???? why doesnt it get an id in showcheckpoint????

    @action findnamebyid = async (id) => {
        let name = await axios.get('/users/' + id)
        this.username = name.data.username
    }

    @action setTrip = async (id) => {
        let data = await axios.get('/tripsAPI/' + id);
        this.trip = data.data
    }

    @action changeshowpopupaddtrip = () => {
        this.showpopupaddtrip = !this.showpopupaddtrip
    }

    @action setLogin = async (username, password) => {
        let trips = await axios.get('/users/' + username + '/' + password)
        return trips
    }

    @action sendmail = async (from, to, Emailadress, body) => {
        await axios.post('/sendmail', { from: from, to: to, Emailadress: Emailadress, body: body })
    }

    AddUser = async (newUser) => {
        let New = await axios.post('/users', newUser)
        this.user = New.data
        this.username = New.data.user
    }

    Addtrip = async (title, description, startDate, endDate, imageurl) => {
        let images = await axios.get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyA-NDun_On5Bx3TerMVbAaC8jfU7jotv8M&cx=014991769965957097369:idopkmpkkbo&q=${title.split(' ')[0] + ' place'}&?searchType=Image&defaultToImageSearch=true&safe=active`)
        // console.log(images.data.items[0].pagemap.imageobject[0].thumbnailurl)
        let trip = await axios.post('/' + this.userId + '/trips', { title: title, description: description, startDate: startDate, endDate: endDate, imageurl: imageurl })
        this.trip = trip.data
        this.tripstosearch.push(trip.data)
        this.trips.push(trip.data)
        this.getTrips()
    }

    @action addCheckPoint = async (newCheckPoint) => {
        try {
            let data = await axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + newCheckPoint.data.adress + '&key=AIzaSyA-NDun_On5Bx3TerMVbAaC8jfU7jotv8M')
            let images = await axios.get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyA-NDun_On5Bx3TerMVbAaC8jfU7jotv8M&cx=014991769965957097369:idopkmpkkbo&q=${newCheckPoint.data.adress}&?searchType=Image&defaultToImageSearch=true&safe=active`)
            if (newCheckPoint.data.pictures.length) {
                let newcp = await axios.post('/checkpoints', { object: newCheckPoint, coo: data.data.results[0].geometry.location, images: newCheckPoint.data.pictures });
            }
            else {
                let newcp = await axios.post('/checkpoints', { object: newCheckPoint, coo: data.data.results[0].geometry.location, images: images.data.items[0].pagemap.imageobject[0].thumbnailurl });

            }
            let updatedTrip = await axios.get('/tripsAPI/' + this.trip._id)
            this.trip = updatedTrip.data
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

    getIcon = async (searchIconName) => {
        // let json = await axios.get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyA-NDun_On5Bx3TerMVbAaC8jfU7jotv8M&cx=014991769965957097369:idopkmpkkbo&q=${searchIconName}&?searchType=Image&defaultToImageSearch=true&safe=active`)
        // this.img = json.data.items[0].pagemap.imageobject[0].thumbnailurl;
        // console.log(this.img)
        let json = await axios.get("https://api.icons8.com/api/iconsets/search?term=romania")
        console.log(json)
    }
}

const Store = new TripStore();

export default Store;