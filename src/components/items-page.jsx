import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';
import officeProductsImg from '../images/office_products.jpg';
import './product.css';
 
class ItemsPage extends Component {


render () {
    const items = [
        {
            id: 1,
            title: 'Max Studio',
            description: 'Women\'s 3/4 Sleeve Midi-Length Plaid Shirt Dress',
            category: 'clothing',
            image_name: 'max_studio.jpg',
            price: 21.28
        },
        {
            id: 1,
            title: 'Max Studio',
            description: 'Women\'s 3/4 Sleeve Midi-Length Plaid Shirt Dress',
            category: 'clothing',
            image_name: 'max_studio.jpg',
            price: 21.28
        },
        {
            id: 1,
            title: 'Max Studio',
            description: 'Women\'s 3/4 Sleeve Midi-Length Plaid Shirt Dress',
            category: 'clothing',
            image_name: 'max_studio.jpg',
            price: 21.28
        },
        {
            id: 1,
            title: 'Max Studio',
            description: 'Women\'s 3/4 Sleeve Midi-Length Plaid Shirt Dress',
            category: 'clothing',
            image_name: 'max_studio.jpg',
            price: 21.28
        },
        {
            id: 1,
            title: 'Max Studio',
            description: 'Women\'s 3/4 Sleeve Midi-Length Plaid Shirt Dress',
            category: 'clothing',
            image_name: 'max_studio.jpg',
            price: 21.28
        },
        {
            id: 1,
            title: 'Max Studio',
            description: 'Women\'s 3/4 Sleeve Midi-Length Plaid Shirt Dress',
            category: 'clothing',
            image_name: 'max_studio.jpg',
            price: 21.28
        },
        {
            id: 1,
            title: 'Max Studio',
            description: 'Women\'s 3/4 Sleeve Midi-Length Plaid Shirt Dress',
            category: 'clothing',
            image_name: 'max_studio.jpg',
            price: 21.28
        },
        {
            id: 1,
            title: 'Max Studio',
            description: 'Women\'s 3/4 Sleeve Midi-Length Plaid Shirt Dress',
            category: 'clothing',
            image_name: 'max_studio.jpg',
            price: 21.28
        }
    ];
    return(
        <CardColumns>
        {items.map(item => (
            <Card>
                <Card.Img variant="top" src={ officeProductsImg } />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description} </Card.Text>
                </Card.Body>
            </Card>
        ))}
        </CardColumns>
    );
}
}

export default withRouter(ItemsPage)