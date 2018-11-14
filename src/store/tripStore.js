import { observable, action } from "mobx";

class TripStore {
@observable trip = null
  @observable showpopupaddtrip = false;

  @action changeshowpopupaddtrip = () => {
    if (this.showpopupaddtrip){
    this.showpopupaddtrip = false;
    }
    else {
    this.showpopupaddtrip = true;
    }
  }
}

const store = new TripStore();

export default store;