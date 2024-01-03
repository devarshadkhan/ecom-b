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
import DivanBaseDesc from "../category-descryption/divanbase-desc";
import Head from "next/head";
import { useRouter } from "next/router";

const Divanbase: NextPageWithLayout = () => {
  const router = useRouter();
  const { data } = useFetchAllBedsWithImage("divan-base");
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
        title={"Buy Divan Bases Online | Beds Divans | Fast Delivery"}
        description={
          "A divan bed base offers a convenient storage solution with its built-in drawers. Choose from the single, double, king, and divan bases! Shop online today and get fast delivery service!"
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
          "name": "Buy Divan Bases Online|BedsDivans|Fast Delivery",
          "image":"https://api1.bedsdivans.co.uk/api/beds-image/red-1673502743829.webp",
        "description": "A divan bed base offers a convenient storage solution with its built-in drawers. Choose from the single, double, king, and divan bases! Shop online today and get fast delivery service!",
          "@id": "https://www.bedsdivans.co.uk/",
         "url": "https://bedsdivans.co.uk/beds/divan-beds/divanbases/", 
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
            "name": " What are the benefits of a divan base?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": " Divan bases offer several benefits, including increased comfort, support, and storage space. The padded upholstery of a divan base can provide a softer surface for sleeping, while the storage compartments can be used to store clothing, bedding, or other items to save space in a bedroom."
            }
          }, 
    {
            "@type": "Question",
            "name": " How do I choose the right size divan base?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": " To choose the right size divan base, you should measure the dimensions of your mattress and ensure that the base is at least the same size or larger. It's also important to consider the height of the base, as a taller base may make it more difficult to get in and out of bed." 
            }
          }, 
    {
            "@type": "Question",
            "name": " Can a divan base be used with any type of mattress?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": " Divan bases can typically be used with any type of mattress, including memory foam, latex, and spring mattresses. However, it's important to check the manufacturer's recommendations for the specific mattress you plan to use to ensure that it's compatible with the base."
            }
          }, {
            "@type": "Question",
            "name": " How do I clean and maintain a divan base?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": " To clean and maintain a divan base, you can use a soft brush or vacuum to remove dust and debris from the upholstery. Stains can be treated with a damp cloth and mild detergent, but you should avoid using harsh chemicals or abrasive cleaners that could damage the fabric. Additionally, you may want to rotate or flip the mattress periodically to ensure even wear and prolong the lifespan of the bed."
            }
    
        `,
          }}
        ></script>
      </Head>
      <section className={styles.mydiv}>
        <div className={` ${styles.section_first} container-fluid`}>
          <div className="row">
            <div className="col-12">
              <h1 className={styles.headingh1}>Divan Bases</h1>
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
            <DivanBaseDesc />
          </div>
        </div>
      </section>
    </>
  );
};
export default Divanbase;

Divanbase.getLayout = PerPageLayout;
