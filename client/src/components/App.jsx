import React, { Component } from "react";
import Details from "./details/details";
import Carousel from "./carousel/carousel";
import axios from "axios";
import Product from "./details/product";

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
        this.setState({
          product:response.data[0]
        })
        console.log(this.state.product)
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
          {/* <Carousel/> */}
        </div>
        <div className="details">
          <Details product={this.state.product}/>
        </div>
      </div>
    )
  }
}
