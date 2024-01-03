/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useRouter } from 'next/router';
import { useCompleteCheckoutSession } from 'network-requests/hooks/amazon-pay';
import css from './success.module.scss';
import { Cancel, Loading, Success } from 'components/payments/states';
import { useGetCheckoutSession } from 'network-requests/queries';

/**
 * CheckoutReturn
 * @returns
 */

const CheckoutReturn = () => {
  const router = useRouter();
  const amazonCheckoutSessionId = router.query?.['amazonCheckoutSessionId'];

  const safeRef = React.useRef(false);
  const { mutate } = useCompleteCheckoutSession();

  const { data: checkoutPayload } = useGetCheckoutSession(
    amazonCheckoutSessionId as string
  );

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
            onSuccess: (data) => {
              console.log('UpdateCheckoutSession', data);
              router.push(
                orderSuccessRedirect({
                  orderId: router.query?.['orderId'] as string,
                  createdAt: router.query?.['createdAt'] as string,
                  totalPrice: router.query?.['totalPrice'] as string,
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
  }, [checkoutPayload?.statusDetails?.state, mutate, router, router.query]);

  const RenderByStatus = React.useMemo(() => {
    if (!checkoutPayload?.statusDetails?.state) return <Loading />;
    if (
      checkoutPayload?.statusDetails?.state === 'Open' ||
      checkoutPayload?.statusDetails?.state === 'Completed'
    ) {
      return <Success />;
    } else {
      return (
        <Cancel
          returnButton={
            <button onClick={() => router.push('/cart')}>
              <span>Return to Cart</span>
            </button>
          }
        />
      );
    }
  }, [checkoutPayload?.statusDetails?.state, router]);

  return (
    <div className={css['container']}>
      <div className={css['container']}>{RenderByStatus}</div>;
    </div>
  );
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
