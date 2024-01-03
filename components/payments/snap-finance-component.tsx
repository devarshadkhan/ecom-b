import Head from "next/head";
import React from "react";

type Transaction = {
  invoiceNumber: number;
  deliveryDate: string;
  shippingCost: number;
  customer: {
    firstName: string;
    lastName: string;
    email: string;
    mobileNumber: string;
    streetAddress: string;
    city: string;
    postcode: string;
    houseName: string;
    houseNumber: string;
    unit: string;
  };
  products: {
    quantity: number;
    productId: string;
    price: number;
    description: string;
  }[];
};

type SnapFinanceButtonProps = {
  transaction: Transaction;
  onApplicationId?: (applicationId: string) => void;
  onClose?: (applicationId: string) => void;
  onSuccess?: (applicationId: string) => void;
  onError?: (applicationId: string) => void;
  onDenied?: (applicationId: string) => void;
  onUnverifiedAccount?: (applicationId: string) => void;
  onPaymentFailure?: (applicationId: string) => void;
  onWithdrawn?: (applicationId: string) => void;
};

const SnapFinanceButton = ({
  transaction,
  onApplicationId,
  onClose,
  onSuccess,
  onError,
  onDenied,
  onUnverifiedAccount,
  onPaymentFailure,
  onWithdrawn,
}: SnapFinanceButtonProps) => {
  const safeRef = React.useRef<boolean>(false);
  const RenderButton = React.useCallback(() => {
    const win = window as any;
    if (win.snapuk) {
      console.log("snapuk", win.snapuk);
      const clientId = "cfB9gZpXGM0HkhwVMtfyaD0m60dg21xG";
      win.snapuk.init(clientId);

      win.snapuk.checkout.button({
        transaction: transaction,
        onApplicationId,
        onClose,
        onSuccess,
        onError,
        onDenied,
        onUnverifiedAccount,
        onPaymentFailure,
        onWithdrawn,
      });
    }
  }, [
    onApplicationId,
    onClose,
    onDenied,
    onError,
    onPaymentFailure,
    onSuccess,
    onUnverifiedAccount,
    onWithdrawn,
    transaction,
  ]);

  React.useEffect(() => {
    safeRef.current = true;
    if (safeRef.current) {
      RenderButton();
    }
    return () => {
      safeRef.current = false;
    };
  }, [RenderButton]);

  return (
    <React.Fragment>
      <Head>
        <script
          async
          src="https://sandbox-sdk.snapfinance.co.uk/v1/snapuk.min.js"
        />
      </Head>
      <div id="snap-uk-checkout"></div>
    </React.Fragment>
  );
};
export default SnapFinanceButton;
