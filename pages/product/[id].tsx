/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import PerPageLayout from "layout/perpage";
import Colors from "components/products/colors";
import useProduct from "store/hooks/use-product";
import css from "styles/product/page.module.scss";
import Warranty from "components/products/warranty";
import { dehydrate, QueryClient } from "react-query";
import AddToBasket from "components/products/add-to-basket";
import SelectOption from "components/products/select-options";
import ImageCarousel from "components/products/image-carousel";
import Image from "next/image";
import {
  useFetchAllBedsWithImage,
  useFetchBedVariantsByIdAndSize,
} from "network-requests/queries";
import Link from "next/link";
import ClearpayIcon from "icons/clearpayicon";
import { BedWithImage } from "network-requests/types";
import GridWrapper from "components/grid-card";
import RelProductCard from "components/grid-card/relcard";
import useAppDispatch from "store/hooks/usedispatch";
import { addItemToCart } from "store/slices/cart";
import InformationIcon from "icons/information";
import CartSidebar from "components/cart-sidebar/cart-sidebar";
import useSide from "store/hooks/use-side";
import { event } from "services/analytics";
import NextSEO from "layout/nextseo";
import useOnClickOutside from "hooks/useclick";
import CloseIcon from "icons/CloseIcon";
import TrustBoxProductWidget from "components/trustpilot/product-widget";
import AmazonPayCheckoutButton from "components/payments/amazon-checkout-component";

// DYNAMIC COMPONENTS
const ContentTabs = dynamic(() => import("components/products/tabs"));

const ProductDetailPage = ({ size: bedSize, id }: any) => {
  const { cartSideState, updateSideBar } = useSide();
  console.log({ bedSize });
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { setAccessories, productState, setBed } = useProduct();
  const [size, setSize] = React.useState("");
  const { data, isFetching, isFetched } = useFetchBedVariantsByIdAndSize(
    id as any,
    size || (bedSize as any)
  );

  const { data: catitem } = useFetchAllBedsWithImage(data?.categories[1]);

  const isLowDivanBed = router.asPath.includes("low-divan-bed");
  // console.log({ isLowDivanBed });
  // API DATA
  const [productData, setProductData] = React.useState({
    id: data?._id,
    name: data?.name,
    images: data?.images,
    description: data?.description,
    categories: data?.categories,
    availabeSizes: data?.availabeSizes,
    variants: data?.variants[0],
    salePrice: data?.variants[0]?.price?.salePrice,
    basePrice: data?.variants[0]?.price?.basePrice,
    metaTitle: data?.metaTitle,
    metaDescription: data?.metaDescription,
  });
console.log("wteywdwvgd",productData);

  const [currentImage, setCurrentImage] = React.useState(
    productState?.accessories?.color?.image || productData?.variants?.image
  );

  // REFETCH DATA ON CHANGE

  React.useEffect(() => {
    setCurrentImage(
      productState?.accessories?.color?.image || productData?.variants?.image
    );
  }, [productState?.accessories?.color?.image, productData?.variants]);

  const _updateState = React.useCallback(
    (key: string, value: any) => {
      setAccessories(key, value);
    },
    [setAccessories]
  );

  React.useEffect(() => {
    if (isFetched) {
      const feetPrice = productState?.accessories?.feet?.price;
      const headboardPrice = productState?.accessories?.headboard?.price;
      const mattressPrice = productState?.accessories?.mattress?.price;
      const storagePrice = productState?.accessories?.storage?.price;
      const salePrice = data?.variants[0]?.price?.salePrice;
      const basePrice = data?.variants[0]?.price?.basePrice;
      const feetBasePrice=productState?.accessories?.feet?.basePrice;
      const headboardBasePrice=productState?.accessories?.headboard?.basePrice;
      const mattressBasePrice = productState?.accessories?.mattress?.basePrice;
      const storageBasePrice = productState?.accessories?.storage?.basePrice;
      const totalPrice =
        salePrice &&
        salePrice + feetPrice + headboardPrice + mattressPrice + storagePrice;
      const totalBasePrice=basePrice&& basePrice+feetBasePrice+headboardBasePrice+mattressBasePrice+storageBasePrice;

      setProductData({
        id: data?._id,
        name: data?.name,
        images: data?.images,
        description: data?.description,
        categories: data?.categories,
        variants: data?.variants[0],
        availabeSizes: data?.availabeSizes,
        salePrice: totalPrice || data?.variants[0]?.price?.salePrice,
        basePrice: totalBasePrice || data?.variants[0]?.price?.basePrice,
        metaTitle: data?.metaTitle,
        metaDescription: data?.metaDescription,
      });
    }
  }, [
    isFetched,
    data?._id,
    data?.availabeSizes,
    data?.categories,
    data?.description,
    data?.images,
    data?.name,
    data?.variants,
    productState?.accessories?.feet?.price,
    productState?.accessories?.headboard?.price,
    productState?.accessories?.mattress?.price,
    productState?.accessories?.storage?.price,
    data?.metaTitle,
    data?.metaDescription,
  ]);

  React.useEffect(() => {
    const accessories = productData.variants?.accessories;
    console.log("line136", accessories?.headboard?.[0]?._id);
    if (accessories?.headboard) {
      const resetPayload = {
        _id: accessories?.headboard?.[0]?._id,
        name: accessories?.headboard?.[0]?.name?.label,
        price:
          Number(accessories?.headboard?.[0]?.price) > 0
            ? accessories?.headboard?.[0]?.price
            : 0,
        basePrice:Number(accessories?.headboard?.[0]?.basePrice) > 0
        ? accessories?.headboard?.[0]?.basePrice
        : 0,
        value: accessories?.headboard?.[0]?.name?.value,
      };
      _updateState("headboard", resetPayload);
    }
    if (accessories?.storage) {
      const resetPayload = {
        _id: accessories?.storage?.[0]?._id,
        name: accessories?.storage?.[0]?.name?.label,
        price:
          Number(accessories?.storage?.[0]?.price) > 0
            ? accessories?.storage?.[0]?.price
            : 0,
        basePrice: Number(accessories?.storage?.[0]?.basePrice) > 0
            ? accessories?.storage?.[0]?.basePrice
            : 0,
        value: accessories?.storage?.[0]?.name?.value,
      };
      _updateState("storage", resetPayload);
    }
    if (accessories?.mattress) {
      const resetPayload = {
        _id: accessories?.mattress?.[0]?._id,
        name: accessories?.mattress?.[0]?.name?.label,
        price:
          Number(accessories?.mattress?.[0]?.price) > 0
            ? accessories?.mattress?.[0]?.price
            : 0,
        basePrice: Number(accessories?.mattress?.[0]?.basePrice) > 0
        ? accessories?.mattress?.[0]?.basePrice
        : 0,
        value: accessories?.mattress?.[0]?.name?.value,
      };
      _updateState("mattress", resetPayload);
    }
  }, [data]);

  React.useEffect(() => {
    setBed({
      id: productData?.id,
      name: productData?.name,
      image: productData?.variants?.image,
      price: productData?.salePrice,
      size: size,
    });

    // _updateState("headboard", resetPayload);
    // _updateState("storage", resetPayload);
    // _updateState("feet", resetPayload);
    // _updateState("mattress", resetPayload);

    // setAccessories("color", productData.variants.accessories.color[0]);
    const localSelectedColor = productState?.accessories?.color?.name;

    if (localSelectedColor) {
      (productData as any)?.variants?.accessories?.color?.find((item: any) => {
        if (item.name.label === localSelectedColor) {
          _updateState("color", {
            image: item.image,
            name: item.name.label,
            _id: item._id,
          });
        }
      });
    } else {
      _updateState("color", {
        image: (productData as any)?.variants?.accessories?.color?.[0]?.image,
        name: (productData as any)?.variants?.accessories?.color?.[0]?.name
          .label,
        _id: (productData as any)?.variants?.accessories?.color?.[0]?._id,
      });
    }
    // const data = {
    //   image:
    //     productState?.accessories?.color?.image ||
    //     (productData as any)?.variants?.accessories?.color?.[0]?.image,
    //   name:
    //     productState?.accessories?.color?.name ||
    //     (productData as any)?.variants?.accessories?.color?.[0]?.name.label,
    //   _id:
    //     productState?.accessories?.color?._id ||
    //     (productData as any)?.variants?.accessories?.color?.[0]?._id,
    // };

    // _updateState("color", data);

    // _updateState("color", data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productData, size]);

  useEffect(() => {}, [productData, size]);

  const updateState = React.useMemo(() => _updateState, [_updateState]);

  const addToCart = React.useCallback(() => {
    event({
      action: "add_to_cart",

      params: {
        _id: data?._id as string,
        variantId: data?.variants?.[0]?._id as string,
        name: data?.name as string,
        image: currentImage as string,
        price: Number(data?.variants?.[0]?.price?.salePrice),
        size: data?.variants?.[0]?.size as string,
        value: 100,
        currency: "GBP",
        items: [
          {
            item_id: data?._id as string,
            item_name: data?.name as string,
          },
        ],
      },
    });
    dispatch(
      addItemToCart({
        bed: {
          _id: data?._id as string,
          variantId: data?.variants?.[0]?._id as string,
          name: data?.name as string,
          image: currentImage as string,
          price: Number(data?.variants?.[0]?.price?.salePrice),
          size: data?.variants?.[0]?.size as string,
          slug: data?.slug as string,
          categories: data?.categories as string[],
        },
        type: "DIVANBED",
        total: productData.salePrice as number,
        quantity: productState.accessories?.quantity as number,
        accessories: {
          color: productState?.accessories.color as any,
          storage: productState?.accessories.storage as any,
          feet: productState?.accessories.feet as any,
          headboard: productState?.accessories.headboard as any,
          mattress: productState?.accessories.mattress as any,
        },
      })
    );
  }, [
    currentImage,
    data?._id,
    data?.categories,
    data?.name,
    data?.slug,
    data?.variants,
    dispatch,
    productData.salePrice,
    productState.accessories.color,
    productState.accessories.feet,
    productState.accessories.headboard,
    productState.accessories.mattress,
    productState.accessories?.quantity,
    productState.accessories.storage,
  ]);

  const _handleAddSideCart = React.useCallback(() => {
    addToCart();
    // router.push("/cart");
    updateSideBar(true);
  }, [addToCart, updateSideBar]);

  const handleAddSideCart = React.useMemo(
    () => _handleAddSideCart,
    [_handleAddSideCart]
  );
  // @ts-ignore ( IMAGE ARRAY )
  const carouselImages = React.useMemo(() => {
    const images =
      productState?.accessories?.color?.image || productData?.variants?.image;

    return [images].concat(productData?.images);
  }, [
    productData?.images,
    productData?.variants?.image,
    productState?.accessories?.color?.image,
  ]);

  const getRequiredAccessoriesData = React.useCallback((data: any) => {
    const payload = {
      _id: data?._id,
      name: data?.name?.label,
      value: data?.name?.value,
      price: Number(data?.price),
      total: +Number(data?.price),
      basePrice:Number(data?.basePrice),
      totalBasePrice: +Number(data?.basePrice),
    };
    return payload;
  }, []);

  const onChangeAccessories = React.useCallback(
    (key: string, e: any) => {
      const id = e.target.value;
      if (key === "storage") {
        const data = productData?.variants?.accessories?.storage?.find(
          (item: any) => item._id === id
        );
        const value = getRequiredAccessoriesData(data);

        updateState(key, value);
      } else if (key === "headboard") {
        const data = productData?.variants?.accessories?.headboard?.find(
          (item: any) => item._id === id
        );
        const value = getRequiredAccessoriesData(data);
        updateState(key, value);
      } else if (key === "feet") {
        const data = productData?.variants?.accessories?.feet?.find(
          (item: any) => item._id === id
        );
        const value = getRequiredAccessoriesData(data);
        updateState(key, value);
      } else if (key === "mattress") {
        const data = productData?.variants?.accessories?.mattress?.find(
          (item: any) => item._id === id
        );
        const value = getRequiredAccessoriesData(data);
        updateState(key, value);
      }
    },
    [
      getRequiredAccessoriesData,
      productData?.variants?.accessories?.feet,
      productData?.variants?.accessories?.headboard,
      productData?.variants?.accessories?.mattress,
      productData?.variants?.accessories?.storage,
      updateState,
    ]
  );

  React.useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      updateSideBar(false);
    });
    return () => {
      router.events.off("routeChangeComplete", () => {
        updateSideBar(false);
      });
    };
  }, [router.events, updateSideBar]);

  // console.log(productData?.salePrice);

  const schemaData = {
    "@context": "https://schema.org/",
    "@type": "LocalBusiness",
    name: data?.name,
    image: currentImage as string,
    description: data?.description,
    "@id": "https://www.bedsdivans.co.uk/",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`,
    telephone: "+44 1902405535",
    priceRange: `${productData?.salePrice}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Unit 8A Stag Industrial Estate Oxford Street",
      addressLocality: "Bilston",
      postalCode: "WV14 7HZ",
      addressCountry: "+44",
      addressRegion: "+44",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "11:00",
      closes: "19:00",
    },
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1",
      },
      author: {
        "@type": "Person",
        name: "Sophie Jones",
      },
      reviewBody:
        "Fantastic product! It really helped me. I would recommend to all my friends and family.",
    },
    sameAs: [
      "https://www.facebook.com/bedsdivans.co.uk",
      "https://twitter.com/bedsdivans?lang=en",
      "https://www.instagram.com/bedsdivans/?hl=en",
    ],
  };
  const [isClicked, setClicked] = React.useState(false);
  const onClikedMore = React.useCallback(() => {
    setClicked(!isClicked);
  }, [isClicked]);
  const ref = useOnClickOutside(() => setClicked(false));

  const sizeHandler = (pathname: string) => {
    router.push({ pathname: pathname }, undefined, {
      scroll: false,
    });
  };

  console.log(data);
  return (
    <React.Fragment>
      {/* USE IN OTHER PAGES ALSO */}
      <NextSEO
        title={(data?.metaTitle || productData.metaTitle) as string}
        description={data?.metaDescription || productData.metaDescription}
        canonicalUrl={`${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </NextSEO>

      <CartSidebar
        show={cartSideState.show}
        onClose={() => updateSideBar(false)}
      />
      <div className={`${css.mwfullesd} container`}>
        <div
          className={`${css["grid"]}`}
          style={{
            opacity: isFetching ? 0.5 : 1,
          }}
        >
          {/* LEFT */}
          <div className={`${css["left"]}`}>
            <div className={css["image-section"]}>
              <div className={css["product-image"]}>
                <Image
                  priority
                  width={1000}
                  height={700}
                  className={css["image"]}
                  src={currentImage as string}
                  alt="Grey-linen"
                />
              </div>
              <ImageCarousel
                selected={(value: any) => setCurrentImage(value)}
                imagesArray={carouselImages as any}
              />
            </div>
            <Warranty />
          </div>
          {/* RIGHT */}
          <div className={css["right"]}>
            <div className={css["product-name"]}>
              <h1>{productData?.name}</h1>
            </div>
            <div className={css["trustpilot"]}>
              <TrustBoxProductWidget
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  width: "230px",
                }}
              />
            </div>
            {productData?.variants?.accessories?.storage &&
              productData?.variants?.accessories?.storage?.length > 0 && (
                <div className={css["rainforced"]}>
                  <span>
                    <h6>New and Improved Reinforced Bed Bases</h6>
                    <a onClick={onClikedMore}>Know More</a>
                  </span>
                </div>
              )}
            <section
              style={{
                transform: `translateX(${isClicked ? "0%" : "-100%"})`,
              }}
              className={css["navigation"]}
            >
              <div ref={ref} className={css["navigation-cont"]}>
                <button
                  title="close-icon"
                  aria-label="close-icon"
                  onClick={onClikedMore}
                >
                  <CloseIcon size={24} />
                </button>
                <div>
                  <img src="/images/BED-BASEpng (1).png" alt="reinforce base" />
                </div>
              </div>
            </section>
            <div className={css["price"]}>
              <p>
                {/* <span>{productData?.variants?.price?.salePrice}</span> */}
                <span>
                  <s>
                    <span>£</span>

                    {productData?.basePrice}
                  </s>{" "}
                  &nbsp;
                  <span style={{ color: "red" }}>
                    <span>£</span>
                    {productData?.salePrice}{" "}
                  </span>
                </span>
              </p>
            </div>
            <div className={css["product-options"]}>
              {productData?.variants?.accessories?.color &&
                productData?.variants?.accessories?.color.length > 0 && (
                  <Colors
                    colorArray={productData?.variants?.accessories.color}
                    colorName={productState?.accessories.color?.name}
                    onPickColor={(value: any) =>
                      updateState("color", {
                        image: value?.image,
                        name: value?.name?.label,
                        _id: value?._id,
                      })
                    }
                    activeColor={productState?.accessories.color.name as any}
                  />
                )}

              <SelectOption
                dataArray={productData?.availabeSizes as any}
                label="Select Your Size"
                value={size}
                onChange={(e) => {
                  console.log(e.target.value);
                  updateState("size", e.target.value);
                  setSize(e.target.value as any);
                  // sizeHandler(`/products/${data?.slug}-${e.target.value}`);
                }}
              />
              {!isLowDivanBed &&
                productData?.variants?.accessories?.storage &&
                productData?.variants?.accessories?.storage?.length > 0 && (
                  <SelectOption
                    type="accessories"
                    dataArray={productData?.variants?.accessories?.storage}
                    label="Select Your Storage"
                    value={productState?.accessories.storage?._id || 0}
                    onChange={(e) => {
                      onChangeAccessories("storage", e);
                    }}
                  />
                )}
              {productData?.variants?.accessories?.headboard &&
                productData?.variants?.accessories?.headboard?.length > 0 && (
                  <SelectOption
                    type="accessories"
                    dataArray={
                      productData?.variants?.accessories?.headboard as any
                    }
                    value={productState?.accessories.headboard?._id || 0}
                    label="Select Your Headboard"
                    onChange={(e) => onChangeAccessories("headboard", e)}
                  />
                )}
              {productData?.variants?.accessories?.mattress &&
                productData?.variants?.accessories?.mattress?.length > 0 && (
                  <SelectOption
                    type="accessories"
                    dataArray={
                      productData?.variants?.accessories?.mattress as any
                    }
                    value={productState?.accessories.mattress?._id || 0}
                    label="Select Your Mattress"
                    onChange={(e) => onChangeAccessories("mattress", e)}
                  />
                )}
            </div>
            <div>
              <AddToBasket
                onClick={handleAddSideCart}
                onChange={(value) => {
                  updateState("quantity", value);
                }}
              />
            </div>
            <div className={css.deliverytime}>
              <p>Delivery Time: 3-5 working days</p>
            </div>
            <div className={css.clearpay}>
              <p>or 4 interest-free payments of £25.50 with</p>
              <span>
                <ClearpayIcon size={100} color="#000" />
              </span>
              <span>
                <a href="#">
                  <InformationIcon />
                </a>
              </span>
            </div>

            <AmazonPayCheckoutButton
              estimatedOrderAmount={{
                price: productData.salePrice as number,
                currencyCode: "GBP",
              }}
            />

            {/* <div className={css.amazonpay}>
              <img src="/image/amalogo.png" alt="" />
              <img src="/image/righ.png" alt="" />
            </div> */}
            {/* <p className={css.useyour}>Use Your amazon account</p> */}
            <div className={css.klarna}>
              <img src="/image/klarna.png" alt="" />
              <p>
                Pay in 30 days. No fees.{" "}
                <Link href={"https://www.klarna.com/international/"}>
                  <a>Learn more</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
        <ContentTabs
          description={data?.description}
          productId={data?._id as any}
        />
        <section className={css.relpsection}>
          <div className={css.reletptext}>
            <p>RELATED PRODUCTS</p>
          </div>
          <div className={css.relatedproduct}>
            <GridWrapper
              grid="4"
              gap="4rem"
              gridCount={{
                mobile: 1,
                desktop: 4,
              }}
            >
              {catitem?.pages?.["0"]?.data
                ?.slice(0, 4)
                .reverse()
                .map((item: BedWithImage, index) => {
                  return (
                    <RelProductCard
                      name={item?.name}
                      price={item?.price}
                      image={item?.image}
                      key={index}
                      coversControls
                      onClick={() => {
                        console.log(item.slug);
                        // router.reload();
                        router.push(`/product/${item.slug}`);
                      }}
                    />
                  );
                })}
            </GridWrapper>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default ProductDetailPage;

ProductDetailPage.getLayout = PerPageLayout;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id: query = null }: any = context.query;
  let size: string | null = null;
  let id: string | null = null;
  console.log({ size });
  if (query) {
    const lastWord = query.split("-").pop();
    if (lastWord && !isNaN(parseInt(lastWord.slice(0, 1)))) {
      size = lastWord;
    }
    id = query.replace(`-${size}`, "");
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/beds/${id}${
      size ? `?size=${size}` : ""
    }`
  );

  const data = await res.json();

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["bed-variant", id, size], async () => data);

  if (res.statusText !== "OK") {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  } else if (data?.variants?.length === 0 || !data) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }

  console.log({ size, id });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      size,
      id,
    },
  };
};
