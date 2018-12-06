import React, { Component } from 'react';
import styles from '../../css/carousel/imageListItem.css';

export default function ImageListItem(props) {
  return (
    <div className={styles.ImageSection}>
      <img
        onClick={e => props.setImage(e)}
        className={styles.ImagePic}
        src={props.image}
        alt=""
      />
    </div>
  );
}
