import React, { Component } from 'react';
import axios from 'axios';

export default class Registration extends Component {

    constructor(props) {
        super(props);

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    onChangeUserName(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }
    
    onChangeConfirmPassword(e) {
        this.setState({
            confirmPassword: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const userData = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        };
        
        axios.post('http://localhost:4000/users/add/', userData)
        .then(res => console.log(res.data));
        
        this.setState({
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
    }

    render() {
        return (
            <div className="form-container">
                <h3>Create your account</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Username: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.username}
                                onChange={this.onChangeUserName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                                />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input 
                                type="password" 
                                className="form-control"
                                value={this.state.password}
                                onChange={this.onChangePassword}
                                />
                    </div>
                    <div className="form-group">
                        <label>Re-enter password: </label>
                        <input 
                                type="password" 
                                className="form-control"
                                value={this.state.confirmPassword}
                                onChange={this.onChangeConfirmPassword}
                                />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
