import React, { Component } from "react";
import styles from "../../css/feedback-style.css";

export default function Feedback(props) {
  return(
    <div>
      <div style={styles.detailsFeedback}>
        <div>
          <span style={styles.ratings}>
            <img style={styles.ratingStar} src="star.svg" alt=""/>
            <img style={styles.ratingStar} src="star.svg" alt=""/>
            <img style={styles.ratingStar} src="star.svg" alt=""/>
            <img style={styles.ratingStar} src="star.svg" alt=""/>
            <img style={styles.ratingStar} src="star.svg" alt=""/>
          </span>
          <span style={styles.detailReviews}>
            <a href=".">Read all {props.product.review_count} reviews</a>
          </span>
        </div>
      </div>
      <div style={styles.productCategory}>  
        <div  style={styles.productCategoryItem}>{props.product.category}</div>
      </div>
      <h1 style={styles.productName}>{props.product.name}</h1>
      <div>
        <span>${props.product.price}</span>
      </div>
    </div>
  )
}