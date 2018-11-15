import React, { Component } from 'react';
import Navbar from './navbar';
import Trips from './trips';
import Logo from './logo';
import Popupaddtrip from './popupaddtrip';
import {observer, inject} from 'mobx-react';
import '../../App.css';

@inject ("store")
@observer
class Home extends Component {

  componentDidMount = async () => {
    this.props.store.getTrips()
}

  render() {
    return (<div>
      <Logo />
      <div><Navbar /></div>
      {this.props.store.showpopupaddtrip ? <Popupaddtrip /> : null}
      <div><Trips /></div>
      </div>
    );
  }
}

export default Home;