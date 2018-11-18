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
    this.props.store.getTrips(this.props.match.params.username)
}

  render() {
    console.log()
    return (<div>
      <Logo />
      <Navbar />
      {this.props.store.showpopupaddtrip ? <Popupaddtrip username={this.props.match.params.username} /> : null}
      <Trips username={this.props.match.params.username} />
      </div>
    );
  }
}

export default Home;