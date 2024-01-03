import Script from "next/script";
import React from "react";

export default function testcheck() {
  const initializeCheckoutButton = () => {
    const clientId = "cfB9gZpXGM0HkhwVMtfyaD0m60";
    const merchantId = "<!-- PLEASE ADD merchantId HERE -->";
    if (window.snapuk) {
      window.snapuk.init(clientId);

      const transaction = {
        invoiceNumber: 51174155,
        deliveryDate: "2023-11-05",
        shippingCost: 50,
        customer: {
          firstName: "John",
          lastName: "Smith",
          email: "johnsmith@snapfinance.co.uk",
          mobileNumber: "07712345678",
          streetAddress: "The Quays",
          city: "Manchester",
          postcode: "M50 3BE",
          houseName: "",
          houseNumber: "7",
          unit: "Flat 165"
        },
        products: [
          {
            quantity: 2,
            productId: "iphone",
            price: 500.1,
            description: "Apple iPhone 11 Pro 256GB"
          }
        ]
      };

      window.snapuk.checkout.button({
        merchantId: merchantId,
        transaction: transaction,
        onClick: () => {
          console.log("Yay, the application loaded.");
        },
        onClose: (applicationId) => {
          console.log("Closed", applicationId ? applicationId : "");
        },
        onSuccess: (applicationId) => {
          console.log("Success", applicationId ? applicationId : "");
        },
        onError: (applicationId) => {
          console.log(
            "Something went wrong",
            applicationId ? applicationId : ""
          );
        },
        onDenied: (applicationId) => {
          console.log("Denied", applicationId ? applicationId : "");
        },
        onUnverifiedAccount: (applicationId) => {
          console.log("Account unverified", applicationId ? applicationId : "");
        },
        onPaymentFailure: (applicationId) => {
          console.log("Payment failure", applicationId ? applicationId : "");
        },
        onWithdrawn: (applicationId) => {
          console.log("Withdrawn", applicationId ? applicationId : "");
        }
      });
    }
  };

  return (
    <div>
      <Script
        defer
        src="https://sandbox-sdk.snapfinance.co.uk/v1/snapuk.min.js"
        onLoad={(result) => {
          console.log("onLoad", result);
          initializeCheckoutButton();
        }}
      />
      <h1>Hello</h1>

      <div id="snap-uk-checkout"></div>
    </div>
  );
}