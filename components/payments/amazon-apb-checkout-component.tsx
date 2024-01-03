import React from 'react';
import { v4 } from 'uuid';
import { generateButtonSignatureAPB } from 'network-requests/amazon-pay';

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
  addressDetails?: {
    name: string;
    email?: string;
    addressLine1: string;
    city: string;
    stateOrRegion?: string;
    postalCode: string;
    countryCode: string;
    phoneNumber: string;
  };
};

function AmazonPayAPBCheckoutButton({
  estimatedOrderAmount,
  checkoutResultReturnUrl,
  checkoutReviewReturnUrl,
  addressDetails,
}: AmazonPayCheckoutButton) {
  const safeRef = React.useRef<boolean>(false);

  const renderAmazonPayButton = React.useCallback(async () => {
    const win = window as any;
    try {
      const bodyPayload = {
        webCheckoutDetails: {
          checkoutResultReturnUrl:
            checkoutResultReturnUrl ||
            `${process.env.NEXT_PUBLIC_BASE_URL}/cart/amazon/apb-checkout-return`,
          checkoutCancelUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/cart/amazon/checkout-cancel`,
          checkoutMode: 'ProcessOrder',
        },
        storeId: amazonConfig.storeId,
        scopes: ['name', 'email', 'phoneNumber', 'billingAddress'],
        paymentDetails: {
          paymentIntent: 'AuthorizeWithCapture',
          chargeAmount: {
            amount: estimatedOrderAmount.price,
            currencyCode: estimatedOrderAmount.currencyCode,
          },
          presentmentCurrency: estimatedOrderAmount.currencyCode,
        },
        merchantMetadata: {
          merchantReferenceId: v4().toString().replace(/-/g, ''),
          merchantStoreName: 'Bedsdivans Store',
          noteToBuyer: 'Thank you for your order',
        },
        // addressDetails: addressDetails,
        addressDetails,
      };

      const buttonResponse = await generateButtonSignatureAPB(bodyPayload);

      console.log({ buttonResponse });
      if (!buttonResponse) {
        console.error('amazon pay render button not found');
        return;
      }

      if (!win?.amazon?.Pay?.renderButton) {
        console.error('amazon pay render button not found');
        return;
      }
      win?.amazon?.Pay?.renderButton('#AmazonPayAPBButton', {
        // set checkout environment
        merchantId: amazonConfig.merchantId,
        publicKeyId: amazonConfig.publicKeyId,
        ledgerCurrency: 'GBP',
        // customize the buyer experience
        checkoutLanguage: 'en_GB',
        productType: 'PayAndShip',
        placement: 'Checkout',
        buttonColor: 'Gold',
        // configure Create Checkout Session request
        createCheckoutSessionConfig: {
          // string generated in step 2
          payloadJSON: JSON.stringify(bodyPayload),
          // signature generated in step 3
          signature: buttonResponse?.['signature'],
        },
      });
    } catch (error) {
      console.log(error);
    }
  }, [
    addressDetails,
    checkoutResultReturnUrl,
    estimatedOrderAmount.currencyCode,
    estimatedOrderAmount.price,
  ]);

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
        id="AmazonPayAPBButton"
        style={{
          width: '100%',
        }}
      >
        Loading...
      </div>
    </React.Fragment>
  );
}

export default AmazonPayAPBCheckoutButton;



// {
//   "reasonCode": "CheckoutSessionCanceled",
//   "message": "Checkout was unsuccessful because the buyer cancelled the transaction or payment was declined"
//   }