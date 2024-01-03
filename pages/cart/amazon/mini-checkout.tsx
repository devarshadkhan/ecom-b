import React from 'react';
import { useFormik } from 'formik';
import PerPageLayout from 'layout/perpage';
import TitleHeader from 'components/title-header';
import useAppSelector from 'store/hooks/useselector';
import css from 'styles/cart.module.scss';
import { NextPageWithLayout } from 'typings/layout';
import Input from 'components/element/input';
import { useGetCheckoutSession } from 'network-requests/queries';
import { useUpdateCheckoutSession } from 'network-requests/hooks/amazon-pay';
import { useRouter } from 'next/router';
import { createOrder } from 'network-requests/api';
import { v4 } from 'uuid';

import dynamic from 'next/dynamic';

const AmazonPayChangeAddress = dynamic(
  () =>
    import('components/payments/amazon-checkout-change').then(
      (com) => com.AmazonPayChangeAddress
    ),
  { ssr: false }
);

const AmazonPayChangePayment = dynamic(
  () =>
    import('components/payments/amazon-checkout-change').then(
      (com) => com.AmazonPayChangePayment
    ),
  { ssr: false }
);

const Checkout: NextPageWithLayout = () => {
  const router = useRouter();
  const {
    mutate: updateCheckoutSessionMutate,
    data: updateCheckoutSessionData,
  } = useUpdateCheckoutSession();
  const { items: cartItems, ...cartState } = useAppSelector(
    (state) => state.cart
  );

  const { totalPrice } = useAppSelector((state) => state.cart);
  const totalArray = cartItems.map(
    (item: { quantity: number; total: number }) => item.quantity * item.total
  );
  const cartTotal: number = totalArray.reduce(
    (i: number, a: number) => i + a,
    0
  );
  const amazonCheckoutSessionId = router.query?.[
    'amazonCheckoutSessionId'
  ] as string;
  const { data: checkoutPayload } = useGetCheckoutSession(
    amazonCheckoutSessionId as string
  );

  console.log({ checkoutPayload });
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

      console.log({ data });
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
          onSuccess: () => {
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

  console.log({ updateCheckoutSessionData });

  const initialValues = {
    firstName: checkoutPayload?.buyer?.name,
    email: checkoutPayload?.buyer?.email,
    phone: checkoutPayload?.buyer?.phoneNumber,
    // lastName: '',
    country: '',
    companyName: '',
    houseNumber: checkoutPayload?.shippingAddress?.addressLine1,
    houseAddress: checkoutPayload?.shippingAddress?.addressLine2,
    townCity: checkoutPayload?.shippingAddress?.city,
    postcode: checkoutPayload?.shippingAddress?.postalCode,
    orderNotes: '',
    checkbox: false,
  };

  // FORMIK FOR VALIDATION OF FORM
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
    enableReinitialize: true,
  });

  console.log({ amazonCheckoutSessionId });
  return (
    <React.Fragment>
      {/* <TitleHeader
        title="Amazon Pay Mini Checkout"
        background="https://images.unsplash.com/photo-1591270551371-3401a1a9382f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
      /> */}
      <form className={css.item} onSubmit={formik.handleSubmit}>
        <div className="container">
          <div className={css.row}>
            <div className={css.item1}>
              <div className={css.billformbox}>
                <h3>YOURS DETAILS</h3>
                <ul>
                  <div className={css.billform}>
                    <li>
                      <div className="row">
                        <div className="col-md-12">
                          <Input
                            name="firstName"
                            type="text"
                            placeholder="Enter your first name"
                            label="Name*"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.errors.firstName as any}
                            value={formik.values.firstName}
                          />
                        </div>
                        <div className="col-md-12">
                          <Input
                            type="tel"
                            name="phone"
                            id="country"
                            placeholder="Phone Number"
                            label="Phone *"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.errors.phone as any}
                            value={formik.values.phone}
                          />
                        </div>

                        <div className="col-md-12">
                          <Input
                            name="email"
                            label="Email address *"
                            placeholder="Email Address"
                            id="email"
                            type="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.errors.email as any}
                            value={formik.values.email}
                          />
                        </div>
                      </div>
                    </li>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <h3 className={css.formh3}>DELIVERY ADDRESS</h3>
                    {amazonCheckoutSessionId && (
                      <AmazonPayChangeAddress
                        amazonCheckoutSessionId={amazonCheckoutSessionId}
                      />
                    )}
                  </div>
                  <div className={css.billform}>
                    <li>
                      <div className="row">
                        <div className="col-md-6">
                          <p className={css.countryinput}>Country/Region *</p>
                          <h3 className={css.countryinput1}>
                            United Kingdom (UK)
                          </h3>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="row">
                        <div className="col-md-12">
                          <Input
                            type="text"
                            name="houseNumber"
                            placeholder="House number and street name"
                            label="Street address *"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.errors.houseNumber as any}
                            value={formik.values.houseNumber}
                            readOnly
                          />
                          <Input
                            type="text"
                            name="houseAddress"
                            placeholder="Apartment, suite, unit, etc. (optional)"
                            label=""
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.errors.houseAddress as any}
                            value={formik.values.houseAddress}
                            readOnly
                          />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="row">
                        <Input
                          id="town"
                          type="text"
                          name="townCity"
                          placeholder="Town/City..."
                          label="Town / City *"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={formik.errors.townCity as any}
                          value={formik.values.townCity}
                          readOnly
                        />
                      </div>
                    </li>
                    <li>
                      <div className="row">
                        <div className="col-md-12">
                          <Input
                            type="text"
                            name="postcode"
                            id="country"
                            placeholder="Enter your postcode"
                            label="Postcode *"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.errors.postcode as any}
                            value={formik.values.postcode}
                            readOnly
                          />
                        </div>
                      </div>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
            <div className={css.button}>
              <div className={css['summary']}>
                <p className={css['bag-item']}>
                  My Bag have{' '}
                  <strong className={css.colorchange}>
                    {' '}
                    {cartItems?.length}
                  </strong>{' '}
                  item (s)
                </p>
                {cartItems.map((data: any, index: any) => {
                  return (
                    <BagItemsSummary
                      key={index}
                      totalPrice={data.total}
                      {...data}
                    />
                  );
                })}

                {/* Summary Data */}
                <div className={css.checkform}>
                  <div className={css.items}>
                    <p>Price Summary </p>
                    <div className={css.price}>
                      <p>Sub Total (Incl.of taxes) </p>
                      <p>£{totalPrice?.toFixed(2)}</p>
                    </div>
                    <div className={css.price}>
                      <p>Shipping</p>
                      <p>FREE</p>
                    </div>
                    <div className={css.price}>
                      <p>Payment Method</p>
                      <p>
                        {
                          checkoutPayload?.paymentPreferences[0]
                            .paymentDescriptor
                        }
                      </p>
                    </div>
                    <div className={css.price}>
                      <div />
                      {amazonCheckoutSessionId && (
                        <AmazonPayChangePayment
                          amazonCheckoutSessionId={amazonCheckoutSessionId}
                        />
                      )}
                    </div>

                    <div className={css.price}>
                      <p>Total</p>
                      <p>£{totalPrice.toFixed(2)}</p>
                    </div>

                    <div>
                      <div className={css['checkbox']}>
                        <input
                          name="checkbox"
                          type="checkbox"
                          checked={formik.values.checkbox}
                          onChange={formik.handleChange}
                        />
                        <label>
                          I have read and agree to the{' '}
                          <span
                            style={{
                              color: '#0170b9',
                              fontWeight: '800',
                              cursor: 'pointer',
                            }}
                          >
                            {' '}
                            terms and conditions
                          </span>{' '}
                          &{' '}
                          <span
                            style={{
                              color: '#0170b9',
                              fontWeight: '800',
                              cursor: 'pointer',
                            }}
                          >
                            {' '}
                            Delivery Policy.
                          </span>
                        </label>
                      </div>
                      <div className="express-checkout-button">
                        <button onClick={onPlaceOrder}>Place Order</button>
                      </div>
                      <div className={css['error-message']}>
                        {formik.errors.checkbox && (
                          <span style={{ color: 'red' }}>{'Required'}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};
export default Checkout;

Checkout.getLayout = PerPageLayout;

interface ItemsSummaryProps {
  bed: any;
  accessories: any;
  onRemove: () => void;
  totalPrice: number;
}

const BagItemsSummary = ({
  bed,
  totalPrice,
  accessories,
}: ItemsSummaryProps) => {
  console.log({ bed });

  const notToShow = React.useMemo(() => ['low-divan-bed'], []);

  const isDivanbed = React.useMemo(() => {
    return bed?.categories?.some((item: any) => notToShow?.includes(item));
  }, [bed?.categories, notToShow]);

  return (
    <React.Fragment>
      <div className={css['summary-container']}>
        <div className={css['summary-items']}>
          <h4 className={css['product-name']}>{bed?.name}</h4>
          <ul>
            <li>
              <span>Bed Size </span>
              <span>:</span>
              <span>{bed?.size}</span>
            </li>
            {accessories?.color.name?.length > 0 && (
              <li>
                <strong>Selected Color :</strong>
                {accessories?.color.name}
              </li>
            )}

            <li>
              <strong>Selected Headboard :</strong>
              {accessories?.headboard?.name || 'No Headboard'}
            </li>

            {!isDivanbed && (
              <li>
                <strong>Selected Storage:</strong>
                {accessories?.storage?.name || 'No Storage'}
              </li>
            )}

            <li>
              <strong>Selected Mattress : </strong>
              {accessories?.mattress?.name || 'No Mattress'}
            </li>
          </ul>
        </div>
        <div className={css['price-summary']}>
          <h5>
            <span> Price</span> <span>£{totalPrice}</span>
          </h5>
        </div>
      </div>
    </React.Fragment>
  );
};
