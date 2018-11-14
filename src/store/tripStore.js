import { observable} from "mobx";

class TripStore {
    @observable
    trip = ""
}

const store = new TripStore();
export default store;