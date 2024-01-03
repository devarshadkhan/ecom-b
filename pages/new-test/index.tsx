import React, { useState } from "react";
import styles from "../../styles/newstyle.module.scss";

function AmazonPayNew() {
  const [openPop, setOpenPop] = useState(false);
  const handlerState = () => {
    setOpenPop(false);
  };
  return (
    <>
      <section>
        <div className={styles.AmazonContainer}>
          <h1>Amazzon pay Payment</h1>

          <ul>
            <li>Test Case First</li>
            <li>Test Case Second</li>
            <li>Test Case </li>
          </ul>
        </div>
      </section>
    </> 
  );
}

export default AmazonPayNew;
