import React, { Component } from "react";
import styles from "../../../css/purchase/addToBag.css"

export default function AddToBag(props){
  return(
    <div style={styles.AddToBag}>
      <button style={styles.AddToBagButton}>
        Add To Bag
        <img style={styles.AddTOBagIcon} src="http://www.clker.com/cliparts/c/3/0/7/12456877162087486429Soeb_Plain_Arrow_7.svg.med.png" alt=""/>
      </button>
      <div style={styles.AddToBagFavorite}>
        <div style={styles.AddToFavoriteSelector}>
          <img style={styles.AddToFavoriteIcon} src="https://cdn3.iconfinder.com/data/icons/pyconic-icons-1-2/512/heart-outline-512.png" alt=""/>
        </div>
      </div>
    </div>
  )
}