//import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation/Navigation'
import LandingPage from './components/LandingPage/LandingPage'
import Register from './components/Register/Register'
import Signin from './components/Signin/Signin'
import ProductsList from './components/Products/ProductsList'
import Contact from './components/Contact/Contact'
import Orders from './components/Orders/Orders'
import ProductsNavbar from './components/Products/ProductsNavbar'

class App extends Component {

  constructor() {
    super();
    this.state = {
      route: "home",
      products: [],
      cart: {},
      searchfield: "",
      searchType: ""
    };
  }

  cartHandler = (val, val2) => {
    if (this.state.cart[val]) {
      let afterDelete = { ...this.state.cart }
      delete afterDelete[val]
      this.setState({
        cart: afterDelete
      })
    } else {
      this.setState({
        cart: {
          ...this.state.cart,
          [val]: val2
        }
      })
    }
  }

  onRouteChange = (route) => {
    if (route === 'products') {
      this.setState({ searchfield: "" });
    }
    this.setState({ route: route });
  }

  componentDidMount() {
    fetch('http://localhost:9000/products/getproducts')
      .then(response => response.json())
      .then(items => this.setState({ products: items }));

  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  onEnter = (event) => {
    if (event.target.value) {
      if (event.key === "Enter") {
        this.setState({ searchfield: event.target.value })
      }
    }
  }

  onpnavbarClick = (type) => {
    this.setState({ searchType: type, searchfield: "" })
  }

  defaultsearchType = () => {
    this.setState({ searchType: "" })

  }


  render() {

    let filteredProducts = "";
    if (this.state.searchfield) {
      filteredProducts = this.state.products.filter(product => {
        return product.productname.toLowerCase().includes(this.state.searchfield.toLowerCase())
      })
    }
    else if (this.state.searchType) {
      filteredProducts = this.state.products.filter(product => {
        return product.type.toLowerCase() === this.state.searchType
      })
    } else {
      filteredProducts = this.state.products
    }




    let display;
    let pnavbar = "";


    if (this.state.route === 'home') {
      display = <LandingPage />
    } else if (this.state.route === 'register') {
      display = <Register />
    } else if (this.state.route === 'signin') {
      display = <Signin />
    } else if (this.state.route === 'products') {
      display = <ProductsList products={filteredProducts} searchfield={this.state.searchfield}
        cartHandler={this.cartHandler} cart={this.state.cart} />
      pnavbar = <ProductsNavbar onpnavbarClick={this.onpnavbarClick}
        defaultsearchType={this.defaultsearchType} searchfield={this.state.searchfield} />
    }
    else if (this.state.route === 'contact') {
      display = <Contact />
    } else if (this.state.route === 'orders') {
      display = <Orders />
    }

    return (

      <div>
        <Navigation onRouteChange={this.onRouteChange} onSearchChange={this.onSearchChange} onEnter={this.onEnter} />
        <div className='topPad'>
          {pnavbar}
          {display}
        </div>
      </div >

    );

  }
}

export default App;
