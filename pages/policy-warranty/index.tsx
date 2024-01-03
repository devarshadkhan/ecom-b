import PerPageLayout from "layout/perpage";
import React from "react";
import Link from "next/link";
import styles from "styles/policy-warranty/policywarranty.module.scss";
import NextSEO from "layout/nextseo";
import { useRouter } from "next/router";
const PolicyWarranty = () => {
  const router = useRouter();
  return (
    <>
      <NextSEO
        title={"Policy & Warranty | Beds Divans"}
        description={
          "At Beds Divans purchased separately come with a 30-day exchange warranty and You can make any changes within 48 hours of placing your order      "
        }
        canonicalUrl={`${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`}
      />
      <section className={styles.mainsection}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Policy & Warranty</h1>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.policywarranty}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Warranty</h3>

              <p>
                <strong>Beds Sets: </strong> You will receive a full one-year
                exchange guarantee with a full bed set (like for like).
              </p>
              <p>
                <strong> Beds Sets: </strong> Purchased separately come with a
                30-day exchange warranty.
              </p>
              <p>
                {" "}
                <strong> Mattresses : </strong> Purchased separately come with a
                30-day exchange warranty.
              </p>
              <h3>Refunds, Returns and Exchanges</h3>
              <p>
                <strong>Changing your order</strong> You can make any changes
                within 48 hours of placing your order, such as colour, bed size
                and quantity.
              </p>
              <p>
                <strong>Cancelling your order</strong> If you wish to cancel
                your order, please either call or email us to discuss further.
              </p>
              <p>
                To complete your return, we require proof of purchase. This
                could be an order confirmation or invoice.
              </p>
              <p>
                Refunds take 5-7 working days to the original method of payment,
                depending on your bank.
              </p>
              <h3>Returns after delivery</h3>
              <p>You can return your order within 30 days after delivery.</p>
              <p>
                Items can be returned if the item is unused, in its original
                condition and in its original packaging.
              </p>
              <p>
                Items can be returned at your own cost, or we can arrange for
                collection with one of our drivers. The collection is subject to
                a courier charge of £62.
              </p>
              <p>
                Please ensure you use a tracking service if you are returning
                items at your own cost so we can safely receive your returned
                item. The item must clearly contain your name, order number and
                full address so that we can process your return.
              </p>
              <p>
                All returns must be approved by DBZKHAN LTD before any return is
                processed. Once your return is received and inspected, we will
                send you an email to notify you that we have received your
                returned item. You will then receive an email notifying you of
                the approval or rejection of your refund.
              </p>
              <p>
                <strong>What if my item doesn’t fit?</strong> It is your
                responsibility to make sure you carefully check the measurements
                before placing your order. If the item has been delivered and
                does not fit, you are liable for returning the item back or
                arranging collection subject to a courier charge of £62 in its
                original condition and in its original packaging, for a refund
                to be processed.
              </p>
              <p>
                <strong>Faulty products</strong> Our products are handled with
                care and usually arrive in good condition. If your item is
                faulty this must be reported within 24-48 hours of receiving
                your delivery.
              </p>
              <p>
                Reported faults will result in a dispute claim which require
                photographic evidence for our friendly after sales team to
                resolve the issue.
              </p>
              <h3>Refunds</h3>
              <p>
                If your return is approved, a refund will be processed, and a
                credit will automatically be applied to your original method of
                payment within 5-7 working days depending on your bank. We want
                you to be satisfied with your purchase. If you aren’t, we’d like
                to help. Please contact us on info@bedDivans.co.uk
              </p>
              <h3>Exchanges</h3>
              <p>
                If for any reason you are not satisfied with your bed purchase
                regarding manufacturing purposes, then we are more than happy to
                offer an exchange.
              </p>
              <h3>Klarna Payment Privacy Policy</h3>
              <p>
                If you wish to use Klarna’s payment methods to pay for your
                goods, then your personal data will be passed on to Klarna.
              </p>
              <p>
                This is for Klarna to assess your individual eligibility and
                criteria subject to a credit check. This process enables Klarna
                to establish what would be a suitable payment method to suit
                your individual needs.
              </p>
              <p>
                Therefore, please be aware, this is all subject to your personal
                data transferred to Klarna in line with Klarna’s own privacy
                notice.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PolicyWarranty;

PolicyWarranty.getLayout = PerPageLayout;
