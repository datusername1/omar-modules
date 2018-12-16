import React from 'react';
import styles from '../../../../css/purchase/popup/Popup.css';
import Measurements from './Measurements';
import { fakeSizeData } from '../../../../../../sample_data_generation_refactor/fakeSizes/fakeSizes';

export default function Popup(props) {
  console.log(fakeSizeData);
  const heelToes = fakeSizeData.heelToes;
  const men = fakeSizeData.men;
  const women = fakeSizeData.women;
  const uk = fakeSizeData.uk;
  const eu = fakeSizeData.eu;
  const jp = fakeSizeData.jp;
  const measurementPictures = fakeSizeData.measurementPictures;

  return (
    <div className={styles.popupInner}>
      <div className={styles.allSizeChart}>
        <section className={styles.mainSizeChart}>
          <header className={styles.headings}>
            <h3 className={styles.h3}>SIZE CHART</h3>
            <h4 className={styles.h4}>
              MEN'S AND WOMEN'S ADIDAS FOOTWEAR SIZING
            </h4>
            <h5 className={styles.h5}>FIND YOUR SIZE</h5>
            <a className={styles.scrollToImage}>Do you know how to measure?</a>
          </header>
          <div className={styles.sizeChartContainer}>
            <table className={styles.sizeChartMainTr}>
              <tbody>
                <tr className={styles.sizeChartMainTitle}>
                  HEEL-TOE MEASUREMENT
                </tr>
                <tr className={styles.sizeChartMainTitle}>US - MEN'S</tr>
                <tr className={styles.sizeChartMainTitle}>US - WOMEN'S</tr>
                <tr className={styles.sizeChartMainTitle}>UK</tr>
                <tr className={styles.sizeChartMainTitle}>EU</tr>
                <tr className={styles.sizeChartMainTitle}>JP</tr>
              </tbody>
            </table>
            <div className={styles.sizeListScrollContainer}>
              <table className={styles.sizeListScroll}>
                <tbody>
                  <tr>
                    {heelToes.map(size => (
                      <td className={styles.sizeBlocks}>{`${size}"`}</td>
                    ))}
                  </tr>
                  <tr>
                    {men.map(size => (
                      <td className={styles.sizeBlocks}>{size}</td>
                    ))}
                  </tr>
                  <tr>
                    {women.map(size => (
                      <td className={styles.sizeBlocks}>{size}</td>
                    ))}
                  </tr>
                  <tr>
                    {uk.map(size => (
                      <td className={styles.sizeBlocks}>{size}</td>
                    ))}
                  </tr>
                  <tr>
                    {eu.map(size => (
                      <td className={styles.sizeBlocks}>{size}</td>
                    ))}
                  </tr>
                  <tr>
                    {jp.map(size => (
                      <td className={styles.sizeBlocks}>{size}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section className={styles.headings2}>
          <p className={styles.sizeP}>Scroll horizontally to see more.</p>
          <header className={styles.headings}>
            <h5 className={styles.h5}> IN BETWEEN SIZES? </h5>
            <p classNAme={styles.p}>For tight fit, go one size down.</p>
            <p classNAme={styles.p}>For loose fit, go one size up.</p>
            <h5 className={styles.h5}>NOT THE RIGHT SIZE OR COLOR?</h5>
            <p classNAme={styles.p}>No problem, return for free.</p>
          </header>
        </section>
        <div className={styles.howToMeasure}>
          <h5 className={styles.h5}>HOW TO MEASURE</h5>
          <section>
            <Measurements measurementPictures={measurementPictures} />
          </section>
        </div>
        <button className={styles.button} onClick={props.renderPopup}>
          X
        </button>
      </div>
    </div>
  );
}

// https://www.adidas.com/glass/assets/img/size-charts/shoes/img-adidas-shoes-1.png
// https://www.adidas.com/glass/assets/img/size-charts/shoes/img-adidas-shoes-2.png
// https://www.adidas.com/glass/assets/img/size-charts/shoes/img-adidas-shoes-3.png
