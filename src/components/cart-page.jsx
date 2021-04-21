import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import './product.css';
 
class CartPage extends Component {
    render () {
        const { items } = this.props
        return(
            <div className="cart-items-container">
                <h2 className="cart-items-header"> Shopping Cart </h2>
                { items.length > 0 ? items.map(item => (
                        <div className="cart-item-content" key={ item[0].id }> 
                            <img src={ item[0].image_name } alt="item image"  className="cart-item-image" />
                            <div className="cart-item-title">{ item[0].title }, { item[0].description }  </div>
                            <div className="cart-item-price"> ${ item[0].price } </div>
                        </div>
                    ))
                    :
                    <div className="cart-item-content cart-empty-container"> Your Cart is empty. 
                        <a href="/products"> Continue Shopping </a> 
                    </div>
                }
                { items.length > 0 && <h5 className="cart-total-price">Subtotal ({items.length}): { items.flat().reduce((a, b) => a + +b.price, 0).toFixed(2)} </h5> }
            </div>
        );
    }
}

export default withRouter(CartPage)