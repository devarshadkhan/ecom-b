/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "styles/home.module.scss";
import Image from "next/image";

const FeatureSlider = () => {
  const settings: Settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
          centerMode: true,
          centerPadding: "20px",
          infinite: true,
          autoplay: true,
          initialSlide: 3,
        },
      },
    ],
  };

  return (
    <div className={`container ${styles.featuredslider}`}>
      {/* <h2>Featured</h2> */}
      <Slider {...settings}>
        <div className={styles.slideimg}>
          <Image width={1000} height={800}  src="/image/2.jpg" alt="Pink" />
          <p>
            For bedrooms big and small, the guide explains our different types
            of storage beds
          </p>
          <div className={styles.guidestrip}>
            <p>A Guide to Storage beds</p>
          </div>
        </div>
        <div className={styles.slideimg}>
          <Image width={1000} height={800} src="/image/1.jpg" alt="Pink" />
          <p>Discover measurement for all UK and Euro beds mattress</p>
          <div className={styles.guidestrip2}>
            <p>A Guide to mattress sizes</p>
          </div>
        </div>
        <div className={styles.slideimg}>
          <Image width={1000} height={800} src="/image/3.jpg" alt="Pink" />
          <p>
            We want you to get a great nights sleep. Let us help you choose the
            perfect bed and mattress.
          </p>
          <div className={styles.guidestrip3}>
            <p>A Guide to divan beds</p>
          </div>
        </div>
        <div className={styles.slideimg}>
          <Image width={1000} height={800} src="/image/4.jpg" alt="Pink" />
          <p>Helping you find the perfect bed, only available at Dream</p>
          <div className={styles.guidestrip4}>
            <p>Sleepmatch</p>
          </div>
        </div>
        <div className={styles.slideimg}>
          <Image width={1000} height={800} src="/image/5.jpg" alt="Pink" />
          
          <div className={styles.guidestrip5}>
            <p>Comfort delivered to your door</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};
export default FeatureSlider;
