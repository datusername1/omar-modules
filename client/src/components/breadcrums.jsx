import React, { Component } from "react";
import styles from "../css/breadcrums.css";
import appStyles from "../css/app-style.css";

export default function Breadcrums(props) {
  return (
    <div className={styles.breadcrums}>
      <div className={styles.breadcrumsSection}>
        <ol className={styles.breadCrumsList}>
          <li className={styles.breadcrumListItemSection}>
            <button className={[styles.breadcrumListItemButton, appStyles.link].join(' ')}>
              <img className={styles.breadCrumListItemImage} src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-back-512.png" alt="" />
              <a className={[styles.breadCrumMainItem, appStyles.link].join(' ')}>Back</a>
            </button>
          </li>
          <li className={styles.breadcrumListItemSection}>
            <a className={[styles.breadCrumMainItem, appStyles.link].join(' ')} href="">
              <span>Home</span>
            </a>
          </li>
          <span className={styles.breadCrumMainItemSeperator}>/</span>
          <li className={styles.breadcrumListItemSection}>
            <a className={[styles.breadCrumMainItem, appStyles.link].join(' ')} href="">
              <span>{props.product.gender}'s</span>
            </a>
          </li>
          <span className={styles.breadCrumMainItemSeperator}>/</span>
          <li className={styles.breadcrumListItemSection}>
            <a className={[styles.breadCrumMainItem, appStyles.link].join(' ')} href="">
              <span>{props.product.category}s</span>
            </a>
          </li>
          <span className={styles.breadCrumMainItemSeperator}>/</span>
          <li className={styles.breadcrumListItemSection}>
            <a className={[styles.breadCrumMainItem, appStyles.link].join(' ')} href="">
              <span>{props.product.name}</span>
            </a>
          </li>

        </ol>
      </div>
    </div>
  )
}