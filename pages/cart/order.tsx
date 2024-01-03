import React from "react";
import { useState } from "react";
import style from "styles/product/cart.module.scss";
import Image from "next/image";
import DeleteIcon from "icons/delete";
import { NextPageWithLayout } from "typings/layout";
import PerPageLayout from "layout/perpage";

const Order: NextPageWithLayout = () => {
  const [isActive1, setIsActive1] = useState(true);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  return (
    <div className={style.sectioncartorder}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className={style.cartheading}>Checkout</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className={style.productorderlistboxouter}>
              <div
                className={` ${style.accordionitem}  ${
                  isActive1 ? `${style.active}` : ""
                } `}
              >
                <div
                  className={style.accordiontitle}
                  onClick={() => setIsActive1(!isActive1)}
                >
                  <div className={style.title}>1 Personal Information</div>
                  <div className={style.nav}>{isActive1 ? "-" : "+"}</div>
                </div>
                {isActive1 && (
                  <div className={style.accordioncontent}>
                    <div className={style.Information}>
                      <div className={style.form}>
                        <ul className={style.formdesign}>
                          <li>
                            <label htmlFor="First name">First name</label>
                            <input id="First name" type="text" required />
                          </li>
                          <li>
                            <label htmlFor="Last name">Last name</label>
                            <input id="Last name" type="text" required />
                          </li>
                          <li>
                            <label htmlFor="Email">Email</label>
                            <input id="Email" type="text" required />
                          </li>
                          <li>
                            <label htmlFor="Password">Password</label>
                            <input id="Password" type="text" required />
                          </li>
                          <li className={style.agree}>
                            <input id="agree" type="checkbox" required />
                            <label htmlFor="agree">
                              I agree to the terms and conditions and the
                              privacy policy
                            </label>
                          </li>

                          <li className={style.button}>
                            <button> Continue </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div
                className={` ${style.accordionitem}  ${
                  isActive2 ? `${style.active}` : ""
                } `}
              >
                <div
                  className={style.accordiontitle}
                  onClick={() => setIsActive2(!isActive2)}
                >
                  <div className={style.title}>2 Addresses</div>
                  <div className={style.nav}>{isActive2 ? "-" : "+"}</div>
                </div>
                {isActive2 && (
                  <div className={style.accordioncontent}>
                    <div className={style.Addresses}>
                      <div className={style.form}>
                        <ul className={style.formdesign}>
                          <li>
                            <p>
                              The selected address will be used both as your
                              personal address (for invoice) and as your
                              delivery address.
                            </p>
                          </li>
                          <li>
                            <label htmlFor="First name">First name</label>
                            <input id="First name" type="text" required />
                          </li>
                          <li>
                            <label htmlFor="Last name">Last name</label>
                            <input id="Last name" type="text" required />
                          </li>
                          <li>
                            <label htmlFor="Address">Address</label>
                            <input id="Address" type="text" required />
                          </li>
                          <li>
                            <label htmlFor="City">City</label>
                            <input id="City" type="text" required />
                          </li>

                          <li>
                            <label htmlFor="Zip/Postal Code">
                              Zip/Postal Code
                            </label>
                            <input id="Zip/Postal Code" type="text" required />
                          </li>
                          <li>
                            <label htmlFor="Country">Country</label>
                            <input id="Country" type="text" required />
                          </li>
                          <li>
                            <label htmlFor="Mobile phone">Mobile phone</label>
                            <input id="Mobile phone" type="text" required />
                          </li>

                          <li className={style.agree}>
                            <input id="invoice" type="checkbox" required />
                            <label htmlFor="invoice">
                              Use this address for invoice too
                            </label>
                          </li>

                          <li className={style.button}>
                            <button> Continue </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div
                className={` ${style.accordionitem}  ${
                  isActive3 ? `${style.active}` : ""
                } `}
              >
                <div
                  className={style.accordiontitle}
                  onClick={() => setIsActive3(!isActive3)}
                >
                  <div className={style.title}>3 Shipping Method</div>
                  <div className={style.nav}>{isActive3 ? "-" : "+"}</div>
                </div>
                {isActive3 && (
                  <div className={style.accordioncontent}>sdfsdfsf</div>
                )}
              </div>

              <div
                className={` ${style.accordionitem}  ${
                  isActive4 ? `${style.active}` : ""
                } `}
              >
                <div
                  className={style.accordiontitle}
                  onClick={() => setIsActive4(!isActive4)}
                >
                  <div className={style.title}>4 Payment</div>
                  <div className={style.nav}>{isActive4 ? "-" : "+"}</div>
                </div>
                {isActive4 && (
                  <div className={style.accordioncontent}>sdfsdfsf</div>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className={style.cartsummary}>
              <ul>
                <li className={style.cartsummaryline}>
                  <span className={style.jssubtotal}>8 items</span>
                  <span className={style.value}>£1,200.00 </span>
                </li>

                <li className={style.cartsummarytotals}>
                  <div className={style.pritotal}>
                    <span className={style.jssubtotal}>Total </span>
                    <span className={style.value}>£1,200.00 </span>
                  </div>

                  <div className={style.alertexpecteddeliverydate}>
                    Estimated Delivery : <span>18/08/2022 - 25/08/2022</span>
                  </div>
                </li>

                <li className={style.blockpromo}>
                  <div className={style.cartvoucherarea}>
                    <div className={style.img}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm2.828 8.486a2 2 0 1 0 2.828-2.829 2 2 0 0 0-2.828 2.829z" />
                      </svg>
                    </div>
                  </div>
                  <div className={style.inputbox}>
                    <input type="text" placeholder="Promo code" />
                    <button>Add</button>
                  </div>
                </li>

                <li className={style.cartdetailedactions}>
                  <a href="#">Proceed to checkout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;

Order.getLayout = PerPageLayout;
