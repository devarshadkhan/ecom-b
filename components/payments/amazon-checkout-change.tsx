import React from 'react';

type AmazonPayChange = {
  amazonCheckoutSessionId: string;
};

function AmazonPayChangePayment({ amazonCheckoutSessionId }: AmazonPayChange) {
  const safeRef = React.useRef<boolean>(false);

  const changePaymentMethod = React.useCallback(async () => {
    const win = window as any;
    if (amazonCheckoutSessionId) {
      try {
        win?.amazon.Pay.bindChangeAction('#amazonChangePayment', {
          amazonCheckoutSessionId: amazonCheckoutSessionId,
          changeAction: 'changePayment',
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, [amazonCheckoutSessionId]);

  React.useEffect(() => {
    safeRef.current = true;
    if (safeRef.current) {
      void changePaymentMethod();
    }
    return () => {
      safeRef.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changePaymentMethod]);

  return (
    <a id="amazonChangePayment" className="link-color-blue">
      Change
    </a>
  );
}
function AmazonPayChangeAddress({ amazonCheckoutSessionId }: AmazonPayChange) {
  const safeRef = React.useRef<boolean>(false);

  console.log('amazonCheckoutSessionId', amazonCheckoutSessionId);

  React.useEffect(() => {
    const win = window as any;
    safeRef.current = true;
    if (safeRef.current) {
      if (amazonCheckoutSessionId) {
        win?.amazon.Pay.bindChangeAction('#amazonChangeAddress', {
          amazonCheckoutSessionId: amazonCheckoutSessionId,
          changeAction: 'changeAddress',
        });
      }
    }
    return () => {
      safeRef.current = false;
    };
  }, [amazonCheckoutSessionId]);

  return (
    <a id="amazonChangeAddress" className="link-color-blue">
      Change
    </a>
  );
}

export { AmazonPayChangePayment, AmazonPayChangeAddress };
