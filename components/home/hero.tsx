/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "styles/home.module.scss";

const HeroImageContainer = () => {
  const scrollSmooth = () => {
    window.scrollBy({ behavior: "smooth", top: 500 });
  };
  return (
    <div className={styles["hero-container "]}>
      <Link href={"/product/modern-grey-divan-bed/"}>
        <a>
          <div>
            <Image priority width={1350} height={550} src="/bedsdivan-banner.png" layout="responsive" alt="Home banner" />
          </div>

          {/* <div className={`${styles.slider_height} d-flex`}>
            <div className={`${styles.center} container"`}>
              <div className={styles.heading}>
                {/* <h1 className="HeadingForM">Divan Beds</h1>
            <p>Save upto 60% with Divan Beds</p>
            <div className={styles.bannerButton}>
              <button onClick={scrollSmooth}>
                <b>SHOP NOW</b>
              </button> 
              </div>
            </div> 
          </div> */}
        </a>
      </Link>
    </div>
  );
};
export default HeroImageContainer;
