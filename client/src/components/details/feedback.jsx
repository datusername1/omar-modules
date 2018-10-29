import React, { Component } from "react";

export default function Feedback(props) {
  return(
    <div>
      <div className="details-feedback">
        <div>
          <span className="ratings">
            <img className="rating-star" src="star.svg" alt=""/>
            <img className="rating-star" src="star.svg" alt=""/>
            <img className="rating-star" src="star.svg" alt=""/>
            <img className="rating-star" src="star.svg" alt=""/>
            <img className="rating-star" src="star.svg" alt=""/>
          </span>
          <span className="detail-reviews">
            <a href=".">Read all {props.product.review_count} reviews</a>
          </span>
        </div>
      </div>
      <div className="product-category">  
        <div className="product-category-item">{props.product.category}</div>
      </div>
      <h1 className="product-name">{props.product.name}</h1>
      <div>
        <span>${props.product.price}</span>
      </div>
    </div>
  )
}