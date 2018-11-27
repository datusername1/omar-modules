import React, { Component } from 'react';
import axios from 'axios';

import Details from './details/details';
import Carousel from './carousel/carousel';
import Complete from './details/completeLook';
import Breadcrum from './breadcrums'

import styles from '../css/app-style.css';

export default class App extends Component {
  constructor(props) {
    super(props),
      this.state = {
        product: '',
        featured: '',
        options: [],
        images: [],
        magnify: false,
        relatedProducts: []
      }
    axios.defaults.baseURL = 'http://' + process.env.HOSTNAME + ':' + process.env.PORT;
    this.findThreeRandomCategoriesNeqCurrentProduct = this.findThreeRandomCategoriesNeqCurrentProduct.bind(this);
  }


  componentDidMount() {
    console.log('http://' + process.env.HOSTNAME + ':' + process.env.PORT)
    this.fetchProduct()
  }

  generateRandomNumber(value) {
    return Math.floor(Math.random() * value)
  }

  findThreeRandomCategoriesNeqCurrentProduct() {
    return ['Shoe', 'Hoodie', 'Pants', 'Hat']
      .filter((elt) => {
        if (elt !== this.state.product.category) {
          return true;
        } else {
          return false;
        }
      }).sort((a, b) => {
        return .5 - Math.random();
      })
  }

  fetchProduct() {
    axios
      .get('/api/product')
      .then((response) => {
        console.log(response)
        this.setState({
          product: response.data,
          featured: response.data.featured,
          options: response.data.options.split(','),
          images: response.data.images.split(',')
        })
      })
      .then(() => {
        const categories = this.findThreeRandomCategoriesNeqCurrentProduct().join(',');
        axios.get(`/api/product?categories=${categories}&limit=3`)
          .then((response) => {
            console.log(response.data)
            this.setState({ relatedProducts: response.data })
          })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className={styles.moduleMargin}>
        <Breadcrum product={this.state.product} />
        <div className={styles.productDetails}>
          <div className={styles.banner}></div>
          <div className={styles.detailsContent}>
            <div className={styles.productCarousel}>
              <Carousel featured={this.state.featured} images={this.state.images} magnification={this.magnification} />
            </div>
            <div className={styles.status}>
              NEW
            </div>
            <div className={styles.details}>
              <Details product={this.state.product} options={this.state.options} />
            </div>
            <Complete relatedProducts={this.state.relatedProducts} product={this.state.product} />
          </div>
        </div>
      </div>
    )
  }
}
