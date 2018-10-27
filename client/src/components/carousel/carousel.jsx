import React, { Component } from "react";
import Featured from "./featured";
import ImageList from "./imageList";
import Status from "./status";

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
        this is the images detail
        <div>
          <Featured />
        </div>
        <div>
          <ImageList />
        </div>
        <div>
          <Status />
        </div>
      </div>
    )
  }
}