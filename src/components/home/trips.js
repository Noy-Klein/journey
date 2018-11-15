import React, { Component } from 'react';
import TripBox from './tripBox';
import '../../App.css';
import { inject, observer } from 'mobx-react';

@inject("store")
@observer
class Trips extends Component {

  render() {
    // console.log(this.props.store.trips)
    return (
      <div>
        {this.props.store.tripstosearch.map(t => {
          return <TripBox key={t._id} trip={t} />
        })}
      </div>
    );
  }
}

export default Trips;