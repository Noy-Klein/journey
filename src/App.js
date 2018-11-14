import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Home from './components/home/home';
import './App.css';
import CurrTrip from './components/singletrip/currTrip';
import { BrowserRouter as Router, Route } from 'react-router-dom';

@inject("store")
@observer
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Route path="/currTrip/:_id" exact render={({match})=><CurrTrip match={match} /> } />
      <Route path="/" exact render={()=> <Home /> } />
      </div>
      </Router>
    )
  }
}

export default App;
