import React, { Component } from "react";
import Options from "./details/options";
import Feedback from "./details/feedback";
import Product from "./details/product";
import Purchases from "./details/purchase";

export default class App extends Component{
  render(){
    return(
      <div>
        <div className="carousel">
          carousel is loading
        </div>
        <div className="details">
          <Options />
        </div>
        <div className="details">
          <Feedback />
        </div>
        <div className="details">
          <Product />
        </div>
        <div className="details">
          <Purchases />
        </div>
      </div>
    )
  }
}
