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
import KidBedsDesc from "./category-descryption/kidbed-description";
import Head from "next/head";
import { useRouter } from "next/router";

const KidsBed: NextPageWithLayout = () => {
  const router = useRouter();
  const { data } = useFetchAllBedsWithImage("kids-bed");
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
          " Buy Kids Beds Online | Kids Single Bed | Beds Divans "
        }
        description={
          "Beds divans have the largest selection of children Beds, kids single beds, with or without storage, quality children's Beds  at the best prices with Fast delivery. Buy now"
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
          "name": " Buy Kids Beds Online | Kids Single Bed | Beds Divans | Fast Delivery",
          "image":"https://api1.bedsdivans.co.uk/api/beds-image/red-1673517430265.webp",
        "description": "Beds divans have the largest selection of children Beds, kids single beds, with or without storage, quality children's Beds  at the best prices with Fast delivery.Buy now!",
          "@id": "https://www.bedsdivans.co.uk/",
         "url": "https://bedsdivans.co.uk/beds/kids-beds", 
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
            "name": "  What are some popular themes for kids' beds?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": Kids' beds are available in a variety of fun and playful themes, from princess castles and race cars to pirate ships and outer space. Some popular themes include animal prints, sports teams, and cartoon characters."
            }
          }, 
    {
            "@type": "Question",
            "name": " What safety features should I look for in a kids' bed?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": " Safety is a top priority when it comes to kids' beds. Look for beds with rounded edges, non-toxic finishes, and sturdy construction. Some beds may also feature guardrails or other safety features to prevent falls and ensure a safe sleeping environment." 
            }
          }, 
    {
            "@type": "Question",
            "name": "  What size mattress should I buy for a kids' bed?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": " The size of the mattress will depend on the size of the bed. Twin mattresses are the most common size for kids' beds, but full mattresses are also available for larger beds. Be sure to measure the bed frame and choose a mattress that fits snugly without any gaps."
            }
          }, {
            "@type": "Question",
            "name": " What types of kids' beds are available?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": " There are many types of kids' beds available, including bunk beds, loft beds, canopy beds, platform beds, and more. Each type of bed offers different features and benefits, so it's important to consider the needs and preferences of the child when choosing a bed."
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
              <h1 className={styles.headingh1}>Kids Beds</h1>
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
            <KidBedsDesc />
          </div>
        </div>
      </section>
    </>
  );
};
export default KidsBed;

KidsBed.getLayout = PerPageLayout;
