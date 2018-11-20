import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import '../../App.css'
import { observable, action } from 'mobx';
import { Redirect } from 'react-router-dom';
import BigLogo from './Biglogo';

@inject("store")
@observer
class SignUp extends Component {
    @observable username = "";
    @observable password = "";
    @observable phone = "";
    @observable email = "";

    @observable clicked = false

    @action inputChangeSignUp = (e) => { this[e.target.name] = e.target.value }

    add = async () => {
        if ((this.username==="")||(this.password==="")||(this.phone==="")){
            alert ("Please fill out all the fields!")
        }
        if ((this.email==="")||!(this.email.includes("@"))||!(this.email.includes(".com"))){
            alert ("Please fill the Email correctly!")
        }
        else{
            let upperusername=this.username.charAt(0).toUpperCase() + this.username.slice(1)
            await this.props.store.AddUser({username:upperusername, password:this.password, phone:this.phone, email:this.email})
            let user = this.props.store.user
            this.props.store.setId(user._id)
            console.log(user)
            // this.props.store.getTripsInLogin(user._id)
            // this.props.store.setUser(user)
            // this.props.store.setId(user._id)
            // this.props.store.login();
            this.clicked = true;
        }
    }

    render() {
        return (<div>
            <BigLogo />
            <div className="sign-up">
                <h1 className="title-sign-up">Sign Up</h1>
                <input className="form-control inputSignUp1" name="username" placeholder="Username" type="text" onChange={this.inputChangeSignUp} value={this.username} />
                <br></br><br></br>
                <input className="form-control inputSignUp2" name="password" placeholder="Password" type="password" onChange={this.inputChangeSignUp} value={this.password} />
                <br></br><br></br>
                <input className="form-control inputSignUp3" name="phone" placeholder="Phone" type="text" onChange={this.inputChangeSignUp} value={this.phone} />
                <br></br><br></br>
                <input className="form-control inputSignUp4" name="email" placeholder="Email" type="text" onChange={this.inputChangeSignUp} value={this.email} />
                <br></br><br></br>
                <button className="btn btn-outline-secondary signUp" type="button" onClick={this.add}>Sign Up</button>
                <Link to='/'><button type="button" className="btn btn-outline-secondary homesignupbtn">HOME</button></Link>
                {this.clicked && this.props.store.logged ? <Redirect to='/trips'/> : null}
            </div>
            </div>
        )
    }
}

export default SignUp;