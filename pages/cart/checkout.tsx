// import ApplyCoupon from "components/coupon";
// import Model from "components/model";
import TitleHeader from 'components/title-header';
import { useFormik } from 'formik';
import CoupanIcon from 'icons/coupan';
import PerPageLayout from 'layout/perpage';
import { useCreateOrder } from 'network-requests/mutations';
// import { useGetAllCoupons } from "network-requests/queries";
import { Coupon } from 'network-requests/types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect } from 'react';
import useAppDispatch from 'store/hooks/usedispatch';
import useAppSelector from 'store/hooks/useselector';
import { removeItemFromCart } from 'store/slices/cart';
import css from 'styles/cart.module.scss';
import { NextPageWithLayout } from 'typings/layout';
import ContactForm from 'components/form';
import Model from 'components/model';
import ApplyCoupon from 'components/coupon';
import { useGetAllCoupons } from 'network-requests/queries';
import TotalSummary from 'components/checkout/total-summary';
import axios from 'network-requests/axios';
import ReCAPTCHA from 'react-google-recaptcha';
import checkoutValidationSchema from 'constants/checkout-validation-schema';

type FormData = {
  firstName: string;
  lastName: string;
  country: string;
  companyName: string;
  houseNumber: string;
  houseAddress: string;
  townCity: string;
  postcode: string;
  phone: string;
  email: string;
  orderNotes: string;
  checkbox: boolean;
  recaptcha: boolean;
};

const Checkout: NextPageWithLayout = () => {
  const router = useRouter();
  // API
  const { data } = useGetAllCoupons();

  const { mutate, isLoading } = useCreateOrder();
  // REDUX
  const dispatch = useAppDispatch();
  const { items: cartItems, ...cartState } = useAppSelector(
    (state) => state.cart
  );
console.log("ARSHAD_PATHAAN",cartItems);

  const haveSomethingInCart = cartItems.length > 0;

  const totalArray = cartItems.map(
    (item: { quantity: number; total: number }) => item.quantity * item.total
  );

  const cartTotal: number = totalArray.reduce(
    (i: number, a: number) => i + a,
    0
  );

  // LOCAL STATE
  // const [isValidForm, setValidForm] = React.useState(false);
  const [couponModel, setCouponModel] = React.useState(false);
  const [coupon, setCoupon] = React.useState<Partial<Coupon>>();
  const [paymentMethod, setPaymentMethod] =
    React.useState<string>('cash-on-delivery');
  const [checked, setChecked] = React.useState(0);
  // FORMIK FOR VALIDATION OF FORM
  const formik = useFormik<FormData>({
    initialValues,
    validationSchema: checkoutValidationSchema,
    onSubmit: (values) => {
      createCheckOutSession(createPayload(values));
    },
    validateOnMount: false,
    
  });

 
   /**
   * Save Data In LocalStorage
   */
//   if (typeof window !== "undefined") {
//  localStorage.setItem('formDataUserAddress', JSON.stringify(formik.values));
// }
//    useEffect(() => {
//      if (typeof window !== "undefined") {
//  localStorage.setItem('formDataUserAddress', JSON.stringify(formik.values));
// }
//   }, [formik.values]);
  //  useEffect(() => {
  //   const savedData = localStorage.getItem('formDataB');
  //   if (savedData) {
  //     formik.setValues(JSON.parse(savedData));
  //   }
  // }, []);
  useEffect(() => {
  const savedData = localStorage.getItem('formDataUserAddress');
  if (savedData) {
    formik.setValues(JSON.parse(savedData));
  }
}, []);
useEffect(() => {
  if (typeof window !== "undefined") {
    localStorage.setItem('formDataUserAddress', JSON.stringify(formik.values));
  }
}, [formik.values]);
  /**
   * Create Checkout Payload
   */
  const createPayload = useCallback(
    (formData: FormData) => {
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
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
        },
        couponId: coupon?._id,
        orderItems: orderItems,
        shippingAddress: {
          address: formData.houseNumber + ',' + formData.houseAddress,
          townCity: formData.townCity,
          postalCode: formData.postcode,
          country: formData.country,
          companyName: formData.companyName,
        },
        billingAddress: {
          address: formData.houseNumber + ',' + formData.houseAddress,
          townCity: formData.townCity,
          postalCode: formData.postcode,
          country: formData.country,
          companyName: formData.companyName,
        },
        orderNotes: formData.orderNotes,
        payment: {
          paymentMethod: paymentMethod,
        },
        // extraDelivery: {
        //   price: cartState.extraDelivery?.price,
        //   name: cartState.extraDelivery?.name,
        // },
      };
    },
    [
      cartItems,
      coupon?._id,
      paymentMethod,
      // cartState.extraDelivery?.price,
      // cartState.extraDelivery?.name,
    ]
  );

  /**
   * Create Checkout Session
   *
   * - `stripe`
   * - `clearpay`
   * - `amazompay` (coming soon)
   */
  const createCheckOutSession = React.useCallback(
    (orderPayload: any) => {
      mutate(orderPayload as any, {
        onSuccess: async (data) => {
          if (data) {
            // SEND DATA TO GOOGLE
            if (typeof window === 'undefined') return;
            await window.gtag('event', 'purchase', {
              transaction_id: data?.order?._id,
              value: Number(data?.order?.totalPrice).toFixed(2),
              tax: 4.9,
              shipping: 5.99,
              coupon: 'EXTRA_TEN',
              currency: 'GBP',
              items: data?.order?.orderItems?.map(
                (item: any, index: number) => {
                  return {
                    item_id: item?._id,
                    item_name: item?.name,
                    affiliation: 'Google Merchandise Store',
                    coupon: 'EXTRA_TEN',
                    discount: 10.22,
                    index: index,
                    item_brand: 'BedsDivans',
                    item_category: item?.categories?.[0],
                    item_category2: item?.categories?.[1],
                    item_category3: item?.categories?.[2],
                    item_category4: item?.categories?.[3],
                    item_category5: item?.categories?.[4],
                    item_list_id: 'related_products',
                    item_list_name: 'Related Products',
                    item_variant: 'green',
                    location_id: 'ChIJIQBpAG2ahYAR_6128GcTUEo',
                    price: Number(item?.price).toFixed(2),
                    quantity: item?.quantity,
                  };
                }
              ),
            });
            switch (paymentMethod) {
              case 'stripe':
                router.push(data?.stripe?.url);
                break;
              case 'clearpay':
                router.push(data?.session?.data?.redirectCheckoutUrl);
                break;
              default:
                router.push(
                  `/order/success?paymentMethod=Cash%20On%20Delivery&price=${data.order.totalPrice}&orderId=${data?.order?.orderId}&createdAt=${data?.order?.createdAt}`
                );
                break;
            }
          }
        },
        onError: (error: any) => {
          if (
            error.response.data.error === 'FetchError: Unprocessable Entity'
          ) {
            alert('Clearpay is not available for this order');
          }
        },
      });
    },
    [mutate, router, paymentMethod]
  );

  const handleDeleteItem = (id: string) => {
    dispatch(removeItemFromCart(id));
  };

  // GOOGLE RECAPTCH
  const recaptchaRef = React.useRef<any>(null);

  const onReCAPTCHAChange = React.useCallback(
    async (token: string | null) => {
      if (!token) {
        return;
      }
      const { data } = await axios.post('/google-recaptcha-varify', { token });
      if (data.success) {
        formik.setFieldValue('recaptcha', true);
      } else {
        formik.setFieldValue('recaptcha', false);
      }
      // recaptchaRef.current.reset();
    },
    [formik]
  );

  // const isValidMemo = React.useMemo(() => {
  //   if (formik.isValid) {
  //   }
  // }, [formik.isValid]);

  // console.log(cartState);
  return (
    <React.Fragment>
      <Model
        name="Apply coupon"
        show={couponModel}
        onClose={() => setCouponModel(false)}
      >
        <ApplyCoupon
          cartTotal={cartTotal as number}
          onApply={(coupon) => {
            setCoupon(coupon as any);
            setCouponModel(false);
          }}
          couponList={data as Coupon[]}
        />
      </Model>
      <TitleHeader title="Checkout" />
      <form className={css.item} onSubmit={formik.handleSubmit}>
        <div className="container">
          <div className={css.row}>
            {/* FORM */}
            <ContactForm formik={formik} />
            <div className={css.button}>
              {haveSomethingInCart ? (
                <div className={css['summary']}>
                  <p className={css['bag-item']}>
                    My Bag have
                    <strong className={css.colorchange}>
                      {cartItems?.length}
                    </strong>
                    item (s)
                  </p>
                  {cartItems.map((data: any, index: any) => {
                    return (
                      <BagItemsSummary
                        key={index}
                        totalPrice={data.total}
                        onRemove={() => handleDeleteItem(data.id as string)}
                        {...data}
                      />
                    );
                  })}
                  <div className={css['extra-dilivery']}>
                    {/* <div className={css['extra-container']}>
                      <p>Delivery Option</p>
                      {ExtraDeliveryArray.map(
                        ({ _html, value, text }, index) => {
                          return (
                            <div
                              key={index}
                              style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginBottom: '10px',
                                gap: '10px',
                              }}
                              onClick={() => {
                                dispatch(
                                  setExtraDelivery({
                                    price: value,
                                    name: text,
                                  })
                                );
                                setChecked(index);
                              }}
                            >
                              <input
                                id={`${index}`}
                                type="radio"
                                checked={checked === index}
                                // onChange={() =>

                                // }
                                style={{
                                  accentColor: '#1d3343',
                                  height: '1rem',
                                  width: '1rem',
                                }}
                              />
                              {_html}
                            </div>
                          );
                        }
                      )}
                    </div> */}
                  </div>

                  <div className={css['coupan-container']}>
                    <div className={css['coupan-text']}>
                      <CoupanIcon />
                      Have a coupon?
                      <strong onClick={() => setCouponModel(true)}>
                        Click here to enter your code
                      </strong>
                    </div>
                  </div>
                  <TotalSummary
                    formik={formik}
                    isDisable={!formik.isValid}
                    defaultPaymentType={paymentMethod}
                    getPaymentType={(value) => setPaymentMethod(value) as any}
                    isLoading={isLoading}
                    coupon={coupon}
                    orderPayload={{
                      coupon,
                      cartItems,
                      paymentMethod,
                      values: formik.values,
                    }}
                    ReCAPTCHA={
                      <ReCAPTCHA
                        size="normal"
                        ref={recaptchaRef}
                        sitekey={
                          process.env.NEXT_PUBLIC_GOOGLE_SITE_KEY as string
                        }
                        onChange={onReCAPTCHAChange}
                      />
                    }
                  />
                </div>
              ) : (
                <div className={css.item2}>
                  <p>Your Cart is Empty</p>
                  <div className={css.shopping_page}>
                    <Link href={'/'}>Continue Shopping</Link>
                  </div>
                </div>
              )}
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
  // console.log({ bed });

  const notToShow = React.useMemo(() => ['low-divan-bed'], []);

  const isDivanbed = React.useMemo(() => {
    return bed?.categories?.some((item: any) => notToShow?.includes(item));
  }, [bed?.categories, notToShow]);

  // console.log({ isDivanbed });
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

           { accessories?.headboard?.name &&<li>
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

            {accessories?.mattress?.name &&<li>
              <strong>Selected Mattress : </strong>
              {accessories?.mattress?.name}
            </li>}
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

// const ExtraDeliveryArray = [
//   {
//     value: 0,
//     _html: (
//       <label htmlFor={'0'}>
//         Free Kerb side delivery to the door (Flat or apartments Ground floor
//         communal area only)
//       </label>
//     ),
//     text: `Free Kerb side delivery to the door (Flat or apartments Ground floor
//       communal area only)`,
//   },
//   {
//     value: 50,
//     _html: (
//       <label htmlFor={'50'}>
//         Room service - (Choice of room - <strong> £50 </strong>)
//       </label>
//     ),
//     text: `Room service (Choice of room - £50 )`,
//   },
// ];

const initialValues = {
  firstName: '',
  lastName: '',
  country: '',
  companyName: '',
  houseNumber: '',
  houseAddress: '',
  townCity: '',
  postcode: '',
  phone: '',
  email: '',
  orderNotes: '',
  checkbox: false,
  recaptcha: false,
};
