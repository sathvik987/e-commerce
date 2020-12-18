import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './Signin.css'

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    onEnter = (event) => {
        if (event.key === "Enter") {
            this.onSubmit();
        }
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }
    onPasswordChange = (event) => {
        this.setState({ password: event.target.value })
    }

    onSubmit = () => {

        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (this.state.password && re.test(String(this.state.email).toLowerCase())) {
            fetch('http://localhost:9000/users/signin', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password,
                })

            }).then(res => res.json())
                .then(user => {
                    if (String(user).includes('worng credentials') || String(user).includes('errorTypeError')) {
                        alert("Invalid email or password")
                    }
                    if (user.email) {
                        this.props.loadUser(user);
                        this.props.onRouteChange('home');
                    }
                })
        }
    }


    render() {
        return (
            <div>
                <div className="container center_div">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" onChange={this.onEmailChange} onKeyPress={this.onEnter} placeholder="Enter email" />

                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" onChange={this.onPasswordChange} onKeyPress={this.onEnter} placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" onClick={this.onSubmit} type="button">
                            Sign in
                        </Button>
                    </Form>
                </div>
            </div>
        )
    }
}



export default Signin;