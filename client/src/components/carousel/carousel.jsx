import React, { Component } from "react";
import Featured from "./featured";
import ImageList from "./imageList";
import Status from "./status";
import styles from "../../css/carousel/carousel.css"

export default class Details extends Component {
  render(){
    return(
      <div style={styles.FeaturedContainer}>
        <div style={styles.FeaturedSelector}>
          <img style={styles.FeaturedImage} src="http://placekitten.com/800/800" alt=""/>
        </div>
      </div>
    )
  }
}