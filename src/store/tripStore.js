import { observable } from "mobx";
import Axios from 'axios';

class TripStore {
    @observable trip = null

    @action addCheckPoint = async (newCheckPoint) => {
        let data = await Axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + newCheckPoint.adress + '&key=AIzaSyA-NDun_On5Bx3TerMVbAaC8jfU7jotv8M')
        newCheckPoint.coordinants = data.result[0].geometry.location;
        this.trip.checkPoints.push(newCheckPoint)
    }

}

const store = new TripStore();
export default store;