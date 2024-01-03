/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import NextSEO from "layout/nextseo";
import styles from "styles/home.module.scss";
import React, { useState } from "react";
import { NextPageWithLayout } from "typings/layout";
import PerPageLayout from "layout/perpage";
import QuickInfo from "components/home/info";
import HeroImageContainer from "components/home/hero";
import { dehydrate, QueryClient } from "react-query";
import { useFetchAllBedsWithImage } from "network-requests/queries";
import GridWrapper from "components/grid-card";
import ProductCard from "components/grid-card/card";
import { BedWithImage } from "network-requests/types";
import { useRouter } from "next/router";
import RightIcon from "icons/rightarrow";
import Link from "next/link";
import Head from "next/head";
import useMediaQuery from "hooks/use-media";
import Image from "next/image";

const Home: NextPageWithLayout = () => {
  const mobile = useMediaQuery("(max-width: 768px)");
  const contentRef = React.useRef<HTMLDivElement>(null);
  const { data } = useFetchAllBedsWithImage("selling-beds");
  const { data: mattress } = useFetchAllBedsWithImage("selling-mattresses");
  const { data: sleighbed } = useFetchAllBedsWithImage("selling-sleighbeds");
  // const { data: newbed } = useFetchAllBedsWithImage("new-beds");
  const [expanded, setExpanded] = useState(false);

  const toggleContent = () => {
    setExpanded(!expanded);
  };

  React.useEffect(() => {
    if (!mobile) {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  }, [mobile]);

  // console.log({ expanded });

  const content =
    " You don’t have to spend a fortune to sleep on a super comfortable bed. Gone are the days when luxury and comfortmeant emptying the bank account. Now, thanks to innovation and advances in technology, there are hundreds of cheap beds tochoose from that both look and feel great. We are one of the UK’s largest manufacturers of cheap beds for sale online and suppliers of top brands. With an enormous selection of affordable beds, bed frames, headboards, and mattresses—to suit just about every style, purpose, and taste you can think of. Including:";
  const truncatedContent = content.slice(0, 100);

  const router = useRouter();
  const { asPath } = router;
  return (
    <React.Fragment>
      <NextSEO
        title={
          "Beds Divans | Beds from the UK's Leading Bed and Mattress Manufacturers"
        }
        description={
          "Shop online for all kinds of beds, mattresses, and more from top brands with free nationwide delivery. All sizes are available. We guarantee your comfort. We will never be beaten on price!"
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
          "name": "Beds Divans | Beds from the UK's Leading Bed and Mattress Manufacturers ",
          "image":"https://bedsdivans.co.uk/spring-banner.jpg",
        "description": "Shop online for all kinds of beds, mattresses, and more from top brands with free nationwide delivery. All sizes are available. We guarantee your comfort. We will never be beaten on price!!",
          "@id": "https://www.bedsdivans.co.uk/",
         "url": "https://bedsdivans.co.uk/", 
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
        }  `,
          }}
        ></script>
      </Head>
      <HeroImageContainer />
      <QuickInfo />
      <section className={styles.section2}>
        <div className="container">
          <div className="row">
            <div className={`${styles.mwfull} col-6`}>
              <div className={styles.section2image}>
                <Image priority width={1000} height={670} layout="responsive" src="/image/hdbed.webp" alt="image" />
                <h3>Divan Beds</h3>
                <button>
                  {" "}
                  <Link href="/beds/divan-beds"> shop now </Link>
                </button>
              </div>
            </div>
            <div className={`${styles.mwfull} col-6`}>
              <div className={styles.section2image}>
                <Image priority width={1000} height={670} layout="responsive" src="/image/mattress.webp" alt="image" />
                <h3>mattresses</h3>
                <button>
                  {" "}
                  <Link href="/beds/mattresses/"> shop now </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section3}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={styles.section3content}>
                <h1>Best Selling Beds</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.bestsellingproduct}>
        <GridWrapper
          grid="4"
          gap="2rem"
          gridCount={{
            mobile: 1,
            desktop: 4,
          }}
        >
          {data?.pages?.["0"]?.data
            ?.slice(0, 8)
            .reverse()
            .map((item: BedWithImage, index) => {
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

        <button>
          <Link href="/beds/divan-beds"> shop divan beds </Link>
        </button>
      </div>

      <div className={styles.complicatedsec}>
        <div className={styles.complementcontent}>
          <h3>Complement any interior with our stylish headboards</h3>
          <img src="/image/Vector.webp" alt="img" />
        </div>
        <div className={styles.complementcontent1}>
          <button>
            <Link href="/beds/headboards"> shop headboards </Link>
          </button>
        </div>
      </div>

      <section className={styles.dreambedsection}>
        <div className={`${styles.mwfullese} container`}>
          <div className="row">
            <div className={`${styles.mwfull} col-5`}>
              <div className={styles.dreambedimage}>
                <Image priority width={1000} height={600} layout="responsive" src="/image/shutter.webp" alt="image" />
              </div>
            </div>
            <div className={`${styles.mwfull} col-7`}>
              <div className={styles.dreambedcontent}>
                <h3>Find the bed of your dreams</h3>
                <p>
                  You don’t have to spend a fortune to sleep on a super
                  comfortable bed. Gone are the days when luxury and comfort
                  meant emptying the bank account. Now, thanks to innovation and
                  advances in technology, there are hundreds of cheap beds to
                  choose from that both look and feel great.
                </p>
                {mobile && (
                  <p className={styles.expandMore}>
                    <button onClick={toggleContent}>
                      {expanded ? "View less" : "View more"}
                    </button>
                  </p>
                )}

                {/* <button onClick={toggleContent}>
                  {expanded ? 'View less' : 'View more'}
                </button> */}
                <div
                  ref={contentRef}
                  style={{
                    maxHeight: expanded ? "800px" : "0px",
                    overflow: "hidden",
                    transition: "all 0.5s ease-in-out",
                  }}
                >
                  <p>
                    We are one of the UK’s largest manufacturers of cheap beds
                    for sale online and suppliers of top brands. With an
                    enormous selection of affordable beds, bed frames,
                    headboards, and mattresses—to suit just about every style,
                    purpose, and taste you can think of. Including:
                  </p>
                  <div className={styles.dreambedcontent1}>
                    <ul>
                      <li>
                        <p>
                          <RightIcon size={40} color="#222178" />
                          The UK’s largest
                          <Link href="/beds/divan-beds/">
                            <a>selection of cheap divan beds</a>
                          </Link>
                        </p>
                      </li>
                      <li>
                        <p>
                          <RightIcon size={40} color="#222178" />
                          Cheap
                          <Link href="/beds/shop-by-bed-size/small-double-40/">
                            <a> small double</a>
                          </Link>
                          and
                          <Link href="/beds/shop-by-bed-size/double-46/">
                            <a>double beds with mattresses</a>
                          </Link>
                        </p>
                      </li>
                      <li>
                        <p>
                          <RightIcon size={40} color="#222178" />
                          Cheap
                          <Link href="/beds/shop-by-bed-size/king-50/">
                            <a>king size</a>
                          </Link>
                          and
                          <Link href="/beds/shop-by-bed-size/super-king-60/">
                            <a>super king size beds</a>
                          </Link>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.mattresssection}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Best Selling Mattresses</h3>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.bestsellingproduct}>
        <GridWrapper
          grid="4"
          gap="2rem"
          gridCount={{
            mobile: 1,
            desktop: 4,
          }}
        >
          {mattress?.pages?.["0"]?.data
            ?.slice(0, 4)
            .reverse()
            .map((item: BedWithImage, index) => {
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
        <button>
          <Link href="/beds/mattresses/">SHOP MATTRESSES</Link>
        </button>
      </div>
      <section className={styles.onemattresssection}>
        <div className={`${styles.mwfullese} container`}>
          <div className="row">
            <div className={`${styles.mwfull} col-6`}>
              <div className={styles.onemattressscontent}>
                <Image priority width={1000} height={700} layout="responsive" src="/image/offer.webp" alt="image" />
              </div>
            </div>
            <div className={`${styles.mwfull} col-6`}>
              <div className={styles.onemattressscontent1}>
                <h3>We're your one-stop mattress shop.</h3>
                <p>
                  Mattress shopping shouldn’t have to be difficult or expensive.
                  And sleep shouldn’t be complicated either. That’s why we’ve
                  collected only the best and most comfortable affordable
                  mattresses—available at very low prices.
                </p>
                <p>
                  Choose a mattress that you like, and we’ll not only deliver it
                  to you, but we’ll also take your old one away. Mattress
                  shopping has never been easier or more convenient. Our
                  mattresses are loved by our customers, and we’ve always got
                  plenty of fantastic deals and sales on them. So, from
                  traditional springs to memory foam or orthopaedic mattresses,
                  make sure to view our range today. And if you can’t find what
                  you’re looking for, just ask!
                </p>
                <p>
                  One of our expert team members will be happy to source the
                  right one for you. Either way, you’re only a few clicks away
                  from having a comfier, better night’s sleep.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.mattresssection}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Sleigh Bed Set</h3>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.bestsellingproduct}>
        <GridWrapper
          grid="4"
          gap="2rem"
          gridCount={{
            mobile: 1,
            desktop: 4,
          }}
        >
          {sleighbed?.pages?.["0"]?.data
            ?.slice(0, 4)
            .map((item: BedWithImage, index) => {
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
        <button>
          <Link href="/beds/sleigh-bed/">SHOP SLEIGH BEDS</Link>
        </button>
      </div>
      <section className={styles.onemattresssection}>
        <div className={`${styles.mwfullese} container`}>
          <div className="row">
            <div className={`${styles.mwfull} col-6`}>
              <div className={styles.onemattressscontent0}>
                <Image priority width={1000} height={600} layout="responsive" src="/image/shutterstock.webp" alt="image" />
              </div>
            </div>
            <div className={`${styles.mwfull} col-6`}>
              <div className={styles.onemattressscontent1}>
                <h3>
                  Deals that don’t break the bank<br></br>— and we can deliver
                  in as little as 2 days.
                </h3>
                <p>
                  Our award-winning delivery service means you won’t be waiting
                  around for your new bed. We have one of the fastest dispatch
                  times in the UK, and with our live order tracking system,
                  you’ll always know when to expect us.
                </p>
                <p>
                  Simply choose your bed and the type of mattress you want to go
                  with it — and that’s it! We’ll have it delivered to you in no
                  time.
                </p>
                <p>
                  Easily transform your bed or divan with our great collection
                  of stylish bed headboards. We stock lots of headboards for
                  beds in a variety of colours, designs, and sizes. They’re
                  great for coordinating with new
                  <Link href="/beds/divan-beds/">divan beds</Link>, and can
                  really help to further bring out the aesthetic
                  you’re going for.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.onemattresssection}>
        <div className={`${styles.mwfullese} container`}>
          <div className="row">
            <div className={`${styles.mwfull} col-6`}>
              <div className={styles.thousandcontent1}>
                <h3>Thousands of happy customers over the last 10 years</h3>
                <p>
                  Check out our TrustPilot reviews; you won’t be disappointed.
                  We are confident you’ll love your new bed and that our service
                  will leave you more than satisfied. But if you aren’t happy,
                  we’ll happily either exchange it or give you a refund within
                  30 days of purchase.
                </p>
                <p>
                  The team we have is dedicated to offering unbeatable customer
                  service. So if there’s anything you need or any questions you
                  want answered, just give us a call or send us an email. A
                  friendly member of our team will be happy to help.
                </p>
              </div>
            </div>
            <div className={`${styles.mwfull} col-6`}>
              <div className={styles.thousandcontent}>
                <Image priority width={1000} height={600} layout="responsive" src="/image/shutterstock1.webp" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.bannerimage}>
        <Image priority width={1350} height={380} layout="responsive" src="/image/2nd banner.png" alt="mattressesbanner" />
      </section>
      <section className={styles.lastsection}>
        <div className={`${styles.mwfullese} container`}>
          <div className="row">
            <div className={`${styles.mwfull} col-4`}>
              <div className={styles.lastsectionimage}>
                <Image width={1000} height={600} layout="responsive" src="/image/image21.webp" alt="img" />
              </div>
            </div>
            <div className={`${styles.mwfull} col-8`}>
              <div className={styles.lastcontent}>
                <h3>We manufacture all beds at our UK factory</h3>
                <p>
                  We are the manufacturers of all our items, which means you can
                  rest assured that every single bed is made in the UK. Enjoy
                  the comfort and luxury you want, at a price you can afford.
                </p>
                <p>
                  Why do we manufacture here in our UK factory? All of our beds
                  are designed and handmade with care right here in Bilston,
                  which means we can offer the finest in quality craftsmanship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;

Home.getLayout = PerPageLayout;

export const getServerSideProps = async (context: any) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    ["beds-image"],
    async () =>
      await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/beds/get-all-beds-with-base-image`,
        {
          credentials: "same-origin",
          headers: {
            Cookie: context.req.headers.cookie,
          },
        }
      ).then((res) => {
        const response = res.json() as any;
        if (response.success === false) {
          return {
            redirect: {
              permanent: false,
              destination: "/",
            },
          };
        } else {
          return response;
        }
      })
  );
  return { props: { dehydratedState: dehydrate(queryClient) } };
};

const gridImages = {
  listOne: [
    {
      heading: "Kings size beds",
      image: "/images/x.png",
    },
    {
      heading: "Single Beds",
      image: "/images/c.png",
    },
    {
      heading: "Queen size beds",
      image: "/images/o.png",
    },
    {
      heading: "Storage beds",
      image: "/images/v.png",
    },
  ],
  listTwo: [
    {
      heading: "Orthopedic mattress",
      image: "/images/b.png",
    },
    {
      heading: "Tinsel top matrress",
      image: "/images/m.png",
    },
    {
      heading: "Memory foam mattress",
      image: "/images/n.png",
    },
    {
      heading: "Pillow top mattress",
      image: "/images/g.png",
    },
  ],
};
