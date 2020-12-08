import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';


class Navigationbar extends React.Component {

    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                <Navbar.Brand >eCommerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link onClick={() => this.props.onRouteChange('home')}>Home</Nav.Link>
                        <Nav.Link onClick={() => this.props.onRouteChange('products')}>Products</Nav.Link>
                        <Nav.Link onClick={() => this.props.onRouteChange('orders')}>Your orders</Nav.Link>
                        <Nav.Link onClick={() => this.props.onRouteChange('contact')}>Contact</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <Nav className="mr">
                        <Nav.Link onClick={() => this.props.onRouteChange('register')}>Register</Nav.Link>
                        <Nav.Link onClick={() => this.props.onRouteChange('signin')}>Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}



export default Navigationbar;