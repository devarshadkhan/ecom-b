import ArrowIcon from "icons/ArrowBottom";
import Link from "next/link";
import React from "react";
import css from "./filter.module.scss";

function MobMenue() {
  return (
    <div className={css.sidecategory}>
      {" "}
      <DivanBed />
      <AllBeds />
      <ShopbySize />
      <Mattresses />
      <Headboards />
      <Finance/>
    </div>
  );
}

export default MobMenue;

const DivanBed = () => {
  const [expand, setExpand] = React.useState(false);
  return (
    <>
      <h4 className={css["heading"]} onClick={() => setExpand(!expand)}>
        <Link href="/beds/divan-beds/">Divan Beds</Link>
        <ArrowIcon size={25} />
      </h4>{" "}
      <div
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
      </div>
    </>
  );
};

const AllBeds = () => {
  const [expand, setExpand] = React.useState(false);
  return (
    <>
      <h4 className={css["heading"]} onClick={() => setExpand(!expand)}>
        All Beds <ArrowIcon size={25} />
      </h4>{" "}
      <div
        className={css["ul-padd"]}
        style={{
          overflow: "hidden",
          transition: "all 200ms ease-in",
          maxHeight: expand ? "400px" : "0px",
        }}
      >
        <div>
          <Link href="/beds/storage-bed/">
            <Ottomanbed />
          </Link>
        </div>
        <div>
          <Link href="/beds/sleigh-bed/">
            <SleighBeds />
          </Link>
        </div>
        <div>
          <h3 className={css["subheading"]}>
            <Link href="/beds/kids-beds/">
              <a>Kids Beds</a>
            </Link>
          </h3>
        </div>
        <div>
          <h3 className={css["subheading"]}>
            <Link href="/beds/leather-beds/">
              <a>Leather Beds</a>
            </Link>
          </h3>
        </div>
        <div>
          <h3 className={css["subheading"]}>
            <Link href="/beds/navada-beds/">
              <a>Navada Beds</a>
            </Link>
          </h3>
        </div>
        <div>
          <h3 className={css["subheading"]}>
            <Link href="/beds/storage-bed/">
              <a>Storage Bed</a>
            </Link>
          </h3>
        </div>
        <div>
          <h3 className={css["subheading"]}>
            <Link href="/beds/divan-beds/">
              <a>Divan Beds</a>
            </Link>
          </h3>
        </div>
      </div>
    </>
  );
};
const Ottomanbed = () => {
  const [expand, setExpand] = React.useState(false);
  return (
    <>
      <h3 className={css["subheading"]} onClick={() => setExpand(!expand)}>
        <Link href="/beds/ottoman-beds/"> Ottomant Bed</Link>{" "}
        <ArrowIcon size={25} />
      </h3>{" "}
      <div
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
      </div>
    </>
  );
};
const SleighBeds = () => {
  const [expand, setExpand] = React.useState(false);
  return (
    <>
      <h3 className={css["subheading"]} onClick={() => setExpand(!expand)}>
        Sleigh Beds
        <ArrowIcon size={25} />
      </h3>{" "}
      <div
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
            <a>Ambassador bed</a>
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
      </div>
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
        <h3 className={css["subheading"]}>
          <Link href="/beds/shop-by-bed-size/single-30/">
            <a>Single (3″0)</a>
          </Link>
        </h3>
        <h3 className={css["subheading"]}>
          <Link href="/beds/shop-by-bed-size/small-double-40/">
            <a>Small Double (4″0)</a>
          </Link>
        </h3>
        <h3 className={css["subheading"]}>
          <Link href="/beds/shop-by-bed-size/double-46/">
            <a>Double (4″6)</a>
          </Link>
        </h3>
        <h3 className={css["subheading"]}>
          <Link href="/beds/shop-by-bed-size/king-50/">
            <a>King (5″0)</a>
          </Link>
        </h3>
        <h3 className={css["subheading"]}>
          <Link href="/beds/shop-by-bed-size/super-king-60/">
            <a>Super King (6″0)</a>
          </Link>
        </h3>
      </ul>
    </>
  );
};
const Mattresses = () => {

  return (
    <>
      <h4 className={css["heading"]} >
        <Link href="/beds/mattresses/">
          <a>Mattresses</a>
        </Link>
      </h4>{" "}
    </>
  );
};

const Headboards = () => {
 
  return (
    <>
      <h4 className={css["heading"]} >
        <Link href="/beds/headboards/">
          <a>Headboards</a>
        </Link>
      </h4>{" "}
    </>
  );
};
const Finance = () => {
 
  return (
    <>
      <h4 className={css["heading"]} >
        <Link href="/snap-finance/">
          <a>Snap Finance</a>
        </Link>
      </h4>{" "}
    </>
  );
};
