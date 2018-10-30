import React, { Component } from "react";
import AddToBag from "./purchase/addToBag";
import SizeChart from "./purchase/sizeChart";
import SizeQuantity from "./purchase/sizeQuantity";
import Shipping from "./purchase/shipping";
import styles from "../../css/purchase-style.css";

export default function Purchase(props) {
  return(
    <form action="" style={styles.purchaseForm}>
      <div style={styles.sizeChart}>
        <SizeChart product={props.product}/>
      </div>
      <div style={styles.sizeQQuantity}>
        <SizeQuantity product={props.product}/>
      </div>
      <div>
        <AddToBag product={props.product}/>
      </div>
      <div>
        <Shipping product={props.product}/>
      </div>
    </form>
  )
}