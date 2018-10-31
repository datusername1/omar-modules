import React, { Component } from "react";
import styles from "../../css/carousel/imageListItem.css"

export default function ImageListItem (props) {
  return(
    <div style={styles.ImageSection}>
      <img style={styles.ImagePic} src="http://placekitten.com/g/19/19" alt=""/>
    </div>
  )
}