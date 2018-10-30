import React, { Component } from "react";
import styles from "../../../css/purchase/sizeQuantity.css"

export default function SizeQuantity(props){
  return(
    <div style={styles.sizeQuantitySize}>
      <div style={styles.sizeQuantitySelector}>
        <div style={styles.SizeQuantityBox}>
          <span>SELECT SIZE</span>
          <img style={styles.SizeQuantityIcon} src="http://icons-for-free.com/free-icons/png/512/308964.png" alt=""/>
        </div>
      </div>
    </div>
  )
}