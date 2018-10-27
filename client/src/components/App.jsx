import React, { Component } from "react";

export default class App extends Component{
  constructor(props){
    super(props),
    state = {
      app:"app"
    }
  }
  
  render(){
    return(
      <div className="product">
        <div className="carousel">
          carousel
        </div>
        <div className="details">
          detauls
        </div>
      </div>
    )
  }
}
