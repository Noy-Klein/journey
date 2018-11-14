import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';
import {action, observable} from "mobx";
import '../../App.css';
 
@inject ("tripStore")
@observer
class Navbar extends Component {

    @observable searchedtrip= "";
    
    @action inputChange = (e) => {this[e.target.name] = e.target.value}

  render() {
    return (
      <div class="input-group searchinput mb-3">
      <img src="https://www.pngarts.com/files/3/Plus-Symbol-PNG-Image-with-Transparent-Background.png" height="40px" alt="error"/>
      <input name="searchedtrip" onChange={this.inputChange} value={this.searchedtrip} placeholder="Find a trip" type="text" class="form-control" aria-describedby="button-addon2" />
      <div class="input-group-append">
      <button class="btn btn-outline-secondary" type="button" onClick={this.props.tripStore.changeshowpopupaddtrip} id="button-addon2">search</button>
      </div>
      </div>
    );
  }
}

export default Navbar;
