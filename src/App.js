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
import Cart from "./components/Cart/Cart";
import Payment from './components/Cart/Payment'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { Spinner } from 'react-bootstrap';

const stripePromise = loadStripe("Your api key")

const defaultState = {
  route: "home",
  products: [],
  cart: JSON.parse(localStorage.getItem('cart')) || {},
  searchfield: "",
  searchType: "",
  user: JSON.parse(localStorage.getItem('user')) || ""
};
class App extends Component {

  constructor() {
    super();
    this.state = defaultState;
  }

  clearCart = () => {
    this.setState({ cart: {} })
    localStorage.removeItem('cart');
  }

  cartHandler = (val, val2) => {
    if (this.state.cart[val]) {
      let afterDelete = { ...this.state.cart }
      delete afterDelete[val]
      this.setState({
        cart: afterDelete
      }, function () {
        localStorage.setItem('cart', JSON.stringify({ ...this.state.cart }));
      })
    } else {
      this.setState({
        cart: {
          ...this.state.cart,
          [val]: val2
        }
      }, function () {
        localStorage.setItem('cart', JSON.stringify({ ...this.state.cart }));
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

  loadProducts = () => {
    fetch('http://localhost:9000/products/getproducts')
      .then(response => response.json())
      .then(items => this.setState({ products: items }));
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

  loadUser = (user) => {
    this.setState({ user: user },
      function () {
        localStorage.setItem('user', JSON.stringify({ ...this.state.user }));
      })
  }

  signOut = () => {
    localStorage.removeItem('cart')
    localStorage.removeItem('user')
    this.onRouteChange('home')
    this.setState({

      route: "home",
      products: [],
      cart: {},
      searchfield: "",
      searchType: "",
      user: ""

    })
    this.loadProducts()
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
    let home;
    let pnavbar = "";


    if (this.state.route === 'home') {
      home = <LandingPage />
    } else if (this.state.route === 'register') {
      display = <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
    } else if (this.state.route === 'signin') {
      display = <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
    } else if (this.state.route === 'products') {
      if (this.state.products.length <= 0) {
        display = <div style={{ textAlign: 'center' }}><h4 style={{ display: 'inline-block' }}>Loading...</h4> <Spinner animation="border" size="sm" /></div>
      } else {
        display = <ProductsList products={filteredProducts} searchfield={this.state.searchfield}
          cartHandler={this.cartHandler} cart={this.state.cart} />
        pnavbar = <ProductsNavbar onpnavbarClick={this.onpnavbarClick}
          defaultsearchType={this.defaultsearchType} searchfield={this.state.searchfield} />
      }
    }
    else if (this.state.route === 'contact') {
      display = <Contact user={this.state.user} onRouteChange={this.onRouteChange} />
    } else if (this.state.route === 'orders') {
      display = <Orders user={this.state.user} />
    } else if (this.state.route === 'cart') {
      display = <Cart onRouteChange={this.onRouteChange} cart={this.state.cart} cartSize={Object.keys(this.state.cart).length}
        cartHandler={this.cartHandler} />
    } else if (this.state.route === 'payment') {
      display = <Payment user={this.state.user} cart={this.state.cart} onRouteChange={this.onRouteChange} clearCart={this.clearCart} />
    }

    return (

      <Elements
        stripe={stripePromise}
      >
        <div>
          <Navigation onRouteChange={this.onRouteChange} onSearchChange={this.onSearchChange} onEnter={this.onEnter}
            state={this.state.route} user={this.state.user} signOut={this.signOut} cartSize={Object.keys(this.state.cart).length} />
          {this.state.route === 'home' ? (
            <div>
              {home}
            </div>
          ) : (
            <div className='topPad'>
              {pnavbar}
              {display}
            </div>
          )}
        </div >
      </Elements>

    );

  }
}

export default App;
