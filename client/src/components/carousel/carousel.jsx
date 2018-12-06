import React, { Component } from 'react';
import ImageList from './imageList';
import Status from './status';
import styles from '../../css/carousel/carousel.css';

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainImage: '',
    };

    this.setImage = this.setImage.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.mainImage) {
      this.setState({
        mainImage: this.props.featured,
      });
    }
  }

  setImage(e) {
    const image = e.target.src;
    this.setState({
      mainImage: image,
    });
  }

  render() {
    console.log(this.props.featured);
    console.log('this is the feature', this.state.mainImage);
    return (
      <div className={styles.FeaturedContainer}>
        <div className={styles.FeaturedSelector}>
          <img
            className={styles.FeaturedImage}
            src={this.state.mainImage}
            alt=""
          />
        </div>
        <ImageList
          setImage={this.setImage}
          product={this.props.product}
          images={this.props.images}
        />
      </div>
    );
  }
}
