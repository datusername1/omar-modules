import React, { Component } from "react";

export default class Feedback extends Component {
  render(){
    return(
      <div>
        <p>{this.props.product.stars}</p>
        <p>{this.props.product.review_count}</p>
      </div>
    )
  }
}