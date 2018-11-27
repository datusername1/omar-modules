import React, { Component } from "react";
import styles from "../../css/completeLook.css"
import CompleteClothingListItem from "./completeClothingListItem.jsx"

export default function Options(props) {
  return (
    <div className={styles.completeContent}>
      <div className={styles.completeSection}>
        <div className={styles.completeSelector}>
          <h4 className={styles.completeTitle}> COMPLETE THE LOOK</h4>
          <div className={styles.completeClothingSection}>
            <div className={styles.CompletClothingJustify}>
              {props.relatedProducts.map((product) => {
                return <CompleteClothingListItem product={product} />
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}