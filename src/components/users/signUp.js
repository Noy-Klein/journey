import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import '../../App.css'
import { observable, action } from 'mobx';
import { Redirect } from 'react-router-dom';

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
        if(this.password.length < 4){
            alert('Your Password Must Contains More Than 3 Characters')
            return
        }
        if(this.phone.length < 10){
            alert('Your Phone Number Must Contain 10 Characters')
            return
        }
        //validation!
        await this.props.store.AddUser({username:this.username, password:this.password, phone:this.phone, email:this.email})
        let user = await this.props.store.setLogin(this.username, this.password)
        this.props.store.setId(user.data._id)
        this.clicked = true;
        this.props.store.login();
        // console.log(this.props.store.logged)
    }

    render() {
        return (
            <div className="sign-up">
                <h1 className="title-sign-up">Sign Up</h1>
                <input className="form-control inputSignUp1" name="username" placeholder="Username" type="text" onChange={this.inputChangeSignUp} value={this.username} />
                <br></br><br></br>
                <input className="form-control inputSignUp2" name="password" placeholder="Password" type="text" onChange={this.inputChangeSignUp} value={this.password} />
                <br></br><br></br>
                <input className="form-control inputSignUp3" name="phone" placeholder="Phone" type="text" onChange={this.inputChangeSignUp} value={this.phone} />
                <br></br><br></br>
                <input className="form-control inputSignUp4" name="email" placeholder="Email" type="text" onChange={this.inputChangeSignUp} value={this.email} />
                <br></br><br></br>
                <button className="btn btn-outline-secondary signUp" type="button" onClick={this.add}>Sign Up</button>
                {this.clicked && this.props.store.logged ? <Redirect to='/trips'/> : null}
            </div>
        )
    }
}

export default SignUp;