import React, { Component } from "react";
import AddToBag from "./purchase/addToBag";
import SizeChart from "./purchase/sizeChart";
import SizeQuantity from "./purchase/sizeQuantity";
import Shipping from "./purchase/shipping";

export default function Purchase(props) {
  return(
    <form action="" className="purchase-form">
      <div className="a_t_b">
        <AddToBag product={props.product}/>
      </div>
      <div>
        <Shipping />
      </div>
      <SizeChart/>
      <SizeQuantity />
    </form>
  )
}