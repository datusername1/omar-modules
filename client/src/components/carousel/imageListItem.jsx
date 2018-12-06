import React, { Component } from 'react';
import styles from '../../css/carousel/imageListItem.css';

export default function ImageListItem(props) {
  return (
    <div
      className={
        props.active === `image${props.i}`
          ? styles.ImageSectionActive
          : styles.ImageSection
      }
    >
      <img
        id={`image${props.i}`}
        onClick={e => props.setImage(e)}
        className={styles.ImagePic}
        src={props.image}
        alt=""
      />
    </div>
  );
}
