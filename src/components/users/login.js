import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import '../../App.css'
import { observable, action } from 'mobx';
import { Redirect } from 'react-router-dom';

@inject("store")
@observer
class Login extends Component {
    @observable username = "";
    @observable password = "";

    @observable ifexists = false
    @observable clicked = false

    click = async () => {
        let user = await this.props.store.setLogin(this.username, this.password)
        if (user.data.username) {
            this.ifexists = true
            this.props.store.getTripsInLogin(user.data._id)
            this.props.store.setId(user.data._id)
        }
        else {
            this.ifexists = false
            alert('username or passward wrong')
        }
        this.clicked = true
    }
    // welcome back alert...

    @action inputChangeLogin = (e) => { this[e.target.name] = e.target.value }

    render() {
        return (
            <div className="login">
                <h1 className="title-login">Login</h1>
                <input className="form-control inputLogin1" name="username" placeholder="Username" type="text" onChange={this.inputChangeLogin} value={this.username} />
                <br></br><br></br>
                <input className="form-control inputLogin2" name="password" placeholder="Password" type="password" onChange={this.inputChangeLogin} value={this.password} />
                <br></br><br></br>
                <button className="btn btn-outline-secondary signUp" type='button' onClick={this.click}>LOGIN</button>
                {this.clicked && this.ifexists ? <Redirect to='/trips'/> : null}
            </div>
        )
    }
}

export default Login;