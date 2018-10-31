import React, { Component } from "react";
import styles from "../../css/checkmark.css"

export default function Checkmark(props){
  return(
    <div style={styles.CheckmarkSelector}>
      <img style={styles.CheckmarkIcon} src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/google/56/white-heavy-check-mark_2705.png" alt=""/>
    </div>
  )
}