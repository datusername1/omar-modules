import React, { Component } from 'react';
import styles from '../../../css/purchase/sizeQuantity.css';

export default function SizeQuantity(props) {
  console.log(props.sizes);
  return (
    <div className={styles.sizeQQuantity}>
      <div className={styles.sizeQuantitySize}>
        <div className={styles.sizeQuantitySelector}>
          <select className={styles.SizeQuantityBox}>
            <option selected="selected">SELECT SIZE</option>
            {props.sizes.map(size => (
              <option>{size}</option>
            ))}
          </select>
        </div>
      </div>

      <select className={styles.QuantityBox}>
        <option selected="selected">1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
      {/* <img
                className={styles.SizeQuantityIcon}
                src="http://icons-for-free.com/free-icons/png/512/308964.png"
                alt=""
              /> */}
    </div>
  );
}
