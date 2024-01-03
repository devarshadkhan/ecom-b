/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useRouter } from 'next/router';
import { useVarifyAndCompleteAPBCheckoutSession } from 'network-requests/hooks/amazon-pay';
import css from './success.module.scss';
import { createOrder } from 'network-requests/api';
import { useGetCheckoutSession } from 'network-requests/queries';
import useAppSelector from 'store/hooks/useselector';
import { Cancel, Loading, Success } from 'components/payments/states';

/**
 * CheckoutReturn
 * @returns
 */

const CheckoutReturn = () => {
  const router = useRouter();
  const { items: cartItems, ...cartState } = useAppSelector(
    (state) => state.cart
  );

  const amazonCheckoutSessionId = router.query?.['amazonCheckoutSessionId'];
  const { data: checkoutPayload, isLoading } = useGetCheckoutSession(
    amazonCheckoutSessionId as string
  );

  const safeRef = React.useRef(false);
  const { mutate } = useVarifyAndCompleteAPBCheckoutSession();

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

  React.useEffect(() => {
    safeRef.current = true;
    if (safeRef.current) {
      if (
        checkoutPayload?.statusDetails?.state === 'Open' ||
        checkoutPayload?.statusDetails?.state === 'Completed'
      ) {
        if (router.query?.['totalPrice']) {
          const payload = {
            amazonCheckoutSessionId: router.query?.[
              'amazonCheckoutSessionId'
            ] as string,
            payload: {
              chargeAmount: {
                amount: Number(router.query?.['totalPrice'] as string),
                currencyCode: 'GBP',
              },
            },
          };
          mutate(payload, {
            onSuccess: async (data) => {
              console.log('APB Checkout', { data });
              console.log({ createPayload });
              const orderPayload = await createOrder(createPayload);
              console.log({ orderPayload });
              router.push(
                orderSuccessRedirect({
                  orderId: orderPayload?.order?.orderId as string,
                  createdAt: orderPayload?.order?.createdAt as string,
                  totalPrice: router?.query?.['totalPrice'] as string,
                })
              );
            },
          });
        }
      }
    }
    return () => {
      safeRef.current = false;
    };
  }, [
    checkoutPayload?.statusDetails?.state,
    createPayload,
    mutate,
    router,
    router.query,
  ]);

  console.log({ checkoutPayload });

  const RenderByStatus = React.useMemo(() => {
    if (!checkoutPayload?.statusDetails?.state) return <Loading />;
    if (
      checkoutPayload?.statusDetails?.state === 'Open' ||
      checkoutPayload?.statusDetails?.state === 'Completed'
    ) {
      return <Success />;
    } else {
      return <Cancel onBack={() => router.push('/cart/checkout')} />;
    }
  }, [checkoutPayload?.statusDetails?.state, router]);

  return <div className={css['container']}>{RenderByStatus}</div>;
};
export default CheckoutReturn;

type OrderSuccessRedirectTypes = {
  totalPrice: string;
  orderId: string;
  createdAt: string;
};

const orderSuccessRedirect = ({
  orderId,
  createdAt,
  totalPrice,
}: OrderSuccessRedirectTypes) =>
  `/order/success?paymentMethod=Amazon-Pay&price=${totalPrice}&orderId=${orderId}&createdAt=${createdAt}`;
