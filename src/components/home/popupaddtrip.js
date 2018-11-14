import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';
import '../../App.css';
 
@inject ("store")
@observer
class Popupaddtrip extends Component {

  render() {
    return (<div className="popup">
    <h1>may</h1>
      </div>
    );
  }
}

export default Popupaddtrip;
