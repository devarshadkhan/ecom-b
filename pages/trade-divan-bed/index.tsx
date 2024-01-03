/* eslint-disable @next/next/no-img-element */
import RightIcon from "icons/rightarrow";
import RightarowIcon from "icons/RightArrows";
import PerPageLayout from "layout/perpage";
import Link from "next/link";
import React from "react";
import Styles from "styles/tradedivanbed/tradedivanbed.module.scss";

const TradeDivanBed = () => {
  return (
    <>
      <section className={Styles.tradesection1}>
        <div className="container">
          <div className="row">
            <div className={`${Styles.mwfull} col-6`}>
              <div className={Styles.box1}>
                <h2>Contact for the Bulk Enquiries</h2>
                <ul>
                  <li>
                    <RightarowIcon /> 5 Star Trustpilot Reviews
                  </li>
                  <li>
                    {" "}
                    <RightarowIcon /> First Class Customer Care
                  </li>
                  <li>
                    {" "}
                    <RightarowIcon /> Speacialist Product Care
                  </li>
                  <li>
                    <RightarowIcon /> Wholesale Prices
                  </li>
                  {/* <li>
                    {" "}
                    <RightarowIcon /> Fast & Free Delivery
                  </li> */}
                </ul>
              </div>
            </div>
            <div className={`${Styles.mwfull} col-6`}>
              <div className={Styles.box2}>
                <img src="/image/blackcopy.webp" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={Styles.tradesection2}>
        <div className="container">
          <div className="row">
            <div className={`${Styles.mwfulles} col-4`}>
              <div className={Styles.divanbases}>
                <img src="/image/divanroyalbedbase.png" alt="img" />
                <h2>Divan Bases</h2>
              </div>
            </div>
            <div className={`${Styles.mwfulles} col-4`}>
              <div className={Styles.divanbases}>
                <img src="/image/h3.png" alt="img" />
                <h2>Headboards</h2>
              </div>
            </div>
            <div className={`${Styles.mwfulles} col-4`}>
              <div className={Styles.divanbases}>
                <img src="/image/h4.png" alt="img" />
                <h2>Mattresses</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={Styles.tradesection3}>
        <div className="container">
          <div className="row">
            <div className={`${Styles.mwfull} col-6`}>
              <img src="/image/intro.png" alt="img" />
            </div>
            <div className={`${Styles.mwfull} col-6`}>
              <div className={Styles.boxes1}>
                <h2>Introducing our All-New Collection</h2>
                <Link href={"#"}>
                  <a>Shop Now</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={Styles.tradesection4}>
        <div className="container">
          <div className="col-12">
            <img src="/image/wp.jpg" alt="img" />
          </div>
        </div>
      </section>
      <section className={Styles.tradesection5}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={Styles.longlasting}>
                <Link href={"#"}>
                  <a>Long Lasting</a>
                </Link>
                <div className={Styles.longlasting1}>
                  <div className={Styles.bxes1}>
                    <img src="image/reinforce1.png" alt="img" />
                    <h3>
                      Reinforced<br></br>Beds
                    </h3>
                  </div>
                  <div className={Styles.bxes1}>
                    <img src="/image/PREMIUM.png" alt="img" />
                    <h3>
                      Premium Fabric<br></br>Quality
                    </h3>
                  </div>
                  <div className={Styles.bxes1}>
                    <img src="/image/1YEAR.png" alt="img" />
                    <h3>
                      1 Year<br></br>
                      Warranty
                    </h3>
                  </div>
                  <div className={Styles.bxes1}>
                    <img src="/image/QUALTY.png" alt="img" />
                    <h3>
                      Quality Pocket<br></br>Spring
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={Styles.tradesection6}>
        <div className="container">
          <div className="row">
            <div className={`${Styles.mwfull} col-6`}>
              <div className={Styles.divanbases1}>
                <img src="/image/s-l1600-1.png" alt="img" />
                <h2>Divan Bed</h2>
              </div>
            </div>
            <div className={`${Styles.mwfull} col-6`}>
              <div className={Styles.divanbases1}>
                <img src="/image/Orthopedic-Mattress-with-bg-1.png" alt="img" />
                <h2>Mattresses</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={Styles.tradesection7}>
        <div className="container">
          <div className="row">
            <div className={`${Styles.mwfull} col-6`}>
              <div className={Styles.divanbases1}>
                <img src="/image/1-441.png" alt="img" />
                <h2>Divan Bases</h2>
              </div>
            </div>
            <div className={`${Styles.mwfull} col-6`}>
              <div className={Styles.divanbases1}>
                <img
                  src="/image/5c77e5d2a20b424c6a46332d8192f3a7-1.png"
                  alt="img"
                />
                <h2>Headboards</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={Styles.tradesection8}>
        <div className="container">
          <div className="row">
            <div className={`${Styles.mwfull} col-6`}>
              <div className={Styles.boxes12}>
                <h2>Introducing our All-New Collection</h2>
                <p>
                  Check out our TrustPilot reviews, you won’t be disappointed.
                  We are confident you’ll love your new bed and that our service
                  will leave you more than satisfied. But if you aren’t happy,
                  we’ll happily either exchange it or give you a refund within
                  30-days of purchase. The team we have is dedicated to offering
                  an unbeatable customer service. So if there’s anything you
                  need or any questions you want answering — just give us a call
                  or send us an email. A friendly member of our team will be
                  happy to help. We make sure each bed is made to the highest
                  quality using the latest technology and materials. We also use
                  traditional craftsmanship to ensure each bed is made with a
                  unique and individual look. We offer a wide range of styles
                  and sizes to suit any bedroom. All of our beds are available
                  with a variety of mattress types, and are designed to last for
                  years to come.
                </p>
              </div>
            </div>
            <div className={`${Styles.mwfull} col-6`}>
              <img src="/image/image-21-1.jpg" alt="img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TradeDivanBed;

TradeDivanBed.getLayout = PerPageLayout;
