import React, { Component } from "react";
import Feedback from "./feedback";
import Options from "./feedback";
import Product from "./product";
import Purchase from "./purchase";

export default class Details extends Component {

  render(){
    return(
      <div>
        this is the product detail
        <div>
          <Feedback />
        </div>
        <div>
          <Options />
        </div>
        <div>
          <Product />
        </div>
        <div>
          <Purchase />
        </div>
      </div>
    )
  }
}