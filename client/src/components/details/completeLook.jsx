import React, { Component } from "react";
import styles from "../../css/completeLook.css"

export default function Options(props){
  return(
    <div style={styles.completeContent}>
      <div style={styles.completeSection}>
        <div style={styles.completeSelector}>
          <h4 style={styles.completeTitle}> COMPLETE THE LOOK</h4>
          <div style={styles.completeClothingSection}>
            <div style={styles.CompletClothingJustify}>
              <div style={styles.CompleteClothingItemSelector}>
                <div style={styles.CompleteClothingItemImage}>
                  <img style={styles.CompleteClothingItemPic} src="http://placekitten.com/g/90/90" alt=""/>
                </div>
                <div style={styles.CompleteClothingItemDetails}>
                  <div style={styles.CompleteClothingDetailsValue}>
                    <span style={styles.CompleteClothingDetailsAmount}>$100</span>
                  </div>
                </div>
              </div>
              <div style={styles.CompleteClothingItemSelector}>
                <div style={styles.CompleteClothingItemImage}>
                  <img style={styles.CompleteClothingItemPic} src="http://placekitten.com/g/90/90" alt=""/>
                </div>
                <div style={styles.CompleteClothingItemDetails}>
                  <div style={styles.CompleteClothingDetailsValue}>
                    <span style={styles.CompleteClothingDetailsAmount}>$100</span>
                  </div>
                </div>
              </div>
              <div style={styles.CompleteClothingItemSelector}>
                <div style={styles.CompleteClothingItemImage}>
                  <img style={styles.CompleteClothingItemPic} src="http://placekitten.com/g/90/90" alt=""/>
                </div>
                <div style={styles.CompleteClothingItemDetails}>
                  <div style={styles.CompleteClothingDetailsValue}>
                    <span style={styles.CompleteClothingDetailsAmount}>$100</span>
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