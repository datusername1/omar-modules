import React, { Component } from "react";
import styles from "../../css/carousel/imageListItem.css"

export default function ImageListItem (props) {
  return(
    <div className={styles.ImageSection}>
      <img className={styles.ImagePic} src={props.image} alt=""/>
    </div>
  )
}