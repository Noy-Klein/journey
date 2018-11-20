import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import '../../App.css';
import { Link } from 'react-router-dom';

@inject("store")
@observer
class Header extends Component {

  logout = () => {
    this.props.store.logout();
    this.logged = false;
  }

  render() {
    return (
      <div>
        <h2 className='hey'>Hey {this.props.store.username}!</h2>
        <h2 onClick={this.logout}><Link className="logoutlink" to='/'>LOG OUT<img height='21px' width='21px' alt='logout' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Signout_font_awesome.svg/2000px-Signout_font_awesome.svg.png'/></Link></h2>
     </div>
    );
  }
}

export default Header;