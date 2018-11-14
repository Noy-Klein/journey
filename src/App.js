import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Home from './components/home/home';
import './App.css';
import CurrTrip from './components/singletrip/currTrip';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

@inject("store")
@observer
class App extends Component {
  render() {
    return (<div>
      <Router>
        <div className="App">
          <Home />
          <CurrTrip />
          {/* <AddForm /> */}
          {/* Main Links */}
          <li><Link to="/currTrip">CurrTrip</Link></li>
          <li><Link to="/">Home</Link></li>
          {/* Routes go here v */}
          <Route path="/" exact component={Home} />
          <Route path="/currTrip/:_id" exact component={CurrTrip} />
        </div>
      </Router>
    </div>
    );
  }
}

export default App;
