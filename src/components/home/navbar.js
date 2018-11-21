import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { action, observable } from "mobx";
import '../../App.css';

@inject("store")
@observer
class Navbar extends Component {

  @observable searchedtrip = "";

  @action inputChange = (e) => { this[e.target.name] = e.target.value }

  @action changeshowpopup = () => {
    this.props.store.changeshowpopupaddtrip();
  }

  @action search = () => {
    this.props.store.searchtrip(this.searchedtrip);
  }

  render() {
    return (
      <div>
      <img alt='plus' src="https://png.pngtree.com/svg/20150820/_plus_circle_icon_1099005.png" className="plusbtn" id="plus" onClick={this.changeshowpopup} />
      <input name="searchedtrip" onChange={this.inputChange} value={this.searchedtrip} placeholder="Find a trip" type="text" className="form-control searchinput" aria-describedby="button-addon2" />
      <button className="btn btn-outline-secondary searchbutton" onClick={this.search} type="button" id="button-addon2">search</button>
    </div>

    );
  }
}

export default Navbar;
