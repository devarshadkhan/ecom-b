import React from "react";
import Image from "next/image";
import css from "styles/product/page.module.scss";

const Warranty = () => {
  return (
    <div className={css.year_warranty}>
      <ul>
        <li>
          <Image
            src="/one-year-warranty-1.jpg"
            height={132}
            width={132}
            alt="short-image"
          ></Image>
        </li>
        <li>
          <Image
            src="/free-delivery2.png"
            height={132}
            width={132}
            alt="short-image"
          ></Image>
        </li>
        <li>
          <Image
            src="/made-in-britain3.png"
            height={132}
            width={132}
            alt="short-image"
          ></Image>
        </li>
        <li>
          <Image
            src="/trust-pilot4.png"
            height={132}
            width={132}
            alt="short-image"
          ></Image>
        </li>
      </ul>
      <p>1 Year Warranty * Made in Britain</p>
      <ul>
        <li>
          <Image
            src="/headboard1.png"
            height={79}
            width={132}
            alt="headboard"
          ></Image>
        </li>
        <li>
          <Image
            src="/2-drawers-1-either-side2.png"
            height={79}
            width={132}
            alt="headboard"
          ></Image>
        </li>
        <li>
          <Image
            src="/2-drawers-same-side3.png"
            height={79}
            width={132}
            alt="headboard"
          ></Image>
        </li>
        <li>
          <Image
            src="/4-drawers4.png"
            height={79}
            width={132}
            alt="headboard"
          ></Image>
        </li>
      </ul>
      <p>Headboard can be fixed on both ends of the beds</p>
    </div>
  );
};
export default Warranty;
