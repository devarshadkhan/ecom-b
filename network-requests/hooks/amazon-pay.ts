import { useMutation } from 'react-query';
import {
  completeCheckoutSession,
  updateCheckoutSession,
  varifyCompleteCheckoutSessionAPB,
} from 'network-requests/amazon-pay';

type UpdateCheckoutSessionPayload = {
  amazonCheckoutSessionId: string;
  payload: {
    webCheckoutDetails: {
      checkoutResultReturnUrl: string;
    };
    paymentDetails: {
      paymentIntent: string;
      canHandlePendingAuthorization: boolean;
      chargeAmount: {
        amount: number;
        currencyCode: string;
      };
    };
    merchantMetadata: {
      merchantReferenceId: string;
      merchantStoreName: string;
      noteToBuyer: string;
      customInformation: string;
    };
  };
};
type CompleteCheckoutSessionPayload = {
  amazonCheckoutSessionId: string;
  payload: {
    chargeAmount: {
      amount: number;
      currencyCode: string;
    };
  };
};
// AMAZON PAY INTEGRATION

export const useUpdateCheckoutSession = () =>
  useMutation(
    (payload: UpdateCheckoutSessionPayload): Promise<any> =>
      updateCheckoutSession(payload)
  );
export const useCompleteCheckoutSession = () =>
  useMutation(
    (payload: CompleteCheckoutSessionPayload): Promise<any> =>
      completeCheckoutSession(payload)
  );
export const useVarifyAndCompleteAPBCheckoutSession = () =>
  useMutation(
    (payload: CompleteCheckoutSessionPayload): Promise<any> =>
      varifyCompleteCheckoutSessionAPB(payload)
  );
