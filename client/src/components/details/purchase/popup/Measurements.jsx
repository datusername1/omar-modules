import React from 'react';
import styles from '../../../../css/purchase/popup/measurements.css';

export default function Measurements(props) {
  const instructions = [
    'Place a piece of paper on a hard floor with one nd to the wall. Stand on the piece of paper with the heel slightly touching the wall.',
    `Mark the end of your longest toe with a pencil for both feet. Tip: it's easier if you let someone help you with this.`,
    'Measure your marking from the wall (heel) to the longest toe for both feet. Take the larger of the two length values and compare it with your sizing chart, to define your shoedidas shoe size.',
  ];
  return (
    <div className={styles.desAndPicContainer}>
      <div className={styles.instructionsContainer}>
        {props.measurementPictures.map((pix, i) => (
          <div className={styles.picturesAndDescription}>
            <header className={styles.steps}>
              <span>heel-toe measurement</span>
              <span>{`${i + 1}/3`}</span>
            </header>
            <img className={styles.image} src={pix} />
            <div className={styles.instructions}>
              <p className={styles.stepsParagraph}>{instructions[i]}</p>
            </div>
          </div>
        ))}
      </div>
      <header>
        <h5>GETTING THE RIGHT FIT</h5>
        <p>For the best fit, measure your feet at the end of the day.</p>
      </header>
    </div>
  );
}
