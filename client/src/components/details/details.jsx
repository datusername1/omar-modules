import React, { Component } from "react";
import Feedback from "./feedback";

export default class Details extends Component {
  constructor(props){
    super(props),
    this.state = {
      product:""
    }
  }
  render(){
    return(
      <div>
        this is the product detail
      </div>
    )
  }
}