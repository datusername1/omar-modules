import React, { Component } from "react";
import styles from "../../css/options-style.css"
import Checkmark from "./checkmark"

export default function Options(props){
  return(
    <div style={styles.OptinoSection}>
      <h5 style={styles.OptionTitle}>
        AVAILABLE COLORS
      </h5>
      <div style={styles.OptionColorList}>
        {props.product.colors}
      </div>
      <div style={styles.OptionColorSection}>
        <div style={styles.OptionsColorIcons}>
          <div style={styles.OptionsColorIconItem}>
            <Checkmark />
            <a style={styles.OptionsColorIconBackground} href="">
              <div style={styles.OptionsColorsIconsPic}></div>
            </a>
          </div>
          <div style={styles.OptionsColorIconItem}>
            <a style={styles.OptionsColorIconBackground} href="">
              <div style={styles.OptionsColorsIconsPic}></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}