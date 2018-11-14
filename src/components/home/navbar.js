import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';
import {action, observable} from "mobx";
import '../../App.css';
 
@inject ("store")
@observer
class Navbar extends Component {

    @observable searchedtrip= "";
    @observable text = "";
    
    @action inputChange = (e) => {this[e.target.name] = e.target.value}

    @action changeshowpopup = () => {
      this.props.store.changeshowpopupaddtrip();
    }
    

  render() {
    return (
      <div className="input-group searchinput mb-3">
      <img src="https://www.pngarts.com/files/3/Plus-Symbol-PNG-Image-with-Transparent-Background.png" height="40px" alt="error" onClick={this.changeshowpopup} value="button"/>
      <input name="searchedtrip" onChange={this.inputChange} value={this.searchedtrip} placeholder="Find a trip" type="text" className="form-control" aria-describedby="button-addon2" />
      <div className="input-group-append">
      <button className="btn btn-outline-secondary" onClick={this.searchtrip} type="button" id="button-addon2">search</button>
      </div>
      </div>
    );
  }
}

export default Navbar;
