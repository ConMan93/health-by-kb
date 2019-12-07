import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { userLoggedIn } from '../Redux/reducer';
import { withRouter } from 'react-router-dom';

// Bootstrap Components
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
        // console.log(this.state)
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
            <Form className='form'>
                <Form.Group controlId='formBasicEmail'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={this.handleChange} value={this.state.email} name='email' />
                </Form.Group>

                <Form.Group controlId='formBasicPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="password" onKeyPress={this.handleKeyPress} onChange={this.handleChange} value={this.state.password} name='password' />
                </Form.Group>

                <Button variant="dark" onClick={this.loginUser} handleKeyPress={this.handleKeyPress}>Login</Button>
            </Form>
        )
    }
}

function mapStateToProps (state) {
    return {
        user: state.user
    }
}

export default withRouter(connect(mapStateToProps, { userLoggedIn })(SuprSkrtLogin));