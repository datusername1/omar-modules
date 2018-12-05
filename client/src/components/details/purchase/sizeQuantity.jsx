import React, { Component } from 'react';
import styles from '../../../css/purchase/sizeQuantity.css';

export default function SizeQuantity(props) {
  const sizes = props.product.sizes;
  console.log(sizes);
  return (
    <div className={styles.sizeQuantity}>
      <div className={styles.sizeQuantitySize}>
        <div className={styles.sizeQuantitySelector}>
          <div className={styles.SizeQuantityBox}>
            <select>
              SELECT SIZE
              {/* {props.product.sizes.map(size => (
                <option>{size}</option>
              ))} */}
            </select>
            <img
              className={styles.SizeQuantityIcon}
              src="http://icons-for-free.com/free-icons/png/512/308964.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className={styles.QuantityBox}>
        <div className={styles.QuantityBoxItem}>
          <div className={styles.QuantityBoxDropdown}>
            <div className={styles.SizeQuantityBox}>
              <span>1</span>
              <img
                className={styles.SizeQuantityIcon}
                src="http://icons-for-free.com/free-icons/png/512/308964.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
