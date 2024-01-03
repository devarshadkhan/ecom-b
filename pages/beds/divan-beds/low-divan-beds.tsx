/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import NextSEO from "layout/nextseo";
import styles from "styles/header.module.scss";
import PerPageLayout from "layout/perpage";
import { NextPageWithLayout } from "typings/layout";
import ProductListing from "components/home/products";
import { useFetchAllBedsWithImage } from "network-requests/queries";
import ProductCard from "components/grid-card/card";
import { BedWithImage } from "network-requests/types";
import GridWrapper from "components/grid-card";
import SideFilter from "components/side-filter";
import MenuIcon from "icons/MenuIcon";
import MobProdcat from "components/mobile-menue/mobprodcat";
import LowDivaBedDesc from "../category-descryption/lowdivanbed-desc";
import Head from "next/head";
import { useRouter } from "next/router";

const LowDivanBed: NextPageWithLayout = () => {
  const router = useRouter();
  const { data } = useFetchAllBedsWithImage("low-divan-bed");
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
          "Buy Low Divan Beds online | Beds Divans | Fast Delivery"
        }
        description={
          "low divan beds for sale in all sizes, with or without storage. Quality bed frames at super-low prices.with Fast delivery. Buy now"
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
          "name": "Low Divan Beds | Beds Divans",
          "image":"https://api1.bedsdivans.co.uk/api/beds-image/red-1673500497488.webp",
        "description": "low divan beds for sale in all sizes, with or without storage. Quality bed frames at super-low prices.with Fast delivery. Buy now!",
          "@id": "https://www.bedsdivans.co.uk/",
         "url": "https://www.bedsdivans.co.uk/beds/low-divan-beds/", 
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
            __html: `{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [{
            "@type": "Question",
            "name": " What are the benefits of a low divan bed?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": " There are several benefits to a low divan bed. Firstly, it can be a good option for those who have limited mobility, as the lower height can make it easier to get in and out of bed. Secondly, low divan beds can be a good choice for small bedrooms, as they take up less visual space and can make a room feel less cluttered. Additionally, some people simply prefer the aesthetic of a lower-profile bed."
            }
          }, 
    {
            "@type": "Question",
            "name": " Are low divan beds less comfortable than traditional beds?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": " Not necessarily. While a low divan bed may not have the same height as a traditional bed, it can still be just as comfortable. The comfort level will ultimately depend on the quality of the mattress and the base. " 
            }
          }, 
    {
            "@type": "Question",
            "name": " Do low divan beds require a specific type of mattress?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": " No, low divan beds can accommodate most types of mattresses. However, it's important to ensure that the mattress you choose is the appropriate size for the base, as this can impact the overall comfort and support of the bed."
            }
          }, {
            "@type": "Question",
            "name": " Are low divan beds more expensive than traditional beds?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": " The cost of a low divan bed can vary depending on factors such as the quality of materials used, the size of the bed, and the brand. In general, low divan beds may be slightly more expensive than traditional beds due to the additional materials required to create the base. However, there are many affordable options available on the market."
            }
    
        `,
          }}
        ></script>
      </Head>
      <section className={styles.mydiv}>
        <div className={` ${styles.section_first} container-fluid`}>
          <div className="row">
            <div className="col-12">
              <h1 className={styles.headingh1}>Low Divan Beds</h1>
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
            <LowDivaBedDesc />
          </div>
        </div>
      </section>
    </>
  );
};
export default LowDivanBed;

LowDivanBed.getLayout = PerPageLayout;
