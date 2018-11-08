import React, { Component } from "react";
import styles from "../../css/completeLook.css"

export default function Options(props){
  return(
    <div className={styles.completeContent}>
      <div className={styles.completeSection}>
        <div className={styles.completeSelector}>
          <h4 className={styles.completeTitle}> COMPLETE THE LOOK</h4>
          <div className={styles.completeClothingSection}>
            <div className={styles.CompletClothingJustify}>
              <div className={styles.CompleteClothingItemSelector}>
                <div className={styles.CompleteClothingItemImage}>
                  <img className={styles.CompleteClothingItemPic} src="https://loremflickr.com/100/100?random=13" alt=""/>
                </div>
                <div className={styles.CompleteClothingItemDetails}>
                  <div className={styles.CompleteClothingDetailsValue}>
                    <span className={styles.CompleteClothingDetailsAmount}>$100</span>
                  </div>
                </div>
              </div>
              <div className={styles.CompleteClothingItemSelector}>
                <div className={styles.CompleteClothingItemImage}>
                  <img className={styles.CompleteClothingItemPic} src="https://loremflickr.com/100/100?random=14" alt=""/>
                </div>
                <div className={styles.CompleteClothingItemDetails}>
                  <div className={styles.CompleteClothingDetailsValue}>
                    <span className={styles.CompleteClothingDetailsAmount}>$100</span>
                  </div>
                </div>
              </div>
              <div className={styles.CompleteClothingItemSelector}>
                <div className={styles.CompleteClothingItemImage}>
                  <img className={styles.CompleteClothingItemPic} src="https://loremflickr.com/100/100?random=15" alt=""/>
                </div>
                <div className={styles.CompleteClothingItemDetails}>
                  <div className={styles.CompleteClothingDetailsValue}>
                    <span className={styles.CompleteClothingDetailsAmount}>$100</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
  )
}