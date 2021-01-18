import React from 'react';
import { Navbar, Nav, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Navigation.css'

class Navigationbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            homeClass: "active",
            productClass: "",
            orderClass: "",
            contactClass: "",
            searchClass: "invisible",
            registerClass: "",
            signinClass: ""
        }
    }

    activeHome = () => {
        this.setState({
            homeClass: "active",
            productClass: "",
            orderClass: "",
            contactClass: "",
            searchClass: "invisible",
            registerClass: "",
            signinClass: ""
        })

    }
    activeProducts = () => {
        this.setState({
            homeClass: "",
            productClass: "active",
            orderClass: "",
            contactClass: "",
            searchClass: "",
            registerClass: "",
            signinClass: ""
        })

    }
    activeOrders = () => {
        this.setState({
            homeClass: "",
            productClass: "",
            orderClass: "active",
            contactClass: "",
            searchClass: "invisible",
            registerClass: "",
            signinClass: ""
        })

    }
    activeContact = () => {
        this.setState({
            homeClass: "",
            productClass: "",
            orderClass: "",
            contactClass: "active",
            searchClass: "invisible",
            registerClass: "",
            signinClass: ""
        })

    }
    activeRegister = () => {
        this.setState({
            homeClass: "",
            productClass: "",
            orderClass: "",
            contactClass: "",
            searchClass: "invisible",
            registerClass: "active",
            signinClass: ""
        })

    }
    activeSignin = () => {
        this.setState({
            homeClass: "",
            productClass: "",
            orderClass: "",
            contactClass: "",
            searchClass: "invisible",
            registerClass: "",
            signinClass: "active"
        })

    }

    activeCart = () => {
        this.setState({
            homeClass: "",
            productClass: "",
            orderClass: "",
            contactClass: "",
            searchClass: "invisible",
            registerClass: "",
            signinClass: ""
        })

    }

    render() {

        if (this.props.state === 'home') {
            return (
                <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                    <Navbar.Brand >eCommerce</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link onClick={() => { this.props.onRouteChange('home'); this.activeHome() }} className="active">Home</Nav.Link>
                            <Nav.Link onClick={() => { this.props.onRouteChange('products'); this.activeProducts() }} className="">Products</Nav.Link>
                            <Nav.Link onClick={() => { this.props.onRouteChange('orders'); this.activeOrders() }} className="">Your orders</Nav.Link>
                            <Nav.Link onClick={() => { this.props.onRouteChange('contact'); this.activeContact() }} className="">Contact</Nav.Link>
                        </Nav>
                        <span className="mr" style={{ marginRight: 22, color: 'white' }}>
                            <span style={{ marginRight: 3, color: 'white' }}> {this.props.cartSize}</span>
                            <FontAwesomeIcon icon={faShoppingCart} size="lg" className="mouse" onClick={() => { this.props.onRouteChange('cart'); this.activeCart(); }} />
                        </span>

                        <span inline="true" className="invisible" >
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={this.props.onSearchChange} onKeyPress={this.props.onEnter} />
                        </span>
                        {this.props.user ? (
                            <Nav className="mr">
                                <Nav.Link className="" onClick={this.props.signOut}>Logout</Nav.Link>
                            </Nav>
                        ) : (
                                <Nav className="mr">
                                    <Nav.Link className="" onClick={() => { this.props.onRouteChange('register'); this.activeRegister() }}>Register</Nav.Link>
                                    <Nav.Link className="" onClick={() => { this.props.onRouteChange('signin'); this.activeSignin() }}>Login</Nav.Link>
                                </Nav>
                            )
                        }
                    </Navbar.Collapse>
                </Navbar >
            )

        }
        return (
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                <Navbar.Brand >eCommerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link onClick={() => { this.props.onRouteChange('home'); this.activeHome() }} className={this.state.homeClass}>Home</Nav.Link>
                        <Nav.Link onClick={() => { this.props.onRouteChange('products'); this.activeProducts() }} className={this.state.productClass}>Products</Nav.Link>
                        <Nav.Link onClick={() => { this.props.onRouteChange('orders'); this.activeOrders() }} className={this.state.orderClass}>Your orders</Nav.Link>
                        <Nav.Link onClick={() => { this.props.onRouteChange('contact'); this.activeContact() }} className={this.state.contactClass}>Contact</Nav.Link>
                    </Nav>
                    <span className="mr" style={{ marginRight: 22, color: 'white' }}>
                        <span style={{ marginRight: 3, color: 'white' }}> {this.props.cartSize}</span>
                        <FontAwesomeIcon icon={faShoppingCart} size="lg" className="mouse" onClick={() => { this.props.onRouteChange('cart'); this.activeCart(); }} />
                    </span>

                    <span inline="true" className={this.state.searchClass} >
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={this.props.onSearchChange} onKeyPress={this.props.onEnter} />
                    </span>

                    {this.props.user ? (
                        <Nav className="mr">
                            <Nav.Link className="" onClick={this.props.signOut}>Logout</Nav.Link>
                        </Nav>
                    ) : (
                            <Nav className="mr">
                                <Nav.Link className={this.state.registerClass} onClick={() => { this.props.onRouteChange('register'); this.activeRegister() }}>Register</Nav.Link>
                                <Nav.Link className={this.state.signinClass} onClick={() => { this.props.onRouteChange('signin'); this.activeSignin() }}>Login</Nav.Link>
                            </Nav>
                        )
                    }
                </Navbar.Collapse>
            </Navbar >
        )
    }
}



export default Navigationbar;