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
import CrushedBedDesc from "../category-descryption/crushedbed-desc";
import Head from "next/head";
import { useRouter } from "next/router";

const CrushedBed: NextPageWithLayout = () => {
  const router = useRouter();
  const { data } = useFetchAllBedsWithImage("crushed-velvet");
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
          "Buy Crushed Divan Beds Online | Beds Divans | Fast Delivery"
        }
        description={
          "Buy Best Quality crushed divan beds at a high discount for your home and other purposes we have a wide range of crushed divan beds Fast delivery. Buy now"
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
          "name": "Crushed Velvet Beds | Beds Divans",
          "image":"https://api1.bedsdivans.co.uk/api/beds-image/red-1669876642658.webp",
        "description": "Buy Best Quality  Crushed Velvet Beds at a high discount for your home and other purposes we have a wide range of divan beds  Fast delivery. Buy now!",
          "@id": "https://www.bedsdivans.co.uk/",
         "url": "https://bedsdivans.co.uk/beds/divan-beds/crushed-velvet-beds",
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
                  "name": " What are the benefits of a crushed velvet bed?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": " A crushed velvet bed offers several benefits, including a soft and comfortable surface to rest on, a unique and luxurious appearance, and the ability to add a touch of elegance and sophistication to any bedroom. Additionally, crushed velvet is a durable and long-lasting fabric, making it a great investment for a bed frame."
                  }
                }, {
                  "@type": "Question",
                  "name": " Are crushed velvet beds difficult to maintain? ",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": Crushed velvet beds are generally easy to maintain, as the fabric is typically stain-resistant and can be easily cleaned with a damp cloth or vacuum cleaner. However, it is important to follow the manufacturer's instructions for care and maintenance to ensure the longevity of the bed frame. "
                  }
                },{
                  "@type": "Question",
                  "name": "Are crushed velvet beds suitable for all styles of decor? ",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": " Crushed velvet beds can work well with a variety of decor styles, including modern, traditional, and eclectic. The luxurious texture of the crushed velvet can add an element of sophistication to any room and can be paired with a range of bedding and accessories to create a cohesive look."
                  }
                },{
                  "@type": "Question",
                  "name": " How do I choose the right crushed velvet bed for my needs?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": " When choosing a crushed velvet bed, it is important to consider factors such as size, colour, and style. You should also consider the quality of the bed frame and the fabric, as well as your personal preferences and budget. It may be helpful to read reviews and compare different options to ensure that you find the perfect crushed velvet bed for your needs."
                  }
          
    
        `,
          }}
        ></script>
      </Head>
      <section className={styles.mydiv}>
        <div className={` ${styles.section_first} container-fluid`}>
          <div className="row">
            <div className="col-12">
              <h1 className={styles.headingh1}>Crushed Velvet Beds</h1>
            </div>
          </div>
        </div>
        {/* <p className={styles.paragraphp}>
            Relax and unwind in comfort with our high-quality beds. From natural
            materials to luxe velvet, we have a fantastic collection of bespoke
            ottomans and divans handcrafted in Yorkshire with your sleep in
            mind. Our handcrafted ranges are available in a wide selection of
            fabrics, and we also have a build your bed tool offering you the
            opportunity to design the beds of your dreams.{" "}
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
             <CrushedBedDesc />
          </div>
        </div>
      </section>
    </>
  );
};
export default CrushedBed;

CrushedBed.getLayout = PerPageLayout;
