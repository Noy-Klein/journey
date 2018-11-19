import React, { Component } from 'react';
import '../../App.css';

class BigLogo extends Component {
  render() {
    return (<div className="biglogo">
        <img src="https://www.thebyte.com.au/wp-content/uploads/2016/09/global.png" height="330px" alt="error" />
        <br/>
        <br/>
        <h1 className="hometitle">MY JOURNEY</h1>
        <h2 className="homesectitle">Every journey starts here...</h2>
        </div>
    );
  }
}

export default BigLogo;