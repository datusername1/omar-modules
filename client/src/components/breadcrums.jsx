import React, { Component } from "react";
import styles from "../css/breadcrums.css"

export default function Breadcrums (props) {
  return(
    <div className={styles.breadcrums}>
      <div className={styles.breadcrumsSection}>
        <ol className={styles.breadCrumsList}>
          <li className={styles.breadcrumListItemSection}>
            <button className={styles.breadcrumListItemButton}>
              <img className={styles.breadCrumListItemImage} src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-back-512.png" alt=""/>
              <span className={styles.breadCrumBack}>Back</span>
            </button>
          </li>
          <li className={styles.breadcrumListItemSection}>
            <a className={styles.breadCrumMainItem} href="">
              <span>Home</span>
            </a>
          </li>
          <span className={styles.breadCrumMainItemSeperator}>\</span>
          <li className={styles.breadcrumListItemSection}>
            <a className={styles.breadCrumMainItem} href="">
              <span>Mens</span>
            </a>
          </li>
          <span className={styles.breadCrumMainItemSeperator}>\</span>
          <li className={styles.breadcrumListItemSection}>
            <a className={styles.breadCrumMainItem} href="">
              <span>Shoes</span>
            </a>
          </li>
          <span className={styles.breadCrumMainItemSeperator}>\</span>
          <li className={styles.breadcrumListItemSection}>
            <a className={styles.breadCrumMainItem} href="">
              <span>Shoe Name</span>
            </a>
          </li>
          
        </ol>
      </div>
    </div>
  )
}