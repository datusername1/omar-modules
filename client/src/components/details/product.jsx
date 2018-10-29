import React, { Component } from "react";

export default class Product extends Component {
  render(){
    return(
      <div>
        this is the product
        <p>{this.props.product.category}</p>
        <p>{this.props.product.name}</p>
        <p>{this.props.product.price}</p>
      </div>
    )
  }
}