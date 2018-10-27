import React, { Component } from "react";
import Details from "./details/details";
import Carousel from "./carousel/carousel";

export default class App extends Component{
  render(){
    return(
      <div>
        <div className="carousel">
          <Carousel/>
        </div>
        <div className="details">
          <Details />
        </div>
      </div>
    )
  }
}
