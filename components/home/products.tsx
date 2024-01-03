/* eslint-disable @next/next/no-img-element */
import { BedWithImage } from "network-requests/types";
import { useRouter } from "next/router";
import React from "react";
import styles from "styles/home.module.scss";
import ProductItem from "./product-item";

interface ProductListingProps extends React.ComponentPropsWithoutRef<"div"> {
  productList: BedWithImage[];
  itemClassName?: string;
  background?: string;
}

const ProductListing = ({
  productList,
  itemClassName,
  background,
  ...rest
}: ProductListingProps) => {
  const router = useRouter();

  return (
    <div className={styles.divans}>
      <section
        className={styles.productsimages}
        {...rest}
        style={{
          background: background,
        }}
      >
        <div className="container-full">
          <div className={`row-full ${styles.bestsellingproduct}`}>
            <div className={`${styles.wraper} ${styles.grid1} ${styles.grid4}`}>
              {productList?.map((item: BedWithImage, index: number) => {
                return (
                  <ProductItem
                    name={item?.name}
                    price={item?.price}
                    image={item?.image}
                    key={index}
                    onClick={() =>
                      router.push({
                        pathname: `/product/${item.slug}`,
                        query: {
                          size: item?.variants && item?.variants[0]?.size,
                        },
                      })
                    }
                    variants={undefined}
                    className={`${itemClassName}`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ProductListing;
