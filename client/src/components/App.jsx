import React, { Component } from "react";
import Details from "./details/details";
import Carousel from "./carousel/carousel";
import Complete from "./details/completeLook"
import axios from "axios";
import styles from "../css/app-style.css"

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
      <div style={styles.productDetails}>
        <div style={styles.banner}></div>
        <div style={styles.detailsContent}>
          <div style={styles.productCarousel}>
            <Carousel product={this.state.product}/>
          </div>
          <div style={styles.status}>
            NEW
          </div>
          <div style={styles.details}>
            <Details product={this.state.product}/>
          </div>
          <Complete product={this.state.product}/>
        </div>
      </div>
    )
  }
}
