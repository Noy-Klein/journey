import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import '../../App.css'
import { observable, action } from 'mobx';
import { Link } from 'react-router-dom';

@inject("store")
@observer
class Login extends Component {
    @observable username = "";
    @observable password = "";

    click = async () => {
        let j = await this.props.store.setLogin(this.username, this.password)
        if(this.props.store.ifexists){
            return
        }
        else{
            alert('username or passward wrong')
        }
    } 
    //figure out how to stop a react link


    @action inputChangeLogin = (e) => { this[e.target.name] = e.target.value }

    render() {
        return (
            <div className="login">
                <h1 className="title-login">Login</h1>
                <input className="form-control inputLogin1" name="username" placeholder="Username" type="text" onChange={this.inputChangeLogin} value={this.username} />
                <br></br><br></br>
                <input className="form-control inputLogin2" name="password" placeholder="Password" type="password" onChange={this.inputChangeLogin} value={this.password} />
                <br></br><br></br>
                <Link className="btn btn-outline-secondary signUp" onClick={this.click} to={`/users/${this.username}`}>LOGIN</Link>
            </div>
        )
    }
}

export default Login;