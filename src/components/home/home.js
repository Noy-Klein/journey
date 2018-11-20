import React, { Component } from 'react';
import Navbar from './navbar';
import Trips from './trips';
import Logo from './logo';
import Popupaddtrip from './popupaddtrip';
import { observer, inject } from 'mobx-react';
import '../../App.css';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';


@inject("store")
@observer
class Home extends Component {

  componentDidMount = async () => {
    // this.props.store.getTrips()
    this.props.store.Wentback()
    // console.log(this.props.store.back)
    // this.props.store.getIcon()
    this.props.store.setTrip(this.props.store.userId).then(()=>{
      this.props.store.findnamebyid(this.props.store.userId)
      this.props.store.getTrips()
      // this.props.store.setUserById(this.props.store.userId)
      // this.props.store.findnamebyid(this.props.store.user._id)
    })
    // if(!this.userId && this.user){
      // this.props.store.findnamebyid(this.props.store.user._Id)
    // }
    // else{
    //   this.props.store.findnamebyid(this.props.store.userId)
    // }
  }

  // icon = async () => {
  //   let json = await axios.get("https://api.icons8.com/api/iconsets/search?term=romania")
  //   console.log(json)
  // }

  logout = () => {
    this.props.store.logout();
    this.logged = false;
  }

  render() {
    // this.icon()
    // let json = await axios.get("https://api.icons8.com/api/iconsets/search?term=romania")
        // console.log(json)
    return (
      <div>
        <h2 className='hey'>Hey {this.props.store.username}!</h2>
        <h2 onClick={this.logout}><Link className="logoutlink" to='/'>LOG OUT</Link></h2>
        <Logo />
        <Navbar />
        {this.props.store.showpopupaddtrip ? <Popupaddtrip /> : null}
        <Trips />
        {!this.props.store.logged ? <Redirect to='/' /> : null}
      </div>
    );
  }
}

export default Home;