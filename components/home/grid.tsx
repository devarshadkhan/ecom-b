/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import css from "styles/home/grid.module.scss";

interface ImageTypes {
  image: string;
  heading: string;
  description?: string;
}

interface ProductsGridProps {
  swipe: boolean;
  left: ImageTypes;
  right: {
    images: ImageTypes[];
  };
}

const ProductsGrid = ({ swipe, left, right }: ProductsGridProps) => {
  return (
    <section className={css.cover}>
      <div className={`container ${css.container}`}>
        <div className={css.boxLeft} style={{ order: swipe ? 2 : 1 }}>
          <div className={css.image}>
            <Image width={1000} height={700} src={left.image} alt={left.heading} />
          </div>
          <div className={css.text}>
            <h1>{left.heading}</h1>
            <p>{left.description}</p>
          </div>
        </div>
        <div className={css.boxRight} style={{ order: swipe ? 1 : 2 }}>
          {right.images.map((item, index) => (
            <div key={index} className={css.item}>
              <Image width={1000} height={700} src={item.image} alt={item.heading} />
              <span>{item.heading}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProductsGrid;
