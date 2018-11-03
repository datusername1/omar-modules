import React, { Component } from "react";
import Details from "./details/details";
import Carousel from "./carousel/carousel";
import Complete from "./details/completeLook";
import Breadcrum from "./breadcrums"
import axios from "axios";
import styles from "../css/app-style.css";

export default class App extends Component{
  constructor(props){
    super(props),
    this.state = {
      product:"",
      featured:"",
      options:[],
      images:[]
    }
  }

  componentDidMount(){
    this.fetchProduct()
  }

  generateRandomNumber(value){
    return Math.floor(Math.random() * value)
  }

  fetchProduct(){
    axios
      .get("/api/product")
      .then((response) => {
        console.log(response)
        this.setState({
          product:response.data,
          featured:response.data.featured,
          options:response.data.options.split(","),
          images:response.data.images.split(",")
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render(){
    console.log(this.state.product)
    console.log(this.state.featured)
    console.log(this.state.options)
    console.log(this.state.images)
    return(
      <div>
        <Breadcrum />
        <div style={styles.productDetails}>
          <div style={styles.banner}></div>
          <div style={styles.detailsContent}>
            <div style={styles.productCarousel}>
              <Carousel product={this.state.product} featured={this.state.featured} images={this.state.images}/>
            </div>
            <div style={styles.status}>
              NEW
            </div>
            <div style={styles.details}>
              <Details product={this.state.product} options={this.state.options}/>
            </div>
            <Complete product={this.state.product}/>
          </div>
        </div>
      </div>
    )
  }
}
