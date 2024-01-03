/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
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

// DYNAMIC COMPONENTS
const ContentTabs = dynamic(() => import("components/products/tabs"));

const ProductDetailPage = ({ size: bedSize, id }: any) => {
  const { cartSideState, updateSideBar } = useSide();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { setAccessories, productState, setBed, resetState } = useProduct();
  const [size, setSize] = React.useState("");
  const { data, isFetching, isFetched } = useFetchBedVariantsByIdAndSize(
    id as any,
    size || (bedSize as any)
  );

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

  const [currentImage, setCurrentImage] = React.useState(
    productState?.accessories?.color?.image || productData?.variants?.image
  );

  // REFETCH DATA ON CHANGE

  // React.useEffect(() => {
  //   resetState();
  //   return () => {
  //     resetState();
  //   };
  // }, [size]);

  React.useMemo(() => {
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
      const totalPrice =
        salePrice &&
        salePrice + feetPrice + headboardPrice + mattressPrice + storagePrice;

      setProductData({
        id: data?._id,
        name: data?.name,
        images: data?.images,
        description: data?.description,
        categories: data?.categories,
        variants: data?.variants[0],
        availabeSizes: data?.availabeSizes,
        salePrice: totalPrice || data?.variants[0]?.price?.salePrice,
        basePrice: data?.variants[0]?.price?.basePrice,
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
    const resetPayload = { name: "", price: 0, value: "" };
    _updateState("headboard", resetPayload);
    _updateState("storage", resetPayload);
    _updateState("feet", resetPayload);
    _updateState("mattress", resetPayload);
  }, [data]);

  React.useMemo(() => {
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

  const _handleAddToCart = React.useCallback(() => {
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
    // router.push("/cart");
    updateSideBar(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    currentImage,
    data?._id,
    data?.name,
    data?.variants,
    productData.salePrice,
    productData.basePrice,
    productState.accessories.color,
    productState.accessories.feet,
    productState.accessories.headboard,
    productState.accessories.mattress,
    productState.accessories?.quantity,
    productState.accessories.storage,
  ]);
  // eslint-disable-next-line react-hooks/exhaustive-deps

  const handleAddToCart = React.useMemo(
    () => _handleAddToCart,
    [_handleAddToCart]
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

  const { data: catitem } = useFetchAllBedsWithImage(data?.categories[1]);

  React.useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      updateSideBar(false);
    });
    return () => {
      router.events.off("routeChangeComplete", () => {
        updateSideBar(false);
      });
    };
  }, [router.events]);

  console.log(productData);
  return (
    <React.Fragment>
      <Head>
        <title>{data?.metaTitle || productData.metaTitle}</title>
        <meta name="title" content={data?.metaTitle || productData.metaTitle} />
        <meta
          name="description"
          content={data?.metaDescription || productData.metaDescription}
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`}
        />
      </Head>
      <CartSidebar
        show={cartSideState.show}
        onClose={() => updateSideBar(false)}
      />
      <section className={css.mainproducttitle}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>{productData?.name}</h1>
            </div>
          </div>
        </div>
      </section>
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
                <img
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
              <Link href={"#tab-title-reviews"}>
                <a>
                  <img
                    src="/Trustpilot-4.5-Stars-300x63.png"
                    alt="trustpilot"
                    height={26}
                    width={125}
                    style={{ marginLeft: "10px" }}
                  />
                  <span>(1175)</span>
                  <img
                    src="/Trustpilotlogo-300x822nd.webp"
                    alt="trustpilot-logo"
                    height={34}
                    width={125}
                    style={{ marginLeft: "15px" }}
                  />
                </a>
              </Link>
            </div>
            {/* <div className={css["coupon"]}>
              <span>
                {" "}
                Get 10% off on all products minimum spend of £250 "Coupon
                Code:WINTER10"
              </span>
            </div> */}
            <div className={css["price"]}>
              {/* <p className={css["basePrice"]}>
                <span>£</span>
                <span>
                  {" "}
                  <del> {productData?.basePrice}</del>
                </span>
              </p> */}
              <p>
                <span>£</span>
                {/* <span>{productData?.variants?.price?.salePrice}</span> */}
                <span>{productData?.salePrice}</span>
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
                  updateState("size", e.target.value);
                  setSize(e.target.value as any);
                }}
              />
              {productData?.variants?.accessories?.storage &&
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
              {productData?.variants?.accessories?.feet &&
                productData?.variants?.accessories?.feet?.length > 0 && (
                  <SelectOption
                    type="accessories"
                    dataArray={productData?.variants?.accessories?.feet as any}
                    value={productState?.accessories.feet?._id || 0}
                    label="Select Your Feet"
                    onChange={(e) => onChangeAccessories("feet", e)}
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
                onClick={handleAddToCart}
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
            <div className={css.amazonpay}>
              <img src="/image/amalogo.png" alt="" />
              <img src="/image/righ.png" alt="" />
            </div>
            <p className={css.useyour}>Use Your amazon account</p>
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
        <ContentTabs productId={data?._id as any} />
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
                      onClick={() =>
                        router.push({
                          pathname: `/product/${item.slug}`,
                        })
                      }
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
  let size: any = null;
  let id: any = null;

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

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      size,
      id,
    },
  };
};
