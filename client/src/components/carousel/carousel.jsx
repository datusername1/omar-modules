import React, { Component } from 'react';
import ImageList from './imageList';
import Status from './status';
import ReactImageMagnify from 'react-image-magnify';
import styles from '../../css/carousel/carousel.css';

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainImage: '',
      active: `image0`,
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
    const active = e.target.id;
    console.log(image);
    console.log(active);
    this.setState({
      mainImage: image,
      active: active,
    });
  }

  render() {
    return (
      <div className={styles.FeaturedContainer}>
        <div className={styles.FeaturedSelector}>
          <ReactImageMagnify
            className={styles.FeaturedImage}
            {...{
              smallImage: {
                alt: '',
                isFluidWidth: true,
                src: this.state.mainImage,
                // srcSet: this.srcSet,
              },
              largeImage: {
                alt: '',
                src: this.state.mainImage,
                width: 1200,
                height: 1200,
              },

              enlargedImagePosition: 'over',
            }}
          />
          {/* <img
            className={styles.FeaturedImage}
            src={this.state.mainImage}
            alt=""
          /> */}
        </div>
        <ImageList
          setImage={this.setImage}
          product={this.props.product}
          images={this.props.images}
          active={this.state.active}
        />
      </div>
    );
  }
}
