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
import DivanBedDesc from "./category-descryption/divanbed-desc";
import HeadBoardDesc from "./category-descryption/headboar-desc";
import Head from "next/head";
import { useRouter } from "next/router";

const Headboard: NextPageWithLayout = () => {
  const router = useRouter();
  const { data } = useFetchAllBedsWithImage("headboard");
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
        title={"Buy Headboards Online | Beds Divans | Fast And "}
        description={
          "Create your perfect bedroom with stylish and modern headboards from beds divas Available in a variety of colors and sizes to match your bed.with Fast delivery. Buy now"
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
          "name": "Buy Headboards Online | Beds Divans ",
          "image":"https://api1.bedsdivans.co.uk/api/beds-image/red-1669785885238.webp",
        "description": "Create your perfect bedroom with stylish and modern headboards from beds divas Available in a variety of colors and sizes to match your bed.with Fast delivery.Buy now!",
          "@id": "https://www.bedsdivans.co.uk/",
         "url": "https://bedsdivans.co.uk/beds/headboards", 
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
            "name": " Are headboards necessary for a comfortable sleep experience?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": " No, headboards are not necessary for a comfortable sleep experience, but they can enhance the overall look and feel of a bedroom and provide added support for sitting up in bed."
            }
          }, 
    {
            "@type": "Question",
            "name": " How do I choose the right headboard for my bedroom?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": " When choosing a headboard, consider factors such as your personal style, the size and colour of your bed, and the overall aesthetic of your bedroom. It's also important to choose a headboard that is comfortable and functional for your needs." 
            }
          }, 
    {
            "@type": "Question",
            "name": " What are the benefits of having a headboard?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": " Headboards provide a comfortable backrest for sitting up in bed, prevent pillows from falling off the bed, and add style and personality to a bedroom."
            }
          }, {
            "@type": "Question",
            "name": " What size headboard do I need for my bed?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": " The size of the headboard you need depends on the size of your bed. Common sizes include twin, full, queen, and king. You should choose a headboard that matches the width of your bed frame."
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
              <h1 className={styles.headingh1}>HeadBoard</h1>
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
              <div>          
              </div>
            </div>
            <HeadBoardDesc />
          </div>
        </div>
      </section>
    </>
  );
};
export default Headboard;

Headboard.getLayout = PerPageLayout;
