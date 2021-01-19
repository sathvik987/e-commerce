import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './Register.css'


class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }

    onEnter = (event) => {
        if (event.key === "Enter") {
            this.onSubmit();
        }
    }

    onNameChange = (event) => {
        this.setState({ name: event.target.value })
    }
    onEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }
    onPasswordChange = (event) => {
        this.setState({ password: event.target.value })
    }

    onSubmit = () => {

        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (this.state.name && this.state.password && re.test(String(this.state.email).toLowerCase())) {
            fetch('https://arcane-sea-44247.herokuapp.com/users/register', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password,
                    name: this.state.name
                })

            }).then(res => res.json())
                .then(user => {
                    if (String(user).includes('duplicate key error')) {
                        alert("This email address is already registered")
                    }
                    if (user.email) {
                        this.props.loadUser(user);
                        this.props.onRouteChange('home');
                    }
                })
        } else {
            alert("Please fill in all the required fields.")
        }
    }

    render() {
        return (
            <div>
                <div className="container center_div">
                    <Form>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" onChange={this.onNameChange} onKeyPress={this.onEnter} placeholder="Enter name" />

                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" onChange={this.onEmailChange} onKeyPress={this.onEnter} placeholder="Enter email" />

                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" onChange={this.onPasswordChange} onKeyPress={this.onEnter} placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" onClick={this.onSubmit} type="button">
                            Register
                        </Button>
                    </Form>
                </div>
            </div>
        )
    }
}



export default Register;