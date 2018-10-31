import React, { Component } from "react";
import ImageList from "./imageList";
import Status from "./status";
import styles from "../../css/carousel/carousel.css"

export default function Details (props) {
  return(
    <div style={styles.FeaturedContainer}>
      <div style={styles.FeaturedSelector}>
        <img style={styles.FeaturedImage} src="https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto,fl_lossy/6d99a6a4af5043898372a9210076dcc6_9366/NMD_R1_Shoes_Black_AQ0882_01_standard.jpg" alt=""/>
      </div>
      <ImageList product={props.product}/>
    </div>
  )
}