import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';
import { clothingData } from '../components/fashionclothing.js';
import { officeData } from '../components/officeProducts.js';
import { computerProductsData } from '../components/computerProducts.js';
import './product.css';
 
class ItemsPage extends Component {

 getData() {
    switch(this.props.location.state){
        case 'office_products': return officeData;
                                break;
        case 'clothing_products': return clothingData;
                                  break;
        case 'computer_products': return computerProductsData;
                                  break;
  }
}

render () {
    const items = this.getData();
    console.log(items);
    return(
        <div className="items-container">
            <nav className="left-menu">
                <div className="nav-left">
                    <h6>Special offers</h6>
                    <ul className="left-menu-list">
                        <li><a href="#">UNDER $50</a></li>
                        <li><a href="#">CLEARANCE ITEMS</a></li>
                        <li><a href="#">Extra 60% OFF SALE</a></li>
                    </ul>
                </div>
                <div className="nav-left">
                    <h6> Price </h6>
                    <ul className="left-menu-list">
                        <li><a href="#">Under $25</a></li>
                        <li><a href="#">$25 to $50</a></li>
                        <li><a href="#">$50 to $100</a></li>
                        <li><a href="#">$100 to $200</a></li>
                        <li><a href="#">$200 & Above</a></li>
                    </ul>
                </div>
            </nav>
            <CardColumns>
            {items && items.map(item => (
                <Card>
                    <Card.Img variant="top" src={ item.image_name} class="item-image"/>
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{item.description} </Card.Text>
                    </Card.Body>
                </Card>
            ))}
            </CardColumns>
        </div>
    );
}
}

export default withRouter(ItemsPage)