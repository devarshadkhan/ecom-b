import axios from './axios';

type UpdateCheckoutSessionPayload = {
  amazonCheckoutSessionId: string;
};

type GenerateButtonSignaturePayload = {
  webCheckoutDetails: {
    checkoutReviewReturnUrl?: string;
    checkoutResultReturnUrl?: string;
    amazonPayRedirectUrl?: string;
    checkoutCancelUrl?: string;
  };
  storeId: string | undefined;
  scopes: string[];
  paymentDetails?: {
    paymentIntent?: string;
    canHandlePendingAuthorization?: boolean;
    chargeAmount?: {
      amount?: number;
      currencyCode?: string;
    };
    presentmentCurrency: string;
  };
  merchantMetadata?: {
    merchantReferenceId?: string;
    merchantStoreName?: string;
    noteToBuyer?: string;
    customInformation?: string;
  };
  addressDetails?: {
    name?: string;
    addressLine1?: string;
    city?: string;
    stateOrRegion?: string;
    postalCode?: string;
    countryCode?: string;
    phoneNumber?: string;
  };
  deliverySpecifications?: {
    addressRestrictions: {
      type: string;
      restrictions: {
        GB: {};
      };
    };
  };
};
// AMAZON PAY INTEGRATION
export const generateButtonSignature = (
  payload: GenerateButtonSignaturePayload
) =>
  axios
    .post('/payment/amazon-pay/generate-button-signature', payload)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
export const createCheckoutSession = (
  payload: GenerateButtonSignaturePayload
) =>
  axios
    .post('/payment/amazon-pay/create-checkout-session', payload)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
export const updateCheckoutSession = (payload: UpdateCheckoutSessionPayload) =>
  axios
    .post('/payment/amazon-pay/update-checkout-session', payload)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
export const completeCheckoutSession = (
  payload: UpdateCheckoutSessionPayload
) =>
  axios
    .post('/payment/amazon-pay/complete-checkout-session', payload)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });

// AmazonPay
export const generateButtonSignatureAPB = (
  payload: GenerateButtonSignaturePayload
) =>
  axios
    .post('/payment/amazon-pay/generate-button-signature-apb', payload)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
export const varifyCompleteCheckoutSessionAPB = (
  payload: UpdateCheckoutSessionPayload
) =>
  axios
    .post('/payment/amazon-pay/varify-and-complete-checkout-session', payload)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
