/* eslint-disable @next/next/no-img-element */
import React from "react";
import { randomBytes } from "crypto";
import styles from "styles/home.module.scss";
import Image from "next/image";

/**
 * Category Container
 * @returns
 */

interface CategoryContainerProps {}
const CategoryContainer = ({}: CategoryContainerProps) => {
  return (
    <section className={`container ${styles.category}`}>
      <div className={styles.row}>
        {categoryArray.map((data, index) => {
          return (
            <div
              key={index}
              className={` ${styles.item} ${styles.categorygesign}`}
            >
              <div className={styles.image}>
                <Image width={1000} height={700} src={data.imageUrl} alt="image" />
              </div>
              <div className={styles.text}>
                <h1>Beds</h1>
                <p>
                  Our range of beds come in single, double, king and super king
                  sizes are crafted with superior memory
                </p>
              </div>
              {/* <div className={styles.controls}>
                <button>Buy now</button>
              </div> */}
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default CategoryContainer;

const categoryArray = [
  {
    id: randomBytes(8).toString("hex"),
    heading: `DBZBeds Grey Linen Divan Bed Set With 3 Panel Headboard`,
    price: `179`,
    imageUrl: `/product/color4ft/greylinen.png`,
    description: `  Our range of beds come in single, double, king and super
                        king sizes are crafted with superior memory foam that
                        cradles your head and keeps your head and neck aligned
                        even while you sleep on your side and prevents the head
                        from sinking.`,
  },
  {
    id: randomBytes(8).toString("hex"),
    heading: `DBZBeds Blue Plush Divan Bed Set With 3 Panel Headboard`,
    price: `179`,
    imageUrl: `/product/color4ft/blueplush.png`,
    description: `  Memory foam Mattress topper provides an additional cushioning
                    to your regular memory foam mattress. The topper is made from
                    one inch gel foam which is to be placed above the memory foam
                    mattress.`,
  },
  {
    id: randomBytes(8).toString("hex"),
    heading: `DBZBeds Black Crushed Divan Bed Set With 3 Panel Headboard`,
    price: `179`,
    imageUrl: `/product/color4ft/blackcrushed.png`,
    description: `  Our range of beds come in single, double, king and super king
                    sizes are crafted with superior memory foam that cradles your
                    head and keeps your head and neck aligned even while you sleep
                    on your side and prevents the head from sinking.`,
  },
  {
    id: randomBytes(8).toString("hex"),
    heading: `Cream Chanille Divan Bed Set With 3 Panel Headboard`,
    price: `179`,
    imageUrl: `/product/color4ft/creamchanille.png`,
    description: ` Our range of beds come in single, double, king and super king
                    sizes are crafted with superior memory foam that cradles your
                    head and keeps your head and neck aligned even while you sleep
                    on your side and prevents the head from sinking.`,
  },
];
