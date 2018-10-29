import React, { Component } from "react";
import Feedback from "./feedback";
import Options from "./feedback";
import Product from "./product";
import Purchase from "./purchase";

export default class Details extends Component {

  render(){
    return(
      <div className="details">
        <div>
          <Feedback product={this.props.product}/>
        </div>
        <div>
          <Options product={this.props.product}/>
        </div>
        <div>
          <Product product={this.props.product}/>
        </div>
        <div>
          <Purchase product={this.props.product}/>
        </div>
      </div>
    )
  }
}