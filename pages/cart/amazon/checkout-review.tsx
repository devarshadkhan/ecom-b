/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useRouter } from 'next/router';
import { useGetCheckoutSession } from 'network-requests/queries';
import useAppSelector from 'store/hooks/useselector';
import { useUpdateCheckoutSession } from 'network-requests/hooks/amazon-pay';
import { v4 } from 'uuid';
import { createOrder } from 'network-requests/api';

const CheckoutReview = () => {
  const router = useRouter();
  // API

  const {
    mutate: updateCheckoutSessionMutate,
    data: updateCheckoutSessionData,
  } = useUpdateCheckoutSession();
  const { items: cartItems, ...cartState } = useAppSelector(
    (state) => state.cart
  );

  const totalArray = cartItems.map(
    (item: { quantity: number; total: number }) => item.quantity * item.total
  );

  const cartTotal: number = totalArray.reduce(
    (i: number, a: number) => i + a,
    0
  );

  // console.log({ cartTotal });

  const amazonCheckoutSessionId = router.query?.['amazonCheckoutSessionId'];
  const { data: checkoutPayload } = useGetCheckoutSession(
    amazonCheckoutSessionId as string
  );

  /**
   * Create Checkout Payload
   */
  const createPayload = React.useMemo(() => {
    const orderItems = cartItems.map((item: any) => {
      return {
        _id: item?.bed?.variantId,
        bedId: item?.bed?._id,
        color: item?.accessories?.color?._id,
        headboard: item?.accessories?.headboard?._id,
        mattress: item?.accessories?.mattress?._id,
        feet: item?.accessories?.feet?._id,
        storage: item?.accessories?.storage?._id,
        quantity: item?.quantity,
      };
    });

    return {
      user: {
        firstName: checkoutPayload?.buyer?.name,
        lastName: '\n',
        email: checkoutPayload?.buyer?.email,
        phone: checkoutPayload?.buyer?.phoneNumber,
      },
      // couponId: coupon?._id,
      orderItems: orderItems,
      shippingAddress: {
        address: checkoutPayload?.shippingAddress?.addressLine1,
        townCity: checkoutPayload?.shippingAddress?.city,
        postalCode: checkoutPayload?.shippingAddress?.postalCode,
        country: checkoutPayload?.billingAddress?.county,
        companyName: '',
      },
      billingAddress: {
        address: checkoutPayload?.billingAddress?.addressLine1,
        townCity: checkoutPayload?.billingAddress?.city,
        postalCode: checkoutPayload?.billingAddress?.postalCode,
        country: checkoutPayload?.billingAddress?.county,
        companyName: '',
      },
      orderNotes: '',
      payment: {
        paymentMethod: 'amazonpay',
      },
      // extraDelivery: {
      //   price: cartState.extraDelivery?.price,
      //   name: cartState.extraDelivery?.name,
      // },
    };
  }, [
    cartItems,
    // cartState.extraDelivery?.price,
    // cartState.extraDelivery?.name,
    checkoutPayload?.billingAddress?.addressLine1,
    checkoutPayload?.billingAddress?.city,
    checkoutPayload?.billingAddress?.county,
    checkoutPayload?.billingAddress?.postalCode,
    checkoutPayload?.buyer?.email,
    checkoutPayload?.buyer?.name,
    checkoutPayload?.buyer?.phoneNumber,
    checkoutPayload?.shippingAddress?.addressLine1,
    checkoutPayload?.shippingAddress?.city,
    checkoutPayload?.shippingAddress?.postalCode,
  ]);

  const onPlaceOrder = React.useCallback(async () => {
    try {
      const data = await createOrder(createPayload);
      const payload = {
        webCheckoutDetails: {
          checkoutResultReturnUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/cart/amazon/checkout-return?orderId=${data?.order?.orderId}&createdAt=${data?.order?.createdAt}&totalPrice=${data?.order?.totalPrice}
          `,
        },
        paymentDetails: {
          paymentIntent: 'AuthorizeWithCapture',
          canHandlePendingAuthorization: false,
          chargeAmount: {
            amount: cartTotal,
            currencyCode: 'GBP',
          },
        },
        merchantMetadata: {
          merchantReferenceId: v4().toString().replace(/-/g, ''),
          merchantStoreName: 'AmazonTestStoreFront',
          noteToBuyer: 'merchantNoteForBuyer',
          customInformation: '',
        },
      };
      updateCheckoutSessionMutate(
        {
          amazonCheckoutSessionId: amazonCheckoutSessionId as string,
          payload,
        },
        {
          onSuccess: (data) => {
            router.push(
              `https://payments.amazon.co.uk/checkout/processing?amazonCheckoutSessionId=${amazonCheckoutSessionId}`
            );
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  }, [
    amazonCheckoutSessionId,
    cartTotal,
    createPayload,
    router,
    updateCheckoutSessionMutate,
  ]);

  console.log({ checkoutPayload });

  return (
    <div className="checkoutamazon">
      {true && (
        <div className="container chekout-review">
          <div className="header-style">
            <img src="/icons/logo-amazonpay.svg" alt="" />
          </div>
          <h1>Checkout</h1>
          <div className="saddress">
            <div className="container-space-between">
              <h4>Shipping address</h4>
              <a className="link-color-blue" id="changeAddressButton">
                Change
              </a>
            </div>
            <p className="add">
              {checkoutPayload?.shippingAddress?.name}
              <br />
              {checkoutPayload?.shippingAddress?.addressLine1}{' '}
              {checkoutPayload?.shippingAddress?.addressLine2}{' '}
              {checkoutPayload?.shippingAddress?.addressLine3}{' '}
              {checkoutPayload?.shippingAddress?.postalCode}
            </p>
            <hr />
            <div className="container-space-between">
              <h4>Payment Method</h4>
              <a className="link-color-blue" id="changePaymentButton">
                Change
              </a>
            </div>
            <p>
              {checkoutPayload?.paymentPreferences?.map(
                (item: { paymentDescriptor: string }) => {
                  return item?.paymentDescriptor;
                }
              )}
            </p>
            <div className="itemsandplaceorder">
              <div className="items">
                {cartItems.map((item: any, index: number) => {
                  const bed = item.bed;
                  const accessories = item.accessories;

                  return (
                    <div className="itemscontent" key={index}>
                      <div className="itemsimage">
                        <img src={bed?.image} alt={bed?.name} />
                      </div>
                      <div>
                        <h5>{bed?.name}</h5>
                        <p>
                          {' '}
                          <b> Selected Color </b> : &nbsp;
                          {accessories?.color?.name}
                        </p>

                        <p>
                          <b> Bed Size </b> : &nbsp;{bed?.size} £
                          {bed?.price?.toFixed(2)}
                        </p>
                        {accessories?.headboard?.name && (
                          <p>
                            <strong>Selected Headboard : &nbsp; </strong>
                            {accessories?.headboard?.name || 'No Headboard'}
                          </p>
                        )}
                        {accessories?.storage?.name && (
                          <p>
                            <strong>Selected Storage : &nbsp;</strong>
                            {accessories?.storage?.name || 'No Storage'}
                          </p>
                        )}
                        {accessories?.mattress?.name && (
                          <p>
                            <strong>Selected Mattress : &nbsp; </strong>
                            {accessories?.mattress?.name || 'No Mattress'}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="placeorderbox">
                <div className="placeorder">
                  <h3>Price Summary</h3>
                  <ul>
                    <li>
                      <p>Sub Total (Incl.of taxes)</p> <p>£{cartTotal}</p>
                    </li>
                    <li>
                      <p>Shipping</p> <p>FREE</p>
                    </li>
                    {/* <li>
                      <p>Room service (Choice of room - £50 )</p> <p>50.00</p>
                    </li> */}
                    <li>
                      <p>Total</p> <p>£{cartTotal}.00</p>
                    </li>
                  </ul>
                  <button onClick={onPlaceOrder}>Place Order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default CheckoutReview;
