import PerPageLayout from "layout/perpage";
import React from "react";
import Link from "next/link";
import styles from "styles/policy-warranty/policywarranty.module.scss";
import NextSEO from "layout/nextseo";
import { useRouter } from "next/router";
const DeliverAndShipping = () => {
  const router = useRouter();
  return (
    <>
      <NextSEO
        title={"Delivery & Shipping Policy | Beds Divans        "}
        description={
          "We will send you an order confirmation email and call you within 2-3 days of placing your order to confirm your order and delivery date.        "
        }
        canonicalUrl={`${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`}
      />
      <section className={styles.mainsection}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Delivery & Shipping Policy</h1>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.policywarranty}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Delivery</h3>
              <p>
                Once you have successfully placed your order, you’ll receive an
                order confirmation via email. Please ensure you provide the
                correct contact number for the couriers to contact you regarding
                delivery
              </p>
              <p>
                We deliver to UK mainland. Off shore deliveries can take 7-14
                days which may be an additional charge depending on the
                postcode.
              </p>
              <p>
                Standard Free UK Delivery is within working 2-5 working days.
              </p>
              <p>
                If you wish to cancel your order please provide us with 48 hours
                notice
              </p>
              <h3>Shipping</h3>
              <p>
                Orders are dispatched within 24-48 hours upon receiving the
                order.
              </p>
              <p>
                We provide the very best two-man home delivery in the UK
                provided by our couriers BJS.
              </p>
              <h3>Customers can expect:</h3>
              <ul>
                <li>Call to arrange a suitable delivery time</li>
                <li>Three hour delivery window</li>
                <li>Pre-delivery courtesy call prior to arrival</li>
                <li>
                  Delivering to a room of choice, carefully, safely and without
                  damage or fuss.
                </li>
                <li>Smiles on their doorstep, whatever the weather</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DeliverAndShipping;

DeliverAndShipping.getLayout = PerPageLayout;
