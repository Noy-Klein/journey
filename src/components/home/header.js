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
        <h2 onClick={this.logout}><Link className="logoutlink" to='/'>LOG OUT</Link></h2>
     </div>
    );
  }
}

export default Header;