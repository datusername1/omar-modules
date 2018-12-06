import React, { Component } from 'react';
import Popup from './popup/Popup';
import styles from '../../../css/purchase/sizeChart.css';
import appStyles from '../../../css/app-style.css';

export default class SizeChart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles.sizeChartItem}>
        <img
          className={styles.sizeChartIcon}
          src="https://png.icons8.com/metro/1600/ruler.png"
          alt=""
        />
        <a onClick href="" class={appStyles.link}>
          Size Chart
        </a>
      </div>
    );
  }
}
