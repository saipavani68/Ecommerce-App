import React, { useState, useReducer }  from "react";
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

const initialState = {
  items: []
};

function reducer(state, action) {
  switch(action.type) {
    case "handleCartItems": {
      return {
        ...state,
        items: action.payload,
      };
  }
    default:
      return this.state;
  }
}

function App() {
  const [itemsAddedToCart, setItems] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleClick(e) {
    const itemIndex = e.target.id;
    const menuItems = [...clothingData, ...officeData, ...computerProductsData];
    itemsAddedToCart.push(menuItems.filter(item => item.id === parseInt(itemIndex)));
    setItems(itemsAddedToCart);
    dispatch({ type: "handleCartItems", payload: itemsAddedToCart});
  }
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
                <Link to="/cart" className="nav-link"><i className="fa fa-shopping-cart"></i> Cart | { state.items.length } </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Route path="/signIn" exact component={SignIn} />
        <Route path="/register" component={Registration} />
        <Route path="/products" component={ ProductsContainer } />
        <Route path="/itemsPage" exact component={() => <ItemsPage handleClick={ handleClick }/>} />
        <Route path="/cart" exact component={() => <CartPage items={ state.items } /> } />
        </div>
    </Router>
  );
}

export default App;