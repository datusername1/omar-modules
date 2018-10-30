import React, { Component } from "react";
import styles from "../../css/options-style.css"

export default function Options(props){
  return(
    <div style={styles.OptinoSection}>
      <h5 style={styles.OptionTitle}>
        AVAILABLE COLORS
      </h5>
      <div style={styles.OptionColorList}>
        {props.product.colors}
      </div>
    </div>
  )
}