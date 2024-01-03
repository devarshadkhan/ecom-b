/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import NextSEO from "layout/nextseo";
import styles from "styles/header.module.scss";
import PerPageLayout from "layout/perpage";
import { NextPageWithLayout } from "typings/layout";

import { useFetchAllBedsWithImage } from "network-requests/queries";
import GridWrapper from "components/grid-card";
import { BedWithImage } from "network-requests/types";
import ProductCard from "components/grid-card/card";
import SideFilter from "components/side-filter";
import MenuIcon from "icons/MenuIcon";
import MobProdcat from "components/mobile-menue/mobprodcat";
import FloridaBedDesc from "../category-descryption/floridabed-desc";
import Head from "next/head";
import { useRouter } from "next/router";

const FloridaBedRange: NextPageWithLayout = () => {
  const router = useRouter();
  const { data } = useFetchAllBedsWithImage("florida-bed");
  const [cat, setCat] = useState(false);
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
        title={
          "Buy Florida Bed Online | Beds Divans | Fast Delivery"
        }
        description={
          "Buy Best Quality Florida bed at a high discount for your home and other purposes we have a wide range of Florida bed with Fast delivery. Buy now"
        }
        canonicalUrl={`${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`}
      />

      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Buy Florida Bed  Online | Beds Divans | Fast Delivery",
          "image":"https://api1.bedsdivans.co.uk/api/beds-image/red-1673510145922.webp",
        "description": "Buy Best Quality Florida bed  at a high discount for your home and other purposes we have a wide range of Florida bed with Fast delivery. Buy now!",
          "@id": "https://www.bedsdivans.co.uk/",
         "url": "https://bedsdivans.co.uk/beds/sleigh-beds/florida-bed", 
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
        `,
          }}
        ></script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `    {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [{
            "@type": "Question",
            "name": " What materials are used to make Florida beds?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": Florida beds can be made from a variety of materials, including wood, metal, and upholstered fabrics. Popular wood types used in Florida beds include oak, maple, and walnut, while metal frames are often made from steel or aluminium."
            }
          }, 
    {
            "@type": "Question",
            "name": " What are the advantages of a Florida bed?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": " One of the main advantages of a Florida bed is its modern design, which can give a bedroom a clean and stylish look. Florida beds also often have a lower profile than traditional bed frames, which can be useful in smaller bedrooms or rooms with low ceilings." 
            }
          }, 
    {
            "@type": "Question",
            "name": " Are Florida beds comfortable to sleep on?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": The comfort level of a Florida bed depends on the specific design and materials used. However, many Florida beds are designed to be used with a mattress and box spring, which can provide a comfortable sleeping surface."
            }
          }, {
            "@type": "Question",
            "name": " Where can I buy a Florida bed?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": " Florida beds can be purchased from a variety of retailers, both online and in brick-and-mortar stores. Some popular options include furniture stores, department stores, and online retailers."
            }
          }]
        }
    
        `,
          }}
        ></script>
      </Head>
      <section className={styles.mydiv}>
        <div className={` ${styles.section_first} container-fluid`}>
          <div className="row">
            <div className="col-12">
              <h1 className={styles.headingh1}>Florida Bed</h1>
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
                <GridWrapper grid="3" gap="2rem">
                  {data?.pages?.["0"]?.data.map((item: BedWithImage, index) => {
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
                  })}
                </GridWrapper>
              </section>
            </div>
            <FloridaBedDesc />
          </div>
        </div>
      </section>
    </>
  );
};
export default FloridaBedRange;

FloridaBedRange.getLayout = PerPageLayout;
