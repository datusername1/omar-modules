import React, { Component } from "react";
import styles, { ShippingImage } from "../../../css/purchase/shipping.css"

export default function Shipping(props){
  return(
    <div className={styles.ShippingSection}>
      <div className={styles.ShippingSelector}>
        <div className={styles.ShippingIconSelector}>
          <div className={styles.ShippingIconBox}>
            <img className={styles.ShippingImage} src="https://upload.wikimedia.org/wikipedia/commons/7/70/Checkmark_Symbol.svg" alt=""/>
          </div>
          <div className={styles.ShippingStatus}>
            <div className={styles.ShippingStatusMessage}>
              Free Shipping and free returns
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}