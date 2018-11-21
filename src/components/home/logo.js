import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import { observer, inject } from 'mobx-react';

@inject("store")
@observer
class Logo extends Component {

  findname = () => {
    if (this.props.store.userId) {
      this.props.store.findnamebyid(this.props.store.userId)
      return <h1>{this.props.store.username}'s  JOURNEYS</h1>
    }
    else {
      return <h1>MY JOURNEYS</h1>
    }
  }
  render() {
    return (<div className="logo">
      <Link to="/trips"><img src="https://www.thebyte.com.au/wp-content/uploads/2016/09/global.png" height="120px" alt="error" /></Link>
      {this.findname()}
      <h2>Every journey starts here...</h2>
    </div>
    );
  }
}
export default Logo;