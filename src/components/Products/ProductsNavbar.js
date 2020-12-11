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

        return (
            <Nav>
                <Nav.Item>
                    <Nav.Link className={this.state.allClass} onClick={this.navAll}>All</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className={this.state.mobileClass} onClick={this.navMobile}>Mobile phones</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className={this.state.tabletClass} onClick={this.navTablet}>Tablets</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className={this.state.laptopClass} onClick={this.navLaptop}>Laptops</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className={this.state.headPhoneClass} onClick={this.navHeadphone}>Headphones</Nav.Link>
                </Nav.Item>
            </Nav>

        )
    }
}


export default ProductsNavbar;