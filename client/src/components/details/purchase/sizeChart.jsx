import React, { Component } from "react";
import styles from "../../../css/purchase/sizeChart.css"

export default function SizeChart(props){
  return(
    <div style={styles.sizeChartItem} >
      <img style={styles.sizeChartIcon} src="https://png.icons8.com/metro/1600/ruler.png" alt=""/>
      <a href="">Size Chart</a>
    </div>
  )
}