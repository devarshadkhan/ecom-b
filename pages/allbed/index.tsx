/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { NextPageWithLayout } from "typings/layout";
import style from "styles/allbed/allbed.module.scss";
import PerPageLayout from "layout/perpage";

const AllBeds: NextPageWithLayout = () => {
  return (
    <div>
      <section className={style.mydiv}>
        <div>
          <h1>Save upto 48% with All Beds</h1>
          <p>
            We’re one of the UK’s leading manufacturers of cheap divan beds,
            offering a rich selection of products in a variety of style.
          </p>
          <button type="submit">SHOP NOW</button>
        </div>
      </section>
      <section className={style.del}>
        <h3>
          <strong>Quick Delivery -</strong>
          Shop our beds available within 2 weeks
        </h3>
      </section>

      <section className={style.mydiv2}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Shop By Size</h1>
            </div>
          </div>
        </div>
      </section>
      <section className={style.bedicon}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-2">
              <div className={style.bedbox}>
                <img src="\assets\images\small.svg" alt="img" />
                <p className={style.parap}>3'0 Single</p>
              </div>
            </div>
            <div className="col-2">
              <div className={style.bedbox}>
                <img src="\assets\images\smalldouble.svg" alt="img" />
                <p className={style.parap}>4'0 Small Double </p>
              </div>
            </div>
            <div className="col-2">
              <div className={style.bedbox}>
                <img src="\assets\images\double.svg" alt="img" />
                <p className={style.parap}>4'6 Double</p>
              </div>
            </div>
            <div className="col-2">
              <div className={style.bedbox}>
                <img src="\assets\images\king.svg" alt="img" />
                <p className={style.parap}>5'0 King</p>
              </div>
            </div>
            <div className="col-2">
              <div className={style.bedbox}>
                <img src="\assets\images\superking.svg" alt="img" />
                <p className={style.parap}>6'0 Super King</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={style.mydiv1}>
        <div className="container">
          <div className="row">
            <div className={style.mydiv3}>
              <h3>DBZBeds</h3>
              <div>
                <p>
                  We’re one of the UK’s leading manufacturers of
                  <strong className={style.col}> cheap divan beds</strong>,
                  offering a rich selection of products in a variety of style.
                  At BedsDivans, we are committed to improving comfort and sleep
                  quality without compromising style. We believe shopping for a
                  bed, mattress, or set of{" "}
                  <strong className={style.col}>rattan furniture</strong> for
                  your garden should be an enjoyable experience all the way
                  through.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={style.sleighbed}>
        <div className="container">
          <div className="row">
            <div className={style.picture}>
              <div className="col-6 text-center">
                <div className={style.box1}>
                  <h1>Sleigh Bed Exclusive Offers</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam
                  </p>
                  <button className={style.buttonnow} type="submit">
                    SHOP NOW
                  </button>
                </div>
              </div>

              <div className="col-6 text-center">
                <div className={style.allbedbed}>
                  <img src="/assets/images/allbedbed.webp" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={style.mydiv6heading}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Shop By Color</h1>
            </div>
          </div>
        </div>
      </section>

      <section className={style.bedicon2}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-2">
              <div className={style.bedbox}>
                <img src="assets\images\IrishBlue.svg" alt="img" />
                <p className={style.parap}>Grey Linen</p>
              </div>
            </div>
            <div className="col-2">
              <div className={style.bedbox}>
                <img src="assets\images\Brown.svg" alt="img" />
                <p className={style.parap}>Grey suede </p>
              </div>
            </div>
            <div className="col-2">
              <div className={style.bedbox}>
                <img src="assets\images\Grey.svg" alt="img" />
                <p className={style.parap}>Charcoal Chennile</p>
              </div>
            </div>
            <div className="col-2">
              <div className={style.bedbox}>
                <img src="assets\images\Blue.svg" alt="img" />
                <p className={style.parap}>Black Crushed Velvet</p>
              </div>
            </div>
            <div className="col-2">
              <div className={style.bedbox}>
                <img src="assets\images\Pink.svg" alt="img" />
                <p className={style.parap}>Pink</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className={style.shopcolor}>
        <h2>Shop By Color</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <img src="assets\images\IrishBlue.svg" alt="IrishBlue" />
              <p>Irish Blue </p>
            </div>

            <div className="col-md-2">
              <img src="assets\images\Brown.svg" alt="Brown" />
              <p>Brown </p>
            </div>

            <div className="col-md-2">
              <img src="assets\images\Grey.svg" alt="Grey" />
              <p>Grey </p>
            </div>

            <div className="col-md-2">
              <img src="assets\images\Blue.svg" alt="Blue" />
              <p>Blue</p>
            </div>

            <div className="col-md-2">
              <img src="assets\images\Pink.svg" alt="Pink" />
              <p>Pink</p>
            </div>
          </div>
        </div>
      </section> */}

      <section className={style.sofabed}>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className={style.box2}>
                <h1>SWAN Sleigh Bed</h1>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                </p>
                <button className={style.sofabutton} type="submit">
                  SHOP NOW
                </button>
              </div>
            </div>

            <div className="col-6">
              <div className={style.allbedbedbed}>
                <img src="../assets/images/redbed.webp" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={style.mydiv8}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>our exclusive</h2>
              <h1>complete divan bed set range</h1>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={style.mydiv9}>
        <div className={` ${style.innerbox} container`}>
          <div className="row">
            <div className="col-3">
              <select name="category" id="category">
                <option value="Select">Beds</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div className="col-3">
              <select name="category" id="category">
                <option value="Select">Color</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div className="col-3">
              <select name="category" id="category">
                <option value="Select">Price</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div className="col-3"></div>
          </div>
        </div>
      </section>

      <section className={style.discover}>
        <div className="container">
          <div className="row">
            <div className={style.benifit}>
              <h1>DISCOVER THE BENEFITS OF SHOPPING ONLINE AT BEDSDIVANS</h1>
              <p>
                When looking for a new bed why not try the new designed divan
                bed. It is affordable and looks great. At bedsdivans we spent
                years in improving our wide selection of beds and we can assure
                you will love our latest selection of divan beds. At Bedsdivans
                we aim to work around your needs whether it comes to short
                notice delivery dates or the slightest adjustment to your bed we
                are always here to help you get the bed right for you.
              </p>
              <button className={style.service} type="submit">
                More Service
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* <------------------------------------------------------------!> */}

      <section className={style.productsimages}>
        <h2>Our Quality Products</h2>
        <p className={style.refresh}>Get up Refresh Every day</p>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className={style.box8}>
                <img
                  src="https://aspirestore.co.uk/49062-home_default/olivier-fabric-ottoman-bed.jpg"
                  alt="img"
                  width={258}
                  height="210"
                />
                <h4>Beds</h4>
                <p className={style.productname8}>
                  Our range of beds come in single, double, king and super king
                  sizes are crafted with superior memory foam that cradles your
                  head and keeps your head and neck aligned even while you sleep
                  on your side and prevents the head from sinking.
                </p>
                <button className={style.sofabutton8} type="submit">
                  SHOP NOW
                </button>
              </div>
            </div>
            <div className="col-3">
              <div className={style.box8}>
                <img
                  src="https://aspirestore.co.uk/49062-home_default/olivier-fabric-ottoman-bed.jpg"
                  alt="img"
                  width={258}
                  height="210"
                />

                <h4>Mattress</h4>

                <p className={style.productname8}>
                  Memory foam Mattress topper provides an additional cushioning
                  to your regular memory foam mattress. The topper is made from
                  one inch gel foam which is to be placed above the memory foam
                  mattress.
                </p>
                <button className={style.sofabutton9} type="submit">
                  SHOP NOW
                </button>
              </div>
            </div>
            <div className="col-3">
              <div className={style.box8}>
                <img
                  src="https://aspirestore.co.uk/49062-home_default/olivier-fabric-ottoman-bed.jpg"
                  alt="img"
                  width={258}
                  height="210"
                />
                <h4>Headboard</h4>
                <p className={style.productname8}>
                  Our range of beds come in single, double, king and super king
                  sizes are crafted with superior memory foam that cradles your
                  head and keeps your head and neck aligned even while you sleep
                  on your side and prevents the head from sinking.
                </p>
                <button className={style.sofabutton8} type="submit">
                  SHOP NOW
                </button>
              </div>
            </div>
            <div className="col-3">
              <div className={style.box8}>
                <img
                  src="https://aspirestore.co.uk/49062-home_default/olivier-fabric-ottoman-bed.jpg"
                  alt="img"
                  width={258}
                  height="210"
                />
                <h4>Garden Furniture</h4>
                <p className={style.productname8}>
                  Our range of beds come in single, double, king and super king
                  sizes are crafted with superior memory foam that cradles your
                  head and keeps your head and neck aligned even while you sleep
                  on your side and prevents the head from sinking.
                </p>
                <button className={style.sofabutton8} type="submit">
                  SHOP NOW
                </button>
              </div>
            </div>

            <p className={style.perfect8}>
              <strong>Why wait for the perfect bed?</strong>
              Spread the cost of your order with interest free credit{" "}
            </p>
          </div>
        </div>
      </section>

      <section className={style.productsimages9}>
        <h2 className={style.season}>Best-seller of the season</h2>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className={style.box9}>
                <img
                  src="https://aspirestore.co.uk/49062-home_default/olivier-fabric-ottoman-bed.jpg"
                  alt="img"
                  width={258}
                  height="210"
                />

                <p className={style.productname}>
                  Grey Linen Divan Bed Base or Set Headboard & Mattress
                </p>
                <p className={style.price}>£545.00</p>
              </div>
            </div>
            <div className="col-3">
              <div className={style.box9}>
                <img
                  src="https://aspirestore.co.uk/49062-home_default/olivier-fabric-ottoman-bed.jpg"
                  alt="img"
                  width={258}
                  height="210"
                />

                <p className={style.productname}>
                  Grey Linen Divan Bed Base or Set Headboard & Mattress
                </p>
                <p className={style.price}>£545.00</p>
              </div>
            </div>
            <div className="col-3">
              <div className={style.box9}>
                <img
                  src="https://aspirestore.co.uk/49062-home_default/olivier-fabric-ottoman-bed.jpg"
                  alt="img"
                  width={258}
                  height="210"
                />

                <p className={style.productname}>
                  Grey Linen Divan Bed Base or Set Headboard & Mattress
                </p>
                <p className={style.price}>£545.00</p>
              </div>
            </div>
            <div className="col-3">
              <div className={style.box9}>
                <img
                  src="https://aspirestore.co.uk/49062-home_default/olivier-fabric-ottoman-bed.jpg"
                  alt="img"
                  width={258}
                  height="210"
                />

                <p className={style.productname8}>
                  Grey Linen Divan Bed Base or Set Headboard & Mattress
                </p>
                <p className={style.price}>£545.00</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AllBeds;

AllBeds.getLayout = PerPageLayout;
