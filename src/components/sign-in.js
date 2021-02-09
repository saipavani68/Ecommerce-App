import React, { Component } from 'react';
import axios from 'axios';
import './form.css';

export default class SignIn extends Component {

    constructor(props) {
        super(props);

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onClickRegister = this.onClickRegister.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            password: ''
        }
    }

    onChangeUserName(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }
    
    onClickRegister(e) {
        e.preventDefault();
        console.log("inside click on register");
        this.props.history.push('/register');
    }

    onSubmit(e) {
        e.preventDefault();
        console.log('on click submit');
        const userData = {
            username: this.state.username,
            password: this.state.password
        };
        
        axios.post('http://localhost:4000/users/signIn/', userData)
        .then(res => console.log(res.data));
        
        this.setState({
            username: '',
            password: ''
        })
    }

    render() {
        return (
            <div className="form-container">
                <h3>Sign-In</h3>
                <form onSubmit={ this.onSubmit }>
                    <div className="form-group"> 
                        <label>Username: </label>
                        <input  type="text"
                                className="form-control"
                                value={ this.state.username }
                                onChange={ this.onChangeUserName }
                                />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input 
                                type="password" 
                                className="form-control"
                                value={ this.state.password }
                                onChange={ this.onChangePassword }
                                />
                    </div>
                    <div className="form-controls">
                        <div className="form-group">
                            <input type="submit" value="Sign-In" className="btn btn-primary" />
                        </div>
                        <div className="form-group">
                            <input type="button" value="Register" className="btn btn-primary" onClick={ this.onClickRegister }/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
