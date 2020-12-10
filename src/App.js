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
      products: ""
    };
  }


  onRouteChange = (route) => {
    this.setState({ route: route });
  }

  componentDidMount() {
    fetch('http://localhost:9000/products/getproducts')
      .then(response => response.json())
      .then(items => this.setState({ products: items }));

  }

  render() {

    let display;

    if (this.state.route === 'home') {
      display = <LandingPage />
    } else if (this.state.route === 'register') {
      display = <Register />
    } else if (this.state.route === 'signin') {
      display = <Signin />
    } else if (this.state.route === 'products') {
      display = <ProductsList products={this.state.products} />
    }
    else if (this.state.route === 'contact') {
      display = <Contact />
    } else if (this.state.route === 'orders') {
      display = <Orders />
    }

    return (
      <div>
        <Navigation onRouteChange={this.onRouteChange} />
        <div className='topPad'>
          {display}
        </div>
      </div >
    );

  }


}

export default App;
