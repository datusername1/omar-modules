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
      <SizeQuantity product={props.product}/>
      <AddToBag product={props.product}/>
      <Shipping product={props.product}/>
    </form>
  )
}