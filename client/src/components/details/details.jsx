import React, { Component } from "react";
import Feedback from "./feedback";
import Options from "./options";
import Purchase from "./purchase";
import style from "../../css/details-style.css"

export default class Details extends Component {

  render(){
    return(
      <div style={style.detailsProduct}>
        {/* <div style={style.detailsCapsule}> */}
          <div style={style.detailsInformation}>
            <Feedback product={this.props.product}/>
          </div>
          <Options product={this.props.product}/>
          <Purchase product={this.props.product}/>
        {/* </div> */}
      </div>
    )
  }
}