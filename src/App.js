import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Home from './components/home/home';
import './App.css';
import SignUp from './components/users/signUp';
import CurrTrip from './components/singletrip/currTrip';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/users/login'
import Landing from './components/users/landing';

@inject("store")
@observer
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Route path='/' exact render={()=> <Landing />}/>
      <Route path="/users/:username/currTrip/:_id" exact render={({match})=><CurrTrip match={match} /> } />
      <Route path="/users/:username" exact render={({match})=> <Home match={match} /> } />
      <Route path="/signup" exact render={()=> <SignUp /> } />
      <Route path="/login" exact render={()=> <Login /> } />
      </div>
      </Router>
    )
  }
}

export default App;