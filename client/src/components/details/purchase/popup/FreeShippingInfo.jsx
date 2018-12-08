import React from 'react';
import styles from '../../../../css/purchase/popup/freeShipping-style.css';

export default function FreeShippinginfo(props) {
  return (
    <div className={styles.freeShippingInner}>
      <section className={styles.shippingInfo}>
        <h3 className={styles.h3}>FREE SHIPPING AND FREE RETURNS</h3>
        <p>
          This limited time free shipping offer is good for free shipping,
          discount applied at checkout. See delivery method in checkout for
          estimated delivery date. Offer does not apply to adidas gift cards and
          mi adidas customizations. Valid on domestic U.S. orders only. adidas
          reserves the right to change or end promotions at any time.
        </p>
        <p>
          If you are not completely satisfied with your shoedidas.com purchase,
          for any reason, we will offer you a free return within 30 days of
          purchase.*
        </p>
        <p>
          *Because custom and personalized mi shoedidas products are made just
          for you, they are not returnable.
        </p>
        <p>
          *Hype products such as ShoeYeezy should be returned via the online
          returns portal within 7 days of the delivery date. In the process of
          ordering these hype products the 7 day returns window will be
          communicated on the product page.
        </p>
        <p>
          Please note to utilize free returns on shoedidas.com, the package must
          be sent from physically within the United States. Please note that the
          return label is not valid through USPS for APO/FPO returns. Check out
          our Return Policy for more details.
        </p>
      </section>
      <button onClick={props.shippingPopup} className={styles.button}>
        X
      </button>
    </div>
  );
}
