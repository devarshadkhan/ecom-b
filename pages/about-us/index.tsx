/* eslint-disable @next/next/no-img-element */
import NextSEO from "layout/nextseo";
import PerPageLayout from "layout/perpage";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import styles from "styles/about-us/aboutus.module.scss";
import Image from "next/image";
const AboutUs = () => {
  const router = useRouter();
  return (
    <>
      <NextSEO
        title={"About Us | Beds Divans"}
        description={
          "Discover our collection of modern and designer About Us in the UK. Visit Beds Divans today to shop luxury About Us at discounted prices!"
        }
        canonicalUrl={`${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`}
      />
       <Head>
      <script type="application/ld+json"
      
      dangerouslySetInnerHTML={{
        __html:`{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "About Us | Beds Divans",
          "image":"https://bedsdivans.co.uk/image/Slide6.png",
        "description": "Discover our collection of modern and designer About Us in the UK. Visit Beds Divans today to shop luxury About Us at discounted prices!",
          "@id": "https://www.bedsdivans.co.uk/",
         "url": "https://bedsdivans.co.uk/about-us", 
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
        `
      }}
      >
     </script>
     </Head>
      <section className={styles.aboutus}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>About us</h1>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.aboutussection}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={styles.section1}>
                <ul>
                  <li>
                    <div className={styles.aboutussectioncontent}>
                      <ul>
                        <li>
                          <Image width={120} height={50} src="/image/google.png" alt="img" layout="responsive"/>
                        </li>
                        <li>
                          <Image width={331} height={131} src="/image/Slide6.png" alt="img"  layout="responsive"/>
                          <p>100% Feedback</p>
                        </li>
                        <li>
                          <Image width={331} height={246} src="/image/Slide1.png" alt="img" layout="responsive"/>
                        </li>
                        <li>
                          <Image width={331} height={254} src="/image/Slide3.png" alt="img" layout="responsive"/>
                        </li>
                        <li>
                          <Image width={331} height={165} src="/image/bank-approved.png" alt="img" layout="responsive"/>
                        </li>
                        <li>
                          <Image width={331} height={203} src="/image/free-delivery.png" alt="img" layout="responsive"/>
                          <p>
                             Delivery From 2 to 5 Days. All Deliveries Are
                            <br></br>Confirmed Before Hand. Guaranteed To Be
                            Fast<br></br>And On Time.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className={styles.aboutussectioncontent2}>
                      <h3>A huge selection of divan beds</h3>
                      <p>
                        Beds divans believe the importance that each<br></br>
                        person has their own taste in style and design.<br></br>
                        At beds divans we are always improving on<br></br>style
                        and we will never compromise on quality<br></br>of our
                        selective range.
                      </p>
                      <p>
                        From the simple yet elegant house range, to the<br></br>
                        vibrant crushed velvet range, you’ll find a Divan
                        <br></br>bed that perfectly matches your room decor
                        <br></br>and design preferences.
                      </p>
                      <p>
                        All our exclusive beds come with oak wood<br></br>
                        storage facilities, so why not add this feature to
                        <br></br>your bed. The storage ranges from 1 -4 draws
                        <br></br>depending on your taste and where you want
                        <br></br>them on the bed.
                      </p>
                      <p>
                        All our Divan beds come with free castor<br></br>wheels,
                        but if you wanted to make the bed look<br></br>more
                        elegant then why not upgrade to our<br></br>excusive
                        chrome feet gliders which complete<br></br>the perfect
                        look of the bed.
                      </p>
                      <h3>
                        The significance of buying the right<br></br>divan bed
                      </h3>
                      <p>
                        When choosing the type of bed depending on<br></br>size
                        and colour here at beds divans, we can<br></br>help you
                        along the way in designing the right<br></br>bed for
                        you.
                      </p>
                      <p>
                        Here at Beds divans we specialise in the<br></br>perfect
                        divan bed selection. All our pictures<br></br>have not
                        been photo’d edited because we feel<br></br>its
                        important what you see is what you get.
                      </p>
                      <p>
                        Our selective range of divan beds has been<br></br>
                        carefully selected keeping in mind the taste and
                        sleeping<br></br>requirement of the customer.
                      </p>
                      <p>
                        When choosing a divan bed our friendly team<br></br>are
                        always here to help you choose the right<br></br>bed for
                        you.
                      </p>
                      <p>
                        All our fabrics have been selected with the<br></br>
                        latest modern look and style, if its either the<br></br>
                        house range or the crushed velvet selection our<br></br>
                        fabrics are to the highest quality and meet all<br></br>
                        fire safety regulations.
                      </p>
                      <p>DBZKHAN LTD (Bedsdivans)</p>
                      <h4>Company Registration Number:</h4>
                      <p>09531837</p>
                      <h4>Registered Address:</h4>
                      <p>
                        UNIT 8A STAG INDUSTRIAL ESTATE, OXFORD<br></br>STREET,
                        BILSTON, WV14 7HZ
                      </p>
                      <h4>Customer service contact</h4>
                      <p>info@bedsdivans.co.uk</p>
                    </div>
                  </li>
                  <li>
                    <div className={styles.aboutussectioncontent3}>
                      <ul>
                        <li>
                          <Image width={362} height={203} src="/image/Black-Velvet.png" alt="img" />
                          <p>
                            We Offer A Variety Of Colors And Sizes For Our
                            Velvet<br></br>Range. The Mattress In This Picture
                            Is Of Our 2000<br></br>Buckingham Gold Edition.
                          </p>
                        </li>
                        <li>
                          <Image width={362} height={203} src="/image/Ice-Velvet.png" alt="im g" />
                          <p>
                            All pictures taken by Bedsdivans.co.uk including
                            this<br></br>tinsel top (size double) set
                          </p>
                        </li>
                        <li>
                          <Image width={362} height={203} src="/image/Supreme-Velvet.png" alt="img" />
                          <p>
                            Supreme Vertically Paneled Headboard Comes In
                            <br></br>Many Colors And Sizes To Ensure You Get The
                            Right<br></br>Frame And Bed To Suit You. Pictured
                            Headboard<br></br>Above Stands At 26 inch In Height.
                          </p>
                        </li>
                        <li>
                          <Image width={362} height={203} src="/image/Gun-Grey.png" alt="img" />
                        </li>
                        <li>
                          <Image width={362} height={203} src="/image/Grey-Divan.png" alt="img" />
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.mydiv2}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={styles.aboutuslastcontent}>
                <h1>Why buy beds from www.bedsdivans.co.uk</h1>
                <p>
                  Beds divans has always put the customer first we believe the
                  importance of the look and quality of the bed must be at the
                  highest standards. We can assure you we will not be beaten on
                  quality yet affordable price too.
                </p>
                <p>
                  You can read many reviews of our clients that have purchased
                  our beds and they will share their experience with shopping
                  with us.
                </p>
                <p>
                  Always keep a look out for extra discounts on selected items .
                </p>
                <p>
                  Contact us today to find out more about our range of divan
                  beds or browse and buy for next day delivery on our website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;

AboutUs.getLayout = PerPageLayout;
