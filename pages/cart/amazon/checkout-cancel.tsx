/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import css from './success.module.scss';
import { useRouter } from 'next/router';
import CloseIconRounded from 'Icons/CloseIconRounded';

/**
 * CheckoutReturn
 * @returns
 */

const CheckoutReturn = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div className={css['container']}>
      <div className={css['card']}>
        <div className={css['checkmark']}>
          <CloseIconRounded height={100} width={100} color="#f77f00" />
        </div>
        <h1 className={css['error']}>
          Checkout <span className={css['error-span']}>Failed</span>
        </h1>
        <p>Something went wrong in the checkout process.</p>
        <p>Please try again.</p>
        <div className={css['button-container']}>
          <button onClick={() => router.push('/cart/checkout')}>
            <span>Return to Checkout</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default CheckoutReturn;
