/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import styles from "styles/finance/finances.module.scss";
import PerPageLayout from "layout/perpage";

const Finance = () => {
  return (
    <>
      <section className={styles.wholesection}>
        <div className={styles["mainsection"]}>
          <div className={styles["column1"]}>
            <h1>
              SEE IT.
              <br />
              WANT IT.
              <br />
              <strong>SNAP IT.</strong>
            </h1>
            <img src="/img/finance-page-img/pink-line.svg" alt="" />
            <p>Flexible repayment options to suit you</p>
            <h3>
              Representative 39.9%
              <br />
              APR
            </h3>
            <i className={styles.butona}>
              <Link
                href="https://consumer.snapfinance.co.uk/#/?mid=18181156&source=SMS"
                className={styles.butonatag}
              >
                Check eligibility
              </Link>
            </i>
          </div>
          <div className={styles["column2"]}>
            <img src="/img/finance-page-img/Homeware.webp" alt="img" />
          </div>
        </div>
        <div className={styles["mainsection2"]}>
          <p>
            Flexible repayment options available. Choose weekly, fortnightly,
            every four weeks or monthly
          </p>
          <p className={styles["exampletxt"]}>
            Representative Example: Cost of Goods £1200, Deposit £50, Amount of
            Credit £1,150, Annual Fixed Interest Rate 34.04%, Monthly Payment
            £51.75, Term 36 months, Total Payable £1913.00, Representative 39.9%
            APR.
          </p>
        </div>
        <div className={styles["mainsection3"]}>
          <div className={styles["container"]}>
            <h1>Who are Snap?</h1>
            <strong>
              Snap Finance allows you to shop now and pay later, by spreading
              the cost over time.
            </strong>
            <p>
              Shop today, with the flexibility to spread the cost up to 36
              months, in line with your budget.
            </p>
          </div>
        </div>
        <div className={styles["mainsection4"]}>
          <div className={styles["container"]}>
            <div className={styles["mydiv"]}>
              <div className={styles["column1"]}>
                <h2>
                  Snap Finance helps you spread the <br />
                  cost
                </h2>
                <p>
                  When you qualify for Snap Finance, you can choose to pay your
                  balance off in 4 months, over the full term, or call up and
                  make early repayments. Whether you spread the cost over 4 or
                  36 months, you are in control.
                </p>
                <p>
                  Pay in 4 - Should you pay off your balance in 4 months, Snap
                  will cancel any interest you owe.*
                </p>
                <p className={styles.intrest}>
                  *Interest is charged from the day your loan starts and will
                  only be cancelled if you pay off the amount of credit advanced
                  within the Pay in 4 Period.
                </p>
              </div>
              <div className={styles.column2}>
                <span>
                  {" "}
                  <img
                    src="/img/finance-page-img/woman-on-couch.webp"
                    alt="couth"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mainsection5}>
          <div className={styles.container}>
            <div className={styles.mydiv}>
              <div className={styles.column2}>
                <img
                  src="/img/finance-page-img/woman-on-phone.webp"
                  alt="phone"
                />
              </div>
              <div className={styles.column1}>
                <h2>Why choose Snap?</h2>
                <ul>
                  <li>Loans are available from £250 - £4,500</li>
                  <li>
                    Check your eligibility without affecting your credit score.
                    <br />
                    <span>
                      Please note: A hard credit search will be required at the
                      point of completion of your loan.
                    </span>
                  </li>
                  <li>Snap will tell you how much you can borrow instantly.</li>
                  <li>
                    Help and support will always be available via phone, email,
                    or SMS.
                  </li>
                  <li>Get access to the best products at fair prices.</li>
                  <li>
                    Join the thousands of customers already using Snap Finance.
                  </li>
                  <li>
                    Snap are highly rated on
                    <Link
                      href={
                        "https://uk.trustpilot.com/review/www.snapfinance.co.uk"
                      }
                    >
                      Trustpilot.
                    </Link>
                  </li>
                  <li>
                    Your finances are in safe hands. We are authorised and
                    regulated by the Financial Conduct Authority with
                    Reference Number 741813.
                  </li>
                </ul>
                <i className={styles.butona}>
                  <Link
                    href="https://consumer.snapfinance.co.uk/#/?mid=18181156&source=SMS"
                    className={styles.butonatag}
                  >
                    Check eligibility
                  </Link>
                </i>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mainsection6}>
          <h2>How do I qualify to apply for Snap Finance</h2>
          <p>
            Snap have helped thousands of customers get what they need. They
            want to help you choose a finance option that suits you. To apply,
            they just ask that you:
          </p>
          <div className={styles.boxes}>
            <div className={styles.box1}>
              <div className={styles.boximg}>
                <img src="/img/finance-page-img/icon-01.svg" alt="icon1" />
              </div>
              <h4>
                Over 18 years of
                <br />
                age
              </h4>
            </div>
            <div className={styles.box1}>
              <div className={styles.boximg}>
                <img src="/img/finance-page-img/icon-04.svg" alt="icon2" />
              </div>
              <h4>
                £200+ income
                <br />
                per week
              </h4>
            </div>
            <div className={styles.box1}>
              <div className={styles.boximg}>
                <img src="/img/finance-page-img/icon-03.svg" alt="icon3" />
              </div>
              <h4>
                Valid bank
                <br />
                account to set
                <br />
                up a direct debit
              </h4>
            </div>
            <div className={styles.box1}>
              <div className={styles.boximg}>
                <img src="/img/finance-page-img/icon-02.svg" alt="icon4" />
              </div>
              <h4>
                Deposit paid by
                <br />
                credit or debit
                <br />
                card
              </h4>
            </div>
            <div className={styles.box1}>
              <div className={styles.boximg}>
                <img src="/img/finance-page-img/icon-05.svg" alt="icon5" />
              </div>
              <h4>UK resident</h4>
            </div>
          </div>
          <i className={styles.butonatag}>
            <Link
              href="https://consumer.snapfinance.co.uk/#/?mid=18181156&source=SMS"
              className={styles.butonatag}
            >
              Check eligibility
            </Link>
          </i>
          <h3>
            Representative Example: Cost of Goods £1200, Deposit £50, Amount of
            Credit £1,150, Annual Fixed Interest Rate 34.04%, Monthly Payment
            £51.75, Term 36 months, Total Payable £1913.00, Representative 39.9%
            APR.
          </h3>
        </div>
        <div className={styles.lastsection}>
          <div className={styles.container}>
            <p>
              DBZKHAN LTD trading as Bedsdivans is an Appointed Representative
              of Snap Finance Ltd who is authorised and regulated by the
              Financial Conduct Authority (Firm reference number 741813). Snap
              Finance Ltd’s permissions as a Principal Firm Allows DBZKHAN LTD
              to act as a credit broker, not a lender. Snap Finance Ltd act as
              the lender. Credit Subject to status. Terms and conditions apply.
            </p>
            <p>
              Snap Finance Ltd is a company registered in England and Wales.
              Company Number 08080202 Registered address: Snap Finance Ltd, 1
              Vincent Avenue, Crownhill, Milton Keynes, MK8 0AB
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Finance;

Finance.getLayout = PerPageLayout;
