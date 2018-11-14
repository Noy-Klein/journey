import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';
import './App.css';
import AddForm from './components/singletrip/addForm.js'

@observer
class App extends Component {
  render() {
    return (
      <div className="App">
      <AddForm />
      </div>
    );
  }
}

export default App;
