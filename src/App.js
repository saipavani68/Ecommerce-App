import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import SignIn from "./components/sign-in.jsx";
import Registration from "./components/registration.jsx";
import ProductsContainer from './components/products-container.jsx';
import ItemsPage from './components/items-page.jsx';
import CartPage from './components/cart-page.jsx';
import { clothingData } from './components/fashionclothing.js';
import { officeData } from './components/officeProducts.js';
import { computerProductsData } from './components/computerProducts.js';
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: []
    }
  }
  handleClick(e) {
    const itemsAddedToCart = this.state.items;
    const itemIndex = e.target.id;
    const menuItems = [...clothingData, ...officeData, ...computerProductsData];
    itemsAddedToCart.push(menuItems.filter(item => item.id === parseInt(itemIndex)));
    this.setState({items: itemsAddedToCart});
}
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/products" className="nav-link">Products</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/signIn" className="nav-link">Sign in</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/cart" className="nav-link"><i className="fa fa-shopping-cart"></i> Cart</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route path="/signIn" exact component={SignIn} />
          <Route path="/register" component={Registration} />
          <Route path="/products" component={ ProductsContainer } />
          <Route path="/itemsPage" exact component={() => <ItemsPage handleClick={ this.handleClick.bind(this) }/>} />
          <Route path="/cart" exact component={() => <CartPage items={ this.state.items } /> } />
        </div>
      </Router>
    );
  }
}


