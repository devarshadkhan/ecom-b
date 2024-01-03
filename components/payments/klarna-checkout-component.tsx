import KlarnaIcon from "icons/klarna-icon";
import { PlaceKalrnaCheckoutOrder } from "network-requests/api";
import { useCreateOrder } from "network-requests/mutations";
import { useCallback, useState } from "react";
import { ClipLoader } from "react-spinners";
import styles from "styles/klarna-checkout-component.module.scss";

interface KlarnaCheckoutComponentProps {
  orderPayload: any;
}

export const KlarnaCheckoutComponent = ({
  orderPayload,
}: KlarnaCheckoutComponentProps) => {
  const createPayload = useCallback(
    (formData: any, cartItems: any, coupon: any, paymentMethod: any) => {
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
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
        },
        couponId: coupon?._id,
        orderItems: orderItems,
        shippingAddress: {
          address: formData.houseNumber + "," + formData.houseAddress,
          townCity: formData.townCity,
          postalCode: formData.postcode,
          country: formData.country,
          companyName: formData.companyName,
        },
        billingAddress: {
          address: formData.houseNumber + "," + formData.houseAddress,
          townCity: formData.townCity,
          postalCode: formData.postcode,
          country: formData.country,
          companyName: formData.companyName,
        },
        orderNotes: formData.orderNotes,
        payment: {
          paymentMethod: paymentMethod,
        },
      };
    },
    []
  );

  const { mutate, isLoading } = useCreateOrder();

  // Function to handle the payment session
  const createPaymentSession = async () => {
    mutate(
      createPayload(
        orderPayload?.values,
        orderPayload?.cartItems,
        orderPayload?.coupon,
        orderPayload?.paymentMethod
      ) as any,
      {
        onSuccess: (data) => {
          try {
            Klarna.Payments.init({
              client_token: data.session.client_token,
            });
            Klarna.Payments.load({
              container: "#klarna-payments-container",
              payment_method_category: "klarna",
            });
            Klarna.Payments.authorize(
              {
                payment_method_category: "klarna",
              },
              async function (res: any) {
                console.log({ res });
                const authorization_token = res.authorization_token;

                const orderResponse = await PlaceKalrnaCheckoutOrder(
                  data?.order,
                  authorization_token
                );

                const redirectUrl = orderResponse?.session?.redirect_url;
                window.location.href = redirectUrl;
              }
            );
          } catch (error) {
            console.log(error);
          }
        },
      }
    );
  };

  // Function to authorize the payment on klarna
  const authorizePayment = async () => {};
  return (
    <>
      <button
        onClick={createPaymentSession}
        className={styles.klarnaBtn}
        type="button"
      >
        {/* Klarna official svg logo */}
        <ClipLoader size={24} color={"#fff"} loading={isLoading} />
        {!isLoading ? (
          <>
            <KlarnaIcon />
            Pay with Klarna
          </>
        ) : null}
      </button>
      <div id="klarna-payments-container" style={{ display: "none" }}></div>
    </>
  );
};
