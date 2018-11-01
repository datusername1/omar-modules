import React, { Component } from "react";
import styles from "../css/breadcrums.css"

export default function Breadcrums (props) {
  return(
    <div style={styles.breadcrums}>
      <div style={styles.breadcrumsSection}>
        <ol style={styles.breadCrumsList}>
          <li style={styles.breadcrumListItemSection}>
            <button style={styles.breadcrumListItemButton}>
              <img style={styles.breadCrumListItemImage} src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-back-512.png" alt=""/>
              <span style={styles.breadCrumBack}>Back</span>
            </button>
          </li>
          <li style={styles.breadcrumListItemSection}>
            <a style={styles.breadCrumMainItem} href="">
              <span>Home</span>
            </a>
          </li>
          <span style={styles.breadCrumMainItemSeperator}>\</span>
          <li style={styles.breadcrumListItemSection}>
            <a style={styles.breadCrumMainItem} href="">
              <span>Mens</span>
            </a>
          </li>
          <span style={styles.breadCrumMainItemSeperator}>\</span>
          <li style={styles.breadcrumListItemSection}>
            <a style={styles.breadCrumMainItem} href="">
              <span>Shoes</span>
            </a>
          </li>
          <span style={styles.breadCrumMainItemSeperator}>\</span>
          <li style={styles.breadcrumListItemSection}>
            <a style={styles.breadCrumMainItem} href="">
              <span>Shoe Name</span>
            </a>
          </li>
          
        </ol>
      </div>
    </div>
  )
}