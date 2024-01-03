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

import Head from "next/head";
import { useRouter } from "next/router";
import AmbassadorBedDesc from "../category-descryption/ambassadorbed-desc";

const AmbassadorRange: NextPageWithLayout = () => {
  const router = useRouter();
  const { data } = useFetchAllBedsWithImage("ambassador-bed");
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
          "Buy Ambassador Bed  Online | Beds Divans | Fast Delivery"
        }
        description={
          "The Ambassador bed provides a premium feel and brings the luxury of being elite back to your bedroom. With the premium Ambassador Beds on offer.Order & get fast delivery service!"
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
          "name": "Buy Ambassador Bed  Online | Beds Divans | Fast Delivery",
          "image":"https://api1.bedsdivans.co.uk/api/beds-image/red-1673510145922.webp",
        "description": "The Ambassador bed provides a premium feel and brings the luxury of being elite back to your bedroom. With the premium Ambassador Beds on offer.Order& get fast delivery service!",
          "@id": "https://www.bedsdivans.co.uk/",
         "url": "https://bedsdivans.co.uk/beds/sleigh-beds/ambassador-bed", 
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
            "name": " What is an Ambassador bed?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": An Ambassador bed is a high-end luxury bed that is typically handmade with premium materials such as solid wood, high-quality upholstery, and fine linens. They are known for their luxurious design and are often found in luxury hotels and resorts."
            }
          }, 
    {
            "@type": "Question",
            "name": " What makes Ambassador beds different from other luxury beds?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": " Ambassador beds are typically distinguished by their high level of craftsmanship, attention to detail, and use of premium materials. They are often custom-made to fit the specific needs and preferences of the buyer and may feature unique design elements such as hand-carved details or intricate embroidery." 
            }
          }, 
    {
            "@type": "Question",
            "name": " How comfortable are Ambassador beds to sleep on?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": " Ambassador beds are designed to provide the ultimate comfort and support. They often feature high-quality mattresses, plush pillows, and soft, luxurious linens that are designed to provide a restful and rejuvenating night's sleep."
            }
          }, {
            "@type": "Question",
            "name": " How do I care for my Ambassador bed?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": " The care requirements for an Ambassador bed will depend on the specific materials used. However, in general, it is important to follow the manufacturer's care instructions for any linens or upholstery used on the bed. Additionally, regular dusting and cleaning of the bed frame and the headboard can help to keep it looking its best."
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
              <h1 className={styles.headingh1}>Ambassador Bed</h1>
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
            <AmbassadorBedDesc />
          </div>
        </div>
      </section>
    </>
  );
};
export default AmbassadorRange;

AmbassadorRange.getLayout = PerPageLayout;
