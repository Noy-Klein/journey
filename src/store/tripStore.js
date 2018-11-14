import { observable, action } from "mobx";

class tripStore {

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

const store = new tripStore();
export default store;