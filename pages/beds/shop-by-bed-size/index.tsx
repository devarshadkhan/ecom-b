/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import NextSEO from "layout/nextseo";
import styles from "styles/header.module.scss";
import PerPageLayout from "layout/perpage";
import { NextPageWithLayout } from "typings/layout";

import { useFetchAllBedsWithImage, useFetchAllBedsWithSize } from "network-requests/queries";
import GridWrapper from "components/grid-card";
import { BedWithImage } from "network-requests/types";
import ProductCard from "components/grid-card/card";
import SideFilter from "components/side-filter";
import MenuIcon from "icons/MenuIcon";
import MobProdcat from "components/mobile-menue/mobprodcat";
import { useRouter } from "next/router";

const Double46: NextPageWithLayout = () => {
  const { data } = useFetchAllBedsWithSize("all", "beds");
  const [cat, setCat] = useState(false);
  const mobilecat = () => {
    if (cat == true) {
      setCat(false);
    } else {
      setCat(true);
    }
  };
  const router = useRouter();
  return (
    <>
      <NextSEO
        title={"Shop By Bed Size Online | Beds Divans | Fast Delivery"}
        description={
          "Shop for Shop by Bed Size in the UK at Beds Divans. Add elegance to your home with our wide range of Shop by Bed Size. Order & get fast delivery service!"
        }
        canonicalUrl={`${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`}
      />
      <section className={styles.mydiv}>
        <div className={` ${styles.section_first} container-fluid`}>
          <div className="row">
            <div className="col-12">
              <h1 className={styles.headingh1}>Shop By Bed Size</h1>
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
          <div className={styles.productcategoryside}>
            <MenuIcon size={25} onClick={mobilecat}></MenuIcon>
            <a className="mobilcat" onClick={mobilecat}>
              {" "}
              Product Categories
            </a>

            {cat && <MobProdcat />}
          </div>
          <div className="row">
            <div className={` ${styles.left_filter} col-2`}>
              <SideFilter />
            </div>
            <div className={`${styles.mwfull} mint`}>
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
                          onClick={() =>
                            router.push({
                              pathname: `/product/${item.slug}`,
                            })
                          }
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
export default Double46;

Double46.getLayout = PerPageLayout;
