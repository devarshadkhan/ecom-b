import Link from "next/link";
import React from "react";
import style from "styles/product/cart.module.scss";
const ReturnToShop = () => {
  return (
    <>
      <div className={style.shopping_page}>
        <Link href={"/beds/divan-beds"}>Return to Shop</Link>
      </div>
    </>
  );
};
export default ReturnToShop;
