import PerPageLayout from "layout/perpage";
import React from "react";
import styles from "styles/return-policy/returnpolicy.module.scss";
import Link from "next/link";
import NextSEO from "layout/nextseo";
import { useRouter } from "next/router";
const ReturnPolicy = () => {
  const router = useRouter();
  return (
    <>
      <NextSEO
        title={"Return Policy | Beds Divans"}
        description={
          "Our company has a 30-day return policy. We are unable to provide you with a refund or exchange if 30 days have passed since your purchase."
        }
        canonicalUrl={`${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`}
      />
      <section className={styles.returnpolicysection}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Return Policy</h1>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.returnpolicysection1}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* <p>
                DUE TO COVID-19 WE CANNOT ACCEPT ANY RETURNS OF ITEMS BEING
                OPENED OR USED.
              </p> */}
              <p>
                To complete your return, we require a receipt or proof of
                purchase. This could be through a form of email or invoice. Any
                returns must be approved by DBZKHAN LTD (BedsDivans) before any
                return is made. Our sales teams are always here to help you with
                any enquirers.
              </p>
              <p>
                Please do not send your purchase back to the manufacturer before
                a booking is made as this will delay the process.
              </p>
              <p>
                Our policy lasts 30 days. If 30 days have gone by since your
                purchase, we can’t offer you a refund or exchange. To be
                eligible for a return, your item must be unused and in the same
                condition that you received it. It must also be in the original
                packaging. So, you must make sure that the base bag is kept in
                good condition.
              </p>
              <p>
                Please ensure you clearly mark your name, order number, and full
                address, so that we can process your return for you. Use a
                tracking service so we can safely receive your returned item.
              </p>
              <p>
                Any cancellations after 48 hours will incur a £30.00
                cancellation fee. Please note if any items are no longer wanted
                within 30 days, and a change of mind occurs, you must return the
                item to us at your own cost or pay a collection fee of £62.
              </p>
              <h3>Refunds (if applicable) </h3>
              <p>
                Once your return is received and inspected, we will send you an
                email to notify you that we have received your returned item. We
                will also notify you of the approval or rejection of your
                refund.
              </p>
              <p>
                If approved, your refund will be processed and a credit will
                automatically be applied to your original method of payment.
              </p>
              <h3>Late or missing refunds (if applicable)</h3>
              <p>
                If you haven’t received a refund yet, first check your bank
                account again, or credit card company. It may take some time
                before your refund is officially processed.
              </p>
              <p>
                If you’ve done all of this and you still have not received your
                refund yet, please contact us on the email link provided on our
                website.
              </p>
              <h3>Exchanges (if applicable) </h3>
              <p>
                We only replace items if they are defective or damaged. If you
                need to exchange it for the same item, send us an email or call
                the office to arrange the collection.
              </p>
              <p>
                You will be responsible for paying for your own shipping costs
                for returning your item. Shipping costs are non-refundable. If
                you receive a refund, the cost of return shipping will be
                deducted from your refund.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ReturnPolicy;

ReturnPolicy.getLayout = PerPageLayout;
