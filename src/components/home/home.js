import React, { Component } from 'react';
import Navbar from './navbar';
import Trips from './trips';
import Logo from './logo';
import Popupaddtrip from './popupaddtrip';
import {inject} from 'mobx-react';
import '../../App.css';

@inject ("store")
class Home extends Component {
  render() {
    return (<div>
      <Logo />
      <Navbar />
      <Trips />
      {this.props.store.showpopupaddtrip ? <Popupaddtrip /> : null}
      </div>
    );
  }
}

export default Home;