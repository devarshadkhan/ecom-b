/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import NextSEO from "layout/nextseo";
import styles from "styles/header.module.scss";
import PerPageLayout from "layout/perpage";
import { NextPageWithLayout } from "typings/layout";

import { useFetchAllBedsWithImage } from "network-requests/queries";
import GridWrapper from "components/grid-card";
import { BedWithImage } from "network-requests/types";
import ProductCard from "components/grid-card/card";

const GardenFurniture: NextPageWithLayout = () => {
  const { data } = useFetchAllBedsWithImage("Leather-beds");
  return (
    <>
      <NextSEO title={"DBZBEDS"} />
      <section className={styles.mydiv}>
        <div className={` ${styles.section_first} container-fluid`}>
          <div className="row">
            <div className="col-12">
              <h1 className={styles.headingh1}>Garden Furniture</h1>
            </div>
          </div>
        </div>
        {/* <p className={styles.paragraphp}>
            Relax and unwind in comfort with our high-quality beds. From natural
            materials to luxe velvet, we have a fantastic collection of bespoke
            ottomans and divans handcrafted in Yorkshire with your sleep in
            mind. Our handcrafted ranges are available in a wide selection of
            fabrics, and we also have a build your bed tool offering you the
            opportunity to design the bed of your dreams.{" "}
          </p> */}
      </section>

      <section className={styles.beddropdown}>
        <div className="container">
          <div className="row">
            <div className={` ${styles.left_filter} col-2`}>
              <h3>CATEGORIES</h3>
              <ul>
                <li>Divan Bed</li>
                <li>Divan Bed</li>
                <li>Divan Bed</li>
                <li>Divan Bed</li>
                <li>Divan Bed</li>
                <li>Divan Bed</li>
                <li>Divan Bed</li>
                <li>Divan Bed</li>
              </ul>
            </div>
            <div className="col-9">
              <ul className={styles.items}>
                <li className={styles.showingitems}>
                  <p className={styles.parashowing}>
                    Showing 1-21 of 21 item(s)
                  </p>
                </li>

                <li className={styles.selectnumber}>
                  <select
                    name="quantity"
                    id="quantity"
                    className={styles.selectoption}
                  >
                    <option value="21">Sort by popularity</option>
                    <option value="12 ">Sort by average rating</option>
                    <option value="24">Sort by latest</option>
                    <option value="36">Sort by price: low to high</option>
                    <option value="Show all ">
                      Sort by price: high to low{" "}
                    </option>
                  </select>
                </li>
              </ul>
              <section className={styles["divan-ProductCard"]}>
                {/* <ProductListing
                  itemClassName="col-4"
                  productList={data?.pages?.["0"]?.data || []}
                  background="#ffffff"
                /> */}
                <GridWrapper grid="3">
                  {data?.pages?.["0"]?.data?.map(
                    (item: BedWithImage, index) => {
                      return (
                        <ProductCard
                          name={item?.name}
                          price={item?.price}
                          image={item?.image}
                          key={index}
                          coversControls
                        />
                      );
                    }
                  )}
                  {data?.pages?.["0"]?.data?.map(
                    (item: BedWithImage, index) => {
                      return (
                        <ProductCard
                          name={item?.name}
                          price={item?.price}
                          image={item?.image}
                          key={index}
                          coversControls
                        />
                      );
                    }
                  )}
                </GridWrapper>
                <p className={styles.paragraphp}>
                  Relax and unwind in comfort with our high-quality beds. From
                  natural materials to luxe velvet, we have a fantastic
                  collection of bespoke ottomans and divans handcrafted in
                  Yorkshire with your sleep in mind. Our handcrafted ranges are
                  available in a wide selection of fabrics, and we also have a
                  build your bed tool offering you the opportunity to design the
                  bed of your dreams.{" "}
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default GardenFurniture;

GardenFurniture.getLayout = PerPageLayout;
