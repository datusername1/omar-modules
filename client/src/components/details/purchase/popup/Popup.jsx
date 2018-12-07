import React from 'react';
import styles from '../../../../css/purchase/popup/Popup.css';
import { fakeSizeData} from '../../../../../../sample_data_generation_refactor/fakeSizes/fakeSizes';

export default function Popup(props) {

  const 
  return (
    <div className={styles.popupInner}>
      <div>Hello</div>
      <button className={styles.button} onClick={props.renderPopup}>
        X
      </button>
    </div>
  );
}
