import React, { Component } from 'react';
import Navbar from './navbar';
import Trips from './trips';
import Logo from './logo';
import Popupaddtrip from './popupaddtrip';
import { observer, inject } from 'mobx-react';
import '../../App.css';
import { Link, Redirect } from 'react-router-dom';

@inject("store")
@observer
class Home extends Component {

  componentDidMount = async () => {
    this.props.store.getTrips(this.props.match.params.username)
  }

  logout = () => {
    this.props.store.logout();
  }

  render() {
    return (
      <div>
        <div onClick={this.logout} className='logout'><Link to='/'>LOG OUT</Link></div>
        <Logo />
        <Navbar />
        {this.props.store.showpopupaddtrip ? <Popupaddtrip username={this.props.match.params.username} /> : null}
        <Trips username={this.props.match.params.username} />
        {this.props.store.userId === '' ? <Redirect to='/' /> : null}
      </div>
    );
  }
}

export default Home;