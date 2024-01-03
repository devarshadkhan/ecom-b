/* eslint-disable @next/next/no-img-element */
import React from "react";
import PerPageLayout from "layout/perpage";
import styles from "styles/divanbedsuk/divanbedsuk.module.scss";
import Link from "next/link";
import GridWrapper from "components/grid-card";
import { BedWithImage } from "network-requests/types";
import RelProductCard from "components/grid-card/relcard";
import { useFetchAllBedsWithImage } from "network-requests/queries";
import { useRouter } from "next/router";
const DivanBedsUk2 = () => {
  const router = useRouter();
  const { data } = useFetchAllBedsWithImage("uk2");
  const { data:mattress } = useFetchAllBedsWithImage("uk3");
  return (
    <>
      <section className={styles.mydiv}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className={styles.bigsaleimg}>
                <img src="/image/min.jpg" alt="img" />
                <h2>DIVAN BEDS CUSTOMIZED TO YOUR NEED&rsquo;S</h2>
                <p>
                  We’re always reviewing and adjusting our range of divan beds
                  to ensure we provide the widest choice available. That’s
                  because we know everyone is unique and has a different taste
                  and set of requirements when it comes to their bed. From the
                  simple yet elegant House Range, to the strikingly modern
                  crushed velvet range, you’ll find a Divan bed that perfectly
                  matches your room decor and design preferences. We have some
                  great practical solutions, too, with divan storage beds that
                  combine a great night’s sleep with the ability to store all
                  manner of clothes, and clutter. Have a browse of our divan
                  beds today, but please do not hesitate to contact us if you
                  have any questions at all or need advice on what type of divan
                  bed would be best for you.
                </p>
                <h2>DIVAN BEDS UK</h2>
                <p>
                  We’re one of the UK’s leading manufacturers of divan beds,
                  offering a rich selection of products in a variety of styles.
                  At BedsDivans, we are committed to improving comfort and sleep
                  quality without compromising style.
                </p>
                <div>
                <GridWrapper
                grid="4"
                gap="2rem"
                gridCount={{
                  mobile: 1,
                  desktop: 4,
                }}
              >
                {data?.pages?.["0"]?.data?.map((item: BedWithImage, index) => {
                    return (
                      <RelProductCard
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
                </div>
                <div>
                  <Link href="/beds/shop/">
                <button>view all products</button></Link>
                </div>
                <p>
                  We believe shopping for a bed, mattress. That’s why we offer
                  not only a rich selection of single divan beds, large beds,
                  and cheap mattresses but also an effortless shopping
                  experience with fast delivery. Beds Divans has proved its name
                  for almost a decade, we are UK’s Largest Manufacturers and
                  Online Spot For best Shop Experience, Fastest Delivery, Live
                  Tracking Makes us the Winners For Quality Sale & Service
                  Provider. Our beds and
                  <Link href={"#"} className={styles.parlink}>
                    <a>mattresses</a>
                  </Link>{" "}
                  are comfortable and great-looking. They prove durable and
                  maintain an appealing look over the years. We offer products
                  for all types of houses and flats, providing you with a rich
                  catalogue you can’t find anywhere else. Whether you’re
                  shopping for your first bed or have decorated dozens of homes
                  already, we can help you find the right bed or mattress
                  without any compromises.
                </p>
                <img src="/image/capture-1.png" alt="" />
                <h3>EXPLORE OUR MATTRESSES</h3>
                <p>
                  Our mattresses are comfortable and great-looking. They prove
                  durable and maintain an appealing look over the years. We
                  offer products for all types of houses and flats, providing
                  you with a rich catalogue you can’t find anywhere else.
                </p>
                <div>
                <GridWrapper
                grid="4"
                gap="2rem"
                gridCount={{
                  mobile: 1,
                  desktop: 4,
                }}
              >
                {mattress?.pages?.["0"]?.data?.map((item: BedWithImage, index) => {
                    return (
                      <RelProductCard
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
                </div>
                <div>
                  <Link href="/beds/mattresses/">
                <button>view all products</button>
                </Link>
                </div>
                <div className={styles.lastsection}>
                  <div className="row">
                    <div className={`${styles.mwfulles} col-6 text-end  `}>
                      <img
                        src="/image/wplogo.webp"
                        alt="logo"
                        className={styles.mainlogos}
                      />
                      <p>
                        Divans Beds When looking for a new bed why not try the
                        new designed divan bed. It is affordable and looks
                        great. At bedsdivans we spent years in improving our
                        wide selection of beds and we can assure you will love
                        our latest selection of divan beds. At Bedsdivans we aim
                        to work around your needs whether it comes to short
                        notice delivery dates or the slightest adjustment to
                        your bed we are always here to help you get the bed
                        right for you.
                      </p>
                    </div>
                    <div className={`${styles.mwfulles} col-6 text-start`}>
                      <img
                        src="/image/beds1.png"
                        alt=""
                        className={styles.mainlogo}
                      />
                      <h3>EXCLUSIVE BED WITH EXCEPTION DELIVERY</h3>
                      <p>
                        <strong>Free 7 Day Delivery</strong>
                      </p>
                      <p>
                        <strong>Next Day Delivery</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DivanBedsUk2;
DivanBedsUk2.getLayout = PerPageLayout;
