import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import '../../App.css';

@inject("store")
@observer
class TimeLine extends Component {
render(){
    return(
        <div className="timeline">
        </div>
    )
}
}

export default TimeLine;