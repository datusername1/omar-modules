import React, { Component } from "react";
import ImageList from "./imageList";
import Status from "./status";
import styles from "../../css/carousel/carousel.css"

export default function Details (props) {
  return(
    <div style={styles.FeaturedContainer}>
      <div style={styles.FeaturedSelector}>
        <img  style={styles.FeaturedImage} className="featuredImage" src={props.featured} alt=""/>
      </div>
      <ImageList product={props.product} images={props.images}/>
    </div>
  )
}