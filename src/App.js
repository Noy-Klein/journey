import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Home from './components/home/home';
import './App.css';
import AddForm from './components/singletrip/addForm.js'
import CurrTrip from './components/singletrip/currTrip';

@inject("store")
@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        <CurrTrip />
        <Home />
      </div>
    );
  }
}

export default App;
