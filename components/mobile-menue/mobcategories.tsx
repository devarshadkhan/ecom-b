import ArrowIcon from "icons/ArrowBottom";
import Link from "next/link";
import React from "react";
import css from "./filter.module.scss";

function Mobcategories() {
  return (
    <div className={css.sidecategory}>
      {" "}
      <DivanBed />
      <OttomanBed />
      <AllBed />
      <ShopbySize />
      <Mattresses />
      <Headboards />
    </div>
  );
}

export default Mobcategories;

const DivanBed = () => {
  const [expand, setExpand] = React.useState(false);
  return (
    <>
      <h4 className={css["heading"]} onClick={() => setExpand(!expand)}>
        Divan Beds
        <ArrowIcon size={25} />
      </h4>{" "}
      <ul
        className={css["ul-padd"]}
        style={{
          overflow: "hidden",
          transition: "all 200ms ease-in",
          maxHeight: expand ? "400px" : "0px",
        }}
      >
        <div className={css["subheading"]}>
          <Link href="/beds/divan-beds/house-fabric-divan-beds/">
            <a>House Fabric Divan Beds</a>
          </Link>
        </div>
        <div className={css["subheading"]}>
          <Link href="/beds/divan-beds/crushed-velvet-beds/">
            <a>Crushed Velvet Beds</a>
          </Link>
        </div>
        {/* <div className={css["subheading"]}>
          <Link href="/beds/divan-beds/suede-divan-bed/">
            <a>Suede Fabric Divan Bed</a>
          </Link>
        </div> */}
        <div className={css["subheading"]}>
          <Link href="/beds/divan-beds/low-divan-beds/">
            <a>Low Divan Beds</a>
          </Link>
        </div>
        <div className={css["subheading"]}>
          <Link href="/beds/leather-beds/">
            <a>Leather beds</a>
          </Link>
        </div>
        <div className={css["subheading"]}>
          <Link href="/beds/divan-beds/divanbases/">
            <a>Divan bases</a>
          </Link>
        </div>
      </ul>
    </>
  );
};

const OttomanBed = () => {
  const [expand, setExpand] = React.useState(false);
  return (
    <>
      <h4 className={css["heading"]} onClick={() => setExpand(!expand)}>
        Ottoman Beds <ArrowIcon size={25} />
      </h4>{" "}
      <ul
        className={css["ul-padd"]}
        style={{
          overflow: "hidden",
          transition: "all 200ms ease-in",
          maxHeight: expand ? "400px" : "0px",
        }}
      >
        <div className={css["subheading"]}>
          <Link href="/beds/storage-bed/">
            <a>Storage Bed</a>
          </Link>
        </div>
      </ul>
    </>
  );
};
const AllBed = () => {
  const [expand, setExpand] = React.useState(false);
  return (
    <>
      <h4 className={css["heading"]} onClick={() => setExpand(!expand)}>
        Sleigh Beds
        <ArrowIcon size={25} />
      </h4>{" "}
      <ul
        className={css["ul-padd"]}
        style={{
          overflow: "hidden",
          transition: "all 200ms ease-in",
          maxHeight: expand ? "400px" : "0px",
        }}
      >
        <div className={css["subheading"]}>
          <Link href="/beds/sleigh-beds/florida-bed/">
            <a>Florida Bed</a>
          </Link>
        </div>
        <div className={css["subheading"]}>
          <Link href="/beds/sleigh-beds/ambassador-bed/">
            <a>Ambassador Bed</a>
          </Link>
        </div>
        <div className={css["subheading"]}>
          <Link href="/beds/sleigh-beds/kendall-bed/">
            <a>Kendall Bed</a>
          </Link>
        </div>
        <div className={css["subheading"]}>
          <Link href="/beds/sleigh-beds/swan-bed/">
            <a>Swan Bed</a>
          </Link>
        </div>
        <div className={css["subheading"]}>
          <Link href="/beds/sleigh-beds/wing-bed/">
            <a>Wing Bed</a>
          </Link>
        </div>
      </ul>
    </>
  );
};

const ShopbySize = () => {
  const [expand, setExpand] = React.useState(false);
  return (
    <>
      <h4 className={css["heading"]} onClick={() => setExpand(!expand)}>
        <Link href="/beds/shop-by-bed-size/">
          <a>Shop by Size</a>
        </Link>

        <ArrowIcon size={25} />
      </h4>
      <ul
        className={css["ul-padd"]}
        style={{
          overflow: "hidden",
          transition: "all 200ms ease-in",
          maxHeight: expand ? "400px" : "0px",
        }}
      >
        <div className={css["subheading"]}>
          <Link href="/beds/shop-by-bed-size/single-30/">
            <a>Single (3″0)</a>
          </Link>
        </div>
        <div className={css["subheading"]}>
          <Link href="/beds/shop-by-bed-size/small-double-40/">
            <a>Small Double (4″0)</a>
          </Link>
        </div>
        <div className={css["subheading"]}>
          <Link href="/beds/shop-by-bed-size/double-46/">
            <a>Double (4″6)</a>
          </Link>
        </div>
        <div className={css["subheading"]}>
          <Link href="/beds/shop-by-bed-size/king-50/">
            <a>King (5″0)</a>
          </Link>
        </div>
        <div className={css["subheading"]}>
          <Link href="/beds/shop-by-bed-size/super-king-60/">
            <a>Super King (6″0)</a>
          </Link>
        </div>
      </ul>
    </>
  );
};
const Mattresses = () => {
  const [expand, setExpand] = React.useState(false);
  return (
    <>
      <h4 className={css["heading"]} onClick={() => setExpand(!expand)}>
        <Link href="/beds/mattresses/">
          <a>Mattresses</a>
        </Link>
      </h4>{" "}
    </>
  );
};

const Headboards = () => {
  const [expand, setExpand] = React.useState(false);
  return (
    <>
      <h4 className={css["heading"]} onClick={() => setExpand(!expand)}>
        <Link href="/beds/headboards/">
          <a>Headboards</a>
        </Link>
      </h4>{" "}
    </>
  );
};
