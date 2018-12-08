import React, { Component } from 'react';
import styles, { ShippingImage } from '../../../css/purchase/shipping.css';
import FreeShippinginfo from './popup/FreeShippingInfo';

export default class Shipping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
    };

    this.shippingPopup = this.shippingPopup.bind(this);
  }

  shippingPopup(e) {
    e.preventDefault();
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }
  render() {
    return (
      <div className={styles.ShippingSection}>
        <div className={styles.ShippingSelector}>
          <div className={styles.ShippingIconSelector}>
            <div className={styles.ShippingIconBox}>
              <img
                className={styles.ShippingImage}
                src="https://upload.wikimedia.org/wikipedia/commons/7/70/Checkmark_Symbol.svg"
                alt=""
              />
            </div>
            <div className={styles.ShippingStatus}>
              <div
                onClick={this.shippingPopup}
                className={styles.ShippingStatusMessage}
              >
                Free Shipping and free returns
              </div>
              <div
                className={
                  this.state.showPopup
                    ? styles.shippingInfoShow
                    : styles.shippingInfoHide
                }
              >
                <FreeShippinginfo shippingPopup={this.shippingPopup} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
