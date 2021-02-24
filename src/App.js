import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import SignIn from "./components/sign-in.jsx";
import Registration from "./components/registration.jsx";
import ProductsContainer from './components/products-container.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/products" className="nav-link">Products</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/deals" className="nav-link">Today's deals</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/signIn" className="nav-link">Sign in</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/cart" className="nav-link">Cart</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route path="/signIn" exact component={SignIn} />
          <Route path="/register" component={Registration} />
          <Route path="/products" component={ ProductsContainer } />
        </div>
      </Router>
    );
  }
}

export default App;
