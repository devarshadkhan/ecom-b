/* eslint-disable react/no-unescaped-entities */
import CheckMark from 'Icons/CheckMark';
import DiscOutline from 'Icons/DiscOutline';
import CloseIconRounded from 'Icons/CloseIconRounded';
import css from 'pages/cart/amazon/success.module.scss';

const Success = () => {
  return (
    <div className={css['card']}>
      <div className={css['checkmark']}>
        <CheckMark height={100} width={100} color="#4CAF50" />
      </div>
      <h1>Success</h1>
      <p>
        We received your purchase request;
        <br /> we'll be in touch shortly!
      </p>
    </div>
  );
};

type CancelProps = {
  onBack?: () => void;
  returnButton?: JSX.Element;
};
// () => router.push('/cart/checkout')
const Cancel = ({ onBack, returnButton }: CancelProps) => {
  return (
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
        {returnButton || (
          <button onClick={onBack}>
            <span>Return to Checkout</span>
          </button>
        )}
      </div>
    </div>
  );
};

const Loading = () => {
  return (
    <div className={css['card']}>
      <div className={css['checkmark']}>
        <DiscOutline height={100} width={100} color="#74c69d" />
      </div>
    </div>
  );
};

export { Success, Cancel, Loading };
