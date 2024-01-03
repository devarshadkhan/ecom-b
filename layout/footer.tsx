/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Style from "styles/footer/footer.module.scss";
import Link from "next/link";
import visaicon from "icons/visaicon";
import PhoneIcon from "icons/PhoneIcon";
import MailIcon from "icons/MailIcon";
import PayPal from "icons/paypalicon";
import FacebookIcon from "icons/facebook";
import InstagramIcon from "icons/instagram";
import MasterCard from "icons/mastercard";
import TwitterIcon from "icons/twittericon";
import VisaIcon from "icons/visaicon";
import PinterestIcon from "icons/Pinterest";
import { useGetAllBlogs } from "network-requests/queries";
import { useRouter } from "next/router";
import Maestro from "icons/maestro";
import ClearPay from "icons/clearpay";


const Footer = () => {
  const { data } = useGetAllBlogs();
  const router = useRouter();
  return (
    <footer>
      <section className={Style.mainfooter}>
        <div className={`${Style.mwfullesd} container`}>
          <div className="row">
            <div className={`${Style.mwfull} col-3`}>
              <div className={Style.footer1}>
                <ul>
                  <li onClick={()=>router.push("/")} style={{cursor:"pointer"}}>
                    <Image width={120} height={100} src="/image/wplogo.webp" alt="logo" />
                  </li>
                  <li className={Style.yellimage}>
                    <Image width={130} height={120} src="/image/yell.webp" alt="logo" />
                  </li>
                </ul>
                <div className={Style.logotxt}>Trusted By Yell</div>

                <div className={Style.footer1s}>
                  <ul>
                    <li>
                      <MailIcon size={18} color="#fff" />
                      Unit 8A Stag Industrial Estate Oxford Street Bilston WV14
                      7HZ
                    </li>
                    <li>
                      <PhoneIcon size={18} color="#fff" />

                      <a href="tel:01902405535">01902405535</a>
                    </li>
                    <li>
                      <MailIcon size={18} color="#fff" />

                      <a href="mailto:info@bedsdivans.co.uk">
                        info@bedsdivans.co.uk
                      </a>
                    </li>
                  </ul>
                </div>
                <div className={Style.footer1es}>
                  <ul className={Style.footericon}>
                    <li>
                      <VisaIcon size={40} color="#fff" />
                    </li>
                    <li>
                      <Maestro size={40} color="#fff" />
                    </li>
                    <li>
                      <MasterCard size={40} color="#fff" />
                    </li>

                    <li>
                      <ClearPay size={40} />
                    </li>
                    {/* <li><KlarnaPay size={40}/></li> */}
                    <li>
                      <img
                        src="/image/KALARNA.png"
                        alt="klarna"
                        className={Style.footer1}
                      />
                    </li>
                  </ul>
                  <ul className={Style.footericon1}>
                    <li>
                      <img
                        src="/image/stripepay.png"
                        alt="stripe"
                        className={Style.footer1}
                      />
                    </li>
                    <li>
                      <img
                        src="/image/amazonpay.png"
                        alt="amazon pay"
                        className={Style.footer1}
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={`${Style.mwfull} col-3`}>
              <div className={Style.footer2}>
                <h3>USEFUL LINKS</h3>

                <ul>
                  <li>
                    <Link href="/beds/divan-beds/">
                      <a>Divan Beds</a>
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="/beds/divan-beds/suede-divan-bed/">
                      <a>Suede Fabric Divan Bed</a>
                    </Link>
                  </li> */}
                  <li>
                    <Link href="/beds/headboards/">
                      <a> Headboards</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/beds/mattresses/">
                      <a>Mattresses</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/beds/divan-beds/crushed-velvet-beds/">
                      <a>Crushed Velvet Beds</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/beds/sleigh-bed/">
                      <a>Sleigh Beds</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blogs/">
                      <a>Blog</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className={`${Style.mwfull} col-3`}>
              <div className={Style.footer2}>
                <h3>ADDITIONAL LINKS</h3>
                <ul>
                  <li>
                    <Link href="/about-us">
                      <a>About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/beds/shop/">
                      <a>Shop</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-us">
                      <a>Contact Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/return-policy">
                      <a>Return Policy</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/policy-warranty">
                      <a>Policy & Warranty</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/delivery-and-the-shipping-policy">
                      <a>Delivery & Shipping Policy</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className={`${Style.mwfull} col-3`}>
              <div className={Style.footer2}>
                <h3>LATEST BLOGS</h3>
                <ul>
                  {data?.slice(0, 3).map((item, index) => {
                    return (
                      <>
                        <li
                          onClick={() => router.push(`/blogs/${item?.slug}`)}
                          key={index}
                        >
                          <p> {item?.name}</p>
                        </li>
                      </>
                    );
                  })}
                </ul>
                <div className={Style.footer2s}>
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/bedsdivans.co.uk">
                        <FacebookIcon size={22} color="#fff" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/bedsdivans">
                        <TwitterIcon size={22} color="#fff" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/bedsdivans/?hl=en">
                        <InstagramIcon size={22} color="#fff" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.pinterest.co.uk/dbzkhanltd/">
                        <PinterestIcon size={22} color="#fff" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={Style.mainlastfooter}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p>
                You may not reproduce or communicate any of the content on this
                website, including files downloadable from this website, without
                the permission of the copyright owner, all contents and images
                on our website are owned and copyrighted by DBZKHAN LTD
                Bedsdivans 2023
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};
export default Footer;
