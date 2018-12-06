import React, { Component } from 'react';
import styles from '../../css/carousel/imageListItem.css';

export default function ImageListItem(props) {
  return (
    <div
      id={props.i}
      onClick={e => this.activate(e)}
      className={styles.ImageSection}
    >
      <img
        onClick={e => props.setImage(e)}
        className={styles.ImagePic}
        src={props.image}
        alt=""
      />
    </div>
  );
}
