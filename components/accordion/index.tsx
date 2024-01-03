import MinusIcon from "icons/MinusIcon";
import PlusIcon from "icons/PlusIcon";
import React from "react";
import styles from "styles/divanbedbirmingham/divanbedbirmingham.module.scss";

const Accordion = () => {
  return (
    <section className={styles.faqaccordion}>
      <div className={`${styles.mwfullesd} container`}>
        <div className="row">
          <div className="col-12">
            <div className={styles.accordion1}>
              <List
                question={<li>How to place an order?</li>}
                answer={
                  <p>
                    Select the best divan bed and{" "}
                    <strong>bed sale in Birmingham</strong> of your choice.
                    Then, shortlist details like size, storage options, feet
                    type, headboard options, mattress, and color. Press add to
                    basket. Go to your basket, enter your personal details and
                    select payment option to place an order.
                  </p>
                }
              />
              <List
                question={<li>Why my order hasn’t been delivered yet?</li>}
                answer={
                  <p>
                    We usually deliver orders in 4-5 business days. Due to
                    unexpected reasons, your order might get delayed. So, we
                    recommend you to call our customer support and drop us an
                    email.
                  </p>
                }
              />
              <List
                question={<li>How to cancel an order placed?</li>}
                answer={
                  <p>
                    Within 24 hours of order placement, a customer can cancel or
                    revoke the order.
                  </p>
                }
              />
              <List
                question={<li>What if I receive a wrong order?</li>}
                answer={
                  <p>
                    If you have received a wrong order, we recommend you to
                    reach out to us and lodge a complaint at our customer care
                    center.
                  </p>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accordion;

interface List {
  question?: React.ReactNode;
  answer?: React.ReactNode;
}

const List = ({ answer, question }: List) => {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <ul onClick={() => setOpen(!open)}>
        <li>
          <PlusIcon size={50} color="#7a7a7a" />
        </li>
        {question}
      </ul>
      <div
        className={styles.accordioncontent}
        style={{
          overflow: "hidden",
          transition: "all 200ms ease 0s",
          maxHeight: open ? "100px" : "0px",
        }}
      >
        {answer}
      </div>
    </React.Fragment>
  );
};
