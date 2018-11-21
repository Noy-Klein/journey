import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import '../../App.css';
import { Link } from 'react-router-dom';

@inject("store")
@observer
class Header extends Component {

  componentDidMount = () => {
    this.props.store.setTrip(this.props.store.userId).then(() => {
      this.props.store.findnamebyid(this.props.store.userId)
    })
  }

  logout = () => {
    this.props.store.logout();
    this.logged = false;
  }

  render() {
    if (this.props.store.userId) {
      return (
        <div>
          <h2 className='hey'>Hey {this.props.store.username}!</h2>
          <h2 onClick={this.logout}><Link className="logoutlink" to='/'>LOG OUT<img height='21px' width='21px' alt='logout' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Signout_font_awesome.svg/2000px-Signout_font_awesome.svg.png' /></Link></h2>
          <img src="https://mbtskoudsalg.com/images/green-dot-png-5.png" height="10px" className="in" alt="in" />
        </div>
      );
    }
    else {
      return(
      <div>
        <h2 className='hey'>Hey !</h2>
        <h2 onClick={this.logout}><Link className="logoutlink" to='/'>LOG OUT<img height='21px' width='21px' alt='logout' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Signout_font_awesome.svg/2000px-Signout_font_awesome.svg.png' /></Link></h2>
        <img src="https://mbtskoudsalg.com/images/green-dot-png-5.png" height="10px" className="in" alt="in" />
      </div>
      );
    }
  }
}

export default Header;