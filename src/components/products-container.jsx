import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import fashionImg from '../images/fashion.jpg';
import blinkMiniImg from '../images/blink_mini.jpg';
import electronicsSalesImg from '../images/electronics_sale.jpg';
import wifiImg from '../images/wifi.jpg';
import Product from './product.jsx';
import './products-container.css';

export default class ProductsContainer extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img 
                        className="d-block w-100" 
                        src={ fashionImg } 
                        alt="First slide" 
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                        className="d-block w-100"
                        src={ blinkMiniImg }
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h1>SUPER SALE </h1>
                        <h3> UP TO 25% OFF </h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={ electronicsSalesImg }
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={ wifiImg }
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h1>SUPER SALE </h1>
                            <h3> UP TO 15% OFF </h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <Product />
            </div>
        )
    }
}