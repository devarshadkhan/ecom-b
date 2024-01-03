import React from 'react';

import { Coupon } from 'network-requests/types';
import useAppSelector from 'store/hooks/useselector';
import css from 'styles/cart.module.scss';
import { KlarnaCheckoutComponent } from 'components/payments/klarna-checkout-component';
import KlarnaIcon from 'icons/klarna-icon';
// @ts-expect-error
import getPercentage from 'utils/percentage';
import PaymentButton from './payment-button';
import { useImmer } from 'use-immer';
import DeliveryPolicy from 'components/products/diliveryPolicy';
import TermsCondition from 'components/products/terms-and-condition';
import AmazonPayAPBCheckoutButton from 'components/payments/amazon-apb-checkout-component';

interface TotalSummaryProps {
  isDisable?: boolean;
  defaultPaymentType: string;
  getPaymentType?: (value: string) => string;
  isLoading?: boolean;
  coupon?: Partial<Coupon>;
  orderPayload?: any;
  formik: any;
  ReCAPTCHA: React.ReactNode;
}

const TotalSummary = ({
  defaultPaymentType,
  getPaymentType,
  isDisable,
  isLoading,
  coupon,
  orderPayload,
  formik,
  ReCAPTCHA,
}: TotalSummaryProps) => {
  const { totalPrice} = useAppSelector((state) => state.cart);
  const couponDiscount = coupon?.percent || 0;

  const percent = getPercentage(Number(totalPrice?.toFixed(2)), couponDiscount);

  const totalPriceAfterDiscount = totalPrice - percent ;

  // console.log(extraDelivery);
  const [openPop, setOpenPop] = useImmer({ modelOne: false, modelTwo: false });

  const onChangePopState = (key: keyof typeof openPop, value: boolean) => {
    setOpenPop((draft) => {
      draft[key] = value;
    });
  };
  const [paymentType, setPaymentType] = React.useState(defaultPaymentType);

  // console.log("paymenttupe",{ paymentType });

  React.useEffect(() => {
    if (getPaymentType) {
      getPaymentType(paymentType);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paymentType]);

  const addressDetails = {
    name: `${formik.values?.firstName} ${formik.values?.lastName}`,
    addressLine1: `${formik.values?.houseNumber} ${formik.values?.houseAddress}`,
    city: formik.values?.townCity,
    // stateOrRegion: 'London',
    postalCode: formik?.values?.postcode,
    countryCode: 'GB',
    phoneNumber: formik.values?.phone,
    email: formik.values?.email,
  };
  return (
    <div className={css.checkform}>
      <div className={css.items}>
        <p>Price Summary </p>
        <div className={css.price}>
          <p>Sub Total (Incl.of taxes) </p>
          <p>£{totalPrice?.toFixed(2)}</p>
        </div>
        {/* <div className={css.price}>
          <p>Shipping</p>
          <p>FREE</p>
        </div> */}

        {/* {extraDelivery?.price > 0 && (
          <div className={css.price}>
            <p>{extraDelivery.name}</p>
            <p>{extraDelivery.price.toFixed(2)}</p>
          </div>
        )} */}
        {couponDiscount ? (
          <div className={css.price}>
            <p>Coupon Apllied</p>
            <p>
              -£{percent} ({coupon?.percent}%)
            </p>
          </div>
        ) : null}
        <div className={css.price}>
          <p>Total</p>
          <p>£{totalPriceAfterDiscount.toFixed(2)}</p>
        </div>
        <div className={css.payment}>
          {paymentTypeArray.map((data, index) => (
            <React.Fragment key={index}>
              <div className={css['radio-box']}>
                <input
                  type="radio"
                  id={data.type}
                  name={data.type}
                  checked={paymentType === data.type}
                  disabled={!formik.isValid}
                  onChange={() => setPaymentType(data.type)}
                />
                <label htmlFor={data.type}>
                  {data.title}
                  {data.type === 'klarna' ? <KlarnaIcon height={20} /> : null}
                </label>
              </div>
              {data.description && (
                <div
                  className={css['description']}
                  style={{
                    maxHeight: paymentType === data.type ? '50px' : '0px',
                  }}
                >
                  <p>{data.description}</p>
                </div>
              )}
            </React.Fragment>
          ))}
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
                onClick={() => {
                  onChangePopState('modelOne', true);
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
                onClick={() => {
                  onChangePopState('modelTwo', true);
                }}
              >
                {' '}
                Delivery & Shipping Policy.
              </span>
            </label>
          </div>
          {paymentType === 'klarna' && (
            <KlarnaCheckoutComponent orderPayload={orderPayload} />
          )}
          {paymentType === 'amazon-pay' && (
            <AmazonPayAPBCheckoutButton
              estimatedOrderAmount={{
                price: Number(totalPriceAfterDiscount),
                currencyCode: 'GBP',
              }}
              addressDetails={addressDetails}
              checkoutResultReturnUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/cart/amazon/apb-checkout-return?totalPrice=${totalPrice}`}
            />
          )}
          <div className={css['error-message']}>
            {formik.errors.checkbox && (
              <span style={{ color: 'red' }}>{'Required'}</span>
            )}
          </div>
          {/* <br /> */}
          {/* GOOGLE RECAPTCHA */}
          {ReCAPTCHA}
          {/* <br /> */}
          {paymentType !== 'klarna' && (
            <PaymentButton
              title={isDisable ? 'Full Fill the Form' : ''}
              disable={isDisable}
              paymentType={paymentType}
              isLoading={isLoading}
            />
          )}
        </div>
      </div>
      {openPop.modelOne && (
        <div style={style}>
          <TermsCondition onClose={() => onChangePopState('modelOne', false)} />
        </div>
      )}
      {openPop.modelTwo && (
        <div style={style}>
          <DeliveryPolicy onClose={() => onChangePopState('modelTwo', false)} />
        </div>
      )}
    </div>
  );
};

export default TotalSummary;

const style = {
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  zIndex: '999999',
  position: 'fixed',
  background: 'rgba(0,0,0,0.5)',
} as React.CSSProperties;

const paymentTypeArray = [
  {
    title: 'Credit card/Debit card',
    type: 'stripe',
    description: 'Secure payment via Stripe Checkout.',
  },
  {
    title: 'Cash on delivery',
    type: 'cash-on-delivery',
    description: 'Pay with cash upon delivery.',
  },
  // {
  //   title: "ClearPay",
  //   type: "clearpay",
  //   description: "Pay with ClearPay.",
  // },
  {
    title: 'Klarna Pay in 30 Days',
    type: 'klarna',
    description: '',
  },
  {
    title: 'Pay with Amazon Pay',
    type: 'amazon-pay',
    description: '',
  },
];
