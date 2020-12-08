import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './Signin.css'

class Signin extends React.Component {

    render() {
        return (
            <div>
                <div className="buffer"></div>
                <div className="container center_div">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />

                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" type="button">
                            Sign in
                        </Button>
                    </Form>
                </div>
            </div>
        )
    }
}



export default Signin;