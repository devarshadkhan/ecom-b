/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Styles from "styles/product/page.module.scss";

const Reviews = () => {
  return (
    <div>
      <div className={`${Styles.review} container`}>
        <div className="row">
          <div className="col-md-6">
            <h1>
              258 REVIEWS FOR GREY LINEN DIVAN BED BASE OR SET HEADBOARD &
              MATTRESS 
            </h1>
            <section className={Styles.reviewContent}>
              <div className={Styles.commentList}>
                <ul className={Styles.commentBox}>
                  <div className={Styles.commentWarp}>
                    <li>
                      <h4>Chris – November 17, 2022</h4>
                    </li>
                    <li>
                      <img src="/trustpilot.png" alt="" />
                    </li>
                    <hr />
                    <li>
                      <p>
                        Absolutely brilliant. Ordered last Friday, arrived on
                        Wednesday. Great delivery portal allowed me to keep
                        track of the van and the divan was nice and easy to put
                        together. One very happy bedsdivans.co.uk customer!
                      </p>
                    </li>
                  </div>
                </ul>

                <ul className={Styles.commentBox}>
                  <div className={Styles.commentWarp}>
                    <li>
                      <h4>Chris – November 17, 2022</h4>
                    </li>
                    <li>
                      <img src="/trustpilot.png" alt="" />
                    </li>
                    <hr />
                    <li>
                      <p>
                        Absolutely brilliant. Ordered last Friday, arrived on
                        Wednesday. Great delivery portal allowed me to keep
                        track of the van and the divan was nice and easy to put
                        together. One very happy bedsdivans.co.uk customer!
                      </p>
                    </li>
                  </div>
                </ul>

                <ul className={Styles.commentBox}>
                  <div className={Styles.commentWarp}>
                    <li>
                      <h4>Chris – November 17, 2022</h4>
                    </li>
                    <li>
                      <img src="/trustpilot.png" alt="" />
                    </li>
                    <hr />
                    <li>
                      <p>
                        Absolutely brilliant. Ordered last Friday, arrived on
                        Wednesday. Great delivery portal allowed me to keep
                        track of the van and the divan was nice and easy to put
                        together. One very happy bedsdivans.co.uk customer!
                      </p>
                    </li>
                  </div>
                </ul>
              </div>
            </section>
          </div>
          <div className="col-md-6">
            <section className={Styles.reviewForm}>
              <h3>Add a review</h3>
              <p>
                Your email address will not be published. Required fields are
                marked *
              </p>
              <p>Your rating *</p>
              <span>Star</span>
              <form action="" className={Styles.form}>
                <label htmlFor="#">Your review *</label>
                <textarea name="" id=""></textarea>
                <label htmlFor="#">Name *</label>
                <input type="text" />
                <label htmlFor="email">Email *</label>
                <input type="email" name="" id="" />
                <button>Submit</button>
              </form>
              <div className={Styles.trust_img}>
                <Image
                  alt="trust"
                  width={210}
                  height={60}
                  src="/Trustpilot__logo_.png"
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
