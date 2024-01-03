/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import NextSEO from "layout/nextseo";
import PerPageLayout from "layout/perpage";
import { NextPageWithLayout } from "typings/layout";
import styles from "styles/divanbed.module.scss";

const Divanbed: NextPageWithLayout = () => {
  return (
    <>
      <div>
        <NextSEO title={"DBZBEDS"} />
        <section className={styles.mydiv}>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <div className={styles.box2}>
                  <h1>Save upto 60% with Divan Beds</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    minima praesentium assumenda culpa, unde neque eius nulla.
                    Neque, magni fuga. Quam quia consequatur ab nemo ut
                    repellendus eius ratione at!
                  </p>
                  <button>shop now</button>
                </div>
              </div>
              <div className="col-6">
                <img src="/image/image.webp" alt="image" />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.mydiv1}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1>
                  <strong>Quick Delivery -</strong> Shop our beds available
                  within 2 weeks
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.mydiv2}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1>Shop By Size</h1>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.bedicon}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-2">
                <div className={styles.bedbox}>
                  <img src="/image/image.svg" alt="img" />
                  <p className={styles.parap}>3'0 Single</p>
                </div>
              </div>
              <div className="col-2">
                <div className={styles.bedbox}>
                  <img src="/image/2.svg" alt="img" />
                  <p className={styles.parap}>4'0 Small Double </p>
                </div>
              </div>
              <div className="col-2">
                <div className={styles.bedbox}>
                  <img src="/image/3.svg" alt="img" />
                  <p className={styles.parap}>4'6 Double</p>
                </div>
              </div>
              <div className="col-2">
                <div className={styles.bedbox}>
                  <img src="/image/4.svg" alt="img" />
                  <p className={styles.parap}>5'0 King</p>
                </div>
              </div>
              <div className="col-2">
                <div className={styles.bedbox}>
                  <img src="/image/5.svg" alt="img" />
                  <p className={styles.parap}>6'0 Super King</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.mydiv4}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2>DBZBEDS.CO.UK</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Corrupti voluptatum illum rerum autem voluptate, soluta,
                  inventore unde nulla numquam minima consequuntur explicabo
                  incidunt facilis asperiores error quis necessitatibus
                  repudiandae possimus temporibus ratione! Aperiam mollitia
                  architecto sed. Consectetur numquam cupiditate praesentium,
                  velit repudiandae accusantium totam corrupti, obcaecati nihil
                  corporis doloremque recusandae.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.mydiv5}>
          <div className={` ${styles.krishnabox} container`}>
            <div className="row">
              <div className="col-6">
                <div className={styles.bedimage}>
                  <img src="/image/6.webp" alt="img" />
                </div>
              </div>
              <div className={` ${styles.krishnabox2} col-6`}>
                <h1>UK's Latest</h1>
                <p>Range of Divan Beds in Affordable Prices</p>
                <img src="/image/7.webp" alt="img" />
                <p>June 23rd - July 6th</p>
                <button type="submit">SHOP NOW</button>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.mydiv6heading}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1>Shop By Color</h1>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.bedicon2}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-2">
                <div className={styles.bedbox}>
                  <img src="/image/8.svg" alt="img" />
                  <p className={styles.parap}>Grey Linen</p>
                </div>
              </div>
              <div className="col-2">
                <div className={styles.bedbox}>
                  <img src="/image/9.svg" alt="img" />
                  <p className={styles.parap}>Grey suede </p>
                </div>
              </div>
              <div className="col-2">
                <div className={styles.bedbox}>
                  <img src="/image/10.svg" alt="img" />
                  <p className={styles.parap}>Charcoal Chennile</p>
                </div>
              </div>
              <div className="col-2">
                <div className={styles.bedbox}>
                  <img src="/image/11.svg" alt="img" />
                  <p className={styles.parap}>Black Crushed Velvet</p>
                </div>
              </div>
              <div className="col-2">
                <div className={styles.bedbox}>
                  <img src="/image/12.svg" alt="img" />
                  <p className={styles.parap}>Pink</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.mydiv7}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-6">
                <h1>sleepmotion</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                  rem qui nobis consequuntur tenetur error
                </p>
                <button>Shop now</button>
              </div>
              <div className="col-6">
                <img src="/image/13.webp" alt="img" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.mydiv8}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2>our exclusive</h2>
                <h1>complete divan bed set range</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita, quisquam, eos asperiores molestiae distinctio quod
                  atque saepe odit culpa quidem id velit voluptates rem autem
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.mydiv9}>
          <div className={` ${styles.innerbox} container`}>
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
      </div>

      <section className={styles.productsimages}>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className={styles.box1}>
                <img
                  src="https://aspirestore.co.uk/49144-home_default/presley-fabric-ottoman-bed.jpg"
                  alt="img"
                  width={258}
                  height="210"
                />
                <h2 className={styles.productname}>
                  Presley Fabric Ottoman Bed
                </h2>
                <div className={styles.trustpilot}>
                  <img src="/image/tru.png" alt="img" />
                </div>
                <p className={styles.price}>£600.00</p>
              </div>
            </div>
            <div className="col-3">
              <div className={styles.box1}>
                <img
                  src="https://aspirestore.co.uk/49144-home_default/presley-fabric-ottoman-bed.jpg"
                  alt="img"
                  width={258}
                  height="210"
                />
                <h2 className={styles.productname}>
                  Presley Fabric Ottoman Bed
                </h2>
                <div className={styles.trustpilot}>
                  <img src="/image/tru.png" alt="img" />
                </div>
                <p className={styles.price}>£600.00</p>
              </div>
            </div>
            <div className="col-3">
              <div className={styles.box1}>
                <img
                  src="https://aspirestore.co.uk/49144-home_default/presley-fabric-ottoman-bed.jpg"
                  alt="img"
                  width={258}
                  height="210"
                />
                <h2 className={styles.productname}>
                  Presley Fabric Ottoman Bed
                </h2>
                <div className={styles.trustpilot}>
                  <img src="/image/tru.png" alt="img" />
                </div>
                <p className={styles.price}>£600.00</p>
              </div>
            </div>
            <div className="col-3">
              <div className={styles.box1}>
                <img
                  src="https://aspirestore.co.uk/49144-home_default/presley-fabric-ottoman-bed.jpg"
                  alt="img"
                  width={258}
                  height="210"
                />
                <h2 className={styles.productname}>
                  Presley Fabric Ottoman Bed
                </h2>
                <div className={styles.trustpilot}>
                  <img src="/image/tru.png" alt="img" />
                </div>
                <p className={styles.price}>£600.00</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.mydiv10}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>discover the benefits of shopping online at beddivans</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil,
                voluptates tempore hic dolore vero libero, quisquam, harum
                eveniet quae nisi cupiditate. Quis odit est laudantium accusamus
                voluptatibus enim nam officia!
              </p>
              <button>more services</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Divanbed;

Divanbed.getLayout = PerPageLayout;
