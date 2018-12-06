import React, { Component } from 'react';
import styles from '../../css/options-style.css';
import Checkmark from './checkmark';

export default function Options(props) {
  console.log(props.options);
  return (
    <div className={styles.OptinoSection}>
      <h5 className={styles.OptionTitle}>AVAILABLE COLORS</h5>
      <div className={styles.OptionColorList}>{props.product.colors}</div>
      <div className={styles.OptionColorSection}>
        <div className={styles.OptionsColorIcons}>
          {props.options.map(option => (
            <div className={styles.OptionsColorIconItem} key={option}>
              <a className={styles.OptionsColorIconBackground} href="">
                <img
                  className={styles.OptionsColorsIconsPic}
                  src={option}
                  alt=""
                />
              </a>
            </div>
          ))}
          {/* <div style={styles.OptionsColorIconItem}>
            <Checkmark />
            <a style={styles.OptionsColorIconBackground} href="">
              <div style={styles.OptionsColorsIconsPic}></div>
            </a>
          </div>
          <div style={styles.OptionsColorIconItem}>
            <a style={styles.OptionsColorIconBackground} href="">
              <div style={styles.OptionsColorsIconsPic}></div>
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}
