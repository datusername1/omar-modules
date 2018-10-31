import React, { Component } from "react";
import ImageListItem from "./imageListItem"
import styles from "../../css/carousel/imageList.css"

export default function Option (props) {
  return(
    <div>
      <div style={styles.ImageList}>
        <div style={styles.ImageTemplate}>
          <button style={styles.ImageTempalateButton}>
            <img style={styles.ImageTemplateImage} src="" alt=""/>
          </button>
        </div>
        <ImageListItem product={props.product}/>
        <ImageListItem product={props.product}/>
        <ImageListItem product={props.product}/>
        <ImageListItem product={props.product}/>
        <ImageListItem product={props.product}/>
        <ImageListItem product={props.product}/>
        <ImageListItem product={props.product}/>
      </div>
    </div>
  )
}