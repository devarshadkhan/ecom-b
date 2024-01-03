/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import UserIcon from "icons/UserIcon";
import css from "styles/layout.module.scss";
import TrustPilotAndContact from "./trust-pilot";
import MenuIcon from "icons/MenuIcon";
import CloseIcon from "icons/CloseIcon";
import useOnClickOutside from "hooks/useclick";
import BagOutline from "icons/BagOutline";
import navigationLinks, { MenuTypes } from "constants/nav-links";
import ArrowIcon from "icons/ArrowBottom";
import MobMenue from "components/mobile-menue/mobmenue";
import Mobcategories from "components/mobile-menue/mobcategories";
import useAppSelector from "store/hooks/useselector";
import { NextRouter, useRouter } from "next/router";
import axios from "network-requests/axios";
import Image from "next/image";
import debounce from "utils/debounce";

const empty = "";
// eslint-disable-next-line react-hooks/rules-of-hooks

const Header = () => {
  return (
    <header className={css["header"]}>
      <TrustPilotAndContact />
      <LogoAndSearchBar />
      <section className={css.menudiv}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className={css.mainmenu}>
                <nav className={css["nav-container"]}>
                  {navigationLinks.map((data, index) => {
                    return <NavigationLinks key={index} {...data} />;
                  })}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};
export default Header;

const LogoAndSearchBar = () => {
  const [isNavigation, setNavigation] = React.useState(false);
  const [menuOpen, setMenu] = React.useState(true);
  const [catmenu, setCatmenu] = React.useState(false);
  const [searchText, setSearchText] = React.useState("");
  const [searchSuggestions, setSearchSuggestions] = React.useState([]);
  const [show, setShow] = React.useState(false);

  const inputRef = React.useRef<HTMLInputElement>(null);

  const _onSearchDebounce = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchText(event.target.value);
      // console.log("API CALL COUNTS");
    },
    []
  );

  const onSearchDebounce = React.useMemo(
    () => debounce(_onSearchDebounce, 1000),
    [_onSearchDebounce]
  );

  const onClickMenu = React.useCallback(() => {
    setNavigation(!isNavigation);
  }, [isNavigation]);
  // CloseIcon

  const [showSearch, setShowSearch] = useState(false);
  const handleClick = () => {
    setShowSearch(!showSearch);
  };

  const router = useRouter();

  useEffect(() => {
    if (searchText.length > 0) {
      axios.get("/beds/search", { params: { q: searchText } }).then((res) => {
        setSearchSuggestions(res.data);
      });
    }
  }, [searchText]);

  const ref = useOnClickOutside(() => setNavigation(false));
  const menuemob = () => {
    if (menuOpen == true) {
      setMenu(true);
      setCatmenu(false);
    } else {
      setMenu(true);
      setCatmenu(false);
    }
  };
  const onmobcat = () => {
    if (catmenu == true) {
      setCatmenu(true);
      setMenu(false);
    } else {
      setCatmenu(true);
      setMenu(false);
    }
  };
  const { items: cartItems, totalPrice } = useAppSelector(
    (state) => state.cart
  );

  const handleSearch = React.useCallback(
    (e: any) => {
      e.preventDefault();
      // router.push(`/shop`);
      router.push(`/shop?q=${searchText}`);
    },
    [router, searchText]
  );

  const cartItemsCount = cartItems.length;
  // function setShow(arg0: boolean): void {
  //   throw new Error("Function not implemented.");
  // }

  // console.log(cartItems.length);

  const refContainer = useOnClickOutside(() => {
    if (inputRef.current) {
      setSearchText(empty);
      inputRef.current.value = empty;
    }
  });

  React.useEffect(() => {
    // router.events.on("routeChangeStart", () => setShowSearch(false));
    router.events.on("routeChangeComplete", () => setShowSearch(false));

    return () => {
      // router.events.off("routeChangeStart", () => setShowSearch(false));
      router.events.off("routeChangeComplete", () => setShowSearch(false));
    };
  }, [router.events]);

  const suggestions = Array.from(
    new Set(
      searchSuggestions
        ?.flatMap((d: { categories: string[] }) => d?.categories)
        ?.filter((t: string) => t?.length > 4)
        ?.sort((a: string, b: string) => a?.localeCompare(b))
    )
  );

  console.log(suggestions);
  return (
    <>
      <section
        style={{
          transform: `translateX(${isNavigation ? "0%" : "-100%"})`,
        }}
        className={css["navigation-model"]}
      >
        <div ref={ref} className={css["navigation-content"]}>
          <div className={css["close-button"]}>
            <button
              title="close-icon"
              aria-label="close-icon"
              onClick={onClickMenu}
            >
              <CloseIcon size={24} />
            </button>
          </div>

          <div className={css.menubutton}>
            <button onClick={menuemob}>Menu</button>

            <button onClick={onmobcat}>Categories</button>

            {menuOpen && <MobMenue />}
            {catmenu && <Mobcategories />}
          </div>
        </div>
      </section>
      <section className={` ${css["search-container"]} container`}>
        <div className={css["item-grid"]}>
          <div className={css["menu-bar"]}>
            <button
              className={css["menubg"]}
              title="menu-icon"
              aria-label="menu-icon"
              onClick={onClickMenu}
            >
              <MenuIcon size={30} /> <p className={css["menu-txt"]}>Menue</p>
            </button>
          </div>
          <div className={css["logo"]}>
            <Link href="/">
              <a>
                <Image  priority width={100} height={80} src="/image/wplogo.webp" alt="imge" />
              </a>
            </Link>
          </div>
          {/* <div className={css["searchbar"]}>
            <input type="text" placeholder="Search for products..." />
            <button title="search" aria-label="search-icon">
              <img src="/image/SEARCH.SVG" alt="" />
            </button>
          </div> */}
          {/* new search box  start */}
          <form
            ref={refContainer}
            onSubmit={handleSearch}
            className={`${css["searchbar"]} d-flex justify-content-center`}
          >
            <div className="d-flex">
              <input
                type="text"
                ref={inputRef}
                onChange={onSearchDebounce}
                placeholder="search for products"
                className={css["search-input"]}
                onFocus={() => setShow(true)}
                onBlur={() => setShow(false)}
              />
              <button type="submit">
                <img src="/image/SEARCH.SVG" alt="" />
              </button>
            </div>

            {!!searchText && (
              <div className={css["search-suggestions"]}>
                <div className={css.recent}>
                  <div className={css.suggestions}>Suggestions:</div>
                  {categorySearch.map(({ link, title }, index) => {
                    return (
                      <div key={index} className={css.recentinner}>
                        <img src="/icons/history-line.svg" alt="history-line" />
                        <Link href={link}>
                          <a>
                            <p>{title}</p>
                          </a>
                        </Link>
                      </div>
                    );
                  })}
                </div>

                <ul className={css.searchboxlist}>
                  {searchSuggestions?.length > 0 ? (
                    searchSuggestions?.map((item: any) => {
                      return (
                        <li key={item._id}>
                          <div
                            className={css["search-suggestions-item"]}
                            onClick={() => {
                              router.push(`/product/${item.slug}`);
                            }}
                          >
                            <div className={css["box-contain"]}>
                              <div className={css["image"]}>
                                <Image
                                  src={item?.variants?.[0]?.image}
                                  width={70}
                                  height={70}
                                  alt={item.name}
                                  objectFit={"fill"}
                                />
                              </div>
                              <div className={css["product-name"]}>
                                <a>{item.name}</a>
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    })
                  ) : (
                    <li>No results found</li>
                  )}
                </ul>
                <a href="/beds/shop-by-bed-size/" className={css["view-all"]}>
                  View All
                </a>
              </div>
            )}
          </form>
          {/* new search box  end */}

          <div className={css["controls"]}>
            <ul>
              <li>
                <Link href={"/account"}>
                  <a>
                    <span>
                      <UserIcon size={32} />
                    </span>
                    <span className={css["texts"]}>My Account</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href={"/cart"}>
                  <a>
                    <BagOutline size={32} />
                    <span className={css["texts"]}>My Cart</span>
                    <i className={css["badge"]}>{cartItemsCount || 0}</i>
                  </a>
                </Link>
              </li>

              {/* <li>
                <MapIcon />
                <span className={css["texts"]}>My basket</span>
              </li> */}
            </ul>
          </div>
        </div>
      </section>
      <section className={css.mobilenavbar}>
        <div className={css.mobilenavbar1}>
          <div className={css["menu-bars"]}>
            <button
              className={css["menubg"]}
              title="menu-icon"
              aria-label="menu-icon"
              onClick={onClickMenu}
            >
              <MenuIcon size={30} /> <p className={css["menu-txt"]}>Menu</p>
            </button>
          </div>
          <div className={css["mainlogos"]}>
            <Link href="/">
              <a>
                <img src="/image/wplogo.webp" alt="imge" />
              </a>
            </Link>
          </div>
          <div className={css["controls"]}>
            <ul>
              <li>
                <Link href={"/account"}>
                  <a>
                    <span>
                      <UserIcon size={32} />
                    </span>
                    <span className={css["texts"]}>My Account</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href={"/cart"}>
                  <a>
                    <BagOutline size={32} />
                    <span className={css["texts"]}>My Cart</span>
                    <i className={css["badge"]}>0</i>
                  </a>
                </Link>
              </li>

              {/* <li>
                <MapIcon />
                <span className={css["texts"]}>My basket</span>
              </li> */}
              <li className={css.mobilesearchbar} onClick={handleClick}>
                {" "}
                <Image
                  src="/search-line.svg"
                  height={20}
                  width={20}
                  alt="search icon"
                />
                <span className={css["texts"]}>Search</span>
              </li>

              {showSearch && (
                <form
                  ref={refContainer}
                  onSubmit={handleSearch}
                  className={css["searchbar"]}
                >
                  <div className={css.closeicon} onClick={handleClick}>
                    <Image
                      src="/close-line.svg"
                      height={30}
                      width={33}
                      alt="close icon"
                    />
                  </div>

                  <div className={css.innerbox}>
                    <input
                      type="text"
                      ref={inputRef}
                      onChange={onSearchDebounce}
                      placeholder="search for products"
                      className={css["search-input"]}
                      onFocus={() => setShow(true)}
                      onBlur={() => setShow(false)}
                    />
                    <button type="submit">
                      <img src="/image/SEARCH.SVG" alt="" />
                    </button>
                  </div>

                  {!!searchText && (
                    <div className={css["search-suggestions"]}>
                      <ul
                        style={{
                          flexDirection: "column",
                          flexWrap: "nowrap",
                          overflow: "auto",
                        }}
                      >
                        {searchSuggestions?.length > 0 ? (
                          searchSuggestions?.map((item: any) => {
                            return (
                              <li key={item._id}>
                                <div
                                  className={css["search-suggestions-item"]}
                                  onClick={() => {
                                    router.push(`/product/${item.slug}`);
                                  }}
                                >
                                  <div className={css["box-contain"]}>
                                    <div className={css["image"]}>
                                      <Image
                                        src={item?.variants?.[0]?.image}
                                        width={70}
                                        height={70}
                                        alt={item.name}
                                        objectFit={"contain"}
                                      />
                                    </div>
                                    <div className={css["product-name"]}>
                                      <a>{item.name}</a>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            );
                          })
                        ) : (
                          <li>No results found</li>
                        )}
                      </ul>
                      <a
                        href="/beds/shop-by-bed-size/"
                        className={css["view-all"]}
                      >
                        View All
                      </a>
                    </div>
                  )}
                </form>
              )}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

interface NavigationLinksProps {
  path: string;
  name: string;
  active?: string;
  subMenu?: MenuTypes[];
}

const NavigationLinks = ({ name, path, subMenu }: NavigationLinksProps) => {
  return (
    <ul className={css["nav-links"]}>
      <li className={css["link"]}>
        <Link href={path}>{name}</Link>
        {subMenu && <ArrowIcon size={25} />}
        <ul className={css["tier-one-menu"]}>
          {subMenu &&
            subMenu.map((data$2, index$2) => (
              <li key={index$2}>
                <Link href={data$2.path}>{data$2.name}</Link>
                <ul>
                  {data$2.subMenu &&
                    data$2.subMenu.map((data$3, index$3) => (
                      <li key={index$3} className={css["tier-two-menu"]}>
                        <Link href={data$3.path}>{data$3.name}</Link>
                      </li>
                    ))}
                </ul>
              </li>
            ))}
        </ul>
      </li>
    </ul>
  );
};

function findClosestString(arr, inputvalue) {
  let closestOne = "";
  let floorDistance = 0.1;

  for (let i = 0; i < arr.length; i++) {
    let dist = distance(arr[i], inputvalue);
    if (dist > floorDistance) {
      floorDistance = dist;
      closestOne = arr[i];
    }
  }

  return closestOne;
}

function distance(val1, val2) {
  let longer, shorter, longerlth, result;

  if (val1.length > val2.length) {
    longer = val1;
    shorter = val2;
  } else {
    longer = val2;
    shorter = val1;
  }

  longerlth = longer.length;

  result = (longerlth - editDistance(longer, shorter)) / parseFloat(longerlth);

  return result;
}

function editDistance(val1, val2) {
  val1 = val1.toLowerCase();
  val2 = val2.toLowerCase();

  let costs = [];

  for (let i = 0; i <= val1.length; i++) {
    let lastVal = i;
    for (let j = 0; j <= val2.length; j++) {
      if (i === 0) {
        costs[j] = j;
      } else if (j > 0) {
        let newVal = costs[j - 1];
        if (val1.charAt(i - 1) !== val2.charAt(j - 1)) {
          newVal = Math.min(Math.min(newVal, lastVal), costs[j]) + 1;
        }
        costs[j - 1] = lastVal;
        lastVal = newVal;
      }
    }
    if (i > 0) {
      costs[val2.length] = lastVal;
    }
  }

  return costs[val2.length];
}

const categorySearch = [
  {
    title: "DIVAN BEDS",
    link: "/beds/divan-beds",
  },
  {
    title: "ALL BEDS",
    link: "/",
  },
  {
    title: "DIVAN BEDS",
    link: "/beds/divan-beds",
  },
  {
    title: "SHOP BY BED SIZE",
    link: "/beds/shop-by-bed-size",
  },
  {
    title: "MATTRESSES",
    link: "/beds/mattresses",
  },
  {
    title: "HEADBOARDS",
    link: "/beds/headboards",
  },
];
