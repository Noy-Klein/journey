import React, { Component } from 'react';
import Navbar from './navbar';
import Trips from './trips';
import Logo from './logo';
import Popupaddtrip from './popupaddtrip';
import { observer, inject } from 'mobx-react';
import '../../App.css';
import { Link, Redirect } from 'react-router-dom';
import { observable } from 'mobx';

@inject("store")
@observer
class Home extends Component {

  // @observable logged = true;

  componentDidMount = async () => {
    this.props.store.getTrips(this.props.match.params.username)
  }

  logout = () => {
    this.props.store.logout();
    this.logged = false;
  }

  render() {
    console.log(this.props.store.logged)
    return (
      <div>
        <h2 onClick={this.logout} className='hey'>Hey {this.props.store.username},</h2>
        <h2><Link className="logoutlink" to='/'>LOG OUT</Link></h2>
        <Logo />
        <Navbar />
        {this.props.store.showpopupaddtrip ? <Popupaddtrip username={this.props.match.params.username} /> : null}
        <Trips username={this.props.match.params.username} />
        {!this.props.store.logged ? <Redirect to='/' /> : null}
      </div>
    );
  }
}

export default Home;