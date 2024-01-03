/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import NextSEO from "layout/nextseo";
import styles from "styles/header.module.scss";
import PerPageLayout from "layout/perpage";
import { NextPageWithLayout } from "typings/layout";

const DivanBeds: NextPageWithLayout = () => {
  return (
    <>
      <div>
        <NextSEO title={"DBZBEDS"} />
        <section className={styles.mydiv}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className={styles.headingh1}>Beds</h1>
                <p className={styles.paragraphp}>
                  Relax and unwind in comfort with our high-quality beds. From
                  natural materials to luxe velvet, we have a fantastic
                  collection of bespoke ottomans and divans handcrafted in
                  Yorkshire with your sleep in mind. Our handcrafted ranges are
                  available in a wide selection of fabrics, and we also have a
                  build your bed tool offering you the opportunity to design the
                  bed of your dreams.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.bannersection}>
          <div className="container">
            <div className="row">
              <div className="col-3">
                <div className={styles.rightbed}>
                  <h1 className={styles.rightbedheading}>
                    Find the right bed for you
                  </h1>
                </div>
              </div>
              <div className="col-9">
                <div className={styles.imgae}>
                  <img
                    src="https://aspirestore.co.uk/img/cms/Categories/Aspire-store-beds-banner.jpg"
                    alt="image"
                    width={997}
                    height="469"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="shopsize">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className={styles.sizeh1}>Shop by size</h1>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.bedicon}>
          <div className="container">
            <div className="row justify-content-around">
              <div className="col-2">
                <div className={styles.bedbox}>
                  <img src="/image/a.jpg" alt="img" />
                  <p className={styles.parap}>3'0 Single</p>
                </div>
              </div>
              <div className="col-2">
                <div className={styles.bedbox}>
                  <img src="/image/b.jpg" alt="img" />
                  <p className={styles.parap}>4'0 Small Double </p>
                </div>
              </div>
              <div className="col-2">
                <div className={styles.bedbox}>
                  <img src="/image/c.jpg" alt="img" />
                  <p className={styles.parap}>4'6 Double</p>
                </div>
              </div>
              <div className="col-2">
                <div className={styles.bedbox}>
                  <img src="/image/d.jpg" alt="img" />
                  <p className={styles.parap}>5'0 King</p>
                </div>
              </div>
              <div className="col-2">
                <div className={styles.bedbox}>
                  <img src="/image/e.jpg" alt="img" />
                  <p className={styles.parap}>6'0 Super King</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="shopsize">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className={styles.sizeh1}>Shop by size</h1>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.bedicon}>
          <div className="container">
            <div className="row">
              <div className="col-2">
                <div className={styles.bedbox}>
                  <img
                    src="https://aspirestore.co.uk/c/14-category_thumb/6-0-super-king.jpg"
                    alt="img"
                  />
                  <p className={styles.parap}>3'0 Single</p>
                </div>
              </div>
              <div className="col-2">
                <div className={styles.bedbox}>
                  <img
                    src="https://aspirestore.co.uk/c/14-category_thumb/6-0-super-king.jpg"
                    alt="img"
                  />
                  <p className={styles.parap}>4'0 Small Double </p>
                </div>
              </div>
              <div className="col-2">
                <div className={styles.bedbox}>
                  <img
                    src="https://aspirestore.co.uk/c/14-category_thumb/6-0-super-king.jpg"
                    alt="img"
                  />
                  <p className={styles.parap}>4'6 Double</p>
                </div>
              </div>
              <div className="col-2">
                <div className={styles.bedbox}>
                  <img
                    src="https://aspirestore.co.uk/c/14-category_thumb/6-0-super-king.jpg"
                    alt="img"
                  />
                  <p className={styles.parap}>5'0 King</p>
                </div>
              </div>
              <div className="col-2">
                <div className={styles.bedbox}>
                  <img
                    src="https://aspirestore.co.uk/c/14-category_thumb/6-0-super-king.jpg"
                    alt="img"
                  />
                  <p className={styles.parap}>6'0 Super King</p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section className={styles.beddropdown}>
          <div className="container">
            <div className="row">
              <div className="col-6"></div>
              <div className="col-6">
                <ul className={styles.items}>
                  <li className={styles.showingitems}>
                    <p className={styles.parashowing}>
                      Showing 1-21 of 21 item(s)
                    </p>
                  </li>
                  <li className={styles.selectrelevance}>
                    <select
                      name="filter"
                      id="filter"
                      className={styles.selectoption}
                    >
                      <option value="Relevance">Relevance</option>
                      <option value="New products first">
                        New products first
                      </option>
                      <option value="Name, A to Z ">Name, A to Z</option>
                      <option value="Name, Z to  A ">Name, Z to A </option>
                      <option value="Price, low to high ">
                        Price, low to high
                      </option>
                      <option value="In stock ">In stock </option>
                      <option value="Random ">Random </option>
                    </select>
                  </li>
                  <li className={styles.selectnumber}>
                    <select
                      name="quantity"
                      id="quantity"
                      className={styles.selectoption}
                    >
                      <option value="21">21</option>
                      <option value="12 ">12</option>
                      <option value="24">24</option>
                      <option value="36">36</option>
                      <option value="Show all ">Show all </option>
                    </select>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.productsimages}>
          <div className="container">
            <div className="row">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </section>

        <section className={styles.productsimages}>
          <div className="container">
            <div className="row">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </section>

        <section className={styles.productsimages}>
          <div className="container">
            <div className="row">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </section>

        <section className={styles.productsimages}>
          <div className="container">
            <div className="row">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default DivanBeds;

DivanBeds.getLayout = PerPageLayout;

const ProductCard = () => {
  return (
    <div className="col-3">
      <div className={styles.box1}>
        <img
          src="https://aspirestore.co.uk/49826-home_default/garland-fabric-ottoman-bed.jpg"
          alt="img"
          width={258}
          height="210"
        />
        <h2 className={styles.productname}>Garland Fabric Ottoman Bed</h2>
        <div className={styles.trustpilot}>
          <img src="/image/tru.png" alt="img" />
        </div>
        <p className={styles.price}>£600.00</p>
      </div>
    </div>
  );
};
