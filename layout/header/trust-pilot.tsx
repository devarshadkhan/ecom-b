/* eslint-disable @next/next/no-img-element */
import TrustBoxCardWidget from "components/trustpilot/card-widget";
import MailIcon from "icons/MailIcon";
import PhoneIcon from "icons/PhoneIcon";
import Link from "next/link";
import React from "react";
import css from "styles/layout.module.scss";

const TrustPilotAndContact = () => {
  return (
    <>
      {/* <section className={css.maintopheader}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={css.maintopheadercontent}>
                <p>
                  We offer free delivery on all orders, with no minimum spend!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className={css.container}>
        <div className="container">
          <div className={css["row"]}>
            <div className={css["image-container"]}>
              <ul>
                <li>
                  <Link href={"/about-us"}>ABOUT US</Link>
                </li>
                <li>
                  <Link href={"/contact-us"}>CONTACT US</Link>
                </li>
                <li>
                  <TrustBoxCardWidget
                  
                  className="headertrustpilot"
                  style={{right:"70px"}}
                  />
                  {/* <Link
                    href={"https://uk.trustpilot.com/review/bedsdivans.co.uk"}
                  >
                    <a>
                      <img src="/image/trustpilot.webp" alt="logo" />
                    </a>
                  </Link> */}
                </li>
              </ul>
            </div>
            <div className={css["account-container"]}>
              <ul>
                <li>
                  <span>
                    <MailIcon size={20} />
                  </span>
                  <span className={css["text"]}>
                    <a href="mailto:info@bedsdivans.co.uk">
                      info@bedsdivans.co.uk
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <PhoneIcon size={20} />
                  </span>
                  <span className={css["text"]}>
                    <a href="tel:01902405535">01902405535</a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className={css.topheader1}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={css.topheader12}>
                <ul>
                  <li>
                    <span>
                      <MailIcon size={18} />
                    </span>
                    <span className={css["text"]}>
                      <a href="mailto:info@bedsdivans.co.uk">
                        info@bedsdivans.co.uk
                      </a>
                    </span>
                  </li>
                  <li>
                    <span>
                      <PhoneIcon size={14} />
                    </span>
                    <span className={css["text"]}>
                      <a href="tel:01902405535">01902405535</a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default TrustPilotAndContact;
