//import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation/Navigation'
import LandingPage from './components/LandingPage/LandingPage'
import Register from './components/Register/Register'
import Signin from './components/Signin/Signin'
import Products from './components/Products/Products'
import Contact from './components/Contact/Contact'
import Orders from './components/Orders/Orders'

class App extends Component {

  constructor() {
    super();
    this.state = {
      route: "home"
    };
  }


  onRouteChange = (route) => {
    this.setState({ route: route });
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
      display = <Products />
    }
    else if (this.state.route === 'contact') {
      display = <Contact />
    } else if (this.state.route === 'orders') {
      display = <Orders />
    }

    return (
      <div>
        <Navigation onRouteChange={this.onRouteChange} />
        <br></br><br></br><br></br>
        {display}
      </div >
    );

  }


}

export default App;
