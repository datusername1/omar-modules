import React, { Component } from "react";
import ImageList from "./imageList";
import Status from "./status";
import styles from "../../css/carousel/carousel.css"

export default function Details (props) {
  return(
    <div style={styles.FeaturedContainer}>
      <div style={styles.FeaturedSelector}>
        <img style={styles.FeaturedImage} src="http://placekitten.com/800/800" alt=""/>
      </div>
      <ImageList product={props.product}/>
    </div>
  )
}