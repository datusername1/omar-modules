import React, { Component } from 'react';
import Details from './details/details';
import Carousel from './carousel/carousel';
import Complete from './details/completeLook';
import Breadcrum from './breadcrums';
import axios from 'axios';
import styles from '../css/app-style.css';

export default class App extends Component {
  constructor(props) {
    super(props),
      (this.state = {
        product: '',
        featured: '',
        options: [],
        images: [],
        magnify: false,
      });
    // axios.defaults.baseURL = "http://" + process.env.HOSTNAME + ":" + process.env.PORT;
    axios.defaults.baseURL =
      'http://ec2-35-162-25-38.us-west-2.compute.amazonaws.com';
  }

  componentDidMount() {
    console.log('http://' + process.env.HOSTNAME + ':' + process.env.PORT);
    console.log('supssssss');
    this.fetchProduct();
  }

  generateRandomNumber(value) {
    return Math.floor(Math.random() * value);
  }

  fetchProduct() {
    axios
      .get('/api/product')
      .then(response => {
        console.log(response);
        this.setState({
          product: response.data,
          featured: response.data.featured,
          options: response.data.options.split(','),
          images: response.data.images.split(','),
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className={styles.moduleMargin}>
        <Breadcrum product={this.state.product} />
        <div className={styles.productDetails}>
          <div className={styles.banner} />
          <div className={styles.detailsContent}>
            <div className={styles.productCarousel}>
              <Carousel
                featured={this.state.featured}
                images={this.state.images}
                magnification={this.magnification}
              />
            </div>
            <div className={styles.status}>NEW</div>
            <div className={styles.details}>
              <Details
                product={this.state.product}
                options={this.state.options}
              />
            </div>
            <Complete product={this.state.product} />
          </div>
        </div>
      </div>
    );
  }
}
