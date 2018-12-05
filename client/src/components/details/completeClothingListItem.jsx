import React from "react";
import styles from "../../css/completeLook.css";

export default function CompleteClothingListItem(props) {
  return (
    <div className={styles.CompleteClothingItemSelector}>
      <div className={styles.CompleteClothingItemImage}>
        <img className={styles.CompleteClothingItemPic} src={props.product.featured} alt="" />
      </div>
      <div className={styles.CompleteClothingItemDetails}>
        <div className={styles.CompleteClothingDetailsValue}>
          <span className={styles.CompleteClothingDetailsAmount}>${props.product.price}</span>
        </div>
      </div>
    </div>
  )
}

