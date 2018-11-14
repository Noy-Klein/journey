import React, { Component } from 'react';
import {observer} from 'mobx-react';
import Home from './components/home/home';
import './App.css';
import AddForm from './components/singletrip/addForm.js'

@observer
class App extends Component {
  render() {
    return (
      <div className="App">
      <AddForm />
      <Home />
      </div>
    );
  }
}

export default App;
