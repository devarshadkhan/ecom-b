/* eslint-disable @next/next/no-img-element */
import React from 'react';
import AddIcon from 'icons/add';
import DeleteIcon from 'icons/delete';
import RemoveIcon from 'icons/remove';
import style from 'styles/product/cart.module.scss';
import { useRouter } from 'next/router';
import { NextPageWithLayout } from 'typings/layout';
import PerPageLayout from 'layout/perpage';
import Link from 'next/link';
import {
  decreaseQuantity,
  increaseQuantity,
  removeItemFromCart,
} from 'store/slices/cart';
import useAppDispatch from 'store/hooks/usedispatch';
import useAppSelector from 'store/hooks/useselector';
import ReturnToShop from 'components/returntoshopbtn/inedx';
import NextSEO from 'layout/nextseo';
import { event } from 'services/analytics';
import AmazonPayAPBCheckoutButton from 'components/payments/amazon-apb-checkout-component';
import AmazonPayCheckoutButton from 'components/payments/amazon-checkout-component';

const iconColor = '#777';

const CartPage: NextPageWithLayout = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { items: cartItems, totalPrice } = useAppSelector(
    (state) => state.cart
  );

  //CART ACTIONS
  const handleIncreaseQuantity = (id: string) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (item: any) => {
    if (item.quantity > 1) {
      dispatch(decreaseQuantity(item.id));
    }
  };
  const handleDeleteItem = (id: string) => {
    dispatch(removeItemFromCart(id));
  };

  // let cartArray: any = [];

  // cartItems.map((item) => {
  //   let data = {
  //     name: item?.bed?.name,
  //     size: [item?.bed?.size],
  //     images: [item?.bed?.image],
  //     amount: Math.round(item?.total * 100),
  //     currency: "usd",
  //   };
  //   cartArray.push(data);
  // });

  const cartArray = React.useMemo(() => {
    return cartItems.map((item: any) => {
      let data = {
        name: item?.bed?.name,
        size: [item?.bed?.size],
        images: [item?.bed?.image],
        amount: Math.round(item?.total * 100),
        currency: 'usd',
      };
      return data;
    });
  }, [cartItems]);

  const goToCheckoutPage = async () => {
    event({
      action: 'cart_to_checkout',
      params: {
        name: cartItems.map((item: { bed: { name: any } }) => item.bed.name),
        price: totalPrice,
      },
    });
    //for GA4
    router.push('/cart/checkout');
  };

  return (
    <>
      <NextSEO
        title={'Cart | Beds Divans'}
        description="We offer a wide range of modern and designer Cart in the UK Shop luxury Cart for disscount price, for more item visit beds divans today"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Cart | Beds Divans",
          "image":"https://bedsdivans.co.uk/image/wplogo.webp",
        "description": "We offer a wide range of modern and designer Cart in the UK. Shop luxury Cart for discount prices. For more items, visit Beds Divans today!",
          "@id": "https://www.bedsdivans.co.uk/",
         "url": "https://bedsdivans.co.uk/cart", 
        "telephone": "+44 1902405535",
          "priceRange": "Ask",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Unit 8A Stag Industrial Estate Oxford Street",
            "addressLocality": "Bilston",
            "postalCode": "WV14 7HZ",
            "addressCountry": "+44",
            "addressRegion": "+44"
          },
        "openingHoursSpecification": 
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "11:00",
              "closes": "19:00"
          },
          "review": {
            "@type": "Review",
            "reviewRating": {
              "@type" : "Rating",
              "ratingValue" : "5",
              "bestRating" : "5",
              "worstRating" : "1"
            },
            "author": {
              "@type": "Person",
              "name": "Sophie Jones"
            },
            "reviewBody": "Fantastic product! It really helped me. I would recommend to all my friends and family."
          },
          "sameAs": [
            "https://www.facebook.com/bedsdivans.co.uk",
            "https://twitter.com/bedsdivans?lang=en",
            "https://www.instagram.com/bedsdivans/?hl=en"
          ] 
        }
        `,
          }}
        ></script>
      </NextSEO>

      <br />
      <div className={style.sectioncart}>
        <div className="container">
          <div className="row">
            <div className={`${style.mwfull} col-8`}>
              <div className={style.productlistboxouter}>
                <table className={style.productcarlist}>
                  {cartItems.length <= 0 ? (
                    <>
                      <h1>No Item in Your Cart</h1>
                      <ReturnToShop />
                    </>
                  ) : (
                    <React.Fragment>
                      <TableHead />
                      {cartItems.map((data: any, index: number) => {
                        const notToShow = ['low-divan-bed'];
                        const isDivanbed = data?.bed?.categories?.some(
                          (item: any) => notToShow?.includes(item)
                        );

                        return (
                          <ProductItem
                            isDivanbed={isDivanbed}
                            intialQuantity={data.quantity}
                            key={index}
                            name={data.bed.name}
                            imageUrl={data.bed.image}
                            totalPrice={`£${data.bed.price}`}
                            price={`£${
                              data.bed.price +
                              data.accessories.feet.price +
                              data?.accessories?.headboard?.price +
                              data?.accessories?.mattress?.price +
                              data?.accessories?.storage?.price
                            }`}
                            cartTotalAmount={`£${
                              data.quantity *
                              (data.bed.price +
                                data.accessories.feet.price +
                                data?.accessories?.headboard?.price +
                                data?.accessories?.mattress?.price +
                                data?.accessories?.storage?.price)
                            }`}
                            onAddQuantity={() =>
                              handleIncreaseQuantity(data.id as string)
                            }
                            onRemoveQuantity={() =>
                              handleDecreaseQuantity(data)
                            }
                            onDeleteItem={() => {
                              handleDeleteItem(data.id as string);
                              event({
                                action: 'remove_to_cart',
                                params: {
                                  name: cartItems.map(
                                    (item: { bed: { name: any } }) =>
                                      item.bed.name
                                  ),
                                  price: totalPrice,
                                },
                              });
                            }}
                            accessories={data.accessories}
                            size={data.bed.size}
                          />
                        );
                      })}
                    </React.Fragment>
                  )}
                </table>
              </div>

              <div className={style.continueshopping}>
                <a onClick={() => router.back()}> Continue shopping</a>
              </div>
            </div>
            {cartItems.length > 0 && (
              <PromoCode
                onCheckout={goToCheckoutPage}
                totalItems={cartItems.length}
                totalPrice={totalPrice}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;

CartPage.getLayout = PerPageLayout;

const TableHead = () => {
  return (
    <thead>
      <tr>
        <td>Product</td>
        <td>Price</td>
        <td>Qty</td>
        <td>Subtotal</td>
        <td> </td>
      </tr>
    </thead>
  );
};

interface ProductItemProps {
  imageUrl?: string;
  name?: string;
  price?: string;
  totalPrice?: string;
  subtotal?: string;
  cartTotalAmount?: string;

  onAddQuantity?: () => void;
  onRemoveQuantity?: () => void;
  onDeleteItem?: () => void;
  intialQuantity?: number;
  accessories: {
    color: {
      name: any;
      image: string;
    };
    storage: {
      name: any;
      price: number;
    };
    feet: {
      name: any;
      price: number;
    };
    headboard: {
      name: any;
      price: number;
    };
    mattress: {
      name: any;
      price: number;
    };
  };
  size?: string;
  isDivanbed?: boolean;
}

const ProductItem = ({
  imageUrl,
  name,
  onAddQuantity,
  onDeleteItem,
  onRemoveQuantity,
  price,
  totalPrice,
  subtotal,
  intialQuantity,
  accessories,
  size,
  cartTotalAmount,
  isDivanbed,
}: ProductItemProps) => {
  return (
    <tbody>
      <tr>
        <td>
          <div className={style.products}>
            <div className={style.productsimage}>
              <img src={imageUrl} alt="img" />
            </div>
            <div className={style.productdetails}>
              <div className={style.productname}>{name}</div>
              <ul className={style.list}>
                {accessories?.color.name?.length > 0 && (
                  <li>
                    <strong>Selected Color :</strong>
                    {accessories?.color.name}
                  </li>
                )}

                <li>
                  <strong>Selected Size :</strong>
                  {size}
                </li>

                {accessories?.headboard?.name &&<li>
                  <strong>Selected Headboard :</strong>
                  {accessories?.headboard?.name}
                </li>}
                {!isDivanbed && accessories?.storage?.name && (
                  <li>
                    <strong>Selected Storage:</strong>
                    {accessories?.storage?.name}
                  </li>
                )}

                {/* {!isDivanbed && (
                  <li>
                    <strong>Select Feet : </strong>
                    {accessories?.feet?.name || "Free Castor Wheels"}
                  </li>
                )} */}

                {accessories?.mattress?.name&& <li>
                  <strong>Selected Mattress : </strong>
                  {accessories?.mattress?.name}
                </li>}
              </ul>
            </div>
          </div>
        </td>
        <td>
          <div className={style.price}>{price}</div>
        </td>
        <td>
          <div className={style.qty}>
            <input type="number" value={intialQuantity} />
            <div className={style.btn}>
              <i onClick={onAddQuantity} className={style.svgicon}>
                <AddIcon fill={iconColor} />
              </i>
              <i onClick={onRemoveQuantity} className={style.svgicon}>
                <RemoveIcon fill={iconColor} />
              </i>
            </div>
          </div>
        </td>
        <td>
          <div className={style.total}>{cartTotalAmount} </div>
        </td>
        <td>
          <i onClick={onDeleteItem} className={style.svgicons}>
            <DeleteIcon fill={iconColor} />
          </i>
        </td>
      </tr>
    </tbody>
  );
};

const PromoCode = ({ onCheckout, totalPrice }: any) => {
  const router = useRouter();
  return (
    <>
      <div className={`${style.mwfulls} col-4`}>
        <div className={style.cartsummary}>
          <ul>
            <li className={style.basketheading}>
              <h2>BASKET TOTALS</h2>
            </li>
            <li className={style.cartsummaryline}>
              <span className={style.jssubtotal}> Subtotal</span>
              <span className={style.value}>£{totalPrice} </span>
            </li>
            <li className={style.cartsummary1}>
              <span className={style.shippingdetail}>Shipping</span>
              <span
                className={style.shippingdetail1}
                style={{ paddingLeft: 10 }}
              >
                {/* <strong>Free shipping</strong>
                <br /> */}
                Shipping options will be updated during checkout.
                <br />
                <Link href="#">
                  <a>Change address</a>
                </Link>
              </span>
            </li>
            <li className={style.cartsummarytotals}>
              <div className={style.pritotal}>
                <span className={style.jssubtotal}>Total </span>
                <span className={style.value}>£{totalPrice} </span>
              </div>
            </li>
            <li className={style.cartdetailedactions}>
              <a onClick={onCheckout}>Proceed to checkouts</a>
              <span>-or-</span>
              <AmazonPayCheckoutButton
                estimatedOrderAmount={{
                  price: totalPrice,
                  currencyCode: 'GBP',
                }}
                checkoutReviewReturnUrl={
                  process.env.NEXT_PUBLIC_BASE_URL +
                  '/cart/amazon/mini-checkout'
                }
              />
              {/* <div
                className={style.amazonpay}
                onClick={() => router.push(`/cart/amazon/apb-checkout`)}
              >
                <img src="/image/amalogo.png" alt="" />
                <img src="/image/righ.png" alt="" />
              </div>   <p className={style.useyour}>Use Your amazon account</p> */}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
