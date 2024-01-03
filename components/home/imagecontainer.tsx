/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import styles from "styles/home.module.scss";

interface ImageData {
  heading: string;
  imageUrl: string;
}

interface ImageContainerProps {
  coverImage: string;
  heading: string;
  description: string;
  items: ImageData[];
  direction: "left" | "right";
}

const ImageContainer = ({
  coverImage,
  description,
  heading,
  items,
  direction,
}: ImageContainerProps) => {
  const className = () => {
    switch (direction) {
      case "left":
        return styles.imgcontainer;
      case "right":
        return styles.imgcontainer2;
      default:
        return "";
    }
  };

  return (
    <section className={className()}>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className={styles.bigbed1}>
              <Image width={1000} height={700} src={coverImage} alt="img" />
            </div>
            <div className={styles.heading1}>
              <h1>{heading}</h1>
              <p>{description}</p>
            </div>
          </div>
          <div className="col-6">
            <div className="row">
              {items.map((data, index) => {
                return (
                  <div key={index} className="col-6">
                    <Image width={1000} height={700} src={data.imageUrl} alt={data.heading} />
                    <h2>{data.heading}</h2>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ImageContainer;
