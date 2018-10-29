import React, { Component } from "react";
import Feedback from "./feedback";
import Options from "./options";
import Purchase from "./purchase";

export default class Details extends Component {

  render(){
    return(
      <div className="details-product">
        <div className="details-information">
          <Feedback product={this.props.product}/>
        </div>
        <div>
          <Options product={this.props.product}/>
        </div>
        <div>
          <Purchase product={this.props.product}/>
        </div>
      </div>
    )
  }
}