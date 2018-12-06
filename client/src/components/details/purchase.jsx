import React, { Component } from 'react';
import AddToBag from './purchase/addToBag';
import SizeChart from './purchase/sizeChart';
import SizeQuantity from './purchase/sizeQuantity';
import Shipping from './purchase/shipping';
import styles from '../../css/purchase-style.css';

export default function Purchase(props) {
  return (
    <form action="" className={styles.purchaseForm}>
      <div className={styles.sizeChart}>
        <SizeChart product={props.product} />
      </div>
      <div className={styles.SizeQuantity}>
        <SizeQuantity product={props.product} sizes={props.sizes} />
      </div>
      <AddToBag product={props.product} />
      <Shipping product={props.product} />
    </form>
  );
}
