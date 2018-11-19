import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

class Logo extends Component {
  render() {
    return (<div className="logo">
        <Link to="/trips"><img src="https://www.freeiconspng.com/uploads/travel-guide-icon-map-ticket-travel-icon-17.png"  height="120px" alt="error" /></Link>
        <h1>MY JOURNEY</h1>
        <h2>Every journey starts here...</h2>
      </div>
    );
  }
}

export default Logo;