import React, { Component } from "react";
import Details from "./details/details";
import Carousel from "./carousel/carousel";
import axios from "axios";

export default class App extends Component{
  constructor(props){
    super(props),
    this.state = {
      product:""
    }
  }

  componentDidMount(){
    this.fetchProduct();
  }

  fetchProduct(){
    axios
      .get("/api/product")
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  addProducts(){
    axios 
      .post("/api/product")
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render(){
    return(
      <div className="banner">
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
