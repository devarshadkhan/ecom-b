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
import Superking6Desc from "../category-descryption/superking6ft-desc";
import Head from "next/head";
import { useRouter } from "next/router";

const SuperKing60: NextPageWithLayout = () => {
  const router = useRouter();
  const { data } = useFetchAllBedsWithSize("6ft-–-super-king", "beds");
  const [cat, setCat] = useState(false);
  // console.log("line25",data?.pages[0]?.data[0]?.variants[0]);
  const mobilecat = () => {
    if (cat == true) {
      setCat(false);
    } else {
      setCat(true);
    }
  };
  return (
    <>
      <NextSEO
        title={"Super King Bed 6 Feet | Beds Divans | Fast Delivery"}
        description={
          "Shop for Super King (6″0) in the UK at Beds Divans. Add elegance to your home with our wide range of Super King (6″0). Order & get fast delivery service!"
        }
        canonicalUrl={`${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`}
      />
       <Head>
      <script type="application/ld+json"
      
      dangerouslySetInnerHTML={{
        __html:`{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Super King Bed 6 Feet | Beds Divans | Fast Delivery",
          "image":"https://api1.bedsdivans.co.uk/api/beds-image/red-1673522036789.webp",
        "description": "Shop for Super King (6″0) in the UK at Beds Divans. Add elegance to your home with our wide range of Super King (6″0). Order & get fast delivery service!",
          "@id": "https://www.bedsdivans.co.uk/",
         "url": "https://bedsdivans.co.uk/beds/shop-by-bed-size/super-king-60", 
        "telephone": "+44 1902405535",
          "priceRange": "Ask",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Unit 8A Stag Industrial Estate Oxford Street",
            "addressLocality": "Bilston",
            "postalCode": "WV14 7HZ",
            "addressCountry": "+44",
            "addressRegion": "+44"
          },
        "openingHoursSpecification": 
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "11:00",
              "closes": "19:00"
          },
          "review": {
            "@type": "Review",
            "reviewRating": {
              "@type" : "Rating",
              "ratingValue" : "5",
              "bestRating" : "5",
              "worstRating" : "1"
            },
            "author": {
              "@type": "Person",
              "name": "Sophie Jones"
            },
            "reviewBody": "Fantastic product! It really helped me. I would recommend to all my friends and family."
          },
          "sameAs": [
            "https://www.facebook.com/bedsdivans.co.uk",
            "https://twitter.com/bedsdivans?lang=en",
            "https://www.instagram.com/bedsdivans/?hl=en"
          ] 
        }
        `
      }}
      >
     </script>
     </Head>
      <section className={styles.mydiv}>
        <div className={` ${styles.section_first} container-fluid`}>
          <div className="row">
            <div className="col-12">
              <h1 className={styles.headingh1}>Super King (6"0)</h1>
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
              </section>
           
            </div> 
              <Superking6Desc />
          </div>
        </div>
      </section>
    </>
  );
};
export default SuperKing60;

SuperKing60.getLayout = PerPageLayout;
