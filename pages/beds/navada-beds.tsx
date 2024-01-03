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
import NavadaBedDesc from "./category-descryption/navadabed-desc";
import Head from "next/head";
import { useRouter } from "next/router";

const NavadaBed: NextPageWithLayout = () => {
  const router = useRouter();
  const { data } = useFetchAllBedsWithImage("nevada-bed");
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
        title={"Buy Navada Beds Online | Beds Divans | Fast And Delivery"}
        description={
          "Buy Best Quality navada beds at a high discount for your home and other purposes we have a wide range of navada beds with Fast delivery. Buy now"
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
          "name": "Buy Navada Beds Online| Beds Divans | Fast Delivery",
          "image":"https://api1.bedsdivans.co.uk/api/beds-image/red-1673518466917.webp",
        "description": "Buy Best Quality navada beds at a high discount for your home and other purposes we have a wide range of navada beds with Fast delivery.Buy now!",
          "@id": "https://www.bedsdivans.co.uk/",
         "url": "https://bedsdivans.co.uk/beds/navada-beds", 
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
            "name": " What is a Navada bed?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": " A Navada bed is a type of bed that is designed with a tall, upholstered headboard that is curved at the top. The bed often features a low footboard, and the frame can be made from a variety of materials, including wood, metal, or a combination of both."
            }
          }, 
    {
            "@type": "Question",
            "name": " What are the benefits of a Navada bed?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": " One of the main benefits of a Navada bed is that the tall, curved headboard provides a comfortable and supportive backrest for reading or watching TV in bed. The bed also adds a stylish and elegant touch to any bedroom decor." 
            }
          }, 
    {
            "@type": "Question",
            "name": " What sizes do Navada beds come in?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": " Navada beds come in a variety of sizes, including twin, full, queen, king, and California king. It is important to measure the space in your bedroom and choose a bed size that fits comfortably in the room."
            }
          }, {
            "@type": "Question",
            "name": " What materials are Navada beds made from?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": " Navada beds can be made from a variety of materials, including wood, metal, leather, and fabric. The headboard is typically upholstered with a soft and comfortable material, such as velvet or linen."
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
              <h1 className={styles.headingh1}>Navada Beds</h1>
            </div>
          </div>
        </div>
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
              <NavadaBedDesc />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default NavadaBed;

NavadaBed.getLayout = PerPageLayout;
