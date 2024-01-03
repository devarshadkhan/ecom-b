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
import { useRouter } from "next/router";
import SideFilter from "components/side-filter";
import MenuIcon from "icons/MenuIcon";
import MobProdcat from "components/mobile-menue/mobprodcat";
import HousefabricDesc from "../category-descryption/housefabric-desc";
import Head from "next/head";

const HouseFabric: NextPageWithLayout = () => {
  const { data } = useFetchAllBedsWithImage("house-fabric");
  console.log({data})
  const [cat, setCat] = useState(false);
  const mobilecat = () => {
    if (cat == true) {
      setCat(false);
    } else {
      setCat(true);
    }
  };
  const router = useRouter();
  return (
    <>
      <NextSEO
        title={
          "Buy House Fabric Divan Beds Online | Beds Divans | Fast Delivery"
        }
        description={
          "Buy Best Quality house fabric divan beds at a high discount for your home and other purposes we have a wide range of house fabric divan beds with Fast delivery. Buy now"
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
          "name": "House Fabric Divan Beds | Beds Divans",
          "image":"https://api1.bedsdivans.co.uk/api/beds-image/red-1669628341218.webp",
        "description": "Buy Best Quality house fabric divan beds at a high discount for your home and other purposes we have a wide range of house fabric divan beds with Fast delivery. Buy now!",
          "@id": "https://www.bedsdivans.co.uk/",
         "url": "https://www.bedsdivans.co.uk/beds/divan-beds/house-fabric-divan-beds/", 
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
            "name": " What are the benefits of a house fabric bed divan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": " House fabric bed divans offer several benefits, including extra storage space, easy cleaning, and durability. The storage drawers built into the base of the bed can provide valuable extra space for bedding, clothing, or other household items. The fabric covering is easy to clean and can be removed and washed as needed. The sturdy wooden frame and upholstery padding also make these beds long-lasting and durable."
            }
          }, {
            "@type": "Question",
            "name": " How do I choose the right size of a house fabric bed divan? ",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": " To choose the right size of a house fabric bed divan, you need to consider the size of your room, the size of your mattress, and the number of people who will be sleeping in the bed. Measure your room to determine the maximum size of bed that will fit comfortably. Then, choose a bed size that corresponds with your mattress size (e.g. twin, queen, king). Finally, consider whether you need a larger bed for two people, or if a smaller bed will suffice for a single sleeper. "
            }
          },{
            "@type": "Question",
            "name": " Can I customize my house fabric bed divan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": " Yes, you can customize your house fabric bed divan to fit your specific needs and preferences. You can choose the fabric covering, the colour and style of the headboard and footboard, and the number and location of the storage drawers. Many manufacturers offer a wide range of customization options to help you create a bed that is both functional and stylish."
            }
          },{
            "@type": "Question",
            "name": " How do I care for my house fabric bed divan? ",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": " To care for your house fabric bed divan, you should regularly vacuum or brush the fabric to remove any dust or dirt. If the fabric becomes stained or soiled, you can spot-clean it with mild detergent and warm water. For more stubborn stains, you may need to hire a professional upholstery cleaning service. To prevent damage to the wooden frame or storage drawers, avoid using harsh cleaning chemicals or abrasive materials when cleaning your bed."
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
              <h1 className={styles.headingh1}>House Fabric Divan Beds</h1>
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
                    console.log("hwjdehjd",item.slug)
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
            <HousefabricDesc />
          </div>
        </div>
      </section>
    </>
  );
};
export default HouseFabric;

HouseFabric.getLayout = PerPageLayout;
