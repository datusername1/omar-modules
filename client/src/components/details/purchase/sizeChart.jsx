import React, { Component } from 'react';
import Popup from './popup/Popup';
import styles from '../../../css/purchase/sizeChart.css';
import appStyles from '../../../css/app-style.css';

export default class SizeChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popupState: false,
    };

    this.renderPopup = this.renderPopup.bind(this);
  }

  renderPopup() {
    this.setState({
      popupState: !this.state.popupState,
    });
  }

  render() {
    return (
      <div className={styles.sizeChartItem}>
        <img
          className={styles.sizeChartIcon}
          src="https://png.icons8.com/metro/1600/ruler.png"
          alt=""
        />
        <div onClick={this.renderPopup} href="" class={appStyles.link}>
          Size Chart
        </div>
        {this.state.popupState ? (
          <div className={styles.popup}>
            <Popup
              renderPopup={this.renderPopup}
              className={styles.popupInner}
            />
          </div>
        ) : null}
      </div>
    );
  }
}
