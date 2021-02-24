import React, { Component } from 'react';
import officeProductsImg from '../images/office_products.jpg';
import computersImg from '../images/computers.jpg';
import clothingImg from '../images/clothing.jpg';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import './product.css';
 
export default class Product extends Component {
	render() {
		return (
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={ officeProductsImg } />
          <Card.Body>
            <Card.Title>Shop Office Furniture</Card.Title>
            <Card.Text>
            Save upto 40% on select chairs & Furniture 
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={ clothingImg } />
          <Card.Body>
            <Card.Title> Shop Latest Fashion Trends </Card.Title>
            <Card.Text>
              End Of Winter Sale, Use Code WINTERSALE to get 10% back in rewards
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={ computersImg } />
          <Card.Body>
            <Card.Title>Shop Computers & Accessories </Card.Title>
            <Card.Text>
              Limited Time - Save up to 50%
            </Card.Text>
          </Card.Body>
        </Card>
    </CardGroup>
		)
	}
}