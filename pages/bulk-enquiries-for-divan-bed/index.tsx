import PerPageLayout from "layout/perpage";
import Link from "next/link";
import React from "react";
import Styles from "styles/bulkenquiryfordivanbed/bulkenquiry.module.scss";
const BulkEnquiry = () => {
  return (
    <>
      <section className={Styles.bulksection}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>SHOP BY PRODUCT</h2>
              <h1>DIVAN BEDS & BASES</h1>
              <h1>MATTRESSES</h1>
              <h1>HEADBOARDS</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BulkEnquiry;

BulkEnquiry.getLayout = PerPageLayout;
