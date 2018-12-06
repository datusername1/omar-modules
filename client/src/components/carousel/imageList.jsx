import React, { Component } from 'react';
import ImageListItem from './imageListItem';
import styles from '../../css/carousel/imageList.css';

export default function Option(props) {
  return (
    <div>
      <div className={styles.ImageList}>
        <div className={styles.ImageTemplate}>
          <button className={styles.ImageTempalateButton}>
            <img className={styles.ImageTemplateImage} src="" alt="" />
          </button>
        </div>
        {props.images.map((image, index) => (
          <div key={image}>
            <ImageListItem
              i={index}
              active={props.active}
              setImage={props.setImage}
              image={image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
