import React, { Component } from "react";
import styles from "../../css/feedback-style.css";
import RatingStar from '../../components/details/ratingStar';
import EmptyStarRating from '../../components/details/emptyRatingStar';

export default function Feedback(props) {
  return (
    <div>
      <div className={styles.detailsFeedback}>
        <span className={styles.ratings}>
          {console.log(props.product)}
          {
            [...Array(5)].map((e, i) => {
              if (i <= props.product.stars) {
                return <RatingStar key={i} />
              } else {
                return <EmptyStarRating key={i} />
              }
            })
          }
        </span>
        <span className={styles.detailReviews}>
          <a href="#">Read all {props.product.review_count} reviews</a>
        </span>
      </div>
      <div className={styles.productCategory}>
        <div className={styles.productCategoryItem}>{props.product.gender}'s {props.product.category}s</div>
      </div>
      <div><h1 className={styles.productName}>{props.product.name}</h1></div>
      <div className={styles.productPrice}>
        <span>${props.product.price}</span>
      </div>
    </div>
  )
}