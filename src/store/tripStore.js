import { observable, action} from "mobx";

class TripStore {
    @observable
    trip = null;
}

getTrip = async () =>{
    let trip = await axios.get('http://localhost:1000/trip/')
    this.setTrip(trip.data)
}

@action setTrip = (trip) => {
    this.trip = trip;
}

addTrip = async (title, description, startDate,endDate, people, adress, pictures) => {
    let trip = await axios.post('http://localhost:1000/trip',{
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

const store = new TripStore();
export default store;