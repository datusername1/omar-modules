import React, { Component } from "react";
import styles, { ShippingImage } from "../../../css/purchase/shipping.css"

export default function Shipping(props){
  return(
    <div style={styles.ShippingSection}>
      <div style={styles.ShippingSelector}>
        <div style={styles.ShippingIconSelector}>
          <div style={styles.ShippingIconBox}>
            <img style={styles.ShippingImage} src="https://upload.wikimedia.org/wikipedia/commons/7/70/Checkmark_Symbol.svg" alt=""/>
          </div>
          <div style={styles.ShippingStatus}>
            <div style={styles.ShippingStatusMessage}>
              Free Shipping and free returns
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}