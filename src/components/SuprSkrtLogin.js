import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { userLoggedIn } from '../Redux/reducer';
import { withRouter } from 'react-router-dom';

class SuprSkrtLogin extends Component {

    state = {
        email: '',
        password: '',
        errorMessage: '',
    }

    handleChange = e => {
        let { name, value } = e.target;
        this.setState({
            [name]: value,
        })
    }

    handleKeyPress = e => {
        if (e.key == 'Enter') {
            this.loginUser();
        }
    }

    loginUser = () => {
        axios.post('/auth/login', this.state).then(response => {
            this.props.userLoggedIn(response.data);
            this.props.history.push('/');
        }).catch( error => {
            console.log(error);
            this.setState({
                errorMessage: error.response.data
            })
        })
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <p>Email</p>
                <input placeholder='email' name='email' onChange={this.handleChange} value={this.state.email} />
                <p>Password</p>
                <input placeholder='password' name='password' type='password' onChange={this.handleChange} value={this.state.password} />
                <button onClick={this.loginUser} >Login</button>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        user: state.user
    }
}

export default withRouter(connect(mapStateToProps, { userLoggedIn })(SuprSkrtLogin));