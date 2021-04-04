import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import './product.css';
 
class CartPage extends Component {
    render () {
        const { items } = this.props
        return(
            <div className="cart-items-container">
            { items.length > 0 && items.map(item => (
                    <div className="item-content" key={ item[0].id }> 
                        <div>{ item[0].title }, { item[0].description }  </div>
                        <div> { item[0].price } </div>
                    </div>
                ))
                }
            </div>
        );
    }
}

export default withRouter(CartPage)