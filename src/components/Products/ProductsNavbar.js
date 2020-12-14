import React from 'react';
import { Nav } from 'react-bootstrap';
import './Product.css'

class ProductsNavbar extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            allClass: "disabled",
            mobileClass: "",
            tabletClass: "",
            laptopClass: "",
            headPhoneClass: ""
        }

        this.props.defaultsearchType()

    }



    navAll = () => {

        this.setState({
            allClass: "disabled",
            mobileClass: "",
            tabletClass: "",
            laptopClass: "",
            headPhoneClass: ""
        })
    }
    navMobile = () => {
        this.setState({
            allClass: "",
            mobileClass: "disabled",
            tabletClass: "",
            laptopClass: "",
            headPhoneClass: ""
        })
    }
    navTablet = () => {
        this.setState({
            allClass: "",
            mobileClass: "",
            tabletClass: "disabled",
            laptopClass: "",
            headPhoneClass: ""
        })
    }
    navLaptop = () => {
        this.setState({
            allClass: "",
            mobileClass: "",
            tabletClass: "",
            laptopClass: "disabled",
            headPhoneClass: ""
        })
    }
    navHeadphone = () => {
        this.setState({
            allClass: "",
            mobileClass: "",
            tabletClass: "",
            laptopClass: "",
            headPhoneClass: "disabled"
        })
    }
    render() {
        if (this.props.searchfield) {

            return (
                <Nav>
                    <Nav.Item>
                        <Nav.Link onClick={() => { this.navAll(); this.props.onpnavbarClick("") }}>All</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => { this.navMobile(); this.props.onpnavbarClick("phone") }} > Mobile phones</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => { this.navTablet(); this.props.onpnavbarClick("tablet") }} > Tablets</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => { this.navLaptop(); this.props.onpnavbarClick("laptop") }}>Laptops</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => { this.navHeadphone(); this.props.onpnavbarClick("headphone") }}>Headphones</Nav.Link>
                    </Nav.Item>
                </Nav>

            )

        }

        return (
            <Nav>
                <Nav.Item>
                    <Nav.Link className={this.state.allClass} onClick={() => { this.navAll(); this.props.onpnavbarClick("") }}>All</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className={this.state.mobileClass} onClick={() => { this.navMobile(); this.props.onpnavbarClick("phone") }} > Mobile phones</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className={this.state.tabletClass} onClick={() => { this.navTablet(); this.props.onpnavbarClick("tablet") }} > Tablets</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className={this.state.laptopClass} onClick={() => { this.navLaptop(); this.props.onpnavbarClick("laptop") }}>Laptops</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className={this.state.headPhoneClass} onClick={() => { this.navHeadphone(); this.props.onpnavbarClick("headphone") }}>Headphones</Nav.Link>
                </Nav.Item>
            </Nav>

        )
    }
}


export default ProductsNavbar;