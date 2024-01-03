import React from 'react';
import { generateButtonSignature } from 'network-requests/amazon-pay';

const amazonConfig = {
  sandbox: true,
  region: process.env.NEXT_PUBLIC_REGION,
  publicKeyId: process.env.NEXT_PUBLIC_PUBLICKEYID,
  merchantId: process.env.NEXT_PUBLIC_MERCHANTID,
  storeId: process.env.NEXT_PUBLIC_STOREID,
};

type AmazonPayCheckoutButton = {
  estimatedOrderAmount: {
    price: number;
    currencyCode: string;
    [key: string]: any;
  };
  checkoutReviewReturnUrl?: string;
  checkoutResultReturnUrl?: string;
  amazonPayRedirectUrl?: string;
  checkoutCancelUrl?: string;
  deliverySpecifications?: {
    addressRestrictions: {
      type: string;
      restrictions: {
        GB: {};
      };
    };
  };
};

function AmazonPayCheckoutButton({
  estimatedOrderAmount,
  checkoutResultReturnUrl,
  checkoutReviewReturnUrl,
}: AmazonPayCheckoutButton) {
  const safeRef = React.useRef<boolean>(false);

  const [orderAmount, setOrderAmount] = React.useState(estimatedOrderAmount);

  console.log({ orderAmount });

  React.useEffect(() => {
    if (estimatedOrderAmount.price) {
      setOrderAmount(estimatedOrderAmount);
    }
  }, [estimatedOrderAmount, estimatedOrderAmount.price]);

  const renderAmazonPayButton = React.useCallback(async () => {
    const win = window as any;
    try {
      const bodyPayload = {
        webCheckoutDetails: {
          checkoutReviewReturnUrl:
            checkoutReviewReturnUrl ||
            `${process.env.NEXT_PUBLIC_BASE_URL}/cart/amazon/mini-checkout`,
          checkoutResultReturnUrl:
            checkoutResultReturnUrl ||
            `${process.env.NEXT_PUBLIC_BASE_URL}/cart/amazon/checkout-return`,
          // amazonPayRedirectUrl: `${process.env.NEXT_PUBLIC_BASE_URL}`,
          checkoutCancelUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/cart/amazon/checkout-cancel`,
        },
        storeId: amazonConfig.storeId,
        scopes: ['name', 'email', 'phoneNumber', 'billingAddress'],
        deliverySpecifications: {
          // specialRestrictions: ['RestrictPOBoxes'],
          addressRestrictions: {
            type: 'Allowed',
            restrictions: {
              GB: {
                // zipCodes: ['72046', '72047'],
              },
            },
          },
        },
      };

      const buttonResponse = await generateButtonSignature(bodyPayload);

      if (!buttonResponse) {
        console.error('Signature Not Found');
        return;
      }
      if (!win?.amazon?.Pay?.renderButton) {
        console.error('amazon pay render button not found');
        return;
      }
      win?.amazon?.Pay?.renderButton('#AmazonPayButton', {
        // set checkout environment
        merchantId: amazonConfig.merchantId,
        publicKeyId: amazonConfig.publicKeyId,
        ledgerCurrency: 'GBP',
        // customize the buyer experience
        checkoutLanguage: 'en_GB',
        productType: 'PayAndShip',
        placement: 'Checkout',
        buttonColor: 'Gold',
        // ORDER AMOUNT AND MORE
        estimatedOrderAmount: orderAmount,
        // configure Create Checkout Session request
        createCheckoutSessionConfig: {
          payloadJSON: JSON.stringify(bodyPayload),
          signature: buttonResponse['signature'],
        },
      });
    } catch (error) {
      console.log(error);
    }
  }, [checkoutResultReturnUrl, checkoutReviewReturnUrl, orderAmount]);

  React.useEffect(() => {
    safeRef.current = true;
    if (safeRef.current) {
      void renderAmazonPayButton();
    }
    return () => {
      safeRef.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <div
        id="AmazonPayButton"
        style={{
          width: '100%',
        }}
      >
        Loading...
      </div>
    </React.Fragment>
  );
}

export default AmazonPayCheckoutButton;
