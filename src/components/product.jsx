import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import officeProductsImg from '../images/office_products.jpg';
import computersImg from '../images/computers.jpg';
import clothingImg from '../images/clothing.jpg';
import CardDeck from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import './product.css';
 
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { id: null };
  }

  handleClick = (e) => {
    this.setState({id: e.target.id}, function () {
      this.props.history.push({pathname: '/itemsPage', state: this.state.id});
  });
  }

	render() {
		return (
      <CardDeck>
        <Card onClick={ this.handleClick }>
          <Card.Img variant="top" src={ officeProductsImg } id="office_products"/>
          <Card.Body>
            <Card.Title>Shop Office Furniture</Card.Title>
            <Card.Text>
            Save upto 40% on select chairs & Furniture 
            </Card.Text>
          </Card.Body>
        </Card>
        <Card onClick={ this.handleClick } >
          <Card.Img variant="top" src={ clothingImg } id="clothing_products"/>
          <Card.Body>
            <Card.Title> Shop Latest Fashion Trends </Card.Title>
            <Card.Text>
              End Of Winter Sale, Use Code WINTERSALE to get 10% back in rewards
            </Card.Text>
          </Card.Body>
        </Card>
        <Card onClick={ this.handleClick }>
          <Card.Img variant="top" src={ computersImg } id="computer_products"/>
          <Card.Body>
            <Card.Title>Shop Computers & Accessories </Card.Title>
            <Card.Text>
              Limited Time - Save up to 50%
            </Card.Text>
          </Card.Body>
        </Card>
    </CardDeck>
		)
	}
}

export default withRouter(Product)