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
      <div>
      <img src="https://www.pngarts.com/files/3/Plus-Symbol-PNG-Image-with-Transparent-Background.png" id="plus" onClick={this.changeshowpopup}/>
      <input name="searchedtrip" onChange={this.inputChange} value={this.searchedtrip} placeholder="Find a trip" type="text" className="form-control searchinput" aria-describedby="button-addon2" />
      <button className="btn btn-outline-secondary searchbutton" onClick={this.searchtrip} type="button" id="button-addon2">search</button>
      </div>
    );
  }
}

export default Navbar;
