import React, { Component } from "react";

export default class Option extends Component {
  render(){
    return(
      <div>
        <p>{this.props.product.colors}</p>
      </div>
    )
  }
}