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
        {/* <span className="tooltips"> */}
        <img alt='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Noun_project_-_plus_round.svg/2000px-Noun_project_-_plus_round.svg.png" className="plusbtn" id="plus" onClick={this.changeshowpopup} />
        {/* <span>Add a new trip</span> */}
        {/* </span> */}
        <input name="searchedtrip" onChange={this.inputChange} value={this.searchedtrip} placeholder="Find a trip" type="text" className="form-control searchinput" aria-describedby="button-addon2" />
        <button className="btn btn-outline-secondary searchbutton" onClick={this.search} type="button" id="button-addon2">search</button>
      </div>
    );
  }
}

export default Navbar;
