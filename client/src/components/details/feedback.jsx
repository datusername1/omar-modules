import React, { Component } from "react";

export default class Feedback extends Component {
  render(){
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
              <a href=".">Read all {this.props.product.review_count} reviews</a>
            </span>
          </div>
        </div>
        <div className="product-category">  
          <div className="product-category-item">{this.props.product.category}</div>
        </div>
        <h1 className="product-name">{this.props.product.name}</h1>
        <div>
          <span>${this.props.product.price}</span>
        </div>
      </div>
    )
  }
}