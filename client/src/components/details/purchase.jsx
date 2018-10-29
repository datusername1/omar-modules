import React, { Component } from "react";

export default class Purchase extends Component {
  render(){
    return(
      <div>
        <p>{this.props.product.shipping}</p>
        <p>{this.props.product.favorite}</p>
        <p>{this.props.product.status}</p>
        <p>{this.props.product.quantity}</p>
      </div>
    )
  }
}