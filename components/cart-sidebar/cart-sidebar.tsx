/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import FadeIn from 'components/animate';
import CloseIcon from 'icons/CloseIcon';
import styles from 'styles/cart_sidebar.module.scss';
import { useRouter } from 'next/router';
import useAppDispatch from 'store/hooks/usedispatch';
import useAppSelector from 'store/hooks/useselector';
import {
  decreaseQuantity,
  increaseQuantity,
  removeItemFromCart,
} from 'store/slices/cart';
import useHideScrollBar from 'hooks/use-hide-scroll';
import { event } from 'services/analytics';
import AmazonPayCheckoutButton from 'components/payments/amazon-checkout-component';
import Image from 'next/image';

interface CartSidebarProps {
  show?: boolean;
  onClose: () => void;
}

function CartSidebar({ show, onClose }: CartSidebarProps) {
  // useHideScrollBar(show);
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

  // const cartArray = React.useMemo(() => {
  //   return cartItems.map((item: any) => {
  //     let data = {
  //       name: item?.bed?.name,
  //       size: [item?.bed?.size],
  //       images: [item?.bed?.image],
  //       amount: Math.round(item?.total * 100),
  //       currency: "usd",
  //     };
  //     return data;
  //   });
  // }, [cartItems]);

  const toCheckout = React.useCallback(() => {
    event({
      action: 'sidebar_to_checkout',
      params: {
        name: cartItems.map((item: any) => item.bed.name),
        price: totalPrice,
      },
    });
    router.push(`/cart/checkout`);
  }, [cartItems, router, totalPrice]);

  return (
    <>
      {show && (
        <section className={styles.mydiv}>
          <div className={`${styles.cartcontain} container`}>
            <div className={`${styles.sidecartinner} row`}>
              <div className="align-content-end">
                <FadeIn className={styles.cartsidebar}>
                  <span className={styles.closebtn} onClick={onClose}>
                    <CloseIcon />
                  </span>
                  {cartItems.length > 0 ? (
                    cartItems.map((item: any, index: number) => {
                      const bed = item.bed;
                      const accessories = item.accessories;
                      console.log(item);
                      return (
                        <React.Fragment key={index}>
                          <div key={index} className={styles.cartlistside}>
                            <div className={styles.cartitem}>
                              <div className={styles.image}>
                                <Image width={1000} height={700} src={bed?.image} alt={bed?.name} />
                              </div>
                              <div className={styles.cartcontent}>
                                <a>{item.name}</a>
                                <ul>
                                  {accessories.color.name && (
                                    <li>
                                      <h5>Choose Colour: </h5>
                                      <p>{accessories.color.name}</p>
                                    </li>
                                  )}

                                  <li>
                                    <h5>Select Your Size:</h5>
                                    {/* <p>2FT 6 - Small Single - £102</p> */}
                                    {bed.size} £{bed.price.toFixed(2)}
                                  </li>

                                  {accessories.storage.name && (
                                    <li>
                                      <h5>Storage Options:</h5>
                                      <p>{accessories.storage.name}</p>
                                    </li>
                                  )}

                                  {accessories.feet.name && (
                                    <li>
                                      <h5>Select Your Feet:</h5>
                                      <p>{accessories.feet.name}</p>
                                    </li>
                                  )}

                                  {accessories.headboard.name && (
                                    <li>
                                      <h5>Select Your Headboard:</h5>
                                      <p>{accessories.headboard.name}</p>
                                    </li>
                                  )}

                                  {accessories.mattress.name && (
                                    <li>
                                      <h5>Select Your Mattress:</h5>
                                      <p>{accessories.mattress.name}</p>
                                    </li>
                                  )}
                                  <li>Quantity : {item.quantity}</li>
                                  <li
                                    onClick={() => handleDeleteItem(item?.id)}
                                    className={styles.removeitems}
                                  >
                                    <CloseIcon /> Remove Item
                                  </li>
                                </ul>
                              </div>
                              {/* <div
                              className={styles.cartitemremove}
                              onClick={() => handleDeleteItem(item?.id)}
                            >
                              <CloseIcon />
                            </div> */}
                            </div>
                          </div>
                          <div>
                            <ul>
                              <li>Quantity : {item.quantity}</li>
                              {/* <li
                                onClick={() => handleDeleteItem(item?.id)}
                                className={styles.rmvitem}
                              >
                                Remove Item
                              </li> */}
                            </ul>
                          </div>
                        </React.Fragment>
                      );
                    })
                  ) : (
                    <p>No Items in Cart</p>
                  )}
                  {cartItems.length > 0 && (
                    <React.Fragment>
                      <div className={styles.subtotalsiv}>
                        <span className={styles.subtotal}>subtotal:</span>
                        <span className={styles.subtotal2}>
                          £{totalPrice?.toFixed(2)}
                        </span>
                      </div>
                      <div className={styles.subtotaldiv}>
                        <Link href={'/cart'}>
                          <a>view basket</a>
                        </Link>

                        <a onClick={toCheckout}>checkout</a>
                      </div>
                    </React.Fragment>
                  )}
                  <br />

                  {cartItems.length > 0 && (
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
                  )}
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
export default CartSidebar;
