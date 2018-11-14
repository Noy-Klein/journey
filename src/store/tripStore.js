import { observable, action } from "mobx";

class TripStore {
    @observable trip = null;
    @observable showpopupaddtrip = false;

    getTrip = async () => {
        let trip = await axios.get('http://localhost:1000/trip/')
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
        let trip = await axios.post('http://localhost:1000/trip', {
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
}

const store = new TripStore();

export default store;


// @action addCheckPoint = async (newCheckPoint) => {
//         let data = await Axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + newCheckPoint.adress + '&key=AIzaSyA-NDun_On5Bx3TerMVbAaC8jfU7jotv8M')
//         newCheckPoint.coordinants = data.result[0].geometry.location;
//         this.trip.checkPoints.push(newCheckPoint)
//     }