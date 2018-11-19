import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import '../../App.css'
import { observable, action } from 'mobx';
import { Redirect } from 'react-router-dom';
import BigLogo from './Biglogo';

@inject("store")
@observer
class Login extends Component {
    @observable username = "";
    @observable password = "";
    @observable ifexists = false
    @observable clicked = false

    click = async () => {
        if ((this.username==="")||(this.password==="")){
            alert ("Please fill out all the fields!")
        }
        else{
            let user = await this.props.store.setLogin(this.username, this.password)
        if (user.data.username) {
            this.ifexists = true
            this.props.store.getTripsInLogin(user.data._id)
            this.props.store.setId(user.data._id)
            this.props.store.login();
            alert('Welcome Back ' + user.data.username + ' !')
        }
        else {
            this.ifexists = false
            alert('Your username or passward incorrect!')
        }
        this.clicked = true
        }
    }
    // welcome back alert...

    @action inputChangeLogin = (e) => { this[e.target.name] = e.target.value }

    render() {
        return (
            <div>
            <BigLogo />
            <div className="login">
                <h1 className="title-sign-up">Login</h1>
                <input className="form-control inputLogin1" name="username" placeholder="Username" type="text" onChange={this.inputChangeLogin} value={this.username} />
                <br></br><br></br>
                <input className="form-control inputLogin2" name="password" placeholder="Password" type="password" onChange={this.inputChangeLogin} value={this.password} />
                <br></br><br></br>
                <button className="btn btn-outline-secondary signUp" type='button' onClick={this.click}>LOGIN</button>
                <Link to='/'><button type="button" className="btn btn-outline-secondary homebtn">HOME</button></Link>
                {this.clicked && this.ifexists ? <Redirect to='/trips'/> : null}
            </div>
            </div>
        )
    }
}

export default Login;