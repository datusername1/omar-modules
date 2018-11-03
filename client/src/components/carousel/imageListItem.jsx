import React, { Component } from "react";
import styles from "../../css/carousel/imageListItem.css"

export default function ImageListItem (props) {
  return(
    <div style={styles.ImageSection}>
      <img style={styles.ImagePic} src={props.image} alt=""/>
    </div>
  )
}