import React, { Component } from "react";
import styles from "../../../css/purchase/sizeChart.css"
import appStyles from "../../../css/app-style.css"

export default function SizeChart(props) {
  return (
    <div className={styles.sizeChartItem} >
      <img className={styles.sizeChartIcon} src="https://png.icons8.com/metro/1600/ruler.png" alt="" />
      <a href="" class={appStyles.link}>Size Chart</a>
    </div>
  )
}