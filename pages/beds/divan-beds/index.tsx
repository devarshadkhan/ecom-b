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
import MobProdcat from "components/mobile-menue/mobprodcat";
import MenuIcon from "icons/MenuIcon";
import DivanBedDesc from "../category-descryption/divanbed-desc";
import Head from "next/head";
import { useRouter } from "next/router";
// import DivanBedDesc from "./category-descryption/divanbed-desc";

const DivanBed: NextPageWithLayout = () => {
  const router = useRouter();
  const { data } = useFetchAllBedsWithImage("divan-bed-set");
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
          "Buy Divan Beds Online | Single, Double & King Size | Beds Divans "
        }
        description={
          "Buy Best Quality divan beds at a high discount for your home and other purposes we have a wide range of divan beds Fast delivery. Buy now"
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
          "name": "Divan Beds | Beds Divans",
          "image":"https://api1.bedsdivans.co.uk/api/beds-image/red-1673498811844.webp",
        "description": "Buy Best Quality divan beds at a high discount for your home and other purposes we have a wide range of divan beds  Fast delivery. Buy now!",
          "@id": "https://www.bedsdivans.co.uk/",
         "url": "https://www.bedsdivans.co.uk/beds/divan-beds/", 
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
                "name": " What are the advantages of a divan bed?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": " One advantage of a bed divan is that it provides additional storage space. The built-in drawers or compartments can be used to store clothing, bedding, or other items. Another advantage is that bed divans are typically more durable than traditional bed frames since they are designed to withstand the weight of the mattress and any stored items."
                }
              }, 
        {
                "@type": "Question",
                "name": " Are divan beds comfortable?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": " Yes, bed divans can be just as comfortable as other types of bed frames. The key is to choose a high-quality mattress that provides the right level of support and comfort. Some bed divans even come with built-in headboards or footboards that can add to the overall comfort and style of the bed." 
                }
              }, 
        {
                "@type": "Question",
                "name": " Are divan beds easy to clean?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": " Yes, bed divans are generally easy to clean. The fabric or upholstery can be wiped down with a damp cloth or vacuumed to remove any dust or debris. The built-in drawers or compartments can also be cleaned out periodically to keep them free of dirt and dust."
                }
              }, {
                "@type": "Question",
                "name": " How much do divan beds cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": " The cost of a bed divan can vary depending on the size, style, and quality of the frame and mattress. In general, bed divans can range from a few hundred dollars to several thousand dollars. It's important to consider your budget and needs when selecting a bed divan, and to choose a reputable retailer that offers high-quality products and customer service."
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
              <h1 className={styles.headingh1}>Divan Beds</h1>
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
            <MenuIcon size={25} onClick={mobilecat} />
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
            <div>
                <DivanBedDesc  />
              </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default DivanBed;

DivanBed.getLayout = PerPageLayout;
