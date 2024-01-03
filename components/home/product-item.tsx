/* eslint-disable @next/next/no-img-element */
import { BedWithImage } from "network-requests/types";
import Image from "next/image";
import styles from "styles/home.module.scss";
import css from "styles/shop.module.scss";

interface ProductItemProps
  extends React.ComponentPropsWithoutRef<"div">,
    BedWithImage {
  onClick: () => void;
}
const ProductItem = ({
  name,
  price,
  image,
  onClick,
  ...rest
}: ProductItemProps) => {
  const getPercentage = (
    base: number | undefined,
    sale: number | undefined
  ) => {
    const dif = Number(base) - Number(sale);
    if (base) return (dif / base) * 100;
  };

  const percentage = getPercentage(price?.basePrice, price?.salePrice)?.toFixed(
    0
  );

  return (
    <div
      className="col-3"
      style={{ cursor: "pointer" }}
      onClick={onClick}
      {...rest}
    >
      <div className={`${styles.box1} ${css.box22}`}>
        <div className={styles.productimage}>
          <Image
          priority
          width={1000}
          height={700}
            alt="img"
            src={image || "/fake.png"}
            className={styles.productimhw}
          />
         
        </div>

        <div className={css.paywith}>or 4 payments of £22.25 with</div>
        <div className={css.clearpay}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
            width="100"
            fill="#000"
            height="20"
          >
            <path
              fill="#b2fce4"
              d="M89.85 20.92h-78.9a10.42 10.42 0 110-20.82h78.89a10.42 10.42 0 010 20.83v-.01z"
            ></path>
            <g>
              <path d="M72.05 6.76l-5.13 10.57H64.8l1.91-3.95-3-6.62h2.18l1.93 4.44 2.11-4.44h2.12z"></path>
              <path d="M52.55 10.52c0-1.22-.92-2.15-2.04-2.15-1.13 0-2.04.9-2.04 2.15 0 1.23.91 2.14 2.04 2.14 1.12 0 2.04-.93 2.04-2.14m-5.94 6.81V6.76h1.84v.98a2.98 2.98 0 012.37-1.12c2.03 0 3.62 1.67 3.62 3.88 0 2.2-1.62 3.88-3.67 3.88a2.9 2.9 0 01-2.26-1v3.95h-1.9z"></path>
              <path d="M61.1 10.52c0-1.27-.92-2.15-2.04-2.15-1.13 0-2.04.9-2.04 2.15 0 1.23.91 2.14 2.04 2.14 1.12 0 2.04-.89 2.04-2.14m.01 3.75v-.97a3 3 0 01-2.37 1.09c-2.06 0-3.62-1.65-3.62-3.87 0-2.2 1.62-3.89 3.67-3.89a3 3 0 012.32 1.08v-.95h1.85v7.5H61.1z"></path>
              <path d="M43.28 7.5s.46-.88 1.62-.88c.5 0 .8.17.8.17v1.92s-.69-.43-1.33-.34c-.63.09-1.04.67-1.04 1.45v4.45h-1.9v-7.5h1.84v.73z"></path>
              <path d="M86.37 6.34L84.2 5.09l-2.22-1.27a2.2 2.2 0 00-3.3 1.9v.3c0 .15.09.3.22.37l1.03.59c.29.16.64-.05.64-.37v-.68c0-.34.36-.54.65-.38l2.02 1.16 2.02 1.16c.3.16.3.59 0 .75l-2.02 1.16-2.02 1.16a.44.44 0 01-.65-.38v-.33a2.2 2.2 0 00-3.3-1.91l-2.21 1.27-2.19 1.25a2.2 2.2 0 000 3.82l2.19 1.25 2.21 1.27a2.2 2.2 0 003.3-1.9v-.3c0-.15-.08-.3-.22-.37l-1.03-.59a.43.43 0 00-.64.37v.68c0 .34-.36.54-.65.38L76 14.29 74 13.13a.43.43 0 010-.75L76 11.22l2.02-1.16c.3-.16.65.05.65.38v.33a2.2 2.2 0 003.3 1.91l2.22-1.27 2.18-1.25a2.2 2.2 0 000-3.82z"></path>
              <path d="M20.22 11.47a3.77 3.77 0 01-3.81 2.91 3.8 3.8 0 01-3.89-3.87c0-2.2 1.7-3.89 3.92-3.89A3.78 3.78 0 0120.2 9.5h-1.95a2.04 2.04 0 00-1.8-1.12c-1.11 0-2.04.92-2.04 2.13s.93 2.13 2.04 2.13c.8 0 1.49-.45 1.81-1.17h1.96z"></path>
              <path d="M21.1 14.26V3.67h1.88v10.6H21.1z"></path>
              <path d="M25.83 11a1.86 1.86 0 001.93 1.75c.8 0 1.4-.38 1.77-.98h1.93c-.45 1.6-1.87 2.61-3.75 2.61-2.27 0-3.85-1.59-3.85-3.85s1.68-3.9 3.9-3.9a3.75 3.75 0 013.8 4.38h-5.73zm3.76-1.17c-.13-.97-.93-1.56-1.86-1.56-.92 0-1.69.57-1.88 1.56h3.74z"></path>
              <path d="M38.35 14.26v-.97a3 3 0 01-2.36 1.1c-2.06 0-3.62-1.66-3.62-3.88 0-2.2 1.62-3.89 3.66-3.89.96 0 1.77.42 2.32 1.08v-.94h1.85v7.5h-1.85zm-.01-3.75c0-1.26-.92-2.15-2.05-2.15-1.12 0-2.04.9-2.04 2.15 0 1.23.92 2.15 2.04 2.15 1.13 0 2.05-.89 2.05-2.15z"></path>
            </g>
          </svg>
        </div>

        <h2 className={css.productname}>{name}</h2>

        <div className={css.trustpilot}>
          <p>Truspilot</p>
          <Image width={1000} height={700} src="/image/trustpilot.webp" alt="img" />
        </div>

        <div className={css.price}>{`£ ${price?.salePrice}`}</div>

        
      </div>
    </div>
  );
};

export default ProductItem;
